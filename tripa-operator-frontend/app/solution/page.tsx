import Link from 'next/link';
import { Monitor, Layers, Shield, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Solution | TRIPA — Three Layers of Compound Revenue',
  description:
    'A diversified monetization engine designed for institutional scale, transitioning from transactional velocity to high-margin recurring predictability.',
};

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="pt-28 pb-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] mb-8 max-w-3xl">
              Three Layers of Compound Revenue
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
              A diversified monetization engine designed for institutional scale, transitioning
              from transactional velocity to high-margin recurring predictability.
            </p>
          </div>
        </section>

        {/* ── Revenue Layer Cards ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
            {/* Card 1 — Transactional */}
            <div className="border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors p-8 flex flex-col">
              <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                <Monitor className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
              </div>

              <h2 className="text-xl font-bold mb-3">Transactional</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-auto">
                High-velocity commissions captured from global network activity. This is our
                immediate scale engine.
              </p>

              <div className="mt-10 pt-6 border-t border-zinc-800">
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                  Unit Take Rate
                </div>
                <div className="flex items-end justify-between gap-2">
                  <span className="text-3xl font-black tracking-tight text-indigo-300">
                    2.4% – 3.1%
                  </span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 pb-1">
                    Commissions
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — SaaS */}
            <div className="border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors p-8 flex flex-col">
              <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                <Layers className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
              </div>

              <h2 className="text-xl font-bold mb-3">SaaS Subscriptions</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-auto">
                Institutional-grade operator tools and dashboard access with 98% annual
                retention rates.
              </p>

              <div className="mt-10 pt-6 border-t border-zinc-800">
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                  Avg. ARPU
                </div>
                <div className="flex items-end justify-between gap-2">
                  <span className="text-3xl font-black tracking-tight text-zinc-100">
                    $450 / Month
                  </span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 pb-1">
                    Operator Sub
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 — Financial Services */}
            <div className="border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors p-8 flex flex-col relative">
              {/* HIGH MARGIN badge */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-zinc-800 border border-zinc-700 text-[8px] font-bold tracking-widest uppercase text-zinc-400 rounded-sm">
                High Margin
              </div>

              <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                <Shield className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
              </div>

              <h2 className="text-xl font-bold mb-3">Financial Services</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-auto">
                Embedded credit, professional insurance, and proprietary market data intelligence.
              </p>

              <div className="mt-10 pt-6 border-t border-zinc-800">
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                  Est. Margin
                </div>
                <div className="flex items-end justify-between gap-2">
                  <span className="text-3xl font-black tracking-tight text-zinc-100">
                    82% Net
                  </span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 pb-1">
                    Value Added
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Revenue Mix + Unit Economics ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-4">

            {/* Revenue Mix Evolution */}
            <div className="border border-zinc-800 bg-zinc-900/20 p-8">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold">Revenue Mix Evolution</h2>
                  <p className="text-sm text-zinc-500 mt-1">Shift toward high-margin service revenue</p>
                </div>
                {/* Legend */}
                <div className="flex items-center gap-4 text-[9px] font-bold tracking-widest uppercase text-zinc-500 mt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                    Financial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-500 inline-block" />
                    SaaS
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
                    Trans
                  </span>
                </div>
              </div>

              {/* Stacked bar chart */}
              <div className="mt-10 mb-6">
                <div className="flex items-end gap-5 h-48">
                  {[
                    { year: 'FY23', fin: 5, saas: 10, trans: 85 },
                    { year: 'FY24', fin: 12, saas: 22, trans: 66 },
                    { year: 'FY25(P)', fin: 28, saas: 35, trans: 37 },
                    { year: 'FY26(E)', fin: 42, saas: 38, trans: 20 },
                  ].map((d) => (
                    <div key={d.year} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col-reverse rounded-sm overflow-hidden" style={{ height: '11rem' }}>
                        {/* Transactional — bottom */}
                        <div
                          className="w-full bg-zinc-700 transition-all"
                          style={{ height: `${d.trans}%` }}
                        />
                        {/* SaaS — middle */}
                        <div
                          className="w-full bg-zinc-500 transition-all"
                          style={{ height: `${d.saas}%` }}
                        />
                        {/* Financial — top */}
                        <div
                          className="w-full bg-indigo-400 transition-all"
                          style={{ height: `${d.fin}%` }}
                        />
                      </div>
                      <span className="text-[9px] tracking-widest uppercase text-zinc-600 mt-2">
                        {d.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-2 gap-px border-t border-zinc-800 pt-6 mt-4">
                <div>
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                    Projected Gross Margin
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-400" strokeWidth={2} />
                    <span className="text-4xl font-black tracking-tight text-zinc-100">74.2%</span>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                    Net Dollar Retention
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-400" strokeWidth={2} />
                    <span className="text-4xl font-black tracking-tight text-zinc-100">118%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="flex flex-col gap-4">
              <div className="border border-zinc-800 bg-zinc-900/20 p-8 flex-1">
                <h2 className="text-2xl font-bold mb-8">Unit Economics</h2>

                <div className="mb-8">
                  <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                    LTV / CAC Ratio
                  </div>
                  <div className="text-6xl font-black tracking-tight text-indigo-300">6.4x</div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                      CAC Payback
                    </div>
                    <div className="text-3xl font-black tracking-tight text-zinc-100">4.2mo</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-2">
                      Churn Rate (SaaS)
                    </div>
                    <div className="text-3xl font-black tracking-tight text-zinc-100">0.8%</div>
                  </div>
                </div>
              </div>

              {/* Scalability Metrics */}
              <div className="border border-zinc-800 bg-zinc-900/20 p-8">
                <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 mb-6">
                  Scalability Metrics
                </div>
                <div className="space-y-5">
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <div className="text-[9px] font-bold tracking-widest uppercase text-indigo-400 mb-1">
                      OPEX Efficiency
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Infrastructure costs grow at 0.12x the rate of revenue.
                    </p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-400 mb-1">
                      Viral Loop
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Each new operator brings average of 4.8 sub-users annually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
