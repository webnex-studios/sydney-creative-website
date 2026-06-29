import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ProposalBuilder from './components/ProposalBuilder';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SEOLandingPage from './components/SEOLandingPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [activeLandingPage, setActiveLandingPage] = useState<string | null>(null);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Pre-populate service selection in Proposal Builder and scroll down
  const handleServiceSelect = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setTimeout(() => {
      handleScrollToSection('proposal-builder');
    }, 100);
  };

  const handleClearPreselect = () => {
    setPreselectedServiceId(undefined);
  };

  const handleOpenLandingPage = (pageId: string) => {
    setActiveLandingPage(pageId);
  };

  const handleLandingPageBookClick = (serviceId?: string) => {
    setActiveLandingPage(null);
    if (serviceId) {
      handleServiceSelect(serviceId);
    } else {
      setTimeout(() => {
        handleScrollToSection('proposal-builder');
      }, 150);
    }
  };

  // Monitor active scroll sections for high-end sticky Navbar synchronization
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'process', 'about', 'pricing', 'blog', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-slate-900">
      
      {/* Premium Navigation Header */}
      <Navbar onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Full-Screen Hero */}
        <Hero onCtaClick={handleScrollToSection} />

        {/* Brand Trust stats & Horizontal scrolling logobar */}
        <Trust />

        {/* Capabilities Grid */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* Filterable Portfolio */}
        <Portfolio />

        {/* Strategic Why Choose Us & Funnel Illustration */}
        <WhyChooseUs />

        {/* Animated Process Timeline */}
        <Process />

        {/* Verified Reviews Carousel */}
        <Testimonials />

        {/* Quote Estimator & Proposal Builder Form */}
        <ProposalBuilder 
          preselectedServiceId={preselectedServiceId} 
          onClearPreselect={handleClearPreselect} 
        />

        {/* FAQ accordions with Schema dynamic rendering */}
        <FAQ />

        {/* Australian English Strategy Blog posts */}
        <Blog />
      </main>

      {/* Footer and final conversions */}
      <Footer 
        onCtaClick={handleScrollToSection} 
        onOpenLandingPage={handleOpenLandingPage}
      />

      {/* Dynamic SEO & Local Suburb Landing Page Portals */}
      <AnimatePresence>
        {activeLandingPage && (
          <SEOLandingPage
            pageId={activeLandingPage}
            onClose={() => setActiveLandingPage(null)}
            onBookClick={handleLandingPageBookClick}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
