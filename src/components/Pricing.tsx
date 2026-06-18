import { Check, ArrowUpRight } from 'lucide-react';
import { pricingPlans } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingCardProps {
  plan: (typeof pricingPlans)[0];
  index: number;
}

function PricingCard({ plan, index }: PricingCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const delayClass = index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : '';

  return (
    <div
      ref={ref}
      className={`relative flex flex-col bg-surface border border-border p-8 md:p-10 transition-all duration-400 reveal ${isVisible ? 'visible' : ''} ${delayClass} ${
        plan.highlight
          ? 'border-blue/40 bg-gradient-to-b from-blue-glow/20 to-surface'
          : 'hover:border-white-20'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-blue to-purple" />
      )}

      {plan.highlight && (
        <div className="inline-flex self-start items-center gap-1.5 py-1 px-3 bg-blue/10 border border-blue/30 rounded-full text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-blue mb-4">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold tracking-tight mb-1">{plan.name}</h3>
        <p className="text-[0.78rem] text-white-60 leading-[1.6]">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-2">
        <div className="flex items-end gap-1">
          <span className="text-[0.9rem] font-medium text-white-60 mb-1">₹</span>
          <span className="text-[3rem] md:text-[3.5rem] font-extrabold tracking-[-0.04em] leading-[1] gradient-text">
            {plan.price.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="text-[0.72rem] text-white-60 mt-1 tracking-wide">
          Duration: {plan.duration}
        </div>
      </div>

      <div className="w-full h-[1px] bg-border my-6" />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-blue/15 border border-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={9} className="text-blue" />
            </div>
            <span className="text-[0.8rem] text-white-60 leading-[1.5]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-[0.8rem] font-semibold tracking-wide transition-all duration-300 ${
          plan.highlight
            ? 'bg-gradient-primary text-white btn-hover-lift shadow-glow-blue'
            : 'bg-white-04 border border-border text-white hover:bg-white-08 hover:border-white-20'
        }`}
      >
        Start This Plan
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-void">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div ref={ref} className={`mb-16 md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            Transparent Pricing
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            Simple, honest
            <br />
            <span className="text-white-20">pricing in INR</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white-60 leading-[1.7] max-w-xl">
            No hidden fees, no dollar rates. All prices are in Indian Rupees. Pay once and we build
            your digital presence.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px]">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[0.72rem] text-white-20 mt-8">
          All plans include a free consultation. Custom enterprise pricing available on request.
        </p>
      </div>
    </section>
  );
}
