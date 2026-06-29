import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Lucide helper to render icon safely
  const renderIcon = (iconName: string, className = "w-6 h-6 text-brand-blue") => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.Layout className={className} />;
  };

  const handleApplyService = (serviceId: string) => {
    setSelectedService(null);
    onServiceSelect(serviceId);
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="ambient-glow w-[500px] h-[500px] bg-brand-sky top-1/4 left-1/4 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50/80 px-4 py-1.5 rounded-full">
            OUR SPECIALIST CAPABILITIES
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Premium Web Services Designed For Business Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            We don't just build pages; we engineer robust digital experiences that load instantly, secure first-page rankings on Google, and convert casual visitors into paying customers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Subtle background card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-sky-50/0 to-violet-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Icon wrapper with hover bounce animation */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-300 flex items-center justify-center border border-slate-100/80 group-hover:border-blue-100/50 mb-6">
                  <div className="group-hover:animate-bounce">
                    {renderIcon(service.iconName, "w-7 h-7 text-brand-blue group-hover:text-brand-indigo transition-colors")}
                  </div>
                </div>

                {/* Service title & description */}
                <h3 className="font-display font-extrabold text-xl text-slate-950 group-hover:text-brand-blue transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer actions */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                <span className="font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-500">
                  {service.priceEstimate.split(' ')[0]} {service.priceEstimate.split(' ')[1] || 'Plan'}
                </span>
                <span className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-indigo">
                  View Scope
                  <LucideIcons.ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Overlay / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {renderIcon(selectedService.iconName, "w-6 h-6 text-brand-blue")}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">
                      {selectedService.title}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-sans text-xs font-semibold uppercase tracking-wider">
                      ✨ Premium Quality Standard
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Deep-Dive</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">What is Included in Our Build</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-slate-700">
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-medium font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4.5 rounded-2xl border border-slate-100">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Investment</span>
                    <span className="text-sm font-bold text-slate-800">{selectedService.priceEstimate}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Delivery Timeframe</span>
                    <span className="text-sm font-bold text-slate-800">{selectedService.timeframe}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => handleApplyService(selectedService.id)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-indigo hover:to-brand-violet shadow-md cursor-pointer group"
                >
                  <span>Select Service for my Proposal</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
