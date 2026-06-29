import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-sky/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            OUR PROVEN 6-STEP BLUEPRINT
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            How We Build Your High-Performance Web Asset
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            From your very first strategy brainstorm call right through to the celebratory live launch and organic rank scaling, we manage every detail with absolute precision.
          </p>
        </motion.div>

        {/* Timeline Path container */}
        <div className="relative mt-12">
          {/* Central Vertical Line (hidden on small mobile screens, centered on md+) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-dashed bg-slate-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Outer Content Block */}
                  <div className="w-full md:w-1/2 px-0 md:px-12 flex justify-start items-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 w-full relative"
                    >
                      {/* Step Indicator Top Block */}
                      <div className="flex items-center justify-between mb-4.5">
                        <span className="text-sm font-bold text-brand-blue font-sans">
                          {step.duration}
                        </span>
                        <div className={`w-8.5 h-8.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100`}>
                          <span className="text-xs font-bold text-slate-500 font-mono">
                            0{step.number}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-xs leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables lists */}
                      <div className="border-t border-slate-50 pt-5 space-y-2.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          Concrete Deliverables:
                        </span>
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start space-x-2 text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs font-medium font-sans">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-brand-blue animate-ping" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-blue absolute" />
                    </div>
                  </div>

                  {/* Empty Side block to balance the flex row layout on large screens */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
