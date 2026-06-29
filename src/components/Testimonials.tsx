import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Check } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-brand-sky/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-brand-violet/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            100% VERIFIED CLIENT RESULTS
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Loved By Australian Business Owners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Hear directly from the medical directors, legal partners, and eCommerce founders who trusted us to engineer their primary client acquisition channels.
          </p>
        </motion.div>

        {/* Spotlight Carousel Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto relative"
        >
          
          {/* Big quotation ornament */}
          <div className="absolute -top-10 -left-6 text-slate-100/80 pointer-events-none hidden sm:block">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden min-h-[350px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Star rating and service line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="flex space-x-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[11px] font-bold text-brand-blue bg-blue-50/80 px-3 py-1 rounded-full font-sans uppercase tracking-wider">
                    ✨ Service: {activeTestimonial.service}
                  </span>
                </div>

                {/* Review quotation */}
                <p className="text-slate-700 font-display font-medium text-lg sm:text-xl leading-relaxed italic">
                  "{activeTestimonial.review}"
                </p>

                {/* Client Profile footer */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="relative w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-base text-slate-950">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-slate-500 text-xs font-medium font-sans">
                      {activeTestimonial.role} at <strong className="text-slate-700">{activeTestimonial.company}</strong>
                    </p>
                  </div>
                  <div className="ml-auto bg-emerald-50 border border-emerald-100 rounded-lg p-1 px-2.5 flex items-center space-x-1 hidden sm:flex">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-700 font-sans uppercase tracking-wider">
                      Verified Client
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation controllers */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-8">
              {/* Manual indicators */}
              <div className="flex space-x-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-6 bg-brand-blue' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow controls */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/60 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/60 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
