import React from 'react';
import { motion } from 'motion/react';
import { 
  X, CheckCircle2, ShieldCheck, Zap, ArrowRight, MapPin, 
  Sparkles, Award, Star, Compass, Terminal, Cpu 
} from 'lucide-react';

export interface LandingPageData {
  id: string;
  title: string;
  subtitle: string;
  metaHeading: string;
  description: string;
  keywords: string[];
  features: string[];
  localFocus: string;
  investmentRange: string;
  timeline: string;
}

const LANDING_PAGES: Record<string, LandingPageData> = {
  // Service-Based Landing Pages
  'web-design': {
    id: 'web-design',
    title: 'Custom Web Design Sydney',
    subtitle: 'Responsive Website Design & Conversion-Focused UI/UX Solutions',
    metaHeading: 'Premium Custom Web Design Services',
    description: 'We craft high-performing, elegant digital platforms. By combining strategic UI/UX design with responsive web methodologies, our custom web design Sydney solutions ensure your brand makes a pristine first impression and drives actual business enquiries.',
    keywords: [
      'custom web design sydney',
      'responsive website design sydney',
      'UI UX design sydney',
      'landing page design sydney',
      'best web design agency sydney',
      'top web designers sydney'
    ],
    features: [
      'Bespoke visual wireframes in Figma tailored to your branding guidelines',
      '100% responsive website design for perfect rendering on mobile & tablet devices',
      'High-conversion landing page design to lower acquisition costs',
      'Elegant hover micro-interactions & smooth scroll triggers via motion framework',
      'Fully compliant semantic HTML structure ensuring perfect screen reader accessibility'
    ],
    localFocus: 'Designed in our Sydney Head Office to meet the expectations of modern Australian clients.',
    investmentRange: 'From $4,500 AUD',
    timeline: '3 - 4 Weeks'
  },
  'development': {
    id: 'development',
    title: 'Website Development Sydney',
    subtitle: 'High-Performance Custom Web Development & Clean Code Engineering',
    metaHeading: 'Bespoke Website Development Company',
    description: 'Our web development company Sydney specialises in building lightweight, hyper-fast, and secure systems. Whether you require a custom WordPress build or a tailored React platform, we avoid slow pre-made builders to ensure your site performs perfectly on Google.',
    keywords: [
      'website development sydney',
      'custom web development sydney',
      'wordpress development sydney',
      'ecommerce development sydney',
      'best website developers sydney',
      'custom website developers sydney'
    ],
    features: [
      'Hand-coded React, Vite, and semantic modern standard architectures',
      'Custom Gutenberg WordPress block development tailored to your team capabilities',
      'Lightning-fast server response times using static and dynamic route pre-rendering',
      'Enterprise-grade security firewalls and API protection modules',
      'Complete developer documentation and recorded video training support'
    ],
    localFocus: 'Engineered by professional Australian website developers adhering to 100% clean-code principles.',
    investmentRange: 'From $5,500 AUD',
    timeline: '3 - 5 Weeks'
  },
  'seo': {
    id: 'seo',
    title: 'SEO Sydney & Search Strategy',
    subtitle: 'Rank #1 on Google with Technical SEO, Local SEO & Small Business Growth',
    metaHeading: 'First-Page Google Search Optimization Services',
    description: 'Stop paying thousands for paid ads that stop when your budget runs out. Our custom-designed technical SEO Sydney services place your business on page one of Google for high-converting commercial intent search terms, driving organic calls day and night.',
    keywords: [
      'seo sydney',
      'technical seo sydney',
      'local seo sydney',
      'seo for small businesses sydney',
      'SEO web design sydney',
      'website design and seo packages sydney'
    ],
    features: [
      'In-depth local competitor keyword research targeting ready-to-buy search terms',
      'Structured schema markups (LocalBusiness, FAQ, Product schemas) for rich snippet features',
      'Optimized meta tags, custom title structures, and alt image text indices',
      'Google Maps listing (GBP) optimization for maximum local visibility',
      'Detailed monthly visual progress reports showing real ranking growth'
    ],
    localFocus: 'Specialised local search strategies focusing on Sydney metropolitan suburbs and business hubs.',
    investmentRange: 'From $1,500 / month',
    timeline: 'Ongoing Growth'
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'Ecommerce Website Design Sydney',
    subtitle: 'High-Converting Shopify & WooCommerce Storefronts Built for Sales',
    metaHeading: 'Dedicated Shopify & WooCommerce Developers',
    description: 'We design high-converting digital storefronts that make online shopping a true pleasure. As experienced Shopify developers Sydney and WooCommerce experts, we build friction-free checkout workflows that turn casual browsers into loyal brand advocates.',
    keywords: [
      'ecommerce website design sydney',
      'shopify developers sydney',
      'shopify web design sydney',
      'woocommerce development sydney',
      'ecommerce website agency sydney'
    ],
    features: [
      'Fully custom Shopify storefront design ensuring zero reliance on heavy pre-made themes',
      'Frictionless checkout page architecture to dramatically reduce shopping cart abandonment',
      'Full local Australian payment gateway setups (Stripe, Afterpay, Apple Pay, Google Pay)',
      'Smart faceted search filters & live inventory management integrations',
      'Bespoke automated customer email triggers for abandoned carts & shipping updates'
    ],
    localFocus: 'Engineered with premium Sydney payment processing configurations and local freight API integrations.',
    investmentRange: 'From $7,500 AUD',
    timeline: '4 - 6 Weeks'
  },

  // Location-Based Suburb Landing Pages
  'parramatta': {
    id: 'parramatta',
    title: 'Web Design Parramatta',
    subtitle: 'Professional Web Design & High-Converting Development for Western Sydney Businesses',
    metaHeading: 'Custom Web Designer Parramatta',
    description: 'Are you a local Western Sydney business looking to secure more clients? Our premium web design Parramatta team builds high-performing, lightning-fast, and trustworthy websites specifically optimized to attract ready-to-buy Western Sydney clients.',
    keywords: [
      'web design parramatta',
      'web design western sydney',
      'website designer for small business sydney',
      'affordable website design for startups sydney'
    ],
    features: [
      'Bespoke local business layouts tailored to professional Western Sydney consultancies & trades',
      'Hyper-fast mobile load speeds to capture customer calls on the move',
      'Local Parramatta SEO targeting high-value geographic customer queries',
      'Direct integration with Jane App, Timely, or custom Australian booking calendars',
      'Prism-clear typography and high-contrast professional designs'
    ],
    localFocus: 'Dedicated support for businesses in Parramatta CBD, Harris Park, Westmead, and surrounding Western Sydney suburbs.',
    investmentRange: 'From $4,000 AUD',
    timeline: '3 Weeks'
  },
  'north-sydney': {
    id: 'north-sydney',
    title: 'Web Designer North Sydney',
    subtitle: 'Corporate Website Development & Premium Creative Web Solutions',
    metaHeading: 'High-End Web Agency North Sydney',
    description: 'We serve corporate firms, medical specialists, and creative consultancies near the North Shore. Our specialized web designer North Sydney services design modern, authoritative corporate websites that capture attention, project trust, and scale smoothly.',
    keywords: [
      'web designer north sydney',
      'professional web design sydney',
      'website design company sydney',
      'creative web agency sydney'
    ],
    features: [
      'Sleek modern minimal layout schemes matching North Shore corporate standards',
      'High-authority partner & team bio layout cards to build immediate client trust',
      'Technical SEO configurations to dominate competitive financial & legal spaces',
      'Super-secure backend hosting systems with 100% Core Web Vitals rating',
      'Bespoke SVG animations and high-contrast editorial typography'
    ],
    localFocus: 'Focused support for firms in North Sydney CBD, Chatswood, St Leonards, and the lower North Shore.',
    investmentRange: 'From $4,500 AUD',
    timeline: '3 - 4 Weeks'
  },
  'surry-hills': {
    id: 'surry-hills',
    title: 'Website Design Surry Hills',
    subtitle: 'Bespoke Creative Web Design & Branding for Design-Forward Brands',
    metaHeading: 'Creative Web Agency Surry Hills',
    description: 'Surry Hills is the heart of Australian design. Our specialized website design Surry Hills service matches this creative standard, designing beautiful, visually rich websites that establish your business as a true industry tastemaker.',
    keywords: [
      'website design surry hills',
      'creative web agency sydney',
      'UI UX design sydney',
      'responsive web design sydney'
    ],
    features: [
      'Stunning artistic design concepts featuring modern layout rhythm and bold negative space',
      'Immersive full-screen media grids and custom vector illustrations',
      'Pixel-perfect typographic pairing focusing on modern geometric sans-serifs',
      'Frictionless lead-capture funnels disguised in elegant interactive components',
      'Optimized portfolio systems built to showcase premium case studies and properties'
    ],
    localFocus: 'Crafted for designers, galleries, hospitality providers, and startups located in the Surry Hills creative hub.',
    investmentRange: 'From $4,500 AUD',
    timeline: '3 - 4 Weeks'
  },
  'western-sydney': {
    id: 'western-sydney',
    title: 'Web Design Western Sydney',
    subtitle: 'Affordable, Premium Website Design & Local Growth Marketing',
    metaHeading: 'Local Business Web Designers Western Sydney',
    description: 'Dominate your local market with our expert web design Western Sydney capabilities. We construct robust business websites that project a polished corporate image, rank highly on Google Maps, and generate phone calls from high-value local suburbs.',
    keywords: [
      'web design western sydney',
      'small business web design sydney',
      'affordable web design sydney',
      'web development agency for local businesses sydney'
    ],
    features: [
      'High-converting, easy-to-use business contact modules & quotes systems',
      'Targeted local marketing configurations for regional Western Sydney searches',
      'Mobile-first responsive design matching the rapid growth of Western Sydney businesses',
      'Friendly local support with direct telephone lines to our Sydney helpdesk',
      'Safe WordPress and clean custom code platforms built with zero bloated plugins'
    ],
    localFocus: 'Proudly serving business owners across Penrith, Blacktown, Liverpool, Castle Hill, and Campbelltown.',
    investmentRange: 'From $3,500 AUD',
    timeline: '2 - 3 Weeks'
  },
  'eastern-suburbs': {
    id: 'eastern-suburbs',
    title: 'Website Developer Eastern Suburbs Sydney',
    subtitle: 'Premium Boutique eCommerce & Luxury Brand Web Design',
    metaHeading: 'Bespoke Website Developer Eastern Suburbs',
    description: 'We craft high-end web experiences for luxury clinics, boutique developers, and premium brands on the coast. Our specialized website developer Eastern Suburbs Sydney services blend luxury design sensibilities with blistering fast load times to attract high-ticket clients.',
    keywords: [
      'website developer eastern suburbs sydney',
      'professional business website design sydney',
      'custom website developers sydney',
      'custom website design sydney'
    ],
    features: [
      'Breathtaking editorial aesthetics with fluid transitions and soft color tones',
      'Optimized mobile treatment selectors and luxury ecommerce cart modules',
      'Integrated Google review social proof displays to project elite industry status',
      'Secure custom development engineered on React for instant loading times',
      'Direct, premium customer support from our principal web designers'
    ],
    localFocus: 'Optimized for high-end brands in Double Bay, Bondi, Paddington, Woollahra, and Vaucluse.',
    investmentRange: 'From $5,000 AUD',
    timeline: '3 - 4 Weeks'
  },
  'inner-west': {
    id: 'inner-west',
    title: 'Web Design Inner West Sydney',
    subtitle: 'Human-Centric & Accessible Web Design Services for Local Enterprises',
    metaHeading: 'Local Web Designer Inner West Sydney',
    description: 'Build a trustworthy, modern digital platform with our specialized web design Inner West Sydney program. We hand-code elegant, reliable sites that tell your unique story, comply fully with modern accessibility standards, and perform exceptionally on Google.',
    keywords: [
      'web design inner west sydney',
      'website designer for small business sydney',
      'website maintenance services sydney',
      'hire web designer in sydney'
    ],
    features: [
      'Friendly human-first layouts designed to build direct personal connection',
      'Fully responsive, accessible coding matching modern WCAG guidelines',
      'On-page Technical SEO structure prioritizing organic local business searches',
      'Ongoing Sydney-based website maintenance and security backup services',
      'Straightforward pricing plans with absolute transparency from day one'
    ],
    localFocus: 'Proudly supporting business owners in Newtown, Balmain, Marrickville, Glebe, and Leichhardt.',
    investmentRange: 'From $4,000 AUD',
    timeline: '3 Weeks'
  }
};

