import { Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-violet-400 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          Company Admin
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">Dashboard</h1>
        <p className="text-zinc-500 mt-2 text-sm">Today&apos;s bookings, active agents, and wallet overview.</p>
      </div>

      {/* Coming Soon Placeholder */}
      <div className="border border-dashed border-zinc-800 rounded-xl p-16 flex flex-col items-center justify-center text-center bg-zinc-900/20">
        <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center mb-6">
          <Building2 className="w-8 h-8 text-violet-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-200 mb-3">Company Admin Dashboard</h2>
        <p className="text-zinc-500 text-sm max-w-md leading-relaxed mb-8">
          This dashboard will show today&apos;s bookings, active agent count, wallet balance summary,
          top-performing routes, and quick-action shortcuts.
        </p>
        <div className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-zinc-600">
          <Link href="/admin/wallet" className="flex items-center gap-1.5 hover:text-violet-400 transition-colors">
            Wallet <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/admin/routes" className="flex items-center gap-1.5 hover:text-violet-400 transition-colors">
            Routes <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/admin/agents" className="flex items-center gap-1.5 hover:text-violet-400 transition-colors">
            Agents <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Upcoming Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {[
          { label: 'Wallet Management', desc: 'Virtual account, balance, and transaction history.', phase: 'Phase 3 — Feature 2' },
          { label: 'Routes & Capacity', desc: 'Manage fares, seats, and departure slots.', phase: 'Phase 3 — Feature 3' },
          { label: 'Bookings & Manifests', desc: 'All company bookings, filter, and export manifests.', phase: 'Phase 3 — Feature 5' },
        ].map(({ label, desc, phase }) => (
          <div key={label} className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/30">
            <div className="text-[9px] font-bold tracking-widest uppercase text-zinc-600 mb-3">{phase}</div>
            <h3 className="text-base font-bold text-zinc-300 mb-2">{label}</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
