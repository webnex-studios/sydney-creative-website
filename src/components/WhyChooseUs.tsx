import React from 'react';
import { motion } from 'motion/react';
import { Target, PencilRuler, Smartphone, Sparkles, Zap, Shield, ChevronRight, UserCheck, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Strategy-First Conversion Loop',
      desc: 'We do not build blind templates. We start with extensive local market research to map out clear, frictionless client routes that increase enquiries.',
      icon: <Target className="w-5 h-5" />,
      color: 'bg-blue-50 text-brand-blue border-blue-100'
    },
    {
      title: '100% Unique Bespoke Design',
      desc: 'No cookie-cutter pre-made themes. Every digital layout is designed pixel-by-pixel in Figma to match your specific Australian brand identity.',
      icon: <PencilRuler className="w-5 h-5" />,
      color: 'bg-violet-50 text-brand-violet border-violet-100'
    },
    {
      title: 'Fluid Mobile-First Layouts',
      desc: 'Over 65% of Australian search queries come from mobile. Our designs adjust smoothly across all screens for absolute thumb-friendly comfort.',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Deep On-Page & Schema SEO',
      desc: 'We compile advanced schema structures, XML sitemaps, and optimized heading models to make it effortless for Google to index and rank your pages.',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      title: 'Lightning-Fast Speed Scores',
      desc: 'Slow pages kill sales. We build using modern technologies like Vite, React, and CSS-compiled grids to lock in a PageSpeed score of 95+.',
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-cyan-50 text-brand-cyan border-cyan-100'
    },
    {
      title: 'Priority Sydney Support Team',
      desc: 'No outsourcing or offshore call hubs. Speak directly with local Australian developers who understand your system and respond inside 2 hours.',
      icon: <Shield className="w-5 h-5" />,
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="ambient-glow w-[600px] h-[600px] bg-brand-violet -right-40 -top-40 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-4 py-1.5 rounded-full">
            WHY WORK WITH SYDNEY CREATIVE WEBSITES.
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            A Website is Your 24/7 Digital Storefront. We Make It Warm & Welcoming.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            We don't believe in over-complicating things with confusing agency jargon. We focus on what actually moves the needle: building a beautifully designed, reliable, and incredibly fast website that makes your customers trust you instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dynamic strategy flowchart illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-6">
                Our Simple Website Flow
              </span>

              {/* Steps block */}
              <div className="space-y-4 relative">
                {/* Connector line */}
                <div className="absolute left-6.5 top-4 bottom-4 w-0.5 bg-dashed bg-slate-200" />

                {/* Funnel Step 1 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-start space-x-3.5 shadow-sm relative z-10"
                >
                  <div className="w-7.5 h-7.5 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Finding Your People</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-sans">We make sure local Sydney customers find your services easily when searching on Google.</p>
                  </div>
                </motion.div>

                {/* Funnel Step 2 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-start space-x-3.5 shadow-sm relative z-10"
                >
                  <div className="w-7.5 h-7.5 rounded-lg bg-indigo-50 text-brand-indigo flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">A Great First Impression</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-sans">Your new site loads in under half a second and feels modern, spacious, and inviting on any screen.</p>
                  </div>
                </motion.div>

                {/* Funnel Step 3 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-start space-x-3.5 shadow-sm relative z-10"
                >
                  <div className="w-7.5 h-7.5 rounded-lg bg-violet-50 text-brand-violet flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Easy to Reach Out</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-sans">We design the contact buttons, calendars, and simple quote tools to make reaching out completely stress-free.</p>
                  </div>
                </motion.div>

                {/* Funnel Step 4 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start space-x-3.5 shadow-md shadow-emerald-500/5 relative z-10"
                >
                  <div className="w-7.5 h-7.5 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800">A New Customer Message!</h4>
                    <p className="text-[10px] text-emerald-600 mt-0.5 font-sans">You receive a neat, clean notification straight to your email inbox or phone. Simple as that.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-brand-blue transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
