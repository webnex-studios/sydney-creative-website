import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';

export type LegalPageId = 'terms' | 'privacy';

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageData {
  id: LegalPageId;
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

const LEGAL_PAGES: Record<LegalPageId, LegalPageData> = {
  terms: {
    id: 'terms',
    badge: 'Terms & Conditions',
    title: 'Terms & Conditions',
    lastUpdated: 'July 2026',
    intro:
      'These Terms & Conditions govern your use of the Sydney Creative Websites website and the engagement of our web design, development, SEO, and maintenance services. By using this website or engaging our services, you agree to be bound by these terms.',
    sections: [
      {
        heading: '1. About Us',
        paragraphs: [
          'Sydney Creative Websites (ABN 36 663 494 077) is a website design and development company located at 160-202 George St, Redfern NSW 2016, Australia. You can contact us at Info@sydneycreativewebsites.com.au or on 0468 147 302.'
        ]
      },
      {
        heading: '2. Our Services',
        paragraphs: [
          'We provide custom website design, website development, WordPress builds, eCommerce platforms, website redesigns, search engine optimisation (SEO), and ongoing website maintenance services.'
        ],
        bullets: [
          'All projects are scoped and quoted individually before any work begins.',
          'Quotes are fixed-price and itemised, valid for 30 days from the date of issue.',
          'Any work outside the agreed scope will be quoted separately before proceeding.'
        ]
      },
      {
        heading: '3. Quotes, Payments & Pricing',
        bullets: [
          'All prices are listed in Australian Dollars (AUD) and are exclusive of GST unless stated otherwise.',
          'Projects typically require a deposit before work commences, with the balance payable on completion and prior to the website going live.',
          'Ongoing services (such as SEO or maintenance packages) are billed monthly in advance and may be cancelled with 30 days written notice.',
          'Invoices are payable within 7 days unless otherwise agreed in writing.'
        ]
      },
      {
        heading: '4. Client Responsibilities',
        bullets: [
          'You agree to supply content, branding assets, feedback, and approvals in a timely manner so the project can progress on schedule.',
          'You warrant that any content you provide (text, images, logos, media) does not infringe the intellectual property rights of any third party.',
          'You are responsible for the accuracy of information published on your website once you have approved it.'
        ]
      },
      {
        heading: '5. Intellectual Property',
        bullets: [
          'Upon receipt of full payment, ownership of the final website design and custom code developed for your project transfers to you.',
          'We retain the right to display completed work in our portfolio and marketing materials unless you request otherwise in writing.',
          'Third-party assets (such as stock imagery, fonts, plugins, or licensed software) remain subject to their own licence terms.'
        ]
      },
      {
        heading: '6. Third-Party Services',
        paragraphs: [
          'Websites commonly rely on third-party services such as domain registrars, hosting providers, payment gateways, and plugins. While we configure and integrate these services with care, we are not responsible for outages, pricing changes, or policy changes imposed by third-party providers.'
        ]
      },
      {
        heading: '7. Warranties & Limitation of Liability',
        paragraphs: [
          'Nothing in these terms excludes, restricts, or modifies any consumer guarantee, right, or remedy available under the Australian Consumer Law that cannot lawfully be excluded.',
          'To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services is limited to the amount paid by you for the services giving rise to the claim. We are not liable for any indirect or consequential loss, including loss of profits, revenue, or data.'
        ]
      },
      {
        heading: '8. Project Delays & Termination',
        bullets: [
          'Either party may terminate a project engagement with written notice if the other party materially breaches these terms and fails to remedy the breach within 14 days.',
          'If a project is terminated by you part-way through, work completed to date will be invoiced and payable, and the deposit is non-refundable.',
          'Projects left inactive for more than 60 days due to outstanding client content or approvals may be closed, with completed work invoiced accordingly.'
        ]
      },
      {
        heading: '9. Website Content & Acceptable Use',
        paragraphs: [
          'You must not use any website or service we deliver for unlawful purposes, including publishing misleading, defamatory, or infringing material, or distributing malware or spam.'
        ]
      },
      {
        heading: '10. Changes to These Terms',
        paragraphs: [
          'We may update these Terms & Conditions from time to time. The version published on this website at the time of your engagement applies to your project. Material changes to ongoing services will be communicated in writing.'
        ]
      },
      {
        heading: '11. Governing Law',
        paragraphs: [
          'These terms are governed by the laws of New South Wales, Australia. Both parties submit to the non-exclusive jurisdiction of the courts of New South Wales.'
        ]
      },
      {
        heading: '12. Contact',
        paragraphs: [
          'If you have any questions about these Terms & Conditions, contact us at Info@sydneycreativewebsites.com.au, call 0468 147 302, or write to 160-202 George St, Redfern NSW 2016.'
        ]
      }
    ]
  },
  privacy: {
    id: 'privacy',
    badge: 'Privacy Policy',
    title: 'Privacy Policy',
    lastUpdated: 'July 2026',
    intro:
      'Sydney Creative Websites (ABN 36 663 494 077) is committed to protecting your privacy. This policy explains how we collect, use, store, and disclose your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).',
    sections: [
      {
        heading: '1. Information We Collect',
        bullets: [
          'Contact details you provide through our forms, such as your name, business name, email address, and phone number.',
          'Project information you share with us, such as your budget, timeline, and project requirements.',
          'Communication records, including emails and call notes relating to your enquiry or project.',
          'Technical data collected automatically when you browse this site, such as browser type, device, pages visited, and approximate location.'
        ]
      },
      {
        heading: '2. How We Collect Information',
        bullets: [
          'Directly from you, when you submit an enquiry or proposal request form, email us, or call us.',
          'Automatically, through cookies and standard analytics tools when you use this website.'
        ]
      },
      {
        heading: '3. How We Use Your Information',
        bullets: [
          'To respond to your enquiries and prepare proposals or quotes you have requested.',
          'To deliver, manage, and support the services you engage us for.',
          'To send invoices, project updates, and service communications.',
          'To improve our website, services, and customer experience.',
          'We do not sell, rent, or trade your personal information to third parties.'
        ]
      },
      {
        heading: '4. Disclosure of Information',
        paragraphs: [
          'We only disclose personal information to third parties where necessary to deliver our services, such as email delivery providers, hosting platforms, and payment processors, or where required by law. These providers are only given the information needed to perform their function.'
        ]
      },
      {
        heading: '5. Storage & Security',
        paragraphs: [
          'We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Information is stored on secure, access-controlled systems. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'
        ]
      },
      {
        heading: '6. Cookies & Analytics',
        paragraphs: [
          'This website may use cookies and analytics services to understand how visitors use the site and to improve performance. Cookies do not personally identify you. You can disable cookies in your browser settings, though some site features may not function as intended.'
        ]
      },
      {
        heading: '7. Access & Correction',
        paragraphs: [
          'You may request access to the personal information we hold about you, and ask us to correct it if it is inaccurate, out of date, or incomplete. To make a request, contact us using the details below. We will respond within a reasonable time.'
        ]
      },
      {
        heading: '8. Complaints',
        paragraphs: [
          'If you believe we have breached the Australian Privacy Principles, please contact us first so we can investigate and respond. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.'
        ]
      },
      {
        heading: '9. Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. The current version will always be published on this website, with the last updated date shown above.'
        ]
      },
      {
        heading: '10. Contact Us',
        paragraphs: [
          'For any privacy questions or requests, contact us at Info@sydneycreativewebsites.com.au, call 0468 147 302, or write to 160-202 George St, Redfern NSW 2016.'
        ]
      }
    ]
  }
};

