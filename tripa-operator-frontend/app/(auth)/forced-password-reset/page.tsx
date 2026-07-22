'use client';

import { useState, useTransition, useEffect } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ChevronLeft, CheckSquare, Square } from 'lucide-react';
import { TripaLogo } from '@/components/shared/tripa-logo';
import { useRouter } from 'next/navigation';

interface Requirement {
  label: string;
  test: (pw: string) => boolean;
}

const REQUIREMENTS: Requirement[] = [
  { label: 'At least 12 characters long', test: (pw) => pw.length >= 12 },
  { label: 'At least one number or special character', test: (pw) => /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw) },
  { label: 'Mixed uppercase & lowercase letters', test: (pw) => /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
];

export default function ForcedPasswordResetPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [flow, setFlow] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFlow(params.get('flow'));
  }, []);

  const allMet = REQUIREMENTS.every((r) => r.test(newPassword));
  const canSubmit = allMet && newPassword === confirmPassword && confirmPassword.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    startTransition(async () => {
      // Simulate password update
      await new Promise(r => setTimeout(r, 600));
      router.push('/login?reset=success');
    });
  }

  const inputBase =
    'w-full h-12 px-4 pr-12 rounded-lg border text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:border-blue-500 focus:ring-blue-100 bg-white border-gray-200';

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
              New Password
            </p>
            <p className="text-sm text-gray-600 font-medium">
              {flow === 'reset' 
                ? 'Create a new, secure password for your account.' 
                : 'For security reasons, you must update your password.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="new-password">
                New Password
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showNew ? 'text' : 'password'}
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  disabled={isPending}
                  className={inputBase}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowNew((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                  aria-label={showNew ? 'Hide password' : 'Show password'}
                >
                  {showNew ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="confirm-password">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Re-enter your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isPending}
                  className={inputBase}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Requirements box */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-4 space-y-2.5">
              <p
                className="text-xs font-bold tracking-[0.15em] uppercase mb-1"
                style={{ color: '#1a35cc' }}
              >
                Requirements
              </p>
              {REQUIREMENTS.map((req) => {
                const met = req.test(newPassword);
                return (
                  <div key={req.label} className="flex items-start gap-2.5">
                    {met ? (
                      <CheckSquare
                        className="w-4 h-4 mt-px flex-shrink-0"
                        style={{ color: '#1a35cc' }}
                        strokeWidth={2}
                      />
                    ) : (
                      <Square
                        className="w-4 h-4 mt-px flex-shrink-0 text-gray-300"
                        strokeWidth={2}
                      />
                    )}
                    <span
                      className="text-xs leading-snug transition-colors"
                      style={{ color: met ? '#374151' : '#9ca3af' }}
                    >
                      {req.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={!canSubmit || isPending}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed"
                style={{
                  backgroundColor: canSubmit ? '#1a35cc' : '#c7d2f0',
                }}
              >
                {isPending ? 'Updating…' : 'Update Password'}
              </button>
            </div>

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
        <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">
          Tripa Operator Platform v4.2.0
        </p>
        <div className="flex gap-4 text-xs text-gray-400">
          <Link href="/privacy" className="hover:text-gray-600 hover:underline">Privacy Policy</Link>
          <Link href="/security" className="hover:text-gray-600 hover:underline">Security Standards</Link>
        </div>
      </div>
    </div>
  );
}
