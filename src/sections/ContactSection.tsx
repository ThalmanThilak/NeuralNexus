import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, MapPin, Globe, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const details = detailsRef.current;
    const form = formRef.current;
    const line = lineRef.current;

    if (!section || !headline || !details || !form || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headline,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(details.children,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(form,
        { x: '8vw', opacity: 0, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(line,
        { scaleY: 0, opacity: 0.6 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Encode form data for Netlify
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', company: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative w-full min-h-screen bg-nn-bg py-20 lg:py-32 ${className}`}
    >
      {/* Decorative line */}
      <div
        ref={lineRef}
        className="absolute left-6 lg:left-12 top-0 w-px h-full bg-gradient-to-b from-nn-accent/60 via-nn-accent/20 to-transparent origin-top"
      />

      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Column */}
          <div>
            <div ref={headlineRef}>
              <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-tight text-nn-text mb-4">
                Start Your AI Journey
              </h2>
              <p className="text-nn-text-secondary text-lg leading-relaxed mb-10">
                Tell us what you're building. We'll reply within 24 hours.
              </p>
            </div>

            <div ref={detailsRef} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-nn-accent/10 flex items-center justify-center">
                  <Mail size={18} className="text-nn-accent" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block">
                    Email
                  </span>
                  <a
                    href="mailto:thal.thilak@gmail.com"
                    className="text-nn-text hover:text-nn-accent transition-colors"
                  >
                    thal.thilak@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-nn-accent/10 flex items-center justify-center">
                  <MapPin size={18} className="text-nn-accent" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block">
                    Location
                  </span>
                  <span className="text-nn-text">Heidelberg, Germany</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-nn-accent/10 flex items-center justify-center">
                  <Globe size={18} className="text-nn-accent" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block">
                    Coverage
                  </span>
                  <span className="text-nn-text">Remote worldwide</span>
                </div>
              </div>

              <div className="pt-6 border-t border-nn-border">
                <span className="font-mono text-xs tracking-[0.14em] text-nn-accent uppercase block mb-2">
                  Response Time
                </span>
                <span className="text-nn-text-secondary">Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={formRef}>
            <div className="bg-nn-bg-secondary border border-nn-border rounded-lg p-6 lg:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-nn-accent/20 flex items-center justify-center mb-4">
                    <Check size={32} className="text-nn-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-nn-text mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-nn-text-secondary">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden field for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field to prevent spam */}
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-nn-bg border border-nn-border rounded-lg text-nn-text placeholder-nn-text-secondary/50 focus:outline-none focus:border-nn-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-nn-bg border border-nn-border rounded-lg text-nn-text placeholder-nn-text-secondary/50 focus:outline-none focus:border-nn-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-nn-bg border border-nn-border rounded-lg text-nn-text placeholder-nn-text-secondary/50 focus:outline-none focus:border-nn-accent transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-nn-bg border border-nn-border rounded-lg text-nn-text placeholder-nn-text-secondary/50 focus:outline-none focus:border-nn-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-nn-accent text-nn-bg font-medium rounded-lg hover:bg-nn-accent-hover hover:shadow-glow-strong transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 lg:px-12 mt-20 lg:mt-32 pt-10 border-t border-nn-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                <span className="font-display font-bold text-lg text-nn-text">
                  Neural
                </span>
                <span className="font-display font-bold text-lg text-nn-accent">
                  Nexus
                </span>
              </div>
              <p className="text-nn-text-secondary text-sm leading-relaxed mb-4">
                Intelligence Engineered for Growth
              </p>
              <p className="text-nn-text-secondary/60 text-xs">
                Based in Heidelberg, serving globally
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {['AI Training', 'Automation', 'Chatbots', 'Web Design'].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-nn-text-secondary hover:text-nn-accent transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Cookies', 'Legal'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-nn-text-secondary hover:text-nn-accent transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-mono text-xs tracking-[0.14em] text-nn-text-secondary uppercase mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:thal.thilak@gmail.com"
                    className="text-nn-text-secondary hover:text-nn-accent transition-colors text-sm"
                  >
                    thal.thilak@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-nn-text-secondary text-sm">
                    +49 17621638158
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-nn-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nn-text-secondary/60 text-xs">
              © 2025 Neural Nexus. All rights reserved. | Heidelberg, Germany
            </p>
            <p className="text-nn-text-secondary/60 text-xs">
              Crafted with precision
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
