import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex bg-linear-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            InboxIQ
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            How it Works
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard"
            className="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
