import { UserCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AgentDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-3">
          <UserCircle className="w-3.5 h-3.5" />
          Agent Portal
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">Dashboard</h1>
        <p className="text-zinc-500 mt-2 text-sm">Your bookings, wallet, and quick actions.</p>
      </div>

      {/* Coming Soon Placeholder */}
      <div className="border border-dashed border-zinc-800 rounded-xl p-16 flex flex-col items-center justify-center text-center bg-zinc-900/20">
        <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center mb-6">
          <UserCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-200 mb-3">Agent Dashboard</h2>
        <p className="text-zinc-500 text-sm max-w-md leading-relaxed mb-8">
          This dashboard will display your wallet balance, today&apos;s bookings count, 
          recent transactions, and a shortcut to start a new booking.
        </p>
        <div className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-zinc-600">
          <Link href="/agent/book" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            New Booking <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/agent/bookings" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            History <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Upcoming Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {[
          { label: 'Booking Flow', desc: 'Route selection, seat map, passenger details, and payment.', phase: 'Phase 4 — Features 2–4' },
          { label: 'Booking History', desc: 'All your bookings with status and re-print option.', phase: 'Phase 4 — Feature 5' },
          { label: 'Ticket Generation', desc: 'QR-coded tickets with thermal 80mm print support.', phase: 'Phase 4 — Feature 4' },
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
