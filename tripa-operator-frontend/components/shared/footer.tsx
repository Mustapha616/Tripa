import Link from 'next/link';
import { TripaLogo } from './tripa-logo';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block">
              <TripaLogo variant="light" width={100} />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed pr-8">
              The infrastructure layer for mobility in emerging markets. Building a transparent,
              efficient, and digital future for Africa&apos;s commuters.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-100 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Investor Relations</Link></li>
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Technical Docs</Link></li>
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Press Kit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-100 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Legal</Link></li>
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Disclosures</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-100 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-zinc-100 transition-colors">Lagos Office</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 TRIPA Technologies. All rights reserved. For Qualified Institutional Investors only.</p>
        </div>
      </div>
    </footer>
  );
}
