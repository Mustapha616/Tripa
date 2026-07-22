'use client';

import { useState, useRef, useEffect, useCallback, useTransition } from 'react';
import Link from 'next/link';
import { Clock, ChevronLeft } from 'lucide-react';
import { TripaLogo } from '@/components/shared/tripa-logo';
import { useRouter } from 'next/navigation';

type OtpState = 'active' | 'expired' | 'invalid';

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 58; // seconds

export default function OtpVerificationPage() {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [otpState, setOtpState] = useState<OtpState>('active');
  const [resendCooldown, setResendCooldown] = useState(RESEND_COOLDOWN);
  const [expiresInSeconds, setExpiresInSeconds] = useState(600); // 10 minutes
  const [isPending, startTransition] = useTransition();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const [flow, setFlow] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFlow(params.get('flow'));
    setRole(params.get('role'));
    setEmail(params.get('email'));
  }, []);

  const isFilled = digits.every((d) => d !== '');
  const isError = otpState === 'expired' || otpState === 'invalid';

  // Resend cooldown countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown((v) => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Expiry countdown
  useEffect(() => {
    if (expiresInSeconds <= 0) {
      if (otpState !== 'expired') setOtpState('expired');
      return;
    }
    const timer = setTimeout(() => setExpiresInSeconds((v) => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [expiresInSeconds, otpState]);

  const formattedExpiry = `${Math.floor(expiresInSeconds / 60).toString().padStart(2, '0')}:${(expiresInSeconds % 60).toString().padStart(2, '0')}`;

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, value: string) => {
    const char = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);
    if (otpState !== 'active') setOtpState('active');
    if (char && index < OTP_LENGTH - 1) focusInput(index + 1);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (digits[index]) {
        const next = [...digits];
        next[index] = '';
        setDigits(next);
      } else if (index > 0) {
        focusInput(index - 1);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      focusInput(index - 1);
    } else if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!text) return;
    const next = [...digits];
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    setDigits(next);
    focusInput(Math.min(text.length, OTP_LENGTH - 1));
  };

  const handleVerify = () => {
    if (!isFilled || isPending) return;
    startTransition(async () => {
      // Simulate verifying OTP
      await new Promise(r => setTimeout(r, 600));
      
      // Set session cookie for middleware permission check
      document.cookie = 'mock_authenticated=true; path=/; max-age=86400';

      if (flow === 'reset') {
        router.push('/forced-password-reset?flow=reset');
      } else if (role === 'super_admin') {
        router.push('/super-admin/dashboard');
      } else if (role === 'company_admin') {
        router.push('/admin/dashboard');
      } else if (role === 'agent') {
        router.push('/agent/dashboard');
      } else {
        router.push('/super-admin/dashboard');
      }
    });
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setDigits(Array(OTP_LENGTH).fill(''));
    setOtpState('active');
    setResendCooldown(RESEND_COOLDOWN);
    focusInput(0);
  };

  const boxBase =
    'w-11 h-12 sm:w-12 sm:h-13 rounded-lg border-2 text-center text-lg font-semibold outline-none transition-all duration-150 focus:ring-2 focus:ring-offset-1 caret-transparent';

  const boxClass = (index: number) => {
    const hasValue = digits[index] !== '';
    if (isError) {
      return `${boxBase} border-red-300 bg-red-50 text-red-400 focus:border-red-400 focus:ring-red-200`;
    }
    if (hasValue) {
      return `${boxBase} border-blue-700 bg-white text-blue-700 focus:border-blue-700 focus:ring-blue-200`;
    }
    return `${boxBase} border-gray-200 bg-white text-gray-800 focus:border-blue-500 focus:ring-blue-100`;
  };

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
        <div
          className="w-full rounded-xl bg-white shadow-sm px-8 py-8"
          style={{
            border: isError ? '1px solid #fca5a5' : '1px solid #e5e7eb',
          }}
        >
          <div className="text-center mb-6">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: '#1a35cc' }}
            >
              {flow === 'reset' ? 'Password Reset OTP' : 'Verify Your Activity'}
            </p>
            <p className="text-sm text-gray-600 leading-snug">
              We&apos;ve Sent A 6-digit Code To {email ? email : 'Must****@Gmail.Com'}
            </p>
          </div>

          {/* OTP Boxes */}
          <div className="flex justify-center gap-2 mb-4" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                id={`otp-digit-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onFocus={(e) => e.target.select()}
                disabled={isPending}
                className={boxClass(i)}
                autoFocus={i === 0}
                autoComplete="one-time-code"
              />
            ))}
          </div>

          {/* Timer / Expired */}
          <div className="flex items-center justify-center gap-1.5 text-xs mb-5">
            <Clock className={`w-3.5 h-3.5 ${otpState === 'expired' ? 'text-red-500' : 'text-gray-400'}`} />
            {otpState === 'expired' ? (
              <span className="font-bold tracking-[0.1em] uppercase text-red-500">Code Expired</span>
            ) : (
              <span className="text-gray-500">
                Expires in: <span className="font-bold text-gray-700">{formattedExpiry}</span>
              </span>
            )}
          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={handleVerify}
            disabled={!isFilled || isPending}
            className="w-full h-12 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 hover:opacity-90 active:scale-[0.99]"
            style={{ backgroundColor: isError ? '#e05252' : '#1a35cc' }}
          >
            {isPending ? 'Verifying…' : 'Verify Account'}
          </button>

          {/* Resend */}
          <div className="text-center mt-4">
            {resendCooldown > 0 && otpState !== 'expired' ? (
              <span className="text-xs text-gray-400 select-none">
                Resend code ({resendCooldown}s)
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-xs font-medium hover:underline"
                style={{ color: '#1a35cc' }}
              >
                Resend code
              </button>
            )}
          </div>
        </div>

        {/* Back to Login */}
        <Link
          href="/login"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Login
        </Link>
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
