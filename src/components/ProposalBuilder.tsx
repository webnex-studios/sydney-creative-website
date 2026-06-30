import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProposalInput } from '../types';
import { SERVICES_DATA } from '../data';
import { 
  Rocket, Calendar, Clock, Check, FileText, Phone, Mail, MapPin, 
  Sparkles, ShieldCheck, Download, CheckCircle2, ArrowRight, Loader2 
} from 'lucide-react';

interface ProposalBuilderProps {
  preselectedServiceId?: string;
  onClearPreselect?: () => void;
}

export default function ProposalBuilder({ preselectedServiceId, onClearPreselect }: ProposalBuilderProps) {
  const [form, setForm] = useState<ProposalInput>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    services: preselectedServiceId ? [preselectedServiceId] : ['web-design'],
    budget: 5000,
    projectDetails: '',
    timeline: '4-weeks',
    bookingDate: '',
    bookingTime: ''
  });

  // Watch preselected service triggers from Services component
  useEffect(() => {
    if (preselectedServiceId) {
      setForm(prev => {
        const alreadySelected = prev.services.includes(preselectedServiceId);
        return {
          ...prev,
          services: alreadySelected ? prev.services : [...prev.services, preselectedServiceId]
        };
      });
      if (onClearPreselect) onClearPreselect();
    }
  }, [preselectedServiceId]);

  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (id: string) => {
    setForm(prev => {
      const services = prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id];
      return { ...prev, services: services.length ? services : [id] }; // Keep at least one selected
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.businessName || !form.email) {
      alert('Please fill out your Name, Business Name, and Email.');
      return;
    }

    // Interactive step-by-step generation sequence
    setLoadingStep(1);
    
    setTimeout(() => {
      setLoadingStep(2);
    }, 1000);

    setTimeout(() => {
      setLoadingStep(3);
    }, 2000);

    setTimeout(() => {
      setLoadingStep(4);
      setIsSubmitted(true);
    }, 3200);
  };

  // Generate mock on-page SEO keywords based on business details
  const getSuggestedKeywords = () => {
    const biz = form.businessName.toLowerCase();
    if (biz.includes('clinic') || biz.includes('beauty') || biz.includes('skin') || biz.includes('dental')) {
      return ['Bondi beauty treatments', 'Sydney skin clinics', 'certified aesthetics Sydney', 'local cosmetic bookings'];
    }
    if (biz.includes('law') || biz.includes('legal') || biz.includes('solicitor') || biz.includes('partner')) {
      return ['Sydney CBD litigation', 'commercial lawyers NSW', 'hire legal advisory Sydney', 'top corporate attorneys'];
    }
    if (biz.includes('shop') || biz.includes('store') || biz.includes('organic') || biz.includes('delivery')) {
      return ['organic grocer delivery Sydney', 'Shopify eCommerce Sydney', 'fast local shipping NSW', 'eCommerce subscription boxes'];
    }
    return ['Sydney web designer', 'website development Sydney', 'small business SEO Sydney', 'affordable premium agency'];
  };

  return (
    <section id="proposal-builder" className="py-20 bg-white relative overflow-hidden scroll-mt-20">
      {/* Abstract mesh accents */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-sky/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-brand-violet/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            LETS PLAN YOUR WEBSITE
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Plan Your Website Design & Get a Custom Estimate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Tell us a bit about what you need. We'll automatically put together a straightforward estimate of the time and cost involved, with no obligation and no pushy sales pitches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40"
          >
            
            <AnimatePresence mode="wait">
              {!isSubmitted && loadingStep === 0 && (
                <motion.form
                  key="proposal-form"
                  onSubmit={handleSubmit}
                  className="space-y-8 text-left"
                >
                  {/* Step 1: Services Selection */}
                  <div className="space-y-3.5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                      Step 1: What kind of services are you thinking about?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SERVICES_DATA.map((service) => {
                        const isChecked = form.services.includes(service.id);
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                              isChecked
                                ? 'bg-blue-50 text-brand-blue border-brand-blue shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <span>{service.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Customer Contact info */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                      Step 2: Tell us a bit about you and your business
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-xs font-semibold text-slate-600 mb-1.5">Your Full Name *</span>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Paul Wilson"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                        />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-600 mb-1.5">Business Name *</span>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Bondi Esthetics"
                          value={form.businessName}
                          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-xs font-semibold text-slate-600 mb-1.5">Work Email *</span>
                        <input
                          type="email"
                          required
                          placeholder="e.g. paul@bondiesthetics.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                        />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</span>
                        <input
                          type="tel"
                          placeholder="e.g. +61 400 123 456"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Interactive Budget Slider */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                        Step 3: What's your estimated budget?
                      </label>
                      <span className="text-sm font-bold text-brand-blue">
                        ${form.budget.toLocaleString()} AUD
                      </span>
                    </div>
                    <input
                      type="range"
                      min="3000"
                      max="25000"
                      step="500"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                    <div className="flex justify-between text-[10px] font-bold text-slate-400">
                      <span>$3,000 AUD</span>
                      <span>$10,000 AUD (Highly Popular)</span>
                      <span>$25,000+ AUD</span>
                    </div>
                  </div>

                  {/* Step 4: Project Scope Details */}
                  <div className="space-y-1.5">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Step 4: Briefly describe your objectives</span>
                    <textarea
                      rows={3}
                      placeholder="Share a bit about who you are, any specific reference websites you love, or key functions you need (e.g., booking calendars, payment setups, inventory sync)..."
                      value={form.projectDetails}
                      onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Step 5: Calendar Booking Selector */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-brand-blue animate-pulse" />
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                        Step 5: Pick a slot for a friendly 15-min chat (Optional)
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4.5 rounded-2xl border border-slate-100">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Select Date</span>
                        <input
                          type="date"
                          value={form.bookingDate}
                          onChange={(e) => setForm({ ...form, bookingDate: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white outline-none text-xs text-slate-700 focus:border-brand-blue transition-all"
                        />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Preferred Time Slot (AEST)</span>
                        <select
                          value={form.bookingTime}
                          onChange={(e) => setForm({ ...form, bookingTime: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white outline-none text-xs text-slate-700 focus:border-brand-blue transition-all"
                        >
                          <option value="">Choose a time...</option>
                          <option value="09:00 AM">09:00 AM AEST (Morning)</option>
                          <option value="11:30 AM">11:30 AM AEST (Midday)</option>
                          <option value="02:00 PM">02:00 PM AEST (Early Afternoon)</option>
                          <option value="04:30 PM">04:30 PM AEST (Late Afternoon)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet hover:from-brand-indigo hover:to-brand-violet text-white text-base font-bold rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Analyze and Prepare Estimate</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </motion.form>
              )}

              {/* Intermediary analysis screen */}
              {!isSubmitted && loadingStep > 0 && (
                <motion.div
                  key="proposal-loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="relative w-16 h-16">
                    <Loader2 className="w-16 h-16 text-brand-blue animate-spin" />
                    <Sparkles className="w-6 h-6 text-brand-violet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-display font-extrabold text-xl text-slate-900">
                      Generating Your Strategic Roadmap...
                    </h3>
                    
                    {/* Simulated Steps */}
                    <div className="text-sm font-sans space-y-1.5 pt-4 text-left">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Check className="w-4 h-4" />
                        <span>Aggregating pricing variables</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${loadingStep >= 2 ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {loadingStep >= 2 ? <Check className="w-4 h-4" /> : <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                        <span>Optimizing local Sydney SEO keywords</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${loadingStep >= 3 ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {loadingStep >= 3 ? <Check className="w-4 h-4" /> : loadingStep === 2 ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                        <span>Structuring timeline estimations</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Proposal success screen */}
              {isSubmitted && (
                <motion.div
                  key="proposal-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex items-center space-x-3 border-b border-slate-100 pb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-slate-900">
                        Proposal Draft Generated Successfully!
                      </h3>
                      <p className="text-slate-500 text-xs font-sans">
                        A custom estimation has been formulated based on your budget.
                      </p>
                    </div>
                  </div>

                  {/* Visual PDF Proposal Draft render */}
                  <div className="border border-slate-100 rounded-2xl p-5 sm:p-6 bg-slate-50/50 space-y-5">
                    <div className="flex justify-between items-start border-b border-slate-200/50 pb-4">
                      <div>
                        <span className="font-display font-bold text-sm text-slate-800">Sydney Creative Websites</span>
                        <span className="block text-[9px] font-semibold text-slate-400 uppercase tracking-widest font-mono">
                          ABN 36 663 494 077
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                        Estimated Quote Draft
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <strong className="block text-slate-400 uppercase tracking-wider text-[9px] font-bold mb-0.5">Prepared For:</strong>
                        <span className="font-bold text-slate-800">{form.businessName}</span>
                        <span className="block text-slate-500">{form.name}</span>
                      </div>
                      <div>
                        <strong className="block text-slate-400 uppercase tracking-wider text-[9px] font-bold mb-0.5">Scope Includes:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {form.services.map(sId => (
                            <span key={sId} className="px-2 py-0.5 bg-blue-50 text-brand-blue border border-blue-100 rounded text-[9px] font-bold">
                              {SERVICES_DATA.find(s => s.id === sId)?.title || sId}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/50 pt-4 grid grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <strong className="block text-slate-400 uppercase tracking-wider text-[9px] font-bold mb-0.5">Suggested SEO Target Keywords:</strong>
                        <div className="space-y-1 mt-1">
                          {getSuggestedKeywords().map((kw, i) => (
                            <span key={i} className="block text-[10px] text-slate-600 font-semibold">• {kw}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <strong className="block text-slate-400 uppercase tracking-wider text-[9px] font-bold mb-0.5">Budget Allocation:</strong>
                        <span className="text-sm font-bold text-slate-800">${form.budget.toLocaleString()} AUD</span>
                        <span className="block text-[10px] text-slate-500 mt-1">Timeline estimate: 3 - 4 Weeks</span>
                      </div>
                    </div>

                    {/* Booking confirmation notice if checked */}
                    {form.bookingDate && form.bookingTime && (
                      <div className="bg-blue-50/50 border border-blue-100 p-3.5 rounded-xl flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-brand-blue shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <h4 className="text-xs font-bold text-blue-900">Brainstorm Consult Confirmed!</h4>
                          <p className="text-[10px] text-blue-700 mt-0.5 font-semibold font-sans">
                            {form.bookingDate} at {form.bookingTime} AEST. An invitation has been sent to <span className="underline">{form.email}</span>.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setLoadingStep(0);
                      }}
                      className="flex-1 py-3 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all cursor-pointer"
                    >
                      Plan Another Project
                    </button>
                    <button
                      onClick={() => alert(`A PDF download simulation of your ${form.businessName} Proposal has started.`)}
                      className="flex-1 py-3 bg-brand-blue text-white font-bold text-sm rounded-xl hover:bg-brand-indigo transition-all cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Proposal</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          {/* Right Column: Sydney Office, Contact Details and Visual map mock */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            
            {/* Trust banner */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block">
                SYDNEY HEAD OFFICE
              </span>
              <h3 className="font-display font-extrabold text-xl text-slate-900 leading-tight">
                Sydney Creative Websites HQ
              </h3>
              
              {/* Contact rows */}
              <div className="space-y-4 pt-2 font-sans text-sm text-slate-600">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-100 text-brand-blue shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>160-202 George St, Redfern NSW 2016, Australia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-100 text-brand-blue shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+61468147302" className="hover:text-brand-blue transition-colors font-medium">
                    0468 147 302
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-100 text-brand-blue shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:hello@sydneywebsiteco.com.au" className="hover:text-brand-blue transition-colors font-medium">
                    hello@sydneywebsiteco.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Live Google Maps Embed visual */}
            <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl border border-slate-100 overflow-hidden shadow-sm bg-slate-100">
              {/* Abstract Mockup Map Graphics using pure styled CSS elements */}
              <div className="absolute inset-0 bg-blue-50/50 flex items-center justify-center p-4">
                <div className="relative w-full h-full border border-dashed border-slate-200/80 rounded-2xl bg-white flex flex-col items-center justify-center">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  
                  {/* Styled central Map pin indicator */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-blue-500/30 animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="mt-3.5 bg-white border border-slate-100 rounded-xl p-2.5 px-4 shadow-xl">
                      <span className="font-display font-bold text-xs text-slate-800 block">Redfern, Sydney</span>
                      <span className="text-[9px] text-slate-500 font-medium font-sans">160-202 George St</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           {/* Guarantee Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-3xl border border-blue-100/60 flex items-start space-x-4">
              <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold text-blue-950 font-display">
                  Our Simple Satisfaction Promise
                </h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-sans">
                  We don't pack up or consider our job done until you are 100% in love with every feature and pixel of your new platform. That is our personal word.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
