import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, MapPin, Star, Building2, ShoppingBag, ShieldCheck, HeartPulse } from 'lucide-react';

interface StatCounterProps {
  key?: React.Key;
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

function StatCounter({ end, suffix = '', label, icon, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Minor delay before starting countdown to allow transition to finish
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 bg-blue-50 text-brand-blue rounded-xl mb-4">
        {icon}
      </div>
      <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
        {label}
      </span>
    </motion.div>
  );
}

export default function Trust() {
  const stats = [
    { end: 250, suffix: '+', label: 'Websites Delivered', icon: <Award className="w-6 h-6" /> },
    { end: 98, suffix: '%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6" /> },
    { end: 100, suffix: '%', label: 'Australia Wide Service', icon: <MapPin className="w-6 h-6" /> },
    { end: 5, suffix: ' Star', label: 'Reviews Average', icon: <Star className="w-6 h-6 fill-amber-400 stroke-amber-400" /> },
  ];

  // Premium text-based Australian partner list
  const partners = [
    { name: 'BONDI CLINICS', desc: 'Medical & Wellness', icon: <HeartPulse className="w-4 h-4" /> },
    { name: 'APEX LEGAL', desc: 'CBD Commercial Litigation', icon: <Building2 className="w-4 h-4" /> },
    { name: 'COASTAL RETREATS', desc: 'Luxury Accommodations', icon: <MapPin className="w-4 h-4" /> },
    { name: 'HILLS GROCERS', desc: 'Organic eCommerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'HARBOUR ADVISORY', desc: 'Wealth & Asset Management', icon: <ShieldCheck className="w-4 h-4" /> },
    { name: 'PACIFIC CAPITAL', desc: 'Equity Partners', icon: <Building2 className="w-4 h-4" /> },
    { name: 'BYRON LUXURY', desc: 'Retail Shopify', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'NSW MEDICAL', desc: 'Healthcare Services', icon: <HeartPulse className="w-4 h-4" /> }
  ];

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Logo Slider Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 mb-8"
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
            HELPING AUSTRALIAN BUSINESSES GROW
          </span>
          <h3 className="font-display font-bold text-lg text-slate-800">
            Trusted by the Teams at Leading Local Industries
          </h3>
        </motion.div>

        {/* Infinite Scrolling Logo Animation Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full overflow-hidden py-4 select-none"
        >
          {/* Edge fades for seamless infinite illusion */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="animate-scroll-left flex space-x-8 items-center">
            {/* First sequence */}
            {partners.map((partner, index) => (
              <div
                key={`p1-${index}`}
                className="flex items-center space-x-3 bg-white border border-slate-100 px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
              >
                <div className="p-1.5 bg-blue-50 text-brand-blue rounded-lg">
                  {partner.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-[12px] tracking-wider text-slate-800">
                    {partner.name}
                  </span>
                  <span className="font-sans text-[9px] font-semibold text-slate-400">
                    {partner.desc}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Second sequence for smooth wrap loop */}
            {partners.map((partner, index) => (
              <div
                key={`p2-${index}`}
                className="flex items-center space-x-3 bg-white border border-slate-100 px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
              >
                <div className="p-1.5 bg-blue-50 text-brand-blue rounded-lg">
                  {partner.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-[12px] tracking-wider text-slate-800">
                    {partner.name}
                  </span>
                  <span className="font-sans text-[9px] font-semibold text-slate-400">
                    {partner.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
