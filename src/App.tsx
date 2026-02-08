import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import ServiceSection from './sections/ServiceSection';
import ContactSection from './sections/ContactSection';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'training',
    number: '01',
    title: 'AI TRAINING',
    panelTitle: 'AI Training Programs',
    description: 'Master AI fundamentals, discover powerful tools, and unlock career opportunities.',
    cta: 'Book a Workshop',
    image: '/images/training_portrait.jpg',
  },
  {
    id: 'automation',
    number: '02',
    title: 'AUTOMATION',
    panelTitle: 'Workflow Automation',
    description: 'We design systems that eliminate busywork—so your team can focus on what matters.',
    cta: 'Map Your Workflow',
    image: '/images/automation_portrait.jpg',
  },
  {
    id: 'chatbots',
    number: '03',
    title: 'CHATBOTS',
    panelTitle: 'Custom AI Chatbots',
    description: '24/7 support, lead qualification, and booking—trained on your business, not generic answers.',
    cta: 'Design Your Bot',
    image: '/images/chatbots_portrait.jpg',
  },
  {
    id: 'webdesign',
    number: '04',
    title: 'WEB DESIGN',
    panelTitle: 'Intelligent Web Design',
    description: 'Fast, accessible, conversion-focused sites—built with modern tools and clean architecture.',
    cta: 'Request a Proposal',
    image: '/images/webdesign_portrait.jpg',
  },
];

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before setting up global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.25, max: 0.5 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-nn-bg min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection className="z-10" />
      
      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          {...service}
          className={`z-${(index + 2) * 10}`}
        />
      ))}
      
      {/* Contact Section */}
      <ContactSection className="z-80" />
    </div>
  );
}

export default App;
