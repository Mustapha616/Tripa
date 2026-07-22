import { updateSession } from '@/lib/supabase/middleware-client';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request);
  const path = request.nextUrl.pathname;

  // ─────────────────────────────────────────────────────────────
  // LANDING PAGE ONLY MODE
  // Set NEXT_PUBLIC_LANDING_PAGE_ONLY=true on your hosting provider
  // to redirect all dashboard/auth routes to the countdown page.
  // Local dev is unaffected (flag is not set).
  // ─────────────────────────────────────────────────────────────
  const landingOnly = process.env.NEXT_PUBLIC_LANDING_PAGE_ONLY === 'true';
  const dashboardOrAuthRoutes = [
    '/login',
    '/otp-verification',
    '/forgot-password',
    '/forced-password-reset',
    '/super-admin',
    '/admin',
    '/agent',
  ];
  const isDashboardOrAuth = dashboardOrAuthRoutes.some(
    (route) => path === route || path.startsWith(route + '/')
  );

  if (landingOnly && isDashboardOrAuth && path !== '/coming-soon') {
    return NextResponse.redirect(new URL('/coming-soon', request.url));
  }
  // ─────────────────────────────────────────────────────────────

  // Public marketing/investor pages — no auth required
  const publicRoutes = [
    '/',
    '/coming-soon',
    '/login',
    '/otp-verification',
    '/forgot-password',
    '/forced-password-reset',
    '/opportunity',
    '/market',
    '/solution',
    '/roadmap',
    '/contact',
  ];
  const isPublic = publicRoutes.some((route) => path === route || path.startsWith(route + '/'));

  const hasMockSession = request.cookies.get('mock_authenticated')?.value === 'true';

  if (!user && !hasMockSession && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
