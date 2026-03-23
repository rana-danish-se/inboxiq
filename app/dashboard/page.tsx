"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Copy,
  FileText,
  Activity,
  Shield,
  Check,
  ArrowLeft,
  BrainCircuit,
  Mail,
  Clock,
  Flame,
  X,
} from "lucide-react";
import { analyzeEmailThread } from "@/actions/email";
import { EmailIntelligenceReport } from "@/types";

export default function DashboardPage() {
  const [thread, setThread] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<EmailIntelligenceReport | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!thread.trim()) return;
    setIsAnalyzing(true);
    setReport(null);
    setErrorMsg(null);
    try {
      const data = await analyzeEmailThread(thread);
      setReport(data);
    } catch (error) {
      console.error(error);
      setErrorMsg(
        "Failed to analyze thread. Please ensure the thread is long enough and try again.",
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopy = () => {
    if (report?.reply) {
      navigator.clipboard.writeText(report.reply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#030712] text-white selection:bg-blue-500/30">
      {/* Deep Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-[10%] -top-[20%] h-[50rem] w-[50rem] rounded-full bg-blue-500/10 mix-blend-screen blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[50rem] w-[50rem] rounded-full bg-orange-500/10 mix-blend-screen blur-[120px]" />
      </div>

      {/* Top Application Header */}
      <header className="relative z-20 flex h-16 shrink-0 items-center border-b border-white/5 bg-black/20 px-6 backdrop-blur-xl lg:px-8">
        <Link
          href="/"
          className="group mr-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </Link>
        <div className="flex items-center">
          <div className="relative h-10 w-40 overflow-hidden">
            <Image
              src="/logo.png"
              alt="InboxIQ Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </header>

      {/* Split Pane Interface */}
      <main className="relative z-10 flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* Left Pane: Input Container */}
        <section className="flex w-full flex-col border-r border-white/5 bg-white/[0.01] p-6 lg:w-[45%] lg:p-8">
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Mail className="h-4 w-4 text-blue-400" /> Source Thread
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Paste your raw email exchange below.
            </p>
          </div>

          <div className="group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner transition-all focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 min-h-[300px] lg:min-h-0">
            <textarea
              value={thread}
              onChange={(e) => setThread(e.target.value)}
              placeholder="e.g. 'Hi team, we need to push the deadline by 2 weeks because...'"
              className="h-full w-full resize-none bg-transparent p-6 pr-12 text-sm leading-relaxed text-zinc-300 placeholder-zinc-600 focus:outline-none"
            />
            {thread.length > 0 && (
              <button
                onClick={() => {
                  setThread("");
                  setReport(null); // Optional: clears report when text is cleared
                }}
                className="absolute right-4 top-4 rounded-full bg-white/5 p-1.5 text-zinc-400 transition-all hover:bg-red-500/20 hover:text-red-400 active:scale-95 z-20"
                title="Clear text"
              >
                <X className="h-4 w-4 shrink-0" />
              </button>
            )}
          </div>

          {errorMsg && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400 animate-in fade-in slide-in-from-top-2 shadow-lg shadow-red-500/5">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{errorMsg}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <Shield className="h-3.5 w-3.5 text-zinc-400" /> End-to-end
              encrypted processing
            </div>
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !thread.trim()}
              className="w-full rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:w-auto shadow-lg shadow-white/10"
            >
              {isAnalyzing ? (
                <span className="flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4 animate-spin text-blue-500" />{" "}
                  Decoding...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-blue-500 group-hover:rotate-12 transition-transform" />{" "}
                  Analyze Thread
                </span>
              )}
            </button>
          </div>
        </section>

        {/* Right Pane: Results Output */}
        <section className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#030712] relative scroll-smooth custom-scrollbar">
          {/* Empty State */}
          {!report && !isAnalyzing && (
            <div className="flex h-full max-w-sm flex-col items-center justify-center text-center mx-auto opacity-40">
              <div className="rounded-full bg-white/5 p-6 mb-6 inline-flex border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <BrainCircuit className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-white font-heading">
                Awaiting Input
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Paste your email thread on the left and click Analyze to
                instantly generate your intelligence report.
              </p>
            </div>
          )}

          {/* Loading State */}
          {isAnalyzing && (
            <div className="flex h-full flex-col items-center justify-center text-center animate-in fade-in duration-500">
              <div className="relative inline-flex mb-8">
                <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
                <div className="rounded-full border border-blue-500/30 bg-blue-500/10 p-5 relative z-10">
                  <Activity className="h-8 w-8 text-blue-400 animate-spin" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-white tracking-tight font-heading">
                Extracting Intelligence...
              </h3>
              <p className="max-w-[260px] text-sm text-zinc-400 leading-relaxed">
                Scanning tone, extracting action items, and drafting your
                perfect reply.
              </p>
            </div>
          )}

          {/* Success Results State */}
          {report && !isAnalyzing && (
            <div className="mx-auto max-w-3xl space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Executive Summary */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors hover:bg-white/[0.04] shadow-2xl shadow-black/50">
                <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-blue-500 to-orange-500 opacity-60"></div>
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                  <FileText className="h-4 w-4 text-orange-400" /> Executive
                  Summary
                </h3>
                <p className="text-sm leading-8 text-zinc-300">
                  {report.summary}
                </p>
              </div>

              {/* 2-Column Grid for Metrics and Actions */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Tone Metrics */}
                <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-xl transition-colors hover:bg-white/[0.04] shadow-xl shadow-black/50">
                  <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
                    <Activity className="h-4 w-4 text-orange-400" /> Tone
                    Metrics
                  </h3>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div>
                      <div className="mb-2.5 flex justify-between text-xs">
                        <span className="text-zinc-400">Dominant Emotion</span>
                        <span className="font-medium text-white">
                          {report.tone.emotionalTone}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/5 bg-black/60 shadow-inner">
                        <div
                          className="h-full bg-linear-to-r from-emerald-400 via-yellow-500 to-red-500 transition-all duration-1000"
                          style={{ width: `${report.tone.toneScorePercent}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2.5 flex justify-between text-xs">
                        <span className="text-zinc-400">Urgency Level</span>
                        <span className="font-medium text-white">
                          {report.tone.urgencyLevel}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/5 bg-black/60 shadow-inner">
                        <div
                          className="h-full bg-orange-500 transition-all duration-1000 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                          style={{
                            width: `${report.tone.urgencyScorePercent}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Items */}
                <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-xl transition-colors hover:bg-white/[0.04] shadow-xl shadow-black/50">
                  <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-green-400" /> Action
                    Items
                  </h3>
                  {report.actionItems && report.actionItems.length > 0 ? (
                    <ul className="space-y-5 flex-1">
                      {report.actionItems.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-sm">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-400 border border-green-500/20">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-medium text-zinc-200 leading-snug">
                              {item.task}
                            </p>
                            <p className="mt-2 flex items-center gap-3 text-[11px] text-zinc-500 font-mono tracking-tight">
                              <span className="flex items-center gap-1.5">
                                <Shield className="h-3 w-3 opacity-70" />{" "}
                                {item.owner}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3 opacity-70" />{" "}
                                {item.due}
                              </span>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-col items-center justify-center flex-1 text-zinc-500 opacity-60">
                      <CheckCircle2 className="mb-3 h-8 w-8 opacity-20" />
                      <p className="text-xs">No pending actions required.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Risks & Red Flags */}
              {report.flags && report.flags.length > 0 && (
                <div className="rounded-2xl border border-red-500/20 bg-linear-to-br from-red-500/10 to-red-500/5 p-8 backdrop-blur-xl shadow-2xl shadow-red-500/5">
                  <h3 className="mb-5 flex items-center gap-2 font-semibold text-red-400">
                    <Flame className="h-4 w-4" /> Critical Risks Detected
                  </h3>
                  <ul className="space-y-3">
                    {report.flags.map((flag, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-red-500/10 bg-black/40 p-4 text-sm text-zinc-200 shadow-inner"
                      >
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500 opacity-80" />
                        <span className="leading-relaxed">{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Generated Reply */}
              <div className="group relative rounded-2xl border border-blue-500/30 bg-linear-to-b from-blue-500/10 to-transparent p-[1px] shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                <div className="rounded-[15px] bg-[#030712]/90 p-8 backdrop-blur-xl">
                  <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-5">
                    <h3 className="flex items-center gap-2 font-semibold text-blue-300">
                      <Sparkles className="h-4 w-4" /> AI Drafted Response
                    </h3>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-lg bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:text-white active:scale-95 border border-white/10"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-400" />{" "}
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-zinc-400" /> Copy to
                          Clipboard
                        </>
                      )}
                    </button>
                  </div>

                  <div className="font-sans text-sm leading-[1.8] text-zinc-300 whitespace-pre-wrap selection:bg-blue-500/30">
                    {report.reply}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
