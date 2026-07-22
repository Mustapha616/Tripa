import SuperAdminSidebar from '@/components/super-admin/sidebar';
import { Search, Bell, Settings, MoreVertical } from 'lucide-react';
import Image from 'next/image';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-gray-800 flex font-sans">
      <SuperAdminSidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-gray-200/80 flex items-center justify-between px-10 sticky top-0 z-30">
          {/* Left: Section label */}
          <div className="text-xs font-bold tracking-[0.15em] text-[#1a35cc] uppercase">
            COMPANY DIRECTORY
          </div>

          {/* Center: Search Bar */}
          <div className="w-1/3 max-w-md relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-11 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Right: Notifications & Profile */}
          <div className="flex items-center gap-5">
            {/* Notification Icon */}
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Bell className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                6
              </span>
            </div>

            <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>

            <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile Avatar */}
            <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
              <div className="w-10 h-10 rounded-full bg-rose-200 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-rose-700 font-bold text-sm">
                SA
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-tight">System Admin</p>
                <p className="text-[11px] text-gray-400 font-medium leading-tight">Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-10">{children}</main>

        {/* Footer */}
        <footer className="px-10 py-6 border-t border-gray-200/80 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2024 TRIPA Systems. All rights reserved. Platform v2.4.1</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-gray-600 transition-colors">Status Page</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Security Logs</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Legal Terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
