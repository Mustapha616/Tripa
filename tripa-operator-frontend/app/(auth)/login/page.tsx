'use client';

import { useState, useTransition, useEffect } from 'react';
import { TripaLogo } from '@/components/shared/tripa-logo';
import Link from 'next/link';
import { Eye, EyeOff, Clock, Headphones } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

type LoginState = 'default' | 'error' | 'suspended';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>('default');
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('reset') === 'success') {
      setResetSuccess(true);
      // clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);

      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => setResetSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const isSuspended = loginState === 'suspended';
  const isError = loginState === 'error';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isSuspended) return;

    setErrorMsg('');

    startTransition(async () => {
      // --- MOCK CREDENTIALS FOR TESTING ---
      if (email === 'error@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        setErrorMsg('Invalid credentials provided (mock).');
        setLoginState('error');
        return;
      }
      if (email === 'suspended@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        setLoginState('suspended');
        return;
      }
      if (email === 'superadmin@tripa.com' || email === 'superadmin@operator-corp.com') {
        await new Promise((r) => setTimeout(r, 600));
        router.push(`/otp-verification?flow=login&role=super_admin&email=${encodeURIComponent(email)}`);
        return;
      }
      if (email === 'admin@tripa.com' || email === 'company@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        router.push(`/otp-verification?flow=login&role=company_admin&email=${encodeURIComponent(email)}`);
        return;
      }
      if (email === 'agent@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        router.push(`/otp-verification?flow=login&role=agent&email=${encodeURIComponent(email)}`);
        return;
      }
      if (email === 'success@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        router.push(`/otp-verification?flow=login&role=super_admin&email=${encodeURIComponent(email)}`);
        return;
      }
      if (email === 'forced@tripa.com') {
        await new Promise((r) => setTimeout(r, 600));
        router.push('/forced-password-reset');
        return;
      }
      // ------------------------------------

      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        // Distinguish suspended vs wrong credentials
        if (error.message.toLowerCase().includes('suspended') || error.message.toLowerCase().includes('banned')) {
          setLoginState('suspended');
        } else {
          setErrorMsg(error.message);
          setLoginState('error');
        }
        return;
      }

      // Check user role metadata
      const userRole = data.user?.user_metadata?.role || data.user?.app_metadata?.role || 'company_admin';
      router.push(`/otp-verification?flow=login&role=${userRole}&email=${encodeURIComponent(email)}`);
    });
  }

  const inputBaseClass =
    'w-full h-12 px-4 rounded-lg border bg-white text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2';

  const emailInputClass = `${inputBaseClass} ${isError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
    }`;

  const passwordInputClass = `${inputBaseClass} pr-12 ${isError
      ? 'border-red-400 text-red-400 placeholder:text-red-300 focus:border-red-400 focus:ring-red-100'
      : isSuspended
        ? 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
    }`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between py-12 px-4"
      style={{ backgroundColor: '#eef0f8' }}
    >
      {/* Top spacer */}
      <div />

      {/* Main content */}
      <div className="flex flex-col items-center w-[90%] md:w-[40%]">
        {/* Branding */}
        <div className="text-center mb-8 flex flex-col items-center gap-2">
          <TripaLogo width={110} />
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: '#1a35cc' }}
          >
            Operator Access Portal
          </p>
        </div>

        {/* Card */}
        <div
          className="w-full rounded-xl bg-white shadow-sm px-8 py-8"
          style={{
            border: isSuspended ? '1px solid #e5e7eb' : '1px solid #e5e7eb',
          }}
        >
          {/* Card heading */}
          <div className="text-center mb-6">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: '#1a35cc' }}
            >
              Login to your account
            </p>
            <p className="text-sm text-gray-500 leading-snug">
              Enter the email associated with your account to
              <br />
              log in and access your dashboard.
            </p>
            {resetSuccess && (
              <div className="mt-4 bg-green-50 text-green-700 text-sm py-2 px-3 rounded border border-green-200">
                Password successfully updated. You can now log in.
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (loginState !== 'default') setLoginState('default');
                }}
                required
                disabled={isSuspended || isPending}
                className={emailInputClass}
                autoComplete="email"
              />
            </div>

            {/* Forgot password + Password label row */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                {isError ? (
                  <span className="text-xs font-medium text-red-500">Invalid Password!</span>
                ) : (
                  <label className="text-sm font-medium text-gray-700" htmlFor="login-password">
                    Password
                  </label>
                )}
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium hover:underline"
                  style={{ color: '#1a35cc' }}
                  tabIndex={isSuspended ? -1 : 0}
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Password input wrapper */}
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={isError ? 'Password' : 'Password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (loginState === 'error') setLoginState('default');
                  }}
                  required
                  disabled={isSuspended || isPending}
                  className={passwordInputClass}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={isSuspended || isPending}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4.5 h-4.5" />
                  ) : (
                    <Eye className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="login-remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isSuspended || isPending}
                className="w-4 h-4 rounded border-gray-300 accent-blue-700 cursor-pointer"
              />
              <label htmlFor="login-remember" className="text-sm text-gray-600 cursor-pointer select-none">
                Remember my login
              </label>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              {isSuspended ? (
                <button
                  type="button"
                  disabled
                  className="w-full h-12 rounded-xl text-sm font-semibold tracking-[0.12em] uppercase border-2 transition-all cursor-not-allowed"
                  style={{
                    borderColor: '#c7d0e8',
                    color: '#8899cc',
                    backgroundColor: 'transparent',
                  }}
                >
                  Account Suspended
                </button>
              ) : isError ? (
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-70"
                  style={{ backgroundColor: '#e05252' }}
                >
                  {isPending ? 'Signing in…' : 'Initialize Session'}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-70"
                  style={{ backgroundColor: '#1a35cc' }}
                >
                  {isPending ? 'Signing in…' : 'Initialize Session'}
                </button>
              )}
            </div>
          </form>

          {/* Divider */}
          <div className="border-t border-gray-100 mt-6 pt-5 text-center space-y-3">
            <p className="text-xs text-gray-400">Internal platform for authorized personnel only.</p>

            <div className="flex items-center justify-center gap-2 text-xs">
              <Link href="/privacy" className="text-gray-400 hover:text-gray-600 hover:underline">
                Privacy Protocol
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/status" className="text-gray-400 hover:text-gray-600 hover:underline">
                System Status
              </Link>
            </div>
          </div>
        </div>

        {/* Terminal Support button */}
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all shadow-sm"
          >
            <Headphones className="w-4 h-4" />
            Terminal Support
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400 mt-8">
        Tripa Operator Platform v4.2.0
      </p>
    </div>
  );
}
