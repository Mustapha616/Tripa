'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { ChevronLeft, Check } from 'lucide-react';
import { TripaLogo } from '@/components/shared/tripa-logo';
import { useRouter } from 'next/navigation';

type ForgotState = 'idle' | 'sent';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [forgotState, setForgotState] = useState<ForgotState>('idle');
  const [isPending, startTransition] = useTransition();

  const isSent = forgotState === 'sent';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSent) return;
    startTransition(async () => {
      // Simulate sending OTP
      await new Promise(r => setTimeout(r, 600));
      setForgotState('sent');
      
      // Redirect after showing success state briefly
      setTimeout(() => {
        router.push(`/otp-verification?flow=reset&email=${encodeURIComponent(email)}`);
      }, 1200);
    });
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between py-12 px-4"
      style={{ backgroundColor: '#eef0f8' }}
    >
      <div />

      <div className="flex flex-col items-center w-[90%] md:w-[40%]">
        {/* Branding */}
        <div className="text-center mb-8 flex flex-col items-center gap-2">
          <TripaLogo width={110} />
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#1a35cc' }}>
            Operator Access Portal
          </p>
        </div>

        {/* Card */}
        <div className="w-full rounded-xl bg-white shadow-sm px-8 py-8 border border-gray-200">
          <div className="text-center mb-6">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: '#1a35cc' }}
            >
              Forgot Password
            </p>
            <p className="text-sm text-gray-600 leading-snug">
              Enter the email associated with your operator account and
              we&apos;ll send you instructions to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="forgot-email">
                Email
              </label>
              <input
                id="forgot-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSent || isPending}
                className="w-full h-12 px-4 rounded-lg border text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:border-blue-500 focus:ring-blue-100 bg-white disabled:bg-gray-50 disabled:text-gray-500"
                style={{
                  borderColor: isSent ? '#d1d5db' : '#e5e7eb',
                }}
                autoComplete="email"
              />
              <p className="text-xs text-gray-400 mt-1.5">
                Contact your admin if this email is incorrect.
              </p>
            </div>

            {/* CTA */}
            {isSent ? (
              <button
                type="button"
                disabled
                className="w-full h-12 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-default"
                style={{ backgroundColor: '#4ecdc4', color: '#ffffff' }}
              >
                <Check className="w-4 h-4 stroke-[2.5]" />
                OTP Sent
              </button>
            ) : (
              <button
                type="submit"
                disabled={isPending || !email}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
                style={{ backgroundColor: '#1a35cc' }}
              >
                {isPending ? 'Requesting…' : 'Request OTP'}
              </button>
            )}

            {/* Back to login */}
            <div className="text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between w-full max-w-screen-lg px-6 mt-8">
        <div className="flex gap-4 text-xs text-gray-400">
          <Link href="/privacy" className="hover:text-gray-600 hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-gray-600 hover:underline">Contact Support</Link>
        </div>
        <p className="text-xs text-gray-400">Secure Portal</p>
      </div>
    </div>
  );
}
