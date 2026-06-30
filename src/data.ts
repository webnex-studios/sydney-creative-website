import { Service, Project, ProcessStep, Testimonial, FAQ } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design Sydney',
    description: 'Providing the best website design Sydney has to offer. We design custom, friendly, and affordable web design Sydney solutions for small businesses to build authentic brand trust.',
    longDescription: 'We believe a great website should tell your story clearly and look amazing doing it. As a premium Sydney web design agency, we build every custom website design Sydney from scratch to suit your exact needs, ensuring it loads instantly, works beautifully on mobile, and guides visitors naturally to get in touch with you.',
    features: [
      'Tailored, unique designs (No cheap templates)',
      'Clear, friendly layouts engineered for small business web design Sydney solutions',
      'Extremely fast load times with perfect responsive web design Sydney standards',
      'Professional web design Sydney layouts optimized for tablets and laptops',
      'Carefully crafted touches and gentle transitions',
      'Fully accessible and easy-to-read layout structures'
    ],
    iconName: 'Layout',
    priceEstimate: 'From $500 AUD',
    timeframe: '3 - 4 Weeks'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website Design Sydney',
    description: 'Premium eCommerce website design Sydney platforms. Blazing fast online shops with secure Australian checkouts built to turn local traffic into paying customers.',
    longDescription: 'We build premium online stores that you can actually manage yourself. From smooth checkout screens that stop cart abandonment, to fast search and simple inventory managers, we create a storefront that keeps customers coming back and is easy to run.',
    features: [
      'Frictionless checkouts that prevent lost sales',
      'Easy tools to add products, adjust pricing, and track stock',
      'Secure Australian payment options (Stripe, Afterpay, Apple Pay)',
      'Smart search filters so clients find products instantly',
      'Gentle reminders for customers who leave items in their cart',
      'Friendly customer dashboards and order history trackers'
    ],
    iconName: 'ShoppingBag',
    priceEstimate: 'From $1,000 AUD',
    timeframe: '4 - 6 Weeks'
  },
  {
    id: 'wordpress',
    title: 'WordPress Web Design Sydney',
    description: 'Custom WordPress web design Sydney builds coded by a dedicated local WordPress developer Sydney. Fast, lightweight, and completely easy for your team to edit.',
    longDescription: 'We build fast, secure, custom WordPress sites without the heavy plugins or slow pre-made builders that break. Our experienced WordPress developer Sydney team codes templates from scratch, providing simple blocks to edit content in minutes.',
    features: [
      'Custom block templates tailored to your regular updates',
      'Fast, secure code that protects your site and client details',
      'Super easy updates for text, team bios, blogs, and images',
      'Daily automated backups so your work is always safe',
      'Clean search structures so Google can read your pages',
      'Custom fields designed for your specific business information'
    ],
    iconName: 'Layers',
    priceEstimate: 'From $1,500 AUD',
    timeframe: '3 - 4 Weeks'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign Sydney',
    description: 'We offer reliable website redesign Sydney services. Give your slow or outdated platform a beautiful, responsive facelift while preserving 100% of your SEO rankings.',
    longDescription: 'If your current website feels dated, slow, or is no longer representing your business well, we can rebuild it. We give it a beautiful new look and improve the flow, while carefully keeping all your hard-earned Google rankings and authority intact.',
    features: [
      'Modern, refreshed visual design and clean layout',
      'Careful planning to protect your existing search positions',
      'Optimized page speeds that keep visitors on your site',
      'Simple layouts that turn more visitors into phone calls',
      'Clean organization of your existing pages and articles',
      'Frictionless transfer of your historical content and files'
    ],
    iconName: 'RefreshCw',
    priceEstimate: 'From $2,000 AUD',
    timeframe: '2 - 3 Weeks'
  },
  {
    id: 'seo-services',
    title: 'SEO Web Design Sydney',
    description: 'Bespoke SEO web design Sydney structures combining professional website development Sydney standards with advanced technical SEO optimization to scale your business.',
    longDescription: 'Getting visitors is only half the battle. They need to be the right visitors. We focus on local Sydney search terms and useful, answering content that shows potential clients you are the absolute expert in your field.',
    features: [
      'Research into what your actual customers are searching for',
      'Clean coding standards that help Google read your pages easily',
      'Better visibility on local Google Maps listings',
      'Clear, search-friendly titles and site descriptions',
      'Honest, premium links from trusted Australian websites',
      'Simple monthly updates with clear, readable progress charts'
    ],
    iconName: 'TrendingUp',
    priceEstimate: 'From $1,500 / month',
    timeframe: 'Ongoing'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance Sydney',
    description: 'Keep your website secure, backed up, and running fast. We handle updates and small edits so you can focus on growing your business.',
    longDescription: 'Think of us as your in-house web team. We watch over your site around the clock to prevent security issues, handle weekly software updates safely, and make any quick text or image changes for you whenever you need.',
    features: [
      'Constant monitoring to ensure your site is always online',
      'Daily off-site backups so your business is always safe',
      'Regular updates for core platforms, themes, and plugins',
      'Help from a friendly Sydney team on phone or email',
      'Secure firewalls, malware sweeps, and safety audits',
      'Dedicated monthly designer time for your content adjustments'
    ],
    iconName: 'ShieldCheck',
    priceEstimate: 'From $250 / month',
    timeframe: 'Ongoing'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bondi-esthetics',
    title: 'Bondi Esthetics Wellness Clinic',
    category: 'website',
    categoryLabel: 'Website Design & Branding',
    description: 'A luxurious, responsive web experience for a premium beauty clinic in Bondi, resulting in a dramatic increase in high-ticket bookings.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Online Bookies', value: '+142%' },
    clientName: 'Bondi Esthetics',
    caseStudy: {
      challenge: 'Bondi Esthetics had a slow, template-based website that failed to reflect their high-end clinic experience. Potential clients seeking luxury skin procedures were leaving due to confusing booking systems and sub-optimal mobile navigation.',
      solution: 'We built an elegant, fluid website using custom micro-interactions and soft color tones. We integrated a seamless, frictionless booking system that reduced the booking path from five screens to two, paired with a gorgeous interactive treatment selector.',
      results: [
        '142% increase in online appointment bookings in the first 30 days.',
        'Average session duration increased by 2.5 minutes.',
        'Bounce rate decreased from 68% to 24%.'
      ]
    }
  },
  {
    id: 'sydney-hills-organic',
    title: 'Sydney Hills Organic Grocers',
    category: 'ecommerce',
    categoryLabel: 'Headless Ecommerce Store',
    description: 'A lightning-fast, modern Shopify headless eCommerce store with lightning-fast catalog search, local delivery builder, and subscription boxes.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Annual Revenue', value: '$1.4M AUD' },
    clientName: 'Sydney Hills Grocers',
    caseStudy: {
      challenge: 'Their existing Shopify site had over 2,000 grocery SKUs, making page load speeds sluggish on mobile. This was severely hurting cart conversion rates during the morning commute rush hours.',
      solution: 'We engineered a headless eCommerce experience using Vite/React as the storefront and Shopify as the robust back-office database. We implemented lightning-fast local cache queries and an intuitive multi-add shopping cart widget.',
      results: [
        'Page loading speed dropped from 4.8 seconds to 0.4 seconds.',
        'Checkout abandonment rate decreased by 34%.',
        '84% increase in repeat subscription box orders.'
      ]
    }
  },
  {
    id: 'apex-legal-partners',
    title: 'Apex Legal Partners Sydney',
    category: 'wordpress',
    categoryLabel: 'Custom WordPress Development',
    description: 'A highly authoritative, high-performing lead generation engine for a premier commercial litigation firm in Sydney CBD.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Inbound Enquiries', value: '+240%' },
    clientName: 'Apex Legal Partners',
    caseStudy: {
      challenge: 'Apex Legal was paying heavily for Google Ads but their landing pages looked outdated, static, and lacked trust indicators. They struggled to convert corporate traffic looking for commercial representation.',
      solution: 'We built a bespoke corporate WordPress platform focusing on professional typography, rich partner bios, interactive case law records, and highly visible, trustworthy call-to-actions targeting Sydney business owners.',
      results: [
        '240% increase in qualified corporate litigation leads via on-page forms.',
        'Achieved a perfect 100/100 Mobile PageSpeed score on Core Web Vitals.',
        'Seamless integration with their Salesforce CRM for immediate lead routing.'
      ]
    }
  },
  {
    id: 'coastal-retreats',
    title: 'Coastal Retreats Australia',
    category: 'redesign',
    categoryLabel: 'Brand & Website Redesign',
    description: 'A striking luxury accommodation website that highlights premium properties in Byron Bay and Palm Beach through immersive visual storytelling.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Direct Bookings', value: '+85%' },
    clientName: 'Coastal Retreats',
    caseStudy: {
      challenge: 'This premier holiday rental platform was losing substantial revenue to third-party OTA fees (Airbnb, Booking.com) because their proprietary booking channel was buggy and visually underwhelming.',
      solution: 'We crafted a premium, media-rich redesign featuring stunning fluid layouts, video property hero headers, an integrated custom calendars booking widget, and an optimized review social proof section.',
      results: [
        '85% increase in direct commission-free bookings via the new channel.',
        'Successfully salvaged $45,000+ AUD in annual commission fees.',
        'Stunning immersive design praised in Australian Design Review.'
      ]
    }
  },
  {
    id: 'harbour-capital',
    title: 'Harbour Capital Advisory Group',
    category: 'seo',
    categoryLabel: 'SEO & Content Campaign',
    description: 'An aggressive organic search and technical SEO campaign that positioned a Sydney boutique wealth manager on page one of Google.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Organic Traffic', value: '3.8x Growth' },
    clientName: 'Harbour Capital',
    caseStudy: {
      challenge: 'Harbour Capital was completely invisible online for keywords like "Wealth Management Sydney" and "Sydney Financial Advisor", losing valuable local high-net-worth clients to competitors.',
      solution: 'We conducted an intensive technical audit and updated their semantic HTML markup. We launched an on-page content strategy targeting transactional intent keywords and earned secure, highly authoritative backlinks.',
      results: [
        'Ranked #1 for "Sydney wealth advisory" and #3 for "financial advisor Sydney".',
        '3.8x increase in monthly organic website visitors.',
        'Over 35 high-net-worth customer enquiries received within 90 days.'
      ]
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Consultation',
    duration: 'Week 1',
    description: 'We sit down with you to deeply research your brand, analyze your competitors, discover high-value search keywords, and map out your strategic business goals.',
    deliverables: [
      'Interactive project scope session',
      'Comprehensive competitor analysis matrix',
      'Targeted keyword & user intent report',
      'Clear, detailed sitemap proposal'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    number: 2,
    title: 'Conversion Strategy',
    duration: 'Week 2',
    description: 'We wireframe the layout to define visual hierarchy, craft compelling copy, map out perfect user journeys, and establish lead-capture opportunities.',
    deliverables: [
      'Interactive UX wireframe maps',
      'Frictionless call-to-action strategy',
      'Australian-optimized SEO copywriting',
      'High-level technical specifications list'
    ],
    color: 'from-sky-500 to-blue-600'
  },
  {
    number: 3,
    title: 'High-Fidelity Design',
    duration: 'Week 2-3',
    description: 'We transform wireframes into a breathtaking visual masterpiece. We build bespoke custom Figma designs tailored specifically to elevate your brand presence.',
    deliverables: [
      'Complete, modern pixel-perfect desktop mockups',
      'Highly responsive mobile-first user interfaces',
      'Custom style guides (typography, colors, iconography)',
      'Interactive clickable Figma prototype preview'
    ],
    color: 'from-violet-500 to-purple-600'
  },
  {
    number: 4,
    title: 'Custom Development',
    duration: 'Week 3-4',
    description: 'Our Sydney developers hand-code your layouts using modern, clean standards. No heavy plugins, slow builders, or unnecessary code.',
    deliverables: [
      'Fast, secure, clean-coded custom React/HTML5 architecture',
      'Pixel-perfect responsive screen builds across all devices',
      'Integrated Schema markup & meta tags for optimal SEO',
      'Aesthetic interactive hover micro-animations'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    number: 5,
    title: 'Testing & Launch',
    duration: 'Week 4',
    description: 'We run your site through a rigorous 100-point optimization and cross-browser testing checklist. We optimize Core Web Vitals for perfect speed scores.',
    deliverables: [
      'Comprehensive Google PageSpeed validation (90+)',
      'Cross-browser & cross-device compatibility testing',
      'Full technical SEO configuration & sitemap generation',
      'Seamless, secure domain routing & live launch support'
    ],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    number: 6,
    title: 'Growth & Optimization',
    duration: 'Ongoing',
    description: 'Launching is just the beginning. We continually monitor performance, tweak call-to-actions, and scale your content to double your enquiries.',
    deliverables: [
      'Interactive monthly visitor performance reports',
      'Continuous search keyword optimization tweaks',
      'Proactive security, updates & uptime monitoring',
      'Dedicated local Sydney support and growth hours'
    ],
    color: 'from-pink-500 to-rose-600'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Sterling',
    role: 'Managing Director',
    company: 'Apex Legal Partners',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    review: 'Sydney Creative Websites rebuilt our commercial law website and completely turned our business around. The site is incredibly clean, loads instantly, and we are getting more than triple the leads we used to. Our clients keep telling us how polished and professional it looks.',
    rating: 5,
    service: 'Custom WordPress & Lead Gen'
  },
  {
    id: 'test-2',
    name: 'Sophia Chen',
    role: 'Founder & CEO',
    company: 'Bondi Esthetics Wellness',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    review: 'I am so glad we chose Sydney Creative Websites. They captured the luxurious look of our Bondi clinic perfectly and made it so simple for clients to book treatment online. Our bookings went up 142% in the first month and the mobile design is just gorgeous!',
    rating: 5,
    service: 'Website Design & Booking Engine'
  },
  {
    id: 'test-3',
    name: 'Nicholas Croft',
    role: 'Operations Director',
    company: 'Sydney Hills Grocers',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    review: 'Our legacy e-commerce site was slow and clunky. The team created a super fast headless e-commerce store that is visually stunning and loads in under half a second. Our checkout conversions immediately spiked and our subscription sales grew 84%. Outstanding team!',
    rating: 5,
    service: 'Headless Shopify Ecommerce'
  },
  {
    id: 'test-4',
    name: 'Elena Rostova',
    role: 'Marketing Director',
    company: 'Coastal Retreats Australia',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    review: 'Working with Sydney Creative Websites was an absolute pleasure. They redesigned our entire website from the ground up and built a direct booking system that saved us thousands in third-party fees. Their attention to detail is remarkable.',
    rating: 5,
    service: 'Luxury Accommodation Rebranding'
  },
  {
    id: 'test-5',
    name: 'David Thornton',
    role: 'Senior Partner',
    company: 'Harbour Capital Advisory',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    review: 'Their SEO knowledge is spectacular. Within just 12 weeks of our campaign launch, we claimed the number one ranking on Google for our primary corporate wealth advisory search terms. Our client acquisition cost has plummeted since the new site went live.',
    rating: 5,
    service: 'SEO & Technical Optimization'
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How much does a custom website design project cost?',
    answer: 'Every project is built completely custom from scratch, meaning prices vary based on your specific needs. Generally, our custom brand marketing websites, custom WordPress portals, and high-performance eCommerce platforms start from $500 AUD. We provide fixed-price quotes with complete breakdown estimates prior to any commitment.',
    category: 'pricing'
  },
  {
    id: 'faq-2',
    question: 'How long does the entire website design and build process take?',
    answer: 'On average, a custom-designed marketing website takes 3 to 4 weeks from discovery to final sign-off. High-volume eCommerce projects and custom headless builds typically take between 4 to 6 weeks. If you have an urgent deadline (such as a company launch or marketing campaign), let us know and we can often offer an expedited schedule.',
    category: 'process'
  },
  {
    id: 'faq-3',
    question: 'Do you offer ongoing SEO services to keep us on page one of Google?',
    answer: 'Absolutely. We do not treat SEO as an afterthought. Every single website we build includes professional On-Page and Technical SEO setup by default (semantic HTML5, optimized Core Web Vitals, JSON-LD schemas, alt text, and redirect planning). We also offer active Monthly SEO Growth Packages to steadily build high-authority links, create custom blog content, and scale your local Sydney map visibility.',
    category: 'seo'
  },
  {
    id: 'faq-4',
    question: 'Will I be able to easily update text, images, and content myself?',
    answer: 'Yes, 100%. We believe you should have complete ownership over your website. We configure simple, intuitive visual blocks (like custom Gutenberg grids or custom WordPress fields) so you can effortlessly add new portfolio items, update pricing, edit service lists, or publish blog articles without touch any code. We also provide a recorded custom video walkthrough guide demonstrating exactly how to update your specific site.',
    category: 'features'
  },
  {
    id: 'faq-5',
    question: 'What industries and business sizes do you specialize in?',
    answer: 'We help Australian businesses of all types grow, but we specialize in professional corporate services (law, finance, advisory), medical & wellness clinics, high-end construction & architecture builders, local service specialists, and growing boutique retail eCommerce brands seeking a high-converting digital storefront.',
    category: 'features'
  },
  {
    id: 'faq-6',
    question: 'Do you provide local support and web hosting after launching?',
    answer: 'Yes, we provide premium local support. Our technical servers are hosted on high-performance Cloud Run and Google Cloud infrastructure located right here in Sydney for the fastest possible local loading times. Our ongoing Maintenance Packages include 24/7 uptime monitoring, daily off-site cloud backups, weekly theme & security patch audits, and dedicated developer support hours for any changes.',
    category: 'process'
  }
];
