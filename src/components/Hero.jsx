import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Fingerprint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-black" id="product">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Fingerprint className="h-4 w-4 text-cyan-400" />
              Biometric, passkey-first
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Auth that disappears.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70">
              Ship passwordless sign-in with one line. HoloAuth turns native biometrics into drop-in login for your app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a href="#waitlist" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-black font-medium hover:bg-cyan-400 transition">
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#code" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
                View docs
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-white font-medium flex items-center gap-2"><Shield className="h-4 w-4 text-cyan-400"/>Zero secrets</p>
                <p className="text-sm mt-1">No passwords, no OTPs, no SMS. Based on WebAuthn + device secure enclaves.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-white font-medium">60s integration</p>
                <p className="text-sm mt-1">Add SDK, paste snippet, you’re live. Works across web and mobile.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-white font-medium">SOC2-ready</p>
                <p className="text-sm mt-1">Data residency and audit trails included from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
