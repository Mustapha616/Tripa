import Link from 'next/link';
import { ArrowRight, Box, Bus, CreditCard, Activity, Code, ExternalLink, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-28 px-6">
          <div className="max-w-7xl mx-auto">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] mb-8 max-w-3xl">
              The operating system for Nigeria&apos;s interstate mobility
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
              Replace cash-leakage and manual manifests with a unified digital
              infrastructure. Built for operators, scaled for the nation.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href={process.env.NEXT_PUBLIC_LANDING_PAGE_ONLY === 'true' ? '/coming-soon' : '/login'}
                className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-semibold px-6 py-3.5 rounded-sm transition-colors text-sm"
              >
                {process.env.NEXT_PUBLIC_LANDING_PAGE_ONLY === 'true' ? 'Get Early Access' : 'Join the Network'} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 text-zinc-200 font-medium px-6 py-3.5 rounded-sm transition-colors text-sm"
              >
                View technical docs
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <h2 className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-4">
                Core Infrastructure
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Five systems, one unified network.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px border border-zinc-800/80">
              {/* Card 1 */}
              <div className="p-7 bg-zinc-950 hover:bg-zinc-900/60 transition-colors border-r border-zinc-800/80 last:border-r-0">
                <Box className="w-5 h-5 text-indigo-300 mb-5" strokeWidth={1.5} />
                <h4 className="text-sm font-bold mb-2.5">Universal Booking Engine</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Centralized inventory management for multi-channel sales across Nigeria.
                </p>
              </div>
              {/* Card 2 */}
              <div className="p-7 bg-zinc-950 hover:bg-zinc-900/60 transition-colors border-r border-zinc-800/80 last:border-r-0">
                <Bus className="w-5 h-5 text-indigo-300 mb-5" strokeWidth={1.5} />
                <h4 className="text-sm font-bold mb-2.5">Fleet Manager</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Real-time asset health monitoring and route optimization for maximum yield.
                </p>
              </div>
              {/* Card 3 */}
              <div className="p-7 bg-zinc-950 hover:bg-zinc-900/60 transition-colors border-r border-zinc-800/80 last:border-r-0">
                <CreditCard className="w-5 h-5 text-indigo-300 mb-5" strokeWidth={1.5} />
                <h4 className="text-sm font-bold mb-2.5">Fintech Layer</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Automated revenue splits, 48h settlement, and anti-leakage protocols.
                </p>
              </div>
              {/* Card 4 */}
              <div className="p-7 bg-zinc-950 hover:bg-zinc-900/60 transition-colors border-r border-zinc-800/80 last:border-r-0">
                <Activity className="w-5 h-5 text-indigo-300 mb-5" strokeWidth={1.5} />
                <h4 className="text-sm font-bold mb-2.5">Data Engine</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Predictive analytics for corridor demand and seasonal performance trends.
                </p>
              </div>
              {/* Card 5 */}
              <div className="p-7 bg-zinc-950 hover:bg-zinc-900/60 transition-colors">
                <Code className="w-5 h-5 text-indigo-300 mb-5" strokeWidth={1.5} />
                <h4 className="text-sm font-bold mb-2.5">Open API</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  The developer gateway for third-party integrations and logistics expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                From Cash-heavy to Digital-first
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed">
                Eliminate revenue leakage with transparent, end-to-end transaction monitoring.
                TRIPA digitizes the entire manifest process, ensuring every seat sold is a seat
                accounted for.
              </p>

              <ul className="space-y-4 mb-16">
                {[
                  'Automated Reconciliation',
                  '48-Hour Network Settlement',
                  'Fraud Mitigation Engine',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                Fleet Intelligence
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                Gain a bird&apos;s eye view of your entire operation. Track vehicles in real-time,
                monitor driver performance, and reduce downtime through predictive maintenance data.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-sm border border-zinc-800 bg-zinc-900/30 overflow-hidden p-8 flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="text-[9px] tracking-widest text-zinc-600 font-mono uppercase">
                    Network Analytics // v3.0
                  </div>
                </div>

                <div className="space-y-5 mb-auto">
                  <div className="flex items-center gap-4">
                    <div className="h-px bg-zinc-800 flex-1 relative">
                      <div className="absolute top-0 left-0 h-full bg-indigo-400/70 w-3/4"></div>
                    </div>
                    <div className="w-2.5 h-2.5 rotate-45 bg-zinc-700"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-px bg-zinc-800 flex-1 relative">
                      <div className="absolute top-0 left-0 h-full bg-indigo-400/70 w-1/2"></div>
                    </div>
                    <div className="w-2.5 h-2.5 rotate-45 bg-zinc-700"></div>
                  </div>
                  <div className="h-px bg-zinc-800 w-2/3"></div>
                </div>

                <div className="relative h-48 border-t border-zinc-800/50 mt-12 overflow-hidden flex items-end">
                  <div className="w-1/4 h-[30%] bg-zinc-800/30 border-r border-zinc-800/50"></div>
                  <div className="w-1/4 h-[50%] bg-zinc-800/50 border-r border-zinc-800/50"></div>
                  <div className="w-1/4 h-[80%] bg-zinc-700/50 border-r border-zinc-800/50"></div>
                  <div className="w-1/4 h-full bg-zinc-800/20"></div>
                  <div className="absolute bottom-4 right-4 bg-indigo-100 p-5 text-center shadow-2xl">
                    <div className="text-[9px] font-bold tracking-widest text-indigo-900 uppercase mb-1.5">
                      Network Load
                    </div>
                    <div className="text-4xl font-black text-indigo-950 tracking-tighter">94.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <div className="w-10 h-px bg-indigo-400 mb-8 mx-auto md:mx-0"></div>
                <div className="text-7xl font-black tracking-tighter mb-3 text-indigo-100">12</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                  Major National Corridors
                </div>
              </div>
              <div>
                <div className="w-10 h-px bg-indigo-400 mb-8 mx-auto md:mx-0"></div>
                <div className="text-7xl font-black tracking-tighter mb-3 text-indigo-100">4.2M+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                  Annual Trip Capacity
                </div>
              </div>
              <div>
                <div className="w-10 h-px bg-indigo-400 mb-8 mx-auto md:mx-0"></div>
                <div className="text-7xl font-black tracking-tighter mb-3 text-indigo-100">98%</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                  Operator Retention Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 border-t border-zinc-900 bg-zinc-950/80 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-zinc-600 text-5xl font-serif leading-none mb-6 select-none">&ldquo;</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-tight">
              &ldquo;The infrastructure is ready. Are you?&rdquo;
            </h2>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-semibold px-8 py-4 rounded-sm transition-colors text-base mb-6"
            >
              Request a Demo <ExternalLink className="w-4 h-4" />
            </Link>
            <p className="text-sm font-medium text-zinc-500 mt-6">
              Join 50+ institutional transport partners nationwide.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
