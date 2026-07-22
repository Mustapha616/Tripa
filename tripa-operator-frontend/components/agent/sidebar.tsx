"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, PlusCircle, History, Ticket,
  LogOut, ChevronRight, UserCircle
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/agent/dashboard', icon: LayoutDashboard },
  { label: 'New Booking', href: '/agent/book', icon: PlusCircle },
  { label: 'Booking History', href: '/agent/bookings', icon: History },
  { label: 'Tickets', href: '/agent/tickets', icon: Ticket },
];

export default function AgentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col z-40">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-900">
        <Link href="/agent/dashboard" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-emerald-500 flex items-center justify-center">
            <UserCircle className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-zinc-50 tracking-tight">Tripa</span>
        </Link>
        <div className="ml-auto">
          <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
            Agent
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        <ul className="space-y-0.5">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                    isActive
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-600/20'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                  {label}
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto text-emerald-400" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Wallet Balance Chip */}
      <div className="mx-4 mb-3 p-4 rounded-xl border border-emerald-900/50 bg-emerald-950/20">
        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-1">Wallet Balance</p>
        <p className="text-2xl font-black tracking-tighter text-emerald-300">₦ —</p>
        <p className="text-[10px] text-zinc-600 mt-1">Deducted per booking</p>
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-zinc-900">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-600/40 flex items-center justify-center text-xs font-bold text-emerald-300">
            AG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-zinc-200 truncate">Agent</p>
            <p className="text-[10px] text-zinc-500 truncate">agent@company.ng</p>
          </div>
          <LogOut className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 flex-shrink-0" />
        </div>
      </div>
    </aside>
  );
}
