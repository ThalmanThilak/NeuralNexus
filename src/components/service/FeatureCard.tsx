import * as Icons from 'lucide-react';
import type { ServiceFeature } from '../../types/service';

interface FeatureCardProps {
  feature: ServiceFeature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <div className="group p-6 rounded-lg border border-nn-text/20 bg-nn-bg hover:border-nn-accent hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-nn-accent/10 flex items-center justify-center mb-4 group-hover:bg-nn-accent group-hover:scale-110 transition-all duration-300">
        {IconComponent && <IconComponent size={24} className="text-nn-accent group-hover:text-nn-bg" />}
      </div>
      <h4 className="font-display font-bold text-lg text-nn-text mb-2">
        {feature.title}
      </h4>
      <p className="text-nn-text/80 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
