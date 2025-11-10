export default function CTA() {
  return (
    <section id="waitlist" className="relative bg-black py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Be first to try HoloAuth</h3>
        <p className="mt-2 text-white/70">Join the waitlist and get early access plus migration help from passwords to passkeys.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" placeholder="you@company.com" className="w-full sm:w-96 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          <button className="rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-5 py-3 transition">
            Join waitlist
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">No spam. We’ll only reach out with access.</p>
      </div>
    </section>
  );
}
