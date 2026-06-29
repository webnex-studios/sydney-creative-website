import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Structured Schema markup for local Google Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Injecting Schema to DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Answering Your Website Cost & Scope Queries
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base">
            Everything you need to understand about our custom web design timeline, SEO integration, pricing tiers, and ongoing Sydney maintenance structures.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-100 shadow-md shadow-blue-500/5'
                    : 'border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5.5 text-left flex justify-between items-center space-x-4 cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                      isOpen ? 'text-brand-blue' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-extrabold text-[14px] sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-all ${
                    isOpen ? 'bg-blue-50 text-brand-blue' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Drawer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                        <p className="text-slate-600 text-sm leading-relaxed font-sans pl-8.5">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
