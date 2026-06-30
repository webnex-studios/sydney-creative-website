import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, MapPin, Phone, Mail, Globe, CheckCircle2, 
  ArrowRight, Heart, Star, FileText, Check 
} from 'lucide-react';

interface FooterProps {
  onCtaClick: (sectionId: string) => void;
  onOpenLandingPage: (pageId: string) => void;
}

export default function Footer({ onCtaClick, onOpenLandingPage }: FooterProps) {
  
  // Local Business & Review Schema markups for rich snippet technical SEO compliance
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Sydney Creative Websites',
    'image': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    'url': 'https://sydneycreativewebsites.com.au',
    'telephone': '+61468147302',
    'email': 'hello@sydneycreativewebsites.com.au',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '160-202 George St',
      'addressLocality': 'Redfern',
      'addressRegion': 'NSW',
      'postalCode': '2016',
      'addressCountry': 'AU'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '-33.8641',
      'longitude': '151.2099'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '17:30'
    },
    'priceRange': '$$$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '248'
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-20 pb-12 relative overflow-hidden">
      {/* Inject Local Business Schema directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Conversion Call-To-Action (Hero Footer Panel) */}
        <div className="bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden mb-20 shadow-xl shadow-indigo-950/20">
          {/* Decorative glows */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-[40px]" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[40px]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-sky bg-white/10 px-4 py-1.5 rounded-full inline-block">
              🚀 LET'S TALK ABOUT YOUR WEBSITE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Ready to Build a Website You and Your Clients Will Actually Love?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-sans max-w-2xl mx-auto">
              We design simple, high-performing websites that showcase your work clearly and make it effortless for new customers to reach out. No complex agency jargon, just honest quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-4">
              <button
                onClick={() => onCtaClick('proposal-builder')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-slate-50 text-sm sm:text-base font-extrabold rounded-2xl shadow-lg transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
              >
                <span>Let's Plan Your Website</span>
                <ArrowRight className="w-5 h-5 ml-2 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onCtaClick('proposal-builder')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/15 text-sm sm:text-base font-extrabold rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <span>Book a Friendly Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-16">
          
          {/* Logo & Agency Info */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700/50 shadow-inner group">
                <svg className="w-6.5 h-6.5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FE3423" />
                      <stop offset="50%" stopColor="#FF5E36" />
                      <stop offset="100%" stopColor="#FF8A56" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 24 78 H 70 C 77.7 78 84 71.7 84 64 C 84 56.3 77.7 50 70 50 H 30 C 22.3 50 16 43.7 16 36 C 16 28.3 22.3 22 30 22 H 74"
                    stroke="url(#footer-logo-gradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="86" cy="14" r="8.5" fill="#FE3423" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-white">
                  Sydney Creative Websites
                </span>
                {/* <span className="font-sans text-[9px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
                  Design & Development
                </span> */}
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-sans max-w-sm">
              We are a dedicated website design & development company. We build clean, modern, and reliable digital systems that load fast and help local businesses connect with actual people.
            </p>
            <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-sans">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>4.9 / 5 Stars Verified (248+ Reviews)</span>
            </div>
          </div>

          {/* Service Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Company Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Bespoke Web Design</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Heads-Up eCommerce Stores</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Custom WordPress Setup</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Mobile Responsiveness Tuning</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Sydney Search Optimization</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Uptime Maintenance Services</button></li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onCtaClick('home')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => onCtaClick('services')} className="hover:text-white transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => onCtaClick('portfolio')} className="hover:text-white transition-colors cursor-pointer">Our Portfolio</button></li>
              <li><button onClick={() => onCtaClick('process')} className="hover:text-white transition-colors cursor-pointer">Our Process</button></li>
              <li><button onClick={() => onCtaClick('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => onCtaClick('pricing')} className="hover:text-white transition-colors cursor-pointer">Scope Pricing</button></li>
              <li><button onClick={() => onCtaClick('blog')} className="hover:text-white transition-colors cursor-pointer">Digital Blog</button></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Contact Sydney HQ
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                <span>160-202 George St, Redfern NSW 2016</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                <a href="tel:+61468147302" className="hover:text-white transition-colors">
                  0468 147 302
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                <a href="mailto:hello@sydneywebsiteco.com.au" className="hover:text-white transition-colors">
                  hello@sydneywebsiteco.com.au
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Technical SEO Index & Sitemap simulation footer */}
        <div className="pt-12 border-t border-slate-800/60 mt-16 space-y-10 ">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-500 font-sans">
            
            {/* Left SEO Column (Keywords) */}
            <div className="lg:col-span-8 space-y-8">
              
              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] mb-3">
                  🎯 Primary Search Intent Keywords (Transactional)
                </span>
                <div className="flex flex-wrap gap-1.5 font-medium">
                  {[
                    { text: 'web design sydney', id: 'web-design' },
                    { text: 'website design sydney', id: 'web-design' },
                    { text: 'web designer sydney', id: 'web-design' },
                    { text: 'website designer sydney', id: 'web-design' },
                    { text: 'sydney web design agency', id: 'web-design' },
                    { text: 'website development sydney', id: 'development' },
                    { text: 'custom website design sydney', id: 'web-design' },
                    { text: 'business website design sydney', id: 'web-design' },
                    { text: 'small business web design sydney', id: 'web-design' },
                    { text: 'affordable web design sydney', id: 'web-design' },
                    { text: 'professional web design sydney', id: 'web-design' },
                    { text: 'website design company sydney', id: 'web-design' },
                    { text: 'web development company sydney', id: 'development' },
                    { text: 'wordpress developer sydney', id: 'development' },
                    { text: 'wordpress web design sydney', id: 'development' }
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => onOpenLandingPage(item.id)}
                      className="px-2.5 py-1 bg-slate-800/80 text-slate-400 rounded-md hover:text-white hover:bg-slate-750 transition-colors text-[10px] cursor-pointer"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] mb-3">
                  🔍 Commercial Investigation Keywords
                </span>
                <div className="flex flex-wrap gap-1.5 font-medium">
                  {[
                    { text: 'best web design agency sydney', id: 'web-design' },
                    { text: 'top web designers sydney', id: 'web-design' },
                    { text: 'best website developers sydney', id: 'development' },
                    { text: 'website design services sydney', id: 'web-design' },
                    { text: 'creative web agency sydney', id: 'web-design' },
                    { text: 'custom website developers sydney', id: 'development' },
                    { text: 'website redesign sydney', id: 'web-design' },
                    { text: 'ecommerce website design sydney', id: 'ecommerce' },
                    { text: 'responsive web design sydney', id: 'web-design' },
                    { text: 'SEO web design sydney', id: 'seo' }
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => onOpenLandingPage(item.id)}
                      className="px-2.5 py-1 bg-slate-800/80 text-slate-400 rounded-md hover:text-white hover:bg-slate-750 transition-colors text-[10px] cursor-pointer"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] mb-3">
                  💡 Long-Tail Keywords (High Conversion Leads)
                </span>
                <div className="flex flex-wrap gap-1.5 font-medium">
                  {[
                    { text: 'website designer for small business sydney', id: 'web-design' },
                    { text: 'affordable website design for startups sydney', id: 'web-design' },
                    { text: 'custom wordpress website sydney', id: 'development' },
                    { text: 'website redesign services sydney', id: 'web-design' },
                    { text: 'website design and seo packages sydney', id: 'seo' },
                    { text: 'hire web designer in sydney', id: 'web-design' },
                    { text: 'web development agency for local businesses sydney', id: 'development' },
                    { text: 'professional business website design sydney', id: 'web-design' },
                    { text: 'website maintenance services sydney', id: 'development' },
                    { text: 'website design company near me sydney', id: 'web-design' }
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => onOpenLandingPage(item.id)}
                      className="px-2.5 py-1 bg-slate-800/80 text-slate-400 rounded-md hover:text-white hover:bg-slate-750 transition-colors text-[10px] cursor-pointer"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right SEO Column (Services & Location suburb pages) */}
            <div className="lg:col-span-4 space-y-8">
              
              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] mb-3">
                  💻 Service-Based Landing Pages
                </span>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-400">
                  <button onClick={() => onOpenLandingPage('web-design')} className="flex items-center space-x-1.5 p-2 bg-slate-800/50 hover:bg-slate-850 hover:text-white rounded-lg cursor-pointer text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>Web Design</span>
                  </button>
                  <button onClick={() => onOpenLandingPage('development')} className="flex items-center space-x-1.5 p-2 bg-slate-800/50 hover:bg-slate-850 hover:text-white rounded-lg cursor-pointer text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                    <span>Development</span>
                  </button>
                  <button onClick={() => onOpenLandingPage('seo')} className="flex items-center space-x-1.5 p-2 bg-slate-800/50 hover:bg-slate-850 hover:text-white rounded-lg cursor-pointer text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>SEO Services</span>
                  </button>
                  <button onClick={() => onOpenLandingPage('ecommerce')} className="flex items-center space-x-1.5 p-2 bg-slate-800/50 hover:bg-slate-850 hover:text-white rounded-lg cursor-pointer text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>eCommerce</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] mb-3">
                  📍 Local Suburb SEO Landing Pages
                </span>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-400">
                  {[
                    { label: 'web design parramatta', id: 'parramatta' },
                    { label: 'web designer north sydney', id: 'north-sydney' },
                    { label: 'website design surry hills', id: 'surry-hills' },
                    { label: 'web design western sydney', id: 'western-sydney' },
                    { label: 'website developer eastern suburbs sydney', id: 'eastern-suburbs' },
                    { label: 'web design inner west sydney', id: 'inner-west' }
                  ].map((sub, i) => (
                    <button
                      key={i}
                      onClick={() => onOpenLandingPage(sub.id)}
                      className="flex items-center space-x-1.5 p-2 bg-slate-800/50 hover:bg-slate-850 hover:text-white rounded-lg cursor-pointer text-left"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-sky shrink-0" />
                      <span className="truncate">{sub.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/40 p-4.5 rounded-2xl border border-slate-800 space-y-2 text-[10px] leading-relaxed">
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[9px]">
                  ⚙️ Active Technical SEO Validations
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-slate-400 font-semibold">
                  <div className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>LocalBusiness Schema</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>JSON-LD Maps Code</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>FAQ Microdata Schema</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>WCAG AA Accessible</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800/80 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="font-sans">
            &copy; 2026 Sydney Creative Websites. All rights reserved. Registered ABN 36 663 494 077.
          </p>
          <p className="flex items-center space-x-1.5 font-sans">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Sydney, Australia</span>
            <span>•</span>
            <span className="text-slate-500">100% Core Web Vitals Approved</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
