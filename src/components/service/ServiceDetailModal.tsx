import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import type { Service } from '../../types/service';
import FeatureCard from './FeatureCard';
import ProcessTimeline from './ProcessTimeline';
import PricingCard from './PricingCard';

interface ServiceDetailModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onContactClick
}: ServiceDetailModalProps) {
  const handleGetStarted = () => {
    onClose();
    onContactClick();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto bg-nn-bg p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-nn-bg/80 backdrop-blur-sm border border-nn-text/10 hover:bg-nn-accent hover:border-nn-accent transition-colors"
        >
          <X size={20} className="text-nn-text" />
        </button>

        <DialogHeader className="relative h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.panelTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg via-nn-bg/60 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8">
            <span className="font-mono text-xs tracking-[0.14em] text-nn-accent uppercase mb-2">
              Service {service.number}
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-nn-text">
              {service.panelTitle}
            </h2>
          </div>
        </DialogHeader>

        <div className="p-8">
          <div className="mb-8">
            <p className="text-xl text-nn-text/90 leading-relaxed mb-6">
              {service.details.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-nn-accent/5 rounded-lg border border-nn-accent/20">
              {service.details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-nn-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-nn-bg text-xs font-bold">✓</span>
                  </div>
                  <span className="text-nn-text/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-nn-text mb-6">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.details.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-nn-text mb-6">
                  How We Work
                </h3>
                <ProcessTimeline steps={service.details.process} />
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-nn-text mb-6">
                  Pricing Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {service.details.pricing.map((tier, index) => (
                    <PricingCard
                      key={index}
                      tier={tier}
                      onSelect={handleGetStarted}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-nn-text mb-6">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.details.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-display font-bold text-lg text-nn-text hover:text-nn-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-nn-text/70 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-8 bg-nn-accent rounded-xl text-center">
            <h3 className="font-display font-bold text-2xl text-nn-bg mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-nn-bg/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how {service.panelTitle.toLowerCase()} can help your business grow.
              Book a free consultation to explore your options.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-nn-bg text-nn-text font-bold rounded-lg hover:bg-nn-text hover:text-white transition-all duration-200 text-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
