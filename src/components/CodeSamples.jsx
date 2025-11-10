import { Copy, Check } from "lucide-react";
import { useState } from "react";

const snippets = [
  {
    label: 'Install',
    language: 'bash',
    code: 'npm i @holoauth/sdk',
  },
  {
    label: 'One line login',
    language: 'ts',
    code: `import { login } from '@holoauth/sdk'\nawait login() // opens biometric prompt`,
  },
  {
    label: 'Backend verify',
    language: 'ts',
    code: `// Express example\napp.post('/verify', async (req, res) => {\n  const isValid = await holo.verify(req.body.credential)\n  res.json({ ok: isValid })\n})`,
  }
];

export default function CodeSamples() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const onCopy = async (code, idx) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1200);
    } catch {}
  };

  return (
    <section id="code" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Paste a snippet, ship auth</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Everything you need for passwordless sign-in across web and mobile. Copy, paste, done.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {snippets.map((s, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wide text-white/60">{s.label}</span>
                <button onClick={() => onCopy(s.code, idx)} className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white">
                  {copiedIndex === idx ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />} {copiedIndex === idx ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="rounded-lg bg-black/60 text-cyan-100/90 p-4 text-sm overflow-auto">
                <code>
                  {s.code}
                </code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
