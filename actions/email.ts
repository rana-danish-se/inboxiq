"use server";

import { groq } from "@/lib/groq/client";
import { EmailIntelligenceReport, ToneAnalysis } from "@/types";
import { PROMPTS } from "@/lib/groq/prompts";

export async function analyzeEmailThread(threadText: string): Promise<EmailIntelligenceReport> {
  if (!threadText || threadText.trim().length < 15) {
    throw new Error("Email thread is too short to analyze.");
  }

  // 1. Thread Summary
  const summaryPromise = groq.chat.completions.create({
    model: "llama-3.1-8b-instant", 
    messages: [
      { role: "system", content: PROMPTS.summary },
      { role: "user", content: threadText }
    ],
    temperature: 0,
    max_tokens: 300,
  }).then(res => res.choices[0]?.message?.content || "Could not generate summary.");

  // 2. Tone and Urgency Score
  const tonePromise = groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: PROMPTS.tone },
      { role: "user", content: threadText }
    ],
    temperature: 0,
    response_format: { type: "json_object" },
  }).then(res => {
    try {
      const parsed = JSON.parse(res.choices[0]?.message?.content || "{}");
      return {
        emotionalTone: parsed.emotionalTone || "Unknown",
        urgencyLevel: parsed.urgencyLevel || "Unknown",
        toneScorePercent: parsed.toneScorePercent || 0,
        urgencyScorePercent: parsed.urgencyScorePercent || 0
      } as ToneAnalysis;
    } catch {
      return { emotionalTone: "Unknown", urgencyLevel: "Unknown", toneScorePercent: 0, urgencyScorePercent: 0 } as ToneAnalysis;
    }
  });

  // 3. Flags and Risks
  const flagsPromise = groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: PROMPTS.flags },
      { role: "user", content: threadText }
    ],
    temperature: 0,
    response_format: { type: "json_object" },
  }).then(res => {
    try {
      const parsed = JSON.parse(res.choices[0]?.message?.content || "{}");
      return Array.isArray(parsed.flags) ? parsed.flags : [];
    } catch {
      return [];
    }
  });

  // 4. Action Items
  const actionItemsPromise = groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: PROMPTS.actionItems },
      { role: "user", content: threadText }
    ],
    temperature: 0,
    response_format: { type: "json_object" },
  }).then(res => {
    try {
      const parsed = JSON.parse(res.choices[0]?.message?.content || "{}");
      return Array.isArray(parsed.actionItems) ? parsed.actionItems : [];
    } catch {
      return [];
    }
  });

  // 5. Professional Reply Draft
  const replyPromise = groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: PROMPTS.reply },
      { role: "user", content: threadText }
    ],
    temperature: 0.7, 
    max_tokens: 500,
  }).then(res => res.choices[0]?.message?.content?.trim() || "Could not generate reply.");

  // Execute ALL 5 API calls in true parallel!
  const [summary, tone, flags, actionItems, reply] = await Promise.all([
    summaryPromise,
    tonePromise,
    flagsPromise,
    actionItemsPromise,
    replyPromise
  ]);

  return {
    summary,
    tone,
    flags,
    actionItems,
    reply
  };
}
