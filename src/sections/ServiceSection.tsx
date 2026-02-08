import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceSectionProps {
  id: string;
  number: string;
  title: string;
  panelTitle: string;
  description: string;
  cta: string;
  image: string;
  className?: string;
}

export default function ServiceSection({
  id,
  number,
  title,
  panelTitle,
  description,
  cta,
  image,
  className = '',
}: ServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Desktop refs
  const desktopFrameRef = useRef<HTMLDivElement>(null);
  const desktopTitleRef = useRef<HTMLDivElement>(null);
  const desktopPanelRef = useRef<HTMLDivElement>(null);
  const desktopPanelContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const desktopFrame = desktopFrameRef.current;
      const desktopTitle = desktopTitleRef.current;
      const desktopPanel = desktopPanelRef.current;
      const desktopPanelContent = desktopPanelContentRef.current;

      if (desktopFrame && desktopTitle && desktopPanel && desktopPanelContent) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 1.2,
          },
        });

        // ENTRANCE (0% - 30%)
        scrollTl.fromTo(desktopTitle,
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );

        scrollTl.fromTo(desktopFrame,
          { x: '60vw', opacity: 0, scale: 1.08 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0.05
        );

        scrollTl.fromTo(desktopPanel,
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.10
        );

        scrollTl.fromTo(desktopPanelContent.children,
          { y: '4vh', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.14
        );

        // EXIT (70% - 100%)
        scrollTl.fromTo(desktopTitle,
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.70
        );

        scrollTl.fromTo(desktopFrame,
          { x: 0, opacity: 1 },
          { x: '45vw', opacity: 0, ease: 'power2.in' },
          0.70
        );

        scrollTl.fromTo(desktopPanel,
          { x: 0, opacity: 1 },
          { x: '35vw', opacity: 0, ease: 'power2.in' },
          0.70
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id === 'training' ? 'services' : undefined}
      className={`relative w-full h-screen overflow-hidden bg-nn-bg ${className}`}
    >
      {/* Desktop Layout with scroll animation */}
      <div className="hidden md:block h-full">
        {/* Huge Title (LEFT side, aligned left) */}
        <div
          ref={desktopTitleRef}
          className="absolute left-[6vw] top-[18vh] w-[50vw] text-left z-20"
        >
          <h2 className="font-display font-bold text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[-0.02em] text-nn-text">
            {title}
          </h2>
        </div>

        {/* Portrait Frame (center-right) */}
        <div
          ref={desktopFrameRef}
          className="absolute right-[10vw] top-[10vh] w-[52vw] h-[80vh] border-2 border-nn-text/85 overflow-hidden"
        >
          <img
            src={image}
            alt={panelTitle}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg/30 via-transparent to-transparent" />
        </div>

        {/* Right Yellow Panel */}
        <div
          ref={desktopPanelRef}
          className="absolute right-0 top-0 w-[30vw] h-full bg-nn-accent z-20"
        >
          <div
            ref={desktopPanelContentRef}
            className="absolute left-[10%] bottom-[12vh] w-[80%]"
          >
            <span className="font-mono text-xs tracking-[0.14em] text-nn-bg/60 uppercase block mb-3">
              Service {number}
            </span>
            <h3 className="font-display font-bold text-[clamp(20px,2vw,32px)] leading-tight text-nn-bg mb-4">
              {panelTitle}
            </h3>
            <p className="text-nn-bg/80 text-sm lg:text-base leading-relaxed mb-6">
              {description}
            </p>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-5 py-2.5 border-2 border-nn-bg text-nn-bg font-medium text-sm rounded-full hover:bg-nn-bg hover:text-nn-accent transition-all duration-200"
            >
              {cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple without scroll animation */}
      <div className="md:hidden flex flex-col h-full">
        <div className="px-6 pt-24 pb-4 z-10">
          <h2 className="font-display font-bold text-[clamp(32px,10vw,48px)] leading-[0.95] tracking-[-0.02em] text-nn-text">
            {title}
          </h2>
        </div>

        <div className="mx-6 flex-1 min-h-0 border-2 border-nn-text/85 overflow-hidden relative">
          <img
            src={image}
            alt={panelTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg/50 via-transparent to-transparent" />
        </div>

        <div className="bg-nn-accent z-20 px-6 py-6">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-nn-bg/60 uppercase block mb-2">
              Service {number}
            </span>
            <h3 className="font-display font-bold text-xl leading-tight text-nn-bg mb-2">
              {panelTitle}
            </h3>
            <p className="text-nn-bg/80 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-4 py-2 border-2 border-nn-bg text-nn-bg font-medium text-sm rounded-full hover:bg-nn-bg hover:text-nn-accent transition-all duration-200"
            >
              {cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