interface LegalPageProps {
  pageId: LegalPageId;
}

export default function LegalPage({ pageId }: LegalPageProps) {
  const data = LEGAL_PAGES[pageId];

  if (!data) return null;

  const BadgeIcon = data.id === 'privacy' ? ShieldCheck : FileText;
  const otherPage = data.id === 'privacy'
    ? { to: '/terms-and-conditions', label: 'Terms & Conditions' }
    : { to: '/privacy-policy', label: 'Privacy Policy' };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased flex flex-col">

      {/* Page Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo-icon.png"
                alt="Sydney Creative Websites logo"
                className="w-9 h-9 object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors duration-300">
              Sydney Creative Websites
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="space-y-3">
          <span className="font-mono text-[10px] bg-blue-100 text-brand-blue px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-flex items-center">
            <BadgeIcon className="w-3 h-3 mr-1.5" />
            {data.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Last updated: {data.lastUpdated}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 max-w-3xl">
            {data.intro}
          </p>
        </div>

        <div className="space-y-8 mt-10">
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-2.5">
              <h2 className="font-display font-bold text-lg text-slate-900">
                {section.heading}
              </h2>
              {section.paragraphs?.map((text, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 pl-1">
                  {section.bullets.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </motion.main>

      {/* Page Footer strip */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>
            &copy; 2026 Sydney Creative Websites. All rights reserved. Registered ABN 36 663 494 077.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-700">|</span>
            <Link to={otherPage.to} className="hover:text-white transition-colors">{otherPage.label}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
