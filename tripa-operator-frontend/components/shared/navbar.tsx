"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TripaLogo } from './tripa-logo';

export function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Market', href: '/market' },
    { name: 'Solution', href: '/solution' },
    { name: 'Roadmap', href: '/roadmap' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <TripaLogo variant="light" width={90} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-colors ${pathname === link.href ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={`transition-colors ${pathname === '/contact' ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-200'}`}
          >
            Contact Sales
          </Link>
        </div>
        <div>
          <Link
            href={process.env.NEXT_PUBLIC_LANDING_PAGE_ONLY === 'true' ? '/coming-soon' : '/login'}
            className="text-xs font-semibold tracking-wider uppercase bg-indigo-100 hover:bg-indigo-200 text-indigo-950 px-5 py-2.5 rounded-sm transition-colors"
          >
            {process.env.NEXT_PUBLIC_LANDING_PAGE_ONLY === 'true' ? 'Coming Soon' : 'Investor Portal'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
