import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Desktop refs
  const desktopFrameRef = useRef<HTMLDivElement>(null);
  const desktopHeadlineRef = useRef<HTMLDivElement>(null);
  const desktopPanelRef = useRef<HTMLDivElement>(null);
  const desktopPanelTextRef = useRef<HTMLDivElement>(null);
  const desktopLabelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Desktop animation setup
      const desktopFrame = desktopFrameRef.current;
      const desktopHeadline = desktopHeadlineRef.current;
      const desktopPanel = desktopPanelRef.current;
      const desktopPanelText = desktopPanelTextRef.current;
      const desktopLabel = desktopLabelRef.current;

      if (desktopFrame && desktopHeadline && desktopPanel && desktopPanelText && desktopLabel) {
        // Initial states (hidden)
        gsap.set(desktopFrame, { opacity: 0, scale: 1.06 });
        gsap.set(desktopHeadline, { x: '-6vw', opacity: 0 });
        gsap.set(desktopPanel, { x: '28vw', opacity: 0 });
        gsap.set(desktopPanelText.children, { y: '3vh', opacity: 0 });
        gsap.set(desktopLabel, { opacity: 0 });

        // Entrance animation timeline (auto-play on load)
        const entranceTl = gsap.timeline({ delay: 0.2 });

        entranceTl
          .to(desktopFrame, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          })
          .to(desktopHeadline, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
          }, '-=0.7')
          .to(desktopPanel, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
          }, '-=0.6')
          .to(desktopPanelText.children, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          }, '-=0.4')
          .to(desktopLabel, {
            opacity: 1,
            duration: 0.5,
          }, '-=0.3');

        // Scroll-driven EXIT animation
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 1.2,
            onLeaveBack: () => {
              gsap.to(desktopFrame, { opacity: 1, x: 0, scale: 1, duration: 0.3 });
              gsap.to(desktopHeadline, { opacity: 1, x: 0, duration: 0.3 });
              gsap.to(desktopPanel, { opacity: 1, x: 0, duration: 0.3 });
              gsap.to(desktopPanelText.children, { opacity: 1, y: 0, duration: 0.3 });
            },
          },
        });

        // EXIT phase (70% - 100%)
        scrollTl
          .fromTo(desktopHeadline,
            { x: 0, opacity: 1 },
            { x: '-55vw', opacity: 0, ease: 'power2.in' },
            0.70
          )
          .fromTo(desktopFrame,
            { x: 0, opacity: 1, scale: 1 },
            { x: '-35vw', opacity: 0, scale: 0.96, ease: 'power2.in' },
            0.70
          )
          .fromTo(desktopPanel,
            { x: 0, opacity: 1 },
            { x: '28vw', opacity: 0, ease: 'power2.in' },
            0.70
          );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen overflow-hidden bg-nn-bg ${className}`}
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* Desktop Layout */}
      <div className="hidden md:block h-full">
        {/* Micro label */}
        <div
          ref={desktopLabelRef}
          className="absolute left-[6vw] top-[10vh] z-20"
        >
          <span className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase">
            Based in Heidelberg • Serving Globally
          </span>
        </div>

        {/* Portrait Frame (center-right) */}
        <div
          ref={desktopFrameRef}
          className="absolute left-[18vw] top-[10vh] w-[64vw] h-[80vh] border-2 border-nn-text/85 overflow-hidden"
        >
          <img
            src="/images/hero_portrait.jpg"
            alt="Neural Nexus"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg/30 via-transparent to-transparent" />
        </div>

        {/* Huge Headline (left, overlapping frame) */}
        <div
          ref={desktopHeadlineRef}
          className="absolute left-[6vw] top-[18vh] z-10 w-[44vw]"
        >
          <h1 className="font-display font-bold text-[clamp(48px,9vw,140px)] leading-[0.9] tracking-[-0.02em] text-nn-text">
            INTELLIGENCE
          </h1>
        </div>

        {/* Right Yellow Panel */}
        <div
          ref={desktopPanelRef}
          className="absolute right-0 top-0 w-[28vw] h-full bg-nn-accent z-20"
        >
          <div
            ref={desktopPanelTextRef}
            className="absolute left-[10%] bottom-[12vh] w-[80%]"
          >
            <h2 className="font-display font-bold text-[clamp(24px,2.5vw,40px)] leading-tight text-nn-bg mb-4">
              Engineered for Growth
            </h2>
            <p className="text-nn-bg/80 text-sm lg:text-base leading-relaxed mb-6">
              AI consultancy + implementation for teams that want results.
            </p>
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center gap-2 px-5 py-2.5 border-2 border-nn-bg text-nn-bg font-medium text-sm rounded-full hover:bg-nn-bg hover:text-nn-accent transition-all duration-200"
            >
              Explore Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple without scroll animation */}
      <div className="md:hidden flex flex-col h-full">
        <div className="px-6 pt-24 pb-4 z-10">
          <h1 className="font-display font-bold text-[clamp(40px,12vw,56px)] leading-[0.9] tracking-[-0.02em] text-nn-text">
            INTELLIGENCE
          </h1>
        </div>

        <div className="mx-6 flex-1 min-h-0 border-2 border-nn-text/85 overflow-hidden relative">
          <img
            src="/images/hero_portrait.jpg"
            alt="Neural Nexus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg/50 via-transparent to-transparent" />
        </div>

        <div className="bg-nn-accent z-20 px-6 py-6">
          <div>
            <h2 className="font-display font-bold text-2xl leading-tight text-nn-bg mb-2">
              Engineered for Growth
            </h2>
            <p className="text-nn-bg/80 text-sm leading-relaxed mb-4">
              AI consultancy + implementation for teams that want results.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-4 py-2 border-2 border-nn-bg text-nn-bg font-medium text-sm rounded-full hover:bg-nn-bg hover:text-nn-accent transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
