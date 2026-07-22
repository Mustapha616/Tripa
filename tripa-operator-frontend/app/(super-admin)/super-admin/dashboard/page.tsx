'use client';

import { useState } from 'react';
import {
  Layers,
  Users,
  RotateCcw,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const METRICS = [
  {
    title: "Today's Booking",
    value: '689',
    subText: null,
    badgeText: '8.5%',
    badgeLabel: 'Up from yesterday',
    icon: Layers,
    iconBg: 'bg-[#e0e7ff] text-[#4f46e5]',
    isNegative: false,
  },
  {
    title: 'Active Agents',
    value: '42',
    subText: 'In 12 states',
    badgeText: '8.5%',
    badgeLabel: 'Up +5 new agents',
    icon: Users,
    iconBg: 'bg-[#fef3c7] text-[#d97706]',
    isNegative: false,
  },
  {
    title: 'Failed (Funds)',
    value: '14',
    subText: 'Requires Attention',
    valueColor: 'text-[#e05252]',
    incidentText: 'Last incident:12 minutes ago',
    icon: RotateCcw,
    iconBg: 'bg-[#fee2e2] text-[#ef4444]',
    isNegative: true,
  },
];

const TOP_COMPANIES = [
  {
    id: 1,
    name: 'Apex Logistics Int.',
    subtitle: '122 bookings this week',
    percentage: '85%',
    avatarBg: 'bg-[#ec4899]',
    avatarText: 'AL',
  },
  {
    id: 2,
    name: 'Nexus Ventures LLC',
    subtitle: '122 bookings this week',
    percentage: '54%',
    avatarBg: 'bg-[#ef4444]',
    avatarText: 'NV',
  },
  {
    id: 3,
    name: 'Quantum Tech Co.',
    subtitle: '122 bookings this week',
    percentage: '45%',
    avatarBg: 'bg-[#3b82f6]',
    avatarText: 'QT',
  },
];

const HIGH_ACTIVITY_ROUTES = [
  {
    id: 1,
    origin: 'SAUKI TRNS',
    originLocation: 'LAGOS',
    dest: 'ADAMAWA TRNS',
    destLocation: 'LAGOS',
    dailyCount: '84 Daily',
    growth: '+4.2%',
  },
  {
    id: 2,
    origin: 'SAUKI TRNS',
    originLocation: 'LAGOS',
    dest: 'ADAMAWA TRNS',
    destLocation: 'LAGOS',
    dailyCount: '76 Daily',
    growth: '+2.1%',
  },
  {
    id: 3,
    origin: 'SAUKI TRNS',
    originLocation: 'LAGOS',
    dest: 'ADAMAWA TRNS',
    destLocation: 'LAGOS',
    dailyCount: '84 Daily',
    growth: '+4.2%',
  },
  {
    id: 4,
    origin: 'SAUKI TRNS',
    originLocation: 'LAGOS',
    dest: 'ADAMAWA TRNS',
    destLocation: 'LAGOS',
    dailyCount: '76 Daily',
    growth: '+2.1%',
  },
];

export default function SuperAdminDashboardPage() {
  const [dateRange, setDateRange] = useState('October 1st Half');

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xs font-bold tracking-[0.15em] text-[#1a35cc] uppercase mb-1">
            PLATFORM OVERVIEW
          </h2>
          <p className="text-sm font-medium text-gray-500">
            Monitor activity and system health across all Acme Systems agents.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1a35cc] hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-[0.99]"
        >
          <span>Export Report</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {METRICS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">{card.title}</p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-extrabold tracking-tight ${card.valueColor || 'text-gray-900'
                        }`}
                    >
                      {card.value}
                    </span>
                    {card.subText && (
                      <span className="text-xs font-semibold text-gray-400">{card.subText}</span>
                    )}
                  </div>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-6 pt-2">
                {card.badgeText ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{card.badgeText}</span>
                    <span className="text-gray-400 font-medium">{card.badgeLabel}</span>
                  </div>
                ) : (
                  <div className="text-xs font-medium text-gray-400">{card.incidentText}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Grid: Booking Trends (2/3) & Top Companies (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Booking Trends Chart */}
        <div className="lg:col-span-2 p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold tracking-[0.15em] text-[#1a35cc] uppercase">
              BOOKING TRENDS
            </h3>

            <div className="relative">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 py-2 pl-4 pr-9 rounded-xl outline-none cursor-pointer focus:border-blue-600"
              >
                <option value="October 1st Half">October 1st Half</option>
                <option value="October 2nd Half">October 2nd Half</option>
                <option value="September Full">September Full</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          {/* SVG Line & Area Chart */}
          <div className="relative w-full h-64 pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 700 220">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Y-Axis Grid Lines */}
              {[
                { label: '100K', y: 20 },
                { label: '80K', y: 60 },
                { label: '60K', y: 100 },
                { label: '40K', y: 140 },
                { label: '20K', y: 180 },
              ].map((grid) => (
                <g key={grid.label}>
                  <line
                    x1="40"
                    y1={grid.y}
                    x2="680"
                    y2={grid.y}
                    stroke="#f1f5f9"
                    strokeWidth="1.5"
                  />
                  <text x="0" y={grid.y + 4} fill="#94a3b8" fontSize="11" fontWeight="500">
                    {grid.label}
                  </text>
                </g>
              ))}

              {/* Gradient Area Fill */}
              <path
                d="M40,175 Q65,165 90,140 T140,120 T190,150 T240,110 T290,20 T340,140 T390,110 T440,140 T490,75 T540,110 T590,100 T640,120 T680,105 L680,180 L40,180 Z"
                fill="url(#chartGradient)"
              />

              {/* Smooth Trend Line */}
              <path
                d="M40,175 Q65,165 90,140 T140,120 T190,150 T240,110 T290,20 T340,140 T390,110 T440,140 T490,75 T540,110 T590,100 T640,120 T680,105"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />

              {/* Peak Point Tooltip Badge */}
              <g transform="translate(290, 20)">
                <circle r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                <foreignObject x="-45" y="-32" width="90" height="24">
                  <div className="bg-[#1a35cc] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md text-center">
                    94,3664.77
                  </div>
                </foreignObject>
              </g>

              {/* Other Data Points */}
              {[[90, 140], [140, 120], [190, 150], [490, 75], [540, 110], [640, 120]].map(
                ([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="3.5"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                )
              )}
            </svg>
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between pl-10 pr-2 pt-2 text-xs font-medium text-gray-400">
            {['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri'].map(
              (day, idx) => (
                <span key={idx}>{day}</span>
              )
            )}
          </div>
        </div>

        {/* Right: Top Companies */}
        <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-[#1a35cc] uppercase mb-6">
              TOP COMPANIES
            </h3>

            <div className="space-y-6">
              {TOP_COMPANIES.map((comp) => (
                <div key={comp.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl ${comp.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow-sm`}
                    >
                      {comp.avatarText}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{comp.name}</p>
                      <p className="text-xs font-medium text-gray-400">{comp.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#1a35cc]">{comp.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-8 py-3 rounded-xl border border-blue-200 text-xs font-bold text-[#1a35cc] hover:bg-blue-50 transition-colors text-center"
          >
            View All Components
          </button>
        </div>
      </div>

      {/* Bottom Section: High Activity Routes */}
      <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-6">
        <h3 className="text-xs font-bold tracking-[0.15em] text-[#1a35cc] uppercase">
          HIGH ACTIVITY ROUTES
        </h3>

        <div className="divide-y divide-gray-100">
          {HIGH_ACTIVITY_ROUTES.map((route) => (
            <div
              key={route.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 px-2 rounded-xl transition-colors"
            >
              {/* Origin -> Destination */}
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm font-extrabold text-gray-900">{route.origin}</p>
                  <p className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">
                    {route.originLocation}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                <div>
                  <p className="text-sm font-extrabold text-gray-900">{route.dest}</p>
                  <p className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">
                    {route.destLocation}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">{route.dailyCount}</p>
                <p className="text-xs font-bold text-emerald-600">{route.growth}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="w-full py-3 rounded-xl border border-blue-200 text-xs font-bold text-[#1a35cc] hover:bg-blue-50 transition-colors text-center"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
