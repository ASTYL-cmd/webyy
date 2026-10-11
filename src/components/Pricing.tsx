import { useEffect, useState } from 'react';
import { Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { pricingPlans, companyInfo } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingCardProps {
  plan: (typeof pricingPlans)[0];
  index: number;
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let raf: number;
    const startTime = performance.now();
    const startVal = Math.round(target * 1.8);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(startVal - (startVal - target) * eased);
      setValue(current);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function PricingCard({ plan, index }: PricingCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const [animateStart, setAnimateStart] = useState(false);
  const delayClass = index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : '';

  useEffect(() => {
    if (!isVisible) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setAnimateStart(true);
      return;
    }
    const timer = setTimeout(() => setAnimateStart(true), 200 + index * 150);
    return () => clearTimeout(timer);
  }, [isVisible, index]);

  const animatedPrice = useCountUp(plan.price, animateStart);
  const displayPrice = animatedPrice ?? plan.price;

  const isAdvanced = plan.cta === 'Message for More Details';

  return (
    <div
      ref={ref}
      className={`glass-card lift relative flex flex-col rounded-2xl overflow-hidden p-8 md:p-10 reveal ${isVisible ? 'visible' : ''} ${delayClass} ${
        plan.highlight ? '!border-blue/40' : 'hover:border-white-20'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-blue to-purple" />
      )}

      {plan.highlight && (
        <div className="inline-flex self-start items-center gap-1.5 py-1 px-3 bg-blue/10 border border-blue/30 rounded-full text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-blue mb-4">
          Recommended
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
          <span className="text-[3rem] md:text-[3.5rem] font-extrabold tracking-[-0.04em] leading-[1] gradient-text tabular-nums">
            {displayPrice.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-border my-6" />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-blue/15 border border-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={9} className="text-blue" />
            </div>
            <span className="text-[0.8rem] text-white-60 leading-[1.5]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {isAdvanced ? (
        <a
          href={`https://wa.me/${companyInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-[0.8rem] font-semibold tracking-wide transition-all duration-300 bg-white-04 border border-border text-white hover:bg-white-08 hover:border-white-20"
        >
          <MessageCircle size={14} />
          {plan.cta}
        </a>
      ) : (
        <a
          href="#contact"
          className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-[0.8rem] font-semibold tracking-wide transition-all duration-300 ${
            plan.highlight
              ? 'bg-gradient-primary text-white btn-hover-lift shadow-glow-blue'
              : 'bg-white-04 border border-border text-white hover:bg-white-08 hover:border-white-20'
          }`}
        >
          {plan.cta}
          <ArrowUpRight size={14} />
        </a>
      )}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Renewal disclaimer */}
        <p className="text-center text-[0.72rem] text-white-60 mt-8">
          Note: Renewal charges are not included.
        </p>
      </div>
    </section>
  );
}
