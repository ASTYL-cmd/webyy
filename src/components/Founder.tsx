import { ArrowUpRight } from 'lucide-react';
import { owner } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PortraitFrame from './PortraitFrame';

export default function Founder() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="founder" className="py-20 md:py-32 bg-void" aria-labelledby="founder-heading">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div
          ref={ref}
          className={`glass-card rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr] gap-10 md:gap-16 items-center reveal ${
            isVisible ? 'visible' : ''
          }`}
        >
          <PortraitFrame />
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              About the Owner
            </div>
            <h2
              id="founder-heading"
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] mb-6"
            >
              Meet the Founder
            </h2>
            <h3 className="text-xl font-semibold tracking-tight">{owner.name}</h3>
            <p className="text-[0.75rem] tracking-[0.12em] uppercase text-white-60 mt-1 mb-5">
              {owner.role}
            </p>
            <p className="text-[0.95rem] text-white-60 leading-[1.8] mb-8 max-w-xl mx-auto md:mx-0">
              {owner.bio[0]}
            </p>
            <a
              href="/founder"
              className="inline-flex items-center gap-2 py-3.5 px-8 text-[0.82rem] font-semibold bg-gradient-primary text-white rounded-full btn-hover-lift shadow-glow-blue"
            >
              More about the founder
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
