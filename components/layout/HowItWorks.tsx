export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden bg-[#030712]"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div className="aspect-[1200/800] w-[75rem] bg-gradient-to-tr from-blue-500 to-orange-500 opacity-10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            How InboxIQ Works
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Three simple steps to regain your inbox sanity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[30px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-500/0 via-orange-500/50 to-blue-500/0"></div>

          {[
            {
              step: "1",
              title: "Paste Thread",
              desc: "Copy and paste any messy, multi-reply business email thread into our secure portal.",
            },
            {
              step: "2",
              title: "AI Processing",
              desc: "We simultaneously run 5 LLM requests to summarize, score tone, and find action items.",
            },
            {
              step: "3",
              title: "Take Action",
              desc: "Review the instant intelligence dashboard and copy the AI-generated professional reply.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-6 mt-4 md:mt-0"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#030712] border-2 border-blue-500/50 text-xl font-bold text-white mb-6 relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
