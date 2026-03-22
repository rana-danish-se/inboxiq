"use client";

import { useState } from "react";
import { Sparkles, AlertTriangle, CheckCircle2, Copy, FileText, Zap, Activity, Shield } from "lucide-react";

export default function DashboardPage() {
  const [thread, setThread] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    if (!thread.trim()) return;
    setIsAnalyzing(true);
    // Simulate our 5 parallel Groq API calls with a loading delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-[120px] pointer-events-none" aria-hidden="true">
        <div className="aspect-1155/678 w-240 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 rounded-full mix-blend-screen"></div>
      </div>
      <div className="absolute top-[40%] text-center -left-40 -z-10 transform-gpu blur-[100px] pointer-events-none" aria-hidden="true">
        <div className="aspect-square w-160 bg-linear-to-br from-[#9089fc] to-[#ff80b5] opacity-10 rounded-full mix-blend-screen"></div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">Email Intelligence</h1>
          <p className="text-zinc-400">Paste your chaotic email thread below, and our 5 AI agents will decode it instantly.</p>
        </div>

        {/* Input Textarea Block */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1c] p-1 shadow-2xl relative overflow-hidden group">
          {/* Subtle gradient border effect when focused */}
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative bg-[#030712] rounded-xl flex flex-col transition-all">
            <textarea 
              value={thread}
              onChange={(e) => setThread(e.target.value)}
              placeholder="Paste the email thread here... (e.g. strict client negotiation, angry support ticket, long inter-department chain)"
              className="w-full min-h-[250px] bg-transparent p-6 text-zinc-300 placeholder-zinc-600 focus:outline-none resize-y"
            />
            
            <div className="flex items-center justify-between p-4 border-t border-white/5 bg-white/[0.02] rounded-b-xl">
              <div className="text-xs text-zinc-500 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Secure, private processing loop
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !thread.trim()}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="h-4 w-4 animate-spin text-purple-600" /> Analyzing 5 Dimensions...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-purple-600" /> Decode Thread
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* UI Results State */}
        {showResults && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-white/10 flex-1"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <Zap className="h-4 w-4 text-purple-400" /> Intelligence Report
              </div>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            {/* Base Grid for the 5 responses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Output 1: Thread Summary (Span 2/3 columns) */}
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500/50"></div>
                <h3 className="flex items-center gap-2 font-medium text-white mb-4">
                  <FileText className="h-5 w-5 text-pink-400" /> Executive Summary
                </h3>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  The client is concerned about the Q3 delivery timeline for the new enterprise features. They are threatening to halt the contractual payment until a firm delivery date is established in writing. John from Engineering noted that a 2-week delay is unavoidable due to recent AWS outages, but this hasn&apos;t been effectively communicated to the client yet.
                </p>
              </div>

              {/* Output 3: Tone & Urgency (Span 1/3 columns) */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col shadow-xl">
                <h3 className="flex items-center gap-2 font-medium text-white mb-4">
                  <Activity className="h-5 w-5 text-orange-400" /> Tone & Urgency
                </h3>
                
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">Emotional Tone</span>
                    <span className="text-red-400 font-semibold">Frustrated</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-yellow-500 to-red-500 w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">Urgency Level</span>
                    <span className="text-orange-400 font-semibold">High Priority</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[90%]"></div>
                  </div>
                </div>
              </div>

              {/* Output 5: Red Flags / Risks (Span 1/3 columns) */}
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm shadow-xl">
                <h3 className="flex items-center gap-2 font-medium text-red-400 mb-4">
                  <AlertTriangle className="h-5 w-5" /> Risks & Red Flags
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">•</span> 
                    Explicitly mentioned &quot;withholding Q3 payment&quot;.
                  </li>
                  <li className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">•</span> 
                    The legal team was CC&apos;d on their final message.
                  </li>
                </ul>
              </div>

              {/* Output 2: Action Items (Span 2/3 columns) */}
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50"></div>
                <h3 className="flex items-center gap-2 font-medium text-green-400 mb-4">
                  <CheckCircle2 className="h-5 w-5" /> Recommended Action Items
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Draft revised Q3 timeline</h4>
                      <p className="text-xs text-zinc-400 mt-1">Owner: John (Engineering) • Due: EOD</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Schedule 15-min sync with client</h4>
                      <p className="text-xs text-zinc-400 mt-1">Owner: Account Manager • Due: ASAP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output 4: Professional Reply (Full Width - Span 3/3 columns) */}
              <div className="md:col-span-3 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 backdrop-blur-sm relative group mt-2 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="flex items-center gap-2 font-medium text-purple-300">
                    <Sparkles className="h-5 w-5" /> AI Drafted Reply
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 rounded-md text-purple-200 hidden sm:block">
                      Tone: De-escalating & Firm
                    </span>
                    <button className="flex items-center gap-1.5 text-xs bg-white text-black px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors active:scale-95">
                      <Copy className="h-3.5 w-3.5" /> Copy to Clipboard
                    </button>
                  </div>
                </div>
                
                <div className="bg-[#030712]/80 border border-white/10 rounded-xl p-5 text-sm text-zinc-300 leading-relaxed font-sans shadow-inner selection:bg-purple-500/30">
                  Hi [Client Name],<br/><br/>
                  I completely understand your frustration regarding the Q3 delivery timeline. Transparency is our top priority, and I want to provide you with a concrete update.<br/><br/>
                  Due to recent external infrastructure outages, our engineering team requires an additional two weeks to ensure the enterprise features are stable and fully tested before deployment. We are actively working to compress this timeline where possible without sacrificing quality.<br/><br/>
                  Could we schedule a quick 15-minute call tomorrow morning to review the new project roadmap? We value your partnership and want to ensure you are fully confident in our adjusted delivery plan.<br/><br/>
                  Best regards,<br/>
                  [Your Name]
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
