import type { ProcessStep } from '../../types/service';

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6 group">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-nn-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span className="font-display font-bold text-2xl text-nn-bg">
                {step.number}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-nn-text/10 mt-4" />
            )}
          </div>
          <div className="flex-1 pb-8">
            <h4 className="font-display font-bold text-xl text-nn-text mb-2">
              {step.title}
            </h4>
            <p className="text-nn-text/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
