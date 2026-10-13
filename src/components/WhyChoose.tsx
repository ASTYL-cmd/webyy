import { Palette, Wallet, Zap, Globe, LifeBuoy, MousePointerClick, ShieldCheck, MonitorSmartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Palette,
    title: 'Custom Design from the Basic Plan',
    text: 'Every customer gets a thoughtfully designed website, even on the basic plan.',
  },
  {
    icon: Wallet,
    title: 'Low Cost',
    text: 'Affordable website development designed to give businesses with different budgets real value.',
  },
  {
    icon: Zap,
    title: 'Best Quality and Fast Delivery',
    text: 'A focus on quality and efficient development, delivered on time according to the agreed scope and timeline.',
  },
  {
    icon: Globe,
    title: 'One Year Free Domain',
    text: 'Enjoy a free domain for one year, subject to the eligibility and terms of your plan.',
  },
  {
    icon: LifeBuoy,
    title: 'One Year Free Support',
    text: 'Get one year of free support under the applicable plan terms.',
  },
  {
    icon: MousePointerClick,
    title: 'Smooth Interface',
    text: 'Clean navigation, intuitive layouts and polished interactions for an easy browsing experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Glitches',
    text: 'Careful testing and a commitment to reliable functionality, so bugs and technical issues are kept to a minimum.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Suitable for Every Screen',
    text: 'Fully responsive layouts for mobile phones, tablets, laptops, desktop computers and large displays.',
  },
];

function BenefitCard({ item, index }: { item: (typeof benefits)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = item.icon;
  const delay = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][index % 4];

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={`glass-card fx-card group flex h-full flex-col rounded-2xl p-6 md:p-7 reveal ${isVisible ? 'visible' : ''} ${delay}`}
    >
      <span className="fx-glow" aria-hidden="true" />
      <div className="fx-icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue/20 bg-gradient-to-br from-blue-glow to-purple-glow">
        <Icon size={22} className="text-blue" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-[1.02rem] font-semibold leading-snug tracking-tight text-white">{item.title}</h3>
      <p className="text-[0.85rem] leading-[1.7] text-white-60">{item.text}</p>
    </li>
  );
}

export default function WhyChoose() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-choose" aria-labelledby="why-heading" className="relative overflow-hidden bg-surface py-20 md:py-32">
      <div className="why-aurora" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1300px] px-[4vw]">
        <div ref={ref} className={`mx-auto mb-14 max-w-3xl text-center md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-blue">
            <span className="h-[1px] w-6 bg-gradient-to-r from-blue to-purple" />
            Why Us
            <span className="h-[1px] w-6 bg-gradient-to-l from-blue to-purple" />
          </div>
          <h2 id="why-heading" className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Why Choose <span className="gradient-text">WEBYY?</span>
          </h2>
          <p className="mt-6 text-base leading-[1.75] text-white-60 md:text-lg">
            Beautiful, high-quality websites designed for your business, built for every screen, and delivered with
            care.
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} item={b} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
