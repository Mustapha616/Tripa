import Link from 'next/link';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Market | TRIPA — Nigeria Interstate Mobility Infrastructure',
  description:
    "An institutional-grade analysis of Nigeria's $1.6B digital transformation in transport, fueled by fintech CAGR and government digital payment mandates.",
};

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="pt-28 pb-28 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] mb-8 max-w-3xl">
              Capturing the $1.6B Interstate Mobility Market
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
              An institutional-grade analysis of Nigeria&apos;s digital transformation in
              transport, fueled by fintech CAGR and government digital payment mandates.
            </p>
          </div>
        </section>

        {/* ── Demographic & Connectivity Stats ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Demographic Tailwinds */}
            <div>
              <h2 className="text-lg font-bold mb-3">Demographic Tailwinds</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-12 max-w-sm">
                Massive scale-up potential across a youth-dominated workforce requiring reliable
                interstate movement.
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl font-black tracking-tighter text-indigo-300 mb-2">
                    237M
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    Current Population
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-tighter text-zinc-100 mb-2">
                    88%
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    Mobile
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-tighter text-zinc-100 mb-2">
                    100%
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    USSD
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-tighter text-indigo-300 mb-2">
                    22.7%
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    Fintech CAGR
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Connectivity Infrastructure */}
            <div>
              <h2 className="text-lg font-bold mb-3">Connectivity Infrastructure</h2>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                The backbone of our unified ticketing platform relies on hybrid USSD and LTE
                penetration across 36 states.
              </p>

              {/* Visual connectivity diagram */}
              <div className="mt-12 border border-zinc-800 bg-zinc-900/30 p-6 rounded-sm">
                <div className="flex items-end justify-around gap-4 h-28">
                  {[
                    { label: 'USSD', pct: '100%', h: 'h-full', color: 'bg-indigo-400/80' },
                    { label: 'LTE', pct: '74%', h: 'h-3/4', color: 'bg-zinc-600' },
                    { label: 'Smartphone', pct: '58%', h: 'h-[58%]', color: 'bg-zinc-700' },
                    { label: 'Data', pct: '44%', h: 'h-[44%]', color: 'bg-zinc-800' },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                      <span className="text-[10px] font-mono text-zinc-500">{bar.pct}</span>
                      <div className={`w-full ${bar.h} ${bar.color} rounded-sm`} />
                      <span className="text-[9px] tracking-widest uppercase text-zinc-600">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-zinc-600 mt-4 font-mono uppercase tracking-wider">
                  National Penetration Rates // 36 States
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Geographic Context + Market Sizing ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
              <h2 className="text-2xl font-bold">Geographic Context: Nigeria</h2>
              <span className="text-[10px] tracking-widest uppercase text-zinc-500 font-medium mt-1">
                Strategic Mobility Hub
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
              {/* Map visual */}
              <div>
                <div className="relative border border-zinc-800 bg-zinc-900/40 rounded-sm overflow-hidden aspect-[16/10]">
                  {/* Nigeria map silhouette (SVG approximation) */}
                  <svg
                    viewBox="0 0 500 350"
                    className="absolute inset-0 w-full h-full"
                    aria-label="Nigeria route map"
                  >
                    {/* Dark grid */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="500" height="350" fill="url(#grid)" />

                    {/* Nigeria rough outline */}
                    <path
                      d="M 100 80 L 140 60 L 200 55 L 280 65 L 340 60 L 390 80 L 410 120 L 400 170 L 380 220 L 350 270 L 300 300 L 250 310 L 200 300 L 160 270 L 120 230 L 90 180 L 85 130 Z"
                      fill="#1c1c1e"
                      stroke="#3f3f46"
                      strokeWidth="1.5"
                    />

                    {/* Lagos Hub */}
                    <circle cx="155" cy="265" r="5" fill="#818cf8" />
                    <circle cx="155" cy="265" r="10" fill="#818cf8" fillOpacity="0.2" />

                    {/* Abuja */}
                    <circle cx="265" cy="185" r="4" fill="#6366f1" />
                    <circle cx="265" cy="185" r="8" fill="#6366f1" fillOpacity="0.15" />

                    {/* Route arc */}
                    <path
                      d="M 155 265 Q 190 200 265 185"
                      fill="none"
                      stroke="#818cf8"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                    />

                    {/* Kano */}
                    <circle cx="260" cy="95" r="3" fill="#52525b" />
                    <path
                      d="M 265 185 Q 262 140 260 95"
                      fill="none"
                      stroke="#3f3f46"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />

                    {/* Port Harcourt */}
                    <circle cx="290" cy="280" r="3" fill="#52525b" />
                    <path
                      d="M 265 185 Q 280 240 290 280"
                      fill="none"
                      stroke="#3f3f46"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />

                    {/* Lagos label */}
                    <rect x="80" y="278" width="72" height="18" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />
                    <text x="116" y="291" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace" letterSpacing="1">
                      LAGOS HUB
                    </text>

                    {/* Abuja label */}
                    <rect x="278" y="172" width="90" height="18" rx="2" fill="#18181b" stroke="#6366f1" strokeWidth="0.8" />
                    <text x="323" y="185" textAnchor="middle" fill="#818cf8" fontSize="8" fontFamily="monospace" letterSpacing="1">
                      ABUJA CONNECTION
                    </text>
                  </svg>
                </div>

                {/* Below-map stats */}
                <div className="grid grid-cols-2 gap-px mt-px border border-zinc-800">
                  <div className="bg-zinc-900/30 px-6 py-5">
                    <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                      Transit Corridors
                    </div>
                    <div className="text-3xl font-black tracking-tight">12 Major</div>
                  </div>
                  <div className="bg-zinc-900/30 px-6 py-5 border-l border-zinc-800">
                    <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                      Daily Cross-State Trips
                    </div>
                    <div className="text-3xl font-black tracking-tight">4.2M+</div>
                  </div>
                </div>
              </div>

              {/* Market Sizing panel */}
              <div className="space-y-px border border-zinc-800">
                <div className="bg-zinc-900/30 px-6 py-5 border-b border-zinc-800">
                  <h3 className="text-base font-bold">Market Sizing</h3>
                </div>

                <div className="bg-zinc-900/20 px-6 py-6 border-b border-zinc-800">
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    TAM (Total Addressable Market)
                  </div>
                  <div className="text-5xl font-black tracking-tighter text-indigo-200 mb-1">$1.6B</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Per Annum</div>
                </div>

                <div className="bg-zinc-900/20 px-6 py-6 border-b border-zinc-800">
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    SAM (Serviceable Market)
                  </div>
                  <div className="text-4xl font-black tracking-tighter text-zinc-100 mb-1">$840M</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Interstate Bus</div>
                </div>

                <div className="bg-zinc-900/20 px-6 py-6 border-b border-zinc-800">
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    SOM (Serviceable Obtainable)
                  </div>
                  <div className="text-4xl font-black tracking-tighter text-zinc-100 mb-1">$120M</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Year 3 Target</div>
                </div>

                <div className="bg-zinc-900/10 px-6 py-5">
                  <p className="text-xs text-zinc-500 leading-relaxed italic">
                    &ldquo;Market expansion is driven by the 2030 Federal Digital Payment Mandate
                    requiring all transit operators to modernize.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Competitor Landscape + Government Mandate ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Competitor Landscape */}
            <div>
              <h2 className="text-2xl font-bold mb-10">Competitor Landscape</h2>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-zinc-200 mb-3">Traditional Operators</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Fragmented, cash-only systems. Limited data visibility and high revenue leakage
                  (15–20%).
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 pl-5">
                <h3 className="text-sm font-semibold text-indigo-300 mb-2">TRIPA: Unified Solution</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Aggregated inventory, digital reconciliation, and embedded financing for fleet
                  expansion.
                </p>
              </div>
            </div>

            {/* Government Mandate */}
            <div>
              <h2 className="text-2xl font-bold mb-10">Government Mandate (2030)</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-sm">
                Federal digital payment roadmap accelerating institutional adoption.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black tracking-tighter text-indigo-200 mb-2">100%</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    Digital Compliance
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-tighter text-zinc-100 mb-2">Zero</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    Cash-at-Counter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                Positioning for the Fintech-Logistics Convergence
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                TRIPA is more than a booking engine; it&apos;s the financial layer of Africa&apos;s
                most populous mobility market.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-semibold px-6 py-3.5 rounded-sm transition-colors text-sm whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download Full Deck
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 text-zinc-200 font-medium px-6 py-3.5 rounded-sm transition-colors text-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Schedule Analyst Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
