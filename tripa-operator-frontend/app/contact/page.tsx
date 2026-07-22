"use client";

import { Landmark, Sliders, Share2, Clock, Globe, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />

      <main>
        {/* ── Hero & Network Status ── */}
        <section className="pt-28 pb-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] mb-8">
                Get in touch with the infrastructure layer.
              </h1>
              <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
                Providing the backbone for cross-border institutional mobility. Connect with our
                specialized teams for technical, investment, or partnership inquiries.
              </p>
            </div>

            {/* Network Status Widget */}
            <div className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-sm min-w-[200px] mt-6 md:mt-16">
              <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-2">
                Network Status
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-extrabold tracking-widest uppercase text-zinc-100">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Directory Cards ── */}
        <section className="py-24 px-6 border-b border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
            {/* Card 1 — Investor Relations */}
            <div className="border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[260px] hover:bg-zinc-900/40 transition-colors">
              <div>
                <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                  <Landmark className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Investor Relations</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Institutional queries regarding capital allocation, roadmap, and performance metrics.
                </p>
              </div>
              <a href="mailto:invest@tripa.network" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors font-mono">
                invest@tripa.network
              </a>
            </div>

            {/* Card 2 — Operator Support */}
            <div className="border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[260px] hover:bg-zinc-900/40 transition-colors">
              <div>
                <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                  <Sliders className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Operator Support</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Technical integration assistance and fleet operations management for authorized partners.
                </p>
              </div>
              <a href="mailto:ops@tripa.network" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors font-mono">
                ops@tripa.network
              </a>
            </div>

            {/* Card 3 — Media Inquiries */}
            <div className="border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[260px] hover:bg-zinc-900/40 transition-colors">
              <div>
                <div className="w-9 h-9 border border-zinc-700 bg-zinc-800/60 flex items-center justify-center mb-8 rounded-sm">
                  <Share2 className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Media Inquiries</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Press kits, brand assets, and official communication for international media outlets.
                </p>
              </div>
              <a href="mailto:press@tripa.network" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors font-mono">
                press@tripa.network
              </a>
            </div>
          </div>
        </section>

        {/* ── Form & Hub Locations ── */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">
            {/* Left side Form */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Initiate Inquiry</h2>
              <p className="text-sm text-zinc-500 mb-10">
                Complete the protocol below to route your request to the appropriate department.
              </p>

              <form className="space-y-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Johnathan Doe"
                      className="w-full bg-zinc-900/40 border border-zinc-850 focus:border-indigo-500 focus:outline-none text-zinc-200 text-xs px-4 py-3.5 rounded-sm transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">
                      Institutional Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="j.doe@institution.com"
                      className="w-full bg-zinc-900/40 border border-zinc-850 focus:border-indigo-500 focus:outline-none text-zinc-200 text-xs px-4 py-3.5 rounded-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="entityType" className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">
                    Entity Type
                  </label>
                  <div className="relative">
                    <select
                      id="entityType"
                      className="w-full bg-zinc-900/40 border border-zinc-850 focus:border-indigo-500 focus:outline-none text-zinc-200 text-xs px-4 py-3.5 rounded-sm appearance-none cursor-pointer"
                    >
                      <option>Institutional Investor</option>
                      <option>Transit Operator Partner</option>
                      <option>Government / Regulatory Body</option>
                      <option>Technology Partner</option>
                      <option>Media Representative</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">
                    Message Protocol
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe the scope of your inquiry..."
                    className="w-full bg-zinc-900/40 border border-zinc-850 focus:border-indigo-500 focus:outline-none text-zinc-200 text-xs p-4 rounded-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-bold px-6 py-3.5 rounded-sm transition-colors text-xs"
                >
                  Dispatch Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right side Hub Locations */}
            <div className="space-y-8 lg:mt-6">
              {/* Lagos Hub */}
              <div className="border-b border-zinc-900 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-zinc-100">Lagos Hub</h4>
                  <span className="text-[8px] font-mono tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-sm">
                    GMT +1
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3 max-w-xs">
                  12 Victoria Island Infrastructure Park, Lagos, Nigeria
                </p>
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-zinc-650" />
                  9:00 AM - 6:00 PM
                </div>
              </div>

              {/* Berlin Hub */}
              <div className="border-b border-zinc-900 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-zinc-100">Berlin Hub</h4>
                  <span className="text-[8px] font-mono tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-sm">
                    GMT +2
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3 max-w-xs">
                  Potsdamer Platz 1, Mitte District, 10785 Berlin, Germany
                </p>
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-zinc-650" />
                  8:30 AM - 5:30 PM
                </div>
              </div>

              {/* Singapore Hub */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-zinc-100">Singapore Hub</h4>
                  <span className="text-[8px] font-mono tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-sm">
                    GMT +8
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3 max-w-xs">
                  8 Marina View, Asia Square Tower 1, Singapore 018960
                </p>
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-zinc-650" />
                  9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Network Connectivity (Map Background) ── */}
        <section className="relative py-32 px-6 border-b border-zinc-900 overflow-hidden bg-zinc-950">
          {/* Subtle World Map SVG background */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full max-w-6xl object-cover"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Simplified world map path approximations for visualization */}
              <path
                d="M150,150 L170,140 L200,160 L220,200 L210,250 L180,280 L160,260 L140,200 Z M300,120 L350,100 L400,130 L420,180 L380,220 L320,200 Z M450,220 L480,200 L530,220 L550,260 L500,320 L460,280 L440,250 Z M650,140 L700,110 L750,130 L780,180 L740,240 L680,220 L650,180 Z M800,280 L830,260 L870,280 L880,320 L840,360 Z"
                fill="#3f3f46"
              />
              {/* Nodes dots & lines connecting them */}
              <circle cx="180" cy="220" r="3" fill="#818cf8" />
              <circle cx="360" cy="160" r="3" fill="#818cf8" />
              <circle cx="500" cy="260" r="4" fill="#818cf8" />
              <circle cx="700" cy="180" r="3" fill="#818cf8" />
              <circle cx="840" cy="300" r="3" fill="#818cf8" />

              <path d="M180,220 Q270,190 360,160 T500,260 T700,180 T840,300" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                Network Connectivity
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Visualizing the real-time node distribution across the TRIPA Global Mobility Mesh.
                Each point represents an institutional gateway operating within regional regulatory
                frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px border border-zinc-800 max-w-md">
              <div className="bg-zinc-950/80 px-6 py-6">
                <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1.5">
                  Active Nodes
                </span>
                <span className="text-4xl font-black text-indigo-300 tracking-tight">1,422</span>
              </div>
              <div className="bg-zinc-950/80 px-6 py-6 border-l border-zinc-800">
                <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block mb-1.5">
                  Uptime
                </span>
                <span className="text-4xl font-black text-zinc-100 tracking-tight">99.99%</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
