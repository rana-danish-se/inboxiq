import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex bg-linear-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-heading font-bold text-lg text-white">InboxIQ</span>
        </div>
        
        <p className="text-center text-sm text-zinc-500 md:text-left">
          &copy; {new Date().getFullYear()} InboxIQ Inc. All rights reserved. Built with Next.js & Groq.
        </p>

        <div className="flex gap-6">
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Discord</Link>
        </div>
      </div>
    </footer>
  );
}
