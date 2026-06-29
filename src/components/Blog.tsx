import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, Calendar, ChevronRight, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 'blog-1',
      title: 'How Much Does a Website Cost in Australia? (2026 Price Guide)',
      category: 'Web Design Guide',
      readTime: '6 Min Read',
      date: 'June 18, 2026',
      author: 'Marcus Sterling',
      excerpt: 'Uncover the realistic investment ranges for custom business websites, local SEO marketing budgets, and eCommerce storefronts in Sydney without falling for hidden agency trapdoors.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'blog-2',
      title: 'Ultimate Sydney SEO Guide: Outrank Competitors on Google Maps',
      category: 'Search Engine Optimization',
      readTime: '8 Min Read',
      date: 'May 24, 2026',
      author: 'David Thornton',
      excerpt: 'Discover the exact on-page SEO schema tweaks, GMB map optimization steps, and local link earning strategies we use to push boutique Sydney businesses onto page one.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'blog-3',
      title: 'Headless Commerce vs WordPress: Which is Best for Your Store?',
      category: 'Web Development',
      readTime: '5 Min Read',
      date: 'April 12, 2026',
      author: 'Elena Rostova',
      excerpt: 'Compare the speed scores, security measures, monthly operational costs, and editing flexibilities of custom React storefronts against traditional Australian WordPress setups.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-sky/5 rounded-full blur-[90px] pointer-events-none" />

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
            KNOWLEDGE & DIGITAL STRATEGY
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Latest Digital Guides & Business Insights
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Level up your business growth with actionable web design, conversion rate optimization, local marketing guides, and search strategy tutorials.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => {}}
            >
              {/* Cover Screen */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 px-3 py-1 rounded-lg text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Metadata line */}
                  <div className="flex items-center space-x-4 text-slate-400 text-[11px] font-sans font-medium mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer line */}
                <div className="border-t border-slate-100 pt-4.5 mt-5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 font-sans">
                      {post.author}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[11px] font-bold text-brand-blue group-hover:text-brand-indigo">
                    Read Post
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
