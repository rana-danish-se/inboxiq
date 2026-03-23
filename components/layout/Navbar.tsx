import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-40 overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="InboxIQ Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            How it Works
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex h-9 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-orange-500 px-5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] fade-in active:scale-95"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
