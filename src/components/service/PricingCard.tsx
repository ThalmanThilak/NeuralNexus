import { Check } from 'lucide-react';
import type { PricingTier } from '../../types/service';

interface PricingCardProps {
  tier: PricingTier;
  onSelect: () => void;
}

export default function PricingCard({ tier, onSelect }: PricingCardProps) {
  return (
    <div className={`relative p-6 rounded-xl border-2 flex flex-col h-full ${
      tier.highlighted
        ? 'border-nn-accent bg-nn-accent/5 shadow-xl scale-105'
        : 'border-nn-text/20 bg-nn-bg'
    }`}>
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-nn-accent rounded-full">
          <span className="text-xs font-bold text-nn-bg">MOST POPULAR</span>
        </div>
      )}

      <div className="text-center mb-4">
        <h4 className="font-display font-bold text-xl text-nn-text mb-2">
          {tier.name}
        </h4>
        <div className="mb-1">
          <span className="font-display font-bold text-3xl text-nn-text">
            {tier.price}
          </span>
          {tier.price !== 'Custom' && (
            <span className="text-nn-text/60 text-xs ml-1">one-time</span>
          )}
        </div>
        <p className="text-nn-text/70 text-xs">
          {tier.description}
        </p>
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={16} className="text-nn-accent flex-shrink-0 mt-0.5" />
            <span className="text-nn-text/80 text-xs">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-bold text-sm transition-all duration-200 ${
          tier.highlighted
            ? 'bg-nn-accent text-nn-bg hover:scale-105'
            : 'bg-nn-accent text-nn-bg hover:scale-105'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