interface SEOLandingPageProps {
  pageId: string;
  onClose: () => void;
  onBookClick: (serviceId?: string) => void;
}

export default function SEOLandingPage({ pageId, onClose, onBookClick }: SEOLandingPageProps) {
  const data = LANDING_PAGES[pageId];

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-0 sm:p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl bg-white sm:rounded-3xl shadow-2xl border border-slate-100/80 overflow-hidden flex flex-col min-h-screen sm:min-h-0 sm:max-h-[92vh]"
      >
        {/* Top bar */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-[10px] bg-blue-100 text-brand-blue px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              {data.metaHeading}
            </span>
            <div className="hidden sm:flex space-x-1.5 items-center text-[10px] text-slate-400 font-mono">
              <span>•</span>
              <MapPin className="w-3 h-3" />
              <span>Sydney, NSW</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/50 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer flex items-center space-x-1"
          >
            <span className="text-xs font-bold font-sans pr-1 hidden sm:inline">Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Core Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 flex-1">
          
          {/* Hero Header */}
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-blue mr-1" />
              <span>Optimized Local Search Results</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg font-sans font-bold text-slate-500 leading-snug">
              {data.subtitle}
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet rounded-full pt-1" />
          </div>

          {/* Intro Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">
                Our Strategic Approach
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {data.description}
              </p>
              
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100 space-y-3.5">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center">
                  <Compass className="w-4 h-4 mr-2 text-brand-blue" />
                  Target Intent Focus Areas
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  We specialize in tailoring website workflows to dominate local search keywords. This page is optimized for local search engines and represents a dedicated digital blueprint targeting these verified high-volume keywords:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.keywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white text-brand-blue border border-slate-200/80 rounded-lg text-[10px] font-mono font-bold hover:border-brand-blue hover:text-brand-indigo transition-colors">
                      "{kw}"
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-2xl text-white space-y-4 shadow-lg shadow-indigo-950/10">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-sky block">
                  SERVICE ESTIMATE
                </span>
                <div className="space-y-1">
                  <span className="block text-slate-400 text-[10px] font-sans">Pricing Baseline</span>
                  <span className="text-lg font-bold font-display">{data.investmentRange}</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-slate-400 text-[10px] font-sans">Averages Delivery</span>
                  <span className="text-lg font-bold font-display">{data.timeline}</span>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-2 text-[10px] text-indigo-200 leading-relaxed font-sans">
                  <div className="flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                    <span>Fixed Scope Agreement</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-3.5 h-3.5 mr-1.5 text-brand-sky shrink-0" />
                    <span>100% Mobile Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Included Features Checklist */}
          <div className="space-y-5">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">
              What is included in this local campaign package
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-relaxed font-sans">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee / Geographic details */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-2xl border border-blue-100/60 flex items-start space-x-4">
            <Award className="w-6 h-6 text-brand-blue shrink-0 mt-0.5 animate-pulse" />
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-display">
                Geographic Focus area
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-sans">
                {data.localFocus} Our physical presence in Sydney allows us to support you in-person, align with local guidelines, and deliver a service level that template agencies cannot match.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer (Cta triggers) */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 shrink-0">
          <button
            onClick={() => {
              onClose();
              // Determine if pageId matches any service
              const serviceMap: Record<string, string> = {
                'web-design': 'web-design',
                'development': 'wordpress', // fallback
                'ecommerce': 'ecommerce',
                'seo': 'seo-services'
              };
              onBookClick(serviceMap[pageId]);
            }}
            className="flex-1 inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet hover:from-brand-indigo hover:to-brand-violet shadow-md cursor-pointer group"
          >
            <span>Instantly Plan Your Web Estimate & Save</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onClose}
            className="px-6 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Return to Homepage
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
}
