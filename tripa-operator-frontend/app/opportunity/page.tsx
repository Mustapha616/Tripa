import Link from 'next/link';
import { ArrowRight, RefreshCcw, Building, Globe, Box, Bus, CreditCard, Activity, Code } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export default function OpportunityPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 relative overflow-hidden">
          {/* Subtle background graphic to match the constellation network in the prototype */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-zinc-800/30 opacity-50 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-zinc-800/50 opacity-50 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] uppercase tracking-widest font-medium text-zinc-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Institutional Deep Dive
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 uppercase text-zinc-50">
              The<br/>
              Infrastructure<br/>
              Layer for<br/>
              Nigeria&apos;s<br/>
              Mobility<br/>
              Economy
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              TRIPA is unifying the fragmented interstate transportation sector
              through a proprietary vertical stack—bridging fintech, logistics, and
              data to capture the continent&apos;s most resilient cash market.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Link href="#" className="inline-flex items-center gap-2 bg-indigo-200 hover:bg-indigo-300 text-indigo-950 font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-sm transition-colors">
                Request Investment Memorandum <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-sm transition-colors">
                Watch Technical Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                A $1.6B market<br/>still running on<br/>cash and paper.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The Nigerian interstate mobility sector moves millions of people daily, yet 92% of operators rely on manual manifesting, physical ledger tracking, and cash-based settlement. This lack of transparency leads to systematic revenue leakage, operational inefficiency, and massive capital underutilization.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-16 mt-8 lg:mt-0">
              <div className="col-span-2">
                <div className="text-7xl font-black tracking-tighter mb-2 text-zinc-50">54.6%</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Offline Transaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-black tracking-tighter mb-2 text-zinc-50">15-20%</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Estimated Revenue Leakage</div>
              </div>
              <div>
                <div className="text-5xl font-black tracking-tighter mb-2 text-zinc-50">48h+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Settlement Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Pillar */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 mb-3">The Solution</h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight">The Five Systems Pillar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Universal Booking Engine - Large Card */}
              <div className="md:col-span-2 p-10 border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between">
                <div>
                  <Box className="w-6 h-6 text-zinc-400 mb-6" />
                  <h4 className="text-3xl font-bold mb-4">Universal Booking Engine</h4>
                  <p className="text-zinc-400 leading-relaxed max-w-lg mb-12">
                    A unified multi-channel reservation system that synchronizes physical counters, travel agents, and digital portals in real-time, eliminating double bookings and manual manifests.
                  </p>
                </div>
                {/* Mockup Placeholder */}
                <div className="w-full aspect-[21/9] bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center overflow-hidden relative">
                   <div className="absolute bottom-0 w-3/4 h-3/4 bg-zinc-900 rounded-t-xl border-t border-l border-r border-zinc-700 shadow-2xl flex items-center justify-center">
                     <span className="text-zinc-600 font-medium">Platform Mockups</span>
                   </div>
                </div>
              </div>
              
              {/* Fleet Manager - Accent Card */}
              <div className="p-10 bg-indigo-600 border border-indigo-500 text-indigo-50 flex flex-col">
                <Bus className="w-6 h-6 text-indigo-200 mb-6" />
                <h4 className="text-3xl font-bold mb-4">Fleet<br/>Manager</h4>
                <p className="text-indigo-200 leading-relaxed mb-auto">
                  Enterprise resource planning for fleet owners. Track maintenance, driver performance, and fuel consumption via IoT integration.
                </p>
                <div className="mt-16 text-[10px] font-bold tracking-widest uppercase text-indigo-200">
                  Available via Web & Mobile
                </div>
              </div>

              {/* Fintech Layer */}
              <div className="p-10 border border-zinc-800 bg-zinc-900/30">
                <CreditCard className="w-6 h-6 text-zinc-400 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Fintech<br/>Layer</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Automated settlement and multi-party payout orchestration. We solve the trust deficit between drivers, park managers, and fleet owners.
                </p>
              </div>

              {/* Data Engine */}
              <div className="p-10 border border-zinc-800 bg-zinc-900/30">
                <Activity className="w-6 h-6 text-zinc-400 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Data Engine</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Aggregating mobility data to provide insights into passenger flow, peak demand, and route profitability for the first time in the region.
                </p>
              </div>

              {/* Open API */}
              <div className="p-10 border border-zinc-800 bg-zinc-900/30">
                <Code className="w-6 h-6 text-zinc-400 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Open API</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Extending our core infrastructure to third-party travel aggregators and financial institutions for seamless credit underwriting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TAM & Convergence */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-8xl md:text-9xl font-black tracking-tighter mb-2 text-zinc-50">$12B</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-16">W. African Mobility TAM</div>
              
              <div className="text-7xl font-black tracking-tighter mb-2 text-zinc-50">18%</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-16">Est. CAGR 2024-2030</div>
              
              <div className="mb-4">
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-50 w-[35%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                <span className="text-zinc-600">Targeting the convergence of Travel, Fintech, and Logistics.</span>
                <span className="text-zinc-50">35% Digital Penetration Goal</span>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <h2 className="text-5xl font-bold tracking-tight mb-6 leading-tight">Institutional<br/>Convergence</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                Nigeria&apos;s mobility market is not just about transportation; it is a critical nexus for financial services. By digitizing the fare collection, TRIPA becomes the primary data source for credit scoring millions of unbanked participants in the value chain.
              </p>
              
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <RefreshCcw className="w-6 h-6 text-zinc-100 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300 font-medium leading-relaxed">Access to high-velocity cash flow data for MSME lending.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Building className="w-6 h-6 text-zinc-100 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300 font-medium leading-relaxed">Unlocking asset finance opportunities for fleet modernization.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Globe className="w-6 h-6 text-zinc-100 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300 font-medium leading-relaxed">Expansion into cross-border regional trade corridors (ECOWAS).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-16">Roadmap to Regional Dominance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Phase 01: Q1 2024
                </div>
                <h4 className="text-3xl font-bold mb-4">Lagos-Abuja Corridor</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Digitization of primary terminals and launch of the Universal Booking Engine for tier-1 operators.</p>
              </div>
              
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Phase 02: Q3 2024
                </div>
                <h4 className="text-3xl font-bold mb-4">Fintech Integration</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Rollout of the Tripa Wallet and instant settlement infrastructure for park managers.</p>
              </div>
              
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Phase 03: Q1 2025
                </div>
                <h4 className="text-3xl font-bold mb-4">Nationwide Scale</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Expansion to 22 states, capturing 15% of the total interstate seat volume.</p>
              </div>
              
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Phase 04: Q3 2025
                </div>
                <h4 className="text-3xl font-bold mb-4">Asset Finance Launch</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Institutional lending for fleet renewal based on TRIPA proprietary operational data.</p>
              </div>
              
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Phase 05: Q2 2026
                </div>
                <h4 className="text-3xl font-bold mb-4">Regional Expansion</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Deployment of TRIPA infrastructure in Accra, Ghana and Cotonou, Benin.</p>
              </div>
              
              <div className="border-t border-zinc-800 pt-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Phase 06: Q4 2026
                </div>
                <h4 className="text-3xl font-bold mb-4">Public Mobility API</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Global standard for African intercity mobility, connecting into global GDS systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unit Economics */}
        <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold tracking-tight mb-6">Sustainable Unit Economics</h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  We generate revenue through high-frequency transactions and enterprise-grade software services.
                </p>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-50 border border-zinc-800 px-4 py-2 rounded-sm shrink-0">
                Profitable at Scale
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-800">
              <div>
                <h3 className="text-3xl font-bold mb-4">Commissions</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  3-5% transaction fee on every ticket booked through the platform, capturing volume at the source.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Subscriptions</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Tiered SaaS fees for fleet management and enterprise-grade terminal operation software.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Data & Financial Services</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Spreads on credit underwriting and premium data access for logistics partners and insurers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 px-6 border-t border-zinc-900 bg-zinc-950 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 leading-tight">
              "Nigeria&apos;s interstate transportation sector will digitize not because of convenience, but because of survival. TRIPA is the only company building the actual rails."
            </h2>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 mb-4 overflow-hidden flex items-center justify-center">
                {/* Fallback avatar */}
                <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-zinc-400 font-bold">OA</div>
              </div>
              <div className="font-bold text-lg mb-1">Olumide Adebayo</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Managing Director, TRIPA Technologies</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
