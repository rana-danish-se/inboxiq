import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 py-1.5 px-3 text-sm font-medium text-blue-300 backdrop-blur-md mb-8 ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
          <Sparkles className="mr-2 h-4 w-4" />
          <span className="font-semibold text-white">InboxIQ</span>
          <div className="mx-2 h-4 w-px bg-white/20"></div>
          <span className="text-white/70">Powered by 5 Parallel AI Agents</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 font-heading bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Your Business Emails, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
            Decoded Instantly.
          </span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed">
          Drop any messy thread into InboxIQ. We run 5 simultaneous AI tasks to
          extract summaries, action items, tone analysis, risks, and draft
          professional replies in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
          >
            Start Analyzing <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
            <Mail className="h-4 w-4" /> View Example Report
          </button>
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </section>
  );
}
