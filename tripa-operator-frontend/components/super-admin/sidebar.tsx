'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TripaLogo } from '@/components/shared/tripa-logo';
import {
  LayoutGrid,
  Building2,
  Wallet,
  Shield,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/super-admin/dashboard', icon: LayoutGrid },
  { label: 'Company Management', href: '/super-admin/companies', icon: Building2 },
  { label: 'Wallet', href: '/super-admin/wallets', icon: Wallet },
  { label: 'KYC Review', href: '/super-admin/kyc', icon: Shield },
  { label: 'System settings', href: '/super-admin/settings', icon: Settings },
];

export default function SuperAdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col justify-between z-40 font-sans">
      <div>
        {/* Logo Header */}
        <div className="pt-7 pb-6 px-7 border-b border-gray-100">
          <Link href="/super-admin/dashboard" className="block space-y-1">
            <TripaLogo width={100} />
            <p className="text-[11px] font-semibold text-gray-400 tracking-tight pl-0.5">
              Platform System Admin
            </p>
          </Link>
        </div>

        {/* Navigation List */}
        <nav className="py-6 px-4">
          <ul className="space-y-1.5">
            {navItems.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#e9eeff] text-[#1a35cc]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        isActive ? 'text-[#1a35cc]' : 'text-gray-500'
                      }`}
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Footer Section */}
      <div className="p-6 space-y-4 border-t border-gray-100">
        {/* System Status Card */}
        <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center gap-3">
          <div className="w-4 h-4 rounded border border-blue-600 flex items-center justify-center bg-white">
            <div className="w-2 h-2 rounded-sm bg-blue-600" />
          </div>
          <span className="text-xs font-semibold text-gray-700">System Status: Active</span>
        </div>

        {/* Support */}
        <Link
          href="/support"
          className="flex items-center gap-3 px-2 py-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
            ?
          </div>
          <span>Support</span>
        </Link>

        {/* Sign Out */}
        <Link
          href="/login"
          onClick={() => {
            document.cookie = 'mock_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
          }}
          className="flex items-center gap-3 px-2 py-1.5 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
