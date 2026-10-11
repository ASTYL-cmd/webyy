import { useEffect, useRef } from 'react';
import { Compass, Pencil, Code, Rocket } from 'lucide-react';
import { processSteps } from '../config';
import { prefersReducedMotion, useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Compass, Pencil, Code, Rocket };

export default function Process() {
  const { ref, isVisible } = useScrollReveal();
  const listRef = useRef<HTMLOListElement>(null);

  // The line draws as the list scrolls through the viewport (rAF, passive, one CSS var).
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (prefersReducedMotion()) {
      list.style.setProperty('--p', '1');
      list.querySelectorAll('.tl-node').forEach((n) => n.classList.add('on'));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = list.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / r.height));
      list.style.setProperty('--p', p.toFixed(3));
      list.querySelectorAll<HTMLElement>('.tl-node').forEach((n) => {
        const nr = n.getBoundingClientRect();
        n.classList.toggle('on', nr.top < vh * 0.65);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="process" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div ref={ref} className={`mb-16 md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            How We Work
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1] tracking-[-0.03em]">
            Process built
            <br />
            <span className="text-white-20">for excellence</span>
          </h2>
        </div>

        <ol ref={listRef} className="relative list-none max-w-3xl pl-12 md:pl-16 space-y-6">
          {/* Track + drawn line */}
          <span className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-white-08" aria-hidden="true" />
          <span
            className="tl-line absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-[var(--accent)]"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <TimelineStep key={step.step} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }: { step: (typeof processSteps)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>();
  const Icon = iconMap[step.icon];
  return (
    <li
      ref={ref}
      className={`relative reveal ${isVisible ? 'visible' : ''}`}
    >
      <span
        className="tl-node absolute -left-12 md:-left-16 top-6 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[var(--glass-border)] bg-surface-2 flex items-center justify-center text-[0.7rem] font-semibold tabular-nums text-white"
        aria-hidden="true"
      >
        {step.step}
      </span>
      <div className="glass-card lift rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon size={20} className="text-blue" aria-hidden="true" />}
          <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
        </div>
        <p className="text-[0.85rem] text-white-60 leading-[1.7]">{step.description}</p>
      </div>
      <span className="sr-only">Step {index + 1} of {processSteps.length}</span>
    </li>
  );
}
