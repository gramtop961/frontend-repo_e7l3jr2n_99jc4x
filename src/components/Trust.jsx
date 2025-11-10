import { ShieldCheck, LockKeyhole, Globe, Server } from "lucide-react";

export default function Trust() {
  return (
    <section id="trust" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Built for trust</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Security is the product. Compliance, isolation, and observability are included from day one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white/80">
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <ShieldCheck className="h-6 w-6 text-cyan-400" />
            <p className="mt-3 font-medium text-white">Compliance-ready</p>
            <p className="text-sm mt-1 text-white/70">SOC 2 Type II, HIPAA BAAs, GDPR tooling, and audit trails.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <LockKeyhole className="h-6 w-6 text-cyan-400" />
            <p className="mt-3 font-medium text-white">Keyless by design</p>
            <p className="text-sm mt-1 text-white/70">No shared secrets. Device-bound credentials verified with WebAuthn.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <Globe className="h-6 w-6 text-cyan-400" />
            <p className="mt-3 font-medium text-white">Data residency</p>
            <p className="text-sm mt-1 text-white/70">EU and US regions with dedicated shards and per-tenant isolation.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <Server className="h-6 w-6 text-cyan-400" />
            <p className="mt-3 font-medium text-white">Observability</p>
            <p className="text-sm mt-1 text-white/70">Fine-grained logs, replayable events, and live risk signals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
