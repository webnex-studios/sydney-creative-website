import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { Eye, ExternalLink, ChevronRight, X, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Website Design', value: 'website' },
    { label: 'Ecommerce', value: 'ecommerce' },
    { label: 'WordPress', value: 'wordpress' },
    { label: 'Redesign', value: 'redesign' },
    { label: 'SEO Campaign', value: 'seo' }
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Soft floating background visual ornaments */}
      <div className="absolute -top-12 right-0 w-[400px] h-[400px] bg-brand-sky/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 left-0 w-[400px] h-[400px] bg-brand-violet/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-xl text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
              RECENT DIGITAL SUCCESS STORIES
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Award-Winning Portfolio Showcase
            </h2>
            <p className="mt-3 text-slate-600 font-sans text-sm sm:text-base">
              Explore how we have helped clinics, eCommerce stores, legal firms, and local Sydney businesses completely transform their brand positioning and 10x their online enquiries.
            </p>
          </div>

          {/* Filters (Horizontal list on mobile, grid on desktop) */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-md shadow-blue-500/15'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Portfolio Showcase Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Cover Screen */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Performance overlay badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px] font-bold text-slate-800">
                      {project.stats.label}: <strong className="text-emerald-600">{project.stats.value}</strong>
                    </span>
                  </div>

                  {/* Icon hover helper overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3.5 rounded-full bg-white text-brand-blue shadow-lg scale-90 group-hover:scale-100 transition-all">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card description text */}
                <div className="p-6">
                  <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Action button */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Client: {project.clientName}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-indigo">
                    Case Study
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Details Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Cover Image Header */}
              <div className="relative aspect-[21/9] w-full bg-slate-100 overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/25 hover:bg-white/40 text-white backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="font-sans text-[10px] font-bold text-brand-sky uppercase tracking-widest block mb-1">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Scroll Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                {/* Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-3.5 bg-rose-500 rounded-full" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-3.5 bg-brand-blue rounded-full" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Solution</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                {/* Results List */}
                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="w-1.5 h-3.5 bg-emerald-500 rounded-full" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Business Results</h4>
                  </div>
                  <div className="space-y-2">
                    {selectedProject.caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold font-sans">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 shrink-0">
                <span className="font-sans text-xs font-bold text-slate-400">
                  ESTABLISHED AUSTRALIAN BRAND
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
