import { Globe, Code, RefreshCw, LayoutGrid as Layout, Briefcase, Search, ArrowUpRight } from 'lucide-react';
import { services } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Code,
  RefreshCw,
  Layout,
  Briefcase,
  Search,
};

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = iconMap[service.icon];

  const delayClass = index % 3 === 1 ? 'reveal-delay-1' : index % 3 === 2 ? 'reveal-delay-2' : '';

  return (
    <div
      ref={ref}
      data-spot
      className={`spot glass-card lift rounded-2xl px-8 md:px-10 py-10 md:py-12 group ${
        isVisible ? 'visible' : ''
      } ${delayClass} reveal`}
    >
      {/* Number */}
      <div className="text-[0.65rem] font-semibold tracking-[0.2em] text-blue mb-8 tabular-nums">
        {String(service.id).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-glow to-purple-glow border border-blue/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow-blue">
        {Icon && <Icon size={22} className="text-blue" />}
      </div>

      {/* Name */}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{service.name}</h3>

      {/* Description */}
      <p className="text-[0.85rem] text-white-60 leading-[1.7] mb-6">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="py-1 px-3 bg-white-04 border border-border rounded-full text-[0.62rem] tracking-[0.1em] text-white-60"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8 right-8 w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 transition-all duration-300 group-hover:border-blue group-hover:text-blue group-hover:shadow-glow-purple">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

// One pointermove handler for every card: sets --mx / --my on the hovered card.
function handleGridPointerMove(e: React.PointerEvent<HTMLDivElement>) {
  if (e.pointerType !== 'mouse') return;
  const card = (e.target as HTMLElement).closest<HTMLElement>('[data-spot]');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', e.clientX - rect.left + 'px');
  card.style.setProperty('--my', e.clientY - rect.top + 'px');
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-32 bg-void">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div ref={ref} className={`mb-16 md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            What We Do
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            Crafted for
            <br />
            <span className="text-white-20">ambitious brands</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          onPointerMove={handleGridPointerMove}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
