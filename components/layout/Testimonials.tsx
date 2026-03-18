export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#030712] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-8 tracking-tight text-purple-400 uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            Loved by forward-thinking teams
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { body: "InboxIQ takes a 15-message client negotiation thread and perfectly summarizes it in 2 seconds. The drafted replies are scarily good.", author: "Sarah Jenkins", role: "VP of Sales" },
              { body: "The Tone and Urgency score completely changed how our support team prioritizes angry customer emails. It catches subtle aggression we used to miss.", author: "Marcus Thorne", role: "Head of Support" },
              { body: "I don't have to read long threads anymore. I just paste them in, look at the Action Items & Owners, and get back to actual work.", author: "Elena Rodriguez", role: "Product Manager" },
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all cursor-default shadow-sm hover:shadow-purple-500/10">
                <blockquote className="text-zinc-300 leading-relaxed">
                  <p>{`"${testimonial.body}"`}</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4 border-t border-white/10 pt-6">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
