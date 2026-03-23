import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { HowItWorks } from "@/components/layout/HowItWorks";
import { Testimonials } from "@/components/layout/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
