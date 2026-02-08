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
      <DialogContent className="!max-w-[96vw] w-full h-[90vh] overflow-y-auto bg-nn-bg p-0" showCloseButton={false}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-nn-bg/80 backdrop-blur-sm border border-nn-text/10 hover:bg-nn-accent hover:border-nn-accent transition-colors"
        >
          <X size={20} className="text-nn-text" />
        </button>

        <DialogHeader className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.panelTitle}
            className="absolute inset-0 w-full h-full object-contain object-center scale-90 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nn-bg via-nn-bg/80 to-nn-bg/30" />
          <div className="relative h-full flex flex-col justify-end p-8">
            <span className="font-mono text-xs tracking-[0.14em] text-nn-accent uppercase mb-2">
              Service {service.number}
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              {service.panelTitle}
            </h2>
          </div>
        </DialogHeader>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <p className="text-sm md:text-base text-nn-text/90 leading-relaxed mb-4">
              {service.details.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-nn-accent/5 rounded-lg border border-nn-accent/20">
              {service.details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-nn-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-nn-bg text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-nn-text/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="features" className="text-sm">Features</TabsTrigger>
              <TabsTrigger value="process" className="text-sm">Process</TabsTrigger>
              <TabsTrigger value="pricing" className="text-sm">Pricing</TabsTrigger>
              <TabsTrigger value="faq" className="text-sm">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-nn-text mb-4">
                  What's Included
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.details.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-nn-text mb-4">
                  How We Work
                </h3>
                <ProcessTimeline steps={service.details.process} />
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-nn-text mb-4">
                  Pricing Options
                </h3>
                <div className="grid grid-cols-3 gap-4 items-stretch">
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

            <TabsContent value="faq" className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-nn-text mb-4">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.details.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-display font-bold text-base text-nn-text hover:text-nn-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-nn-text/70 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 bg-nn-accent rounded-xl text-center">
            <h3 className="font-display font-bold text-xl text-nn-bg mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-sm text-nn-bg/80 mb-4 max-w-2xl mx-auto">
              Let's discuss how {service.panelTitle.toLowerCase()} can help your business grow.
              Book a free consultation to explore your options.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 bg-nn-bg text-nn-text font-bold rounded-lg hover:scale-105 transition-all duration-200 text-base"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
