import * as Icons from 'lucide-react';
import type { ServiceFeature } from '../../types/service';

interface FeatureCardProps {
  feature: ServiceFeature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <div className="group p-4 rounded-lg border border-nn-text/20 bg-nn-bg hover:border-nn-accent hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-nn-accent/10 flex items-center justify-center mb-3 group-hover:bg-nn-accent group-hover:scale-110 transition-all duration-300">
        {IconComponent && <IconComponent size={20} className="text-nn-accent group-hover:text-nn-bg" />}
      </div>
      <h4 className="font-display font-bold text-base text-nn-text mb-1.5">
        {feature.title}
      </h4>
      <p className="text-nn-text/80 text-xs leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
