import Link from 'next/link';
import { Rocket, Network, Landmark, BarChart3, Briefcase, FileText } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Roadmap | TRIPA — Path to Infrastructure Dominance',
  description:
    'A technical and financial blueprint for ecosystem expansion, detailing our trajectory from regional pilot to the backbone of global institutional infrastructure data.',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="pt-28 pb-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] mb-8 max-w-3xl">
              The Six-Phase Path to Regional Infrastructure Dominance
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
              A technical and financial blueprint for ecosystem expansion, detailing our
              trajectory from regional pilot to the backbone of global institutional
              infrastructure data.
            </p>
          </div>
        </section>

        {/* ── Timeline Section ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-500/40 -translate-x-1/2 h-2/3 hidden md:block" />

            <div className="space-y-20 md:space-y-32">
              {/* Phase 1 — MVP Launch */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 border-4 border-zinc-950 z-10 hidden md:block" />
                
                {/* Left: Text Description */}
                <div className="md:text-right space-y-4">
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <Rocket className="w-3.5 h-3.5" />
                    Q1-Q2 2024
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-100">MVP Launch</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md md:ml-auto">
                    Initial regional infrastructure bridge connecting legacy systems to TRIPA core.
                  </p>
                </div>

                {/* Right: Companion Card */}
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-sm max-w-md">
                  <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-3">Key Releases</span>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Core API v1.0
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Asset Ledger Bridge
                    </li>
                  </ul>
                  <div className="border-t border-zinc-800/80 pt-4">
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Revenue Multiplier</span>
                    <span className="text-3xl font-black tracking-tight text-indigo-300">1.2x Base</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 — Network Scaling */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 z-10 hidden md:block" />

                {/* Left: Companion Card */}
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-sm max-w-md md:order-1 order-2">
                  <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-3">Operators</span>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      12 Tier-1 Utilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Cross-Border Settlement
                    </li>
                  </ul>
                  <div className="border-t border-zinc-800/80 pt-4">
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Revenue Multiplier</span>
                    <span className="text-3xl font-black tracking-tight text-zinc-100">3.5x Volume</span>
                  </div>
                </div>

                {/* Right: Text Description */}
                <div className="space-y-4 md:order-2 order-1">
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <Network className="w-3.5 h-3.5" />
                    Q3-Q4 2024
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-100">Network Scaling</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                    Expanding operator nodes across three primary economic zones.
                  </p>
                </div>
              </div>

              {/* Phase 3 — Fintech Layer */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 z-10 hidden md:block" />

                {/* Left: Text Description */}
                <div className="md:text-right space-y-4">
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <Landmark className="w-3.5 h-3.5" />
                    2025
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-100">Fintech Layer</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md md:ml-auto">
                    Native automated clearing and institutional liquidity pooling for infra-assets.
                  </p>
                </div>

                {/* Right: Companion Card */}
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-sm max-w-md">
                  <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-3">Features</span>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Liquidity Engine
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Smart Escrow v2
                    </li>
                  </ul>
                  <div className="border-t border-zinc-800/80 pt-4">
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Revenue Multiplier</span>
                    <span className="text-3xl font-black tracking-tight text-indigo-200">8.0x Ecosystem</span>
                  </div>
                </div>
              </div>

              {/* Phase 4 — Advanced Data */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 z-10 hidden md:block" />

                {/* Left: Companion Card */}
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-sm max-w-md md:order-1 order-2">
                  <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-3">Global Target</span>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      AI Forecast Engine
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      Global Index Fund
                    </li>
                  </ul>
                  <div className="border-t border-zinc-800/80 pt-4">
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Revenue Multiplier</span>
                    <span className="text-3xl font-black tracking-tight text-zinc-100">15x Network Effect</span>
                  </div>
                </div>

                {/* Right: Text Description */}
                <div className="space-y-4 md:order-2 order-1">
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <BarChart3 className="w-3.5 h-3.5" />
                    2026
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-100">Advanced Data</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                    Real-time predictive infrastructure analytics for institutional hedge funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Strategic Anchor ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto border border-zinc-800 bg-zinc-900/10 p-10 md:p-16 rounded-sm text-center">
            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-4">
              Strategic Anchor
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Infrastructure-as-a-Protocol
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
              Unlike traditional SaaS, TRIPA creates a self-reinforcing network effect where
              each new operator onboarded increases the utility of the data for every other
              participant.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800/80 max-w-md mx-auto">
              <div>
                <div className="text-4xl md:text-5xl font-black text-indigo-300 mb-1">94%</div>
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500">
                  Retention Rate
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-zinc-100 mb-1">4.2B</div>
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500">
                  Projected TVL (2025)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-32 px-6 border-b border-zinc-900 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Scaling Tomorrow&apos;s Assets Today
            </h2>
            <p className="text-sm md:text-base text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto">
              We are moving beyond the initial &ldquo;digitization&rdquo; phase and into the era of
              &ldquo;intelligent infrastructure orchestration.&rdquo; Join the first institutional
              network designed for real-world reliability.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-semibold px-6 py-3.5 rounded-sm transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                Request Prospectus
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 text-zinc-200 font-medium px-6 py-3.5 rounded-sm transition-colors text-sm"
              >
                <Briefcase className="w-4 h-4" />
                Schedule Briefing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
