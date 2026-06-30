import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onCtaClick: (sectionId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white dots-pattern flex items-center">
      {/* Background soft ambient glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-brand-sky -top-40 -left-40 opacity-[0.12]" />
      <div className="ambient-glow w-[600px] h-[600px] bg-brand-violet -bottom-40 -right-40 opacity-[0.10]" />
      <div className="ambient-glow w-[400px] h-[400px] bg-brand-cyan top-1/3 left-1/2 -translate-x-1/2 opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100/80 px-4 py-2 rounded-full w-fit mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-sans">
                ⭐️ Custom Website Design & Development Company
              </span>
            </motion.div>

            {/* Main H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              Premium{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet">
                Web Design Sydney
              </span>{' '}
              For Local Businesses
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl"
            >
              Partner with a dedicated <strong>Sydney web design agency</strong>. We craft custom, high-converting, and beautiful websites designed by experienced <strong>website designers in Sydney</strong> to help small businesses grow.
            </motion.p>

            {/* Mini Trust Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 max-w-xl"
            >
              {[
                'Crafted From Scratch (No Cheap Templates)',
                'Blazing Fast & Easy for Google to Read',
                'Designed to Make Contacting You Effortless',
                'Helpful Sydney-Based Tech Support'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium font-sans">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-10"
            >
              <button
                onClick={() => onCtaClick('proposal-builder')}
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet hover:from-brand-indigo hover:to-brand-violet shadow-lg shadow-blue-500/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <span>Get Free Proposal</span>
                <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onCtaClick('portfolio')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-3 mt-8 border-t border-slate-100 pt-6 text-slate-500 text-xs"
            >
              <span className="font-semibold uppercase tracking-wider text-slate-400">Trusted by Local Businesses:</span>
              <div className="flex space-x-2 font-medium text-slate-600">
                <span>Clinics</span>
                <span>•</span>
                <span>E-commerce</span>
                <span>•</span>
                <span>Law Firms</span>
                <span>•</span>
                <span>Trades</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Visual Device Interactive Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Interactive Desktop Screen Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl shadow-slate-300/80 border border-slate-100/90 overflow-hidden"
            >
              {/* Browser Bar */}
              <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
                </div>
                <div className="bg-slate-200/60 text-[10px] text-slate-500 px-6 py-0.5 rounded-full font-mono">
                  sydneycreativewebsites.com.au
                </div>
                <div className="w-4 h-4 rounded bg-slate-200/50" />
              </div>

              {/* Simulated Website Content */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="h-5 w-24 bg-slate-100 rounded-lg animate-pulse" />
                  <div className="h-5 w-16 bg-blue-100 rounded-lg" />
                </div>

                {/* Hero preview */}
                <div className="space-y-2 py-2">
                  <div className="h-4 w-4/5 bg-slate-200 rounded animate-pulse" />
                  <div className="h-4 w-3/5 bg-slate-200 rounded animate-pulse" />
                  <div className="h-2 w-full bg-slate-100 rounded mt-4" />
                  <div className="h-2 w-5/6 bg-slate-100 rounded" />
                </div>

                {/* Layout preview grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-100/60 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-brand-blue">100/100</span>
                    <span className="text-[9px] font-semibold uppercase text-slate-500 tracking-wider">Page Speed</span>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-3 rounded-xl border border-emerald-100/60 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-emerald-600">3.8x</span>
                    <span className="text-[9px] font-semibold uppercase text-slate-500 tracking-wider">Leads Growth</span>
                  </div>
                </div>

                {/* Live graph simulation */}
                <div className="border border-slate-100 p-3.5 rounded-2xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-700">Enquiries / Conversion Tracker</span>
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center">
                      <Activity className="w-3 h-3 mr-0.5 animate-pulse" /> +42%
                    </span>
                  </div>
                  <div className="flex items-end space-x-2 h-14 pt-2">
                    {[30, 45, 35, 60, 50, 75, 95].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-brand-blue to-brand-sky rounded-sm" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1: Lighthouse Score */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-100/80 flex items-center space-x-3 max-w-[170px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-sm">
                100
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-800">Perfect Core</div>
                <div className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">Web Vitals</div>
              </div>
            </motion.div>

            {/* Floating Card 2: Safe ROI */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100/80 flex items-center space-x-3"
            >
              <div className="p-2 bg-blue-50 rounded-xl border border-blue-200">
                <Zap className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-800">Sydney Local SEO</div>
                <div className="text-[9px] font-medium text-emerald-600">#1 Google Rankings</div>
              </div>
            </motion.div>

            {/* Floating Card 3: Australia Wide Support */}
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-100/80 flex items-center space-x-2.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-bold text-slate-700">100% Quality Guarantee</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
