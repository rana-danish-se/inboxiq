import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InboxIQ | AI Email Intelligence",
  description: "Analyze, summarize, and reply to business emails instantly with 5 parallel AI tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased bg-[#030712] text-white min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
