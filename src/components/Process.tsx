import { Compass, Lightbulb, Pencil, Rocket } from 'lucide-react';
import { processSteps } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Lightbulb,
  Pencil,
  Rocket,
};

interface StepCardProps {
  step: (typeof processSteps)[0];
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = iconMap[step.icon];
  const delayClass =
    index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 3 ? 'reveal-delay-3' : '';

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden px-6 md:px-8 py-10 md:py-12 border border-border transition-all duration-400 process-step-hover hover:bg-surface-2 reveal ${
        isVisible ? 'visible' : ''
      } ${delayClass}`}
    >
      {/* Step Number */}
      <div className="text-[3rem] md:text-[4rem] font-black text-white-04 mb-6 tabular-nums">
        {String(step.step).padStart(2, '0')}
      </div>

      {/* Icon */}
      {Icon && <Icon size={28} className="text-blue mb-4" />}

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>

      {/* Description */}
      <p className="text-[0.78rem] text-white-60 leading-[1.7]">{step.description}</p>
    </div>
  );
}

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div ref={ref} className={`mb-16 md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            How We Work
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            Process built
            <br />
            <span className="text-white-20">for excellence</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {processSteps.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
