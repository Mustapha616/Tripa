import { Role } from './roles';
import { LayoutDashboard, Wallet, Route, Users, Ticket, BarChart3, Scan, Building2 } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: any;
}

export const NAV_CONFIG: Record<Role, NavItem[]> = {
  [Role.SUPER_ADMIN]: [
    { title: 'Companies', href: '/companies', icon: Building2 },
    { title: 'Wallet Oversight', href: '/wallet-oversight', icon: Wallet },
    { title: 'Subscriptions', href: '/subscriptions', icon: Ticket },
    { title: 'Analytics', href: '/analytics', icon: BarChart3 },
  ],
  [Role.COMPANY_ADMIN]: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Wallet', href: '/wallet', icon: Wallet },
    { title: 'Routes', href: '/routes', icon: Route },
    { title: 'Agents', href: '/agents', icon: Users },
    { title: 'Bookings', href: '/bookings', icon: Ticket },
    { title: 'Analytics', href: '/analytics', icon: BarChart3 },
  ],
  [Role.AGENT]: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'New Booking', href: '/booking/new', icon: Ticket },
    { title: 'Booking History', href: '/booking/history', icon: Route },
  ],
  [Role.SCANNER]: [
    { title: 'Scan QR', href: '/scan', icon: Scan },
  ],
};
