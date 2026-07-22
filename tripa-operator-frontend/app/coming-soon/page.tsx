'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';

// ===================================================
// SET YOUR LAUNCH DATE HERE
// ===================================================
const LAUNCH_DATE = new Date('2026-08-20T00:00:00Z');
// ===================================================

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 29, hours: 6, minutes: 5, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="border border-zinc-800 bg-zinc-900/40 px-5 py-4 sm:px-8 sm:py-5">
        <span className="text-4xl sm:text-5xl font-black tracking-tighter text-indigo-100 tabular-nums leading-none">
          {formatted}
        </span>
      </div>
      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500">
        {label}
      </span>
    </div>
  );
}

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const launchDateFormatted = LAUNCH_DATE.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="h-screen overflow-hidden bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 font-sans flex flex-col">
      <Navbar />

      {/* Full-viewport centered content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-indigo-400" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            Platform Launch — {launchDateFormatted}
          </span>
          <div className="w-8 h-px bg-indigo-400" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 max-w-2xl">
          The platform goes live on{' '}
          <span className="text-indigo-300">{launchDateFormatted}.</span>
        </h1>

        <p className="text-sm text-zinc-400 max-w-md mb-10 leading-relaxed">
          We're putting the finishing touches on the Tripa Operator Platform.
          Register your interest and we'll reach out the moment we go live.
        </p>

        {/* Countdown */}
        <div className="flex items-end justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-3xl font-black text-zinc-700 pb-9 select-none">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="text-3xl font-black text-zinc-700 pb-9 select-none">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-3xl font-black text-zinc-700 pb-9 select-none">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Waitlist Form */}
        {submitted ? (
          <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-zinc-200">
            <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0" strokeWidth={1.5} />
            You're on the list. We'll reach out when we launch.
          </div>
        ) : (
          <div className="w-full max-w-sm space-y-3">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              Register Early Access
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-11 bg-transparent border border-zinc-700 px-4 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-400 transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-950 font-semibold px-5 h-11 rounded-sm transition-colors text-sm flex-shrink-0"
              >
                Notify me <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-xs text-zinc-600">No spam. We'll only reach out when it matters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
