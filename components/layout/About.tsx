import { BrainCircuit, Zap, Shield, FileText } from "lucide-react";

const features = [
  {
    name: "5 AI Engines",
    description:
      "We don't just use one prompt. We run 5 optimized parallel API calls to get you comprehensive insights.",
    icon: BrainCircuit,
  },
  {
    name: "Lightning Fast",
    description:
      "Powered by Groq's LPU inference engine, you get your full intelligence report in under 2 seconds.",
    icon: Zap,
  },
  {
    name: "Professional Tone",
    description:
      "Never send an emotional email again. We craft the perfect reply tailored to the situation and your selected tone.",
    icon: FileText,
  },
  {
    name: "Risk Detection",
    description:
      "We automatically flag subtle red flags, aggressive tones, or hidden traps in client negotiations.",
    icon: Shield,
  },
];

export function About() {
  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-[#030712] relative border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-400 uppercase tracking-widest">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl font-heading">
            Smarter Email Intelligence
          </p>
          <p className="mt-6 text-lg/8 text-zinc-400">
            InboxIQ processes chaotic threads into structured data instantly,
            keeping you one step ahead in any communication.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="rounded-lg bg-[#030712] p-3 ring-1 ring-white/10 mb-6 shadow-lg shadow-blue-500/10">
                  <feature.icon className="size-6 text-blue-400" />
                </div>
                <dt className="text-lg font-semibold text-white">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
