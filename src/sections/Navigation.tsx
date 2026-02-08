import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-nn-border'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-1 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-display font-bold text-lg lg:text-xl text-nn-text tracking-tight">
                Neural
              </span>
              <span className="font-display font-bold text-lg lg:text-xl text-nn-accent tracking-tight">
                Nexus
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-nn-accent ml-0.5 group-hover:scale-125 transition-transform" />
            </a>

            {/* Center Text - Desktop Only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <span className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase">
                Based in Heidelberg • Serving Globally
              </span>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm text-nn-text-secondary hover:text-nn-text transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-nn-accent group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="relative md:hidden">
              <button
                className="p-2 text-nn-text hover:text-nn-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-[98]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  
                  {/* Dropdown Panel */}
                  <div className="absolute right-0 top-full mt-2 w-56 bg-nn-bg-secondary border border-nn-border rounded-lg shadow-xl z-[99] py-3 px-4">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <button
                          key={link.label}
                          onClick={() => scrollToSection(link.href)}
                          className="text-left text-base text-nn-text hover:text-nn-accent transition-colors py-2 px-2 rounded hover:bg-nn-bg/50"
                        >
                          {link.label}
                        </button>
                      ))}
                      <div className="border-t border-nn-border my-2" />
                      <button
                        onClick={() => scrollToSection('#contact')}
                        className="text-left text-base text-nn-accent font-medium py-2 px-2 rounded hover:bg-nn-accent/10 transition-colors"
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
