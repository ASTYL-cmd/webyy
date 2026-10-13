import { Palette, Smartphone, MousePointerClick, Sparkles, Gauge, TrendingUp, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { owner } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageLayout from './PageLayout';
import PortraitFrame from './PortraitFrame';
import CtaButton from './CtaButton';
import Wordmark from './Wordmark';

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Palette,
    title: 'Modern design & development',
    text: 'Clean, contemporary websites designed and built with care for every detail.',
  },
  {
    icon: Smartphone,
    title: 'Responsive everywhere',
    text: 'Layouts that feel natural on mobile, tablet and desktop.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy to use',
    text: 'User-friendly navigation and intuitive interfaces that help visitors find what they need.',
  },
  {
    icon: Sparkles,
    title: 'Thoughtful interactions',
    text: 'Smooth animations and small details that add polish without getting in the way.',
  },
  {
    icon: Gauge,
    title: 'Performance & accessibility',
    text: 'Fast-loading, accessible pages backed by maintainable code.',
  },
  {
    icon: TrendingUp,
    title: 'A strong online presence',
    text: 'Websites that help businesses show up, build trust and grow online.',
  },
  {
    icon: Layers,
    title: 'Tailored solutions',
    text: 'Digital solutions shaped around the needs of each business, not a one-size-fits-all template.',
  },
];

const eyebrow =
  'inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4';
const eyebrowLine = 'w-6 h-[1px] bg-gradient-to-r from-blue to-purple';

function Highlight({ item, index }: { item: (typeof highlights)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = item.icon;
  const delay = ['', 'reveal-delay-1', 'reveal-delay-2'][index % 3];
  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={`glass-card lift rounded-2xl p-6 reveal ${isVisible ? 'visible' : ''} ${delay}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border-bright bg-blue-glow">
        <Icon size={20} className="text-accent" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-base font-semibold tracking-tight text-white">{item.title}</h3>
      <p className="text-[0.9rem] leading-[1.7] text-white-60">{item.text}</p>
    </li>
  );
}

export default function AboutPage() {
  usePageMeta(
    'About Us — Webyy',
    'Webyy is a website development company creating modern, responsive, visually appealing and user-friendly digital experiences. Meet the founder behind the brand.',
    '/about'
  );
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: founderRef, isVisible: founderVisible } = useScrollReveal();

  return (
    <PageLayout>
      {/* ---------- A. About Webyy ---------- */}
      <section id="company" aria-labelledby="about-heading" className="px-[4vw] pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <div ref={introRef} className={`max-w-3xl reveal ${introVisible ? 'visible' : ''}`}>
            <div className={eyebrow}>
              <span className={eyebrowLine} />
              About Us
            </div>
            <h1 id="about-heading" className="mb-6 text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05]">
              About <Wordmark className="align-baseline" />
            </h1>
            <div className="space-y-4 text-[1.05rem] leading-[1.85] text-white-60">
              <p>
                <Wordmark className="text-white" /> is a website development company focused on creating modern,
                responsive, visually appealing and user-friendly digital experiences.
              </p>
              <p>
                We help businesses build a strong online presence with websites that look great, work smoothly on every
                device and are easy for visitors to use. Each project is shaped around the needs of the business behind
                it, with thoughtful design, performance, accessibility and maintainable code in mind.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Highlight key={h.title} item={h} index={i} />
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <CtaButton href="/#contact" variant="primary">
              Start a Project
            </CtaButton>
            <CtaButton href="/projects" variant="glass">
              See Our Projects
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ---------- B. About the Founder ---------- */}
      <section id="founder" aria-labelledby="founder-heading" className="bg-surface px-[4vw] py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-[1200px]">
          <div
            ref={founderRef}
            className={`grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,380px)_1fr] md:gap-20 reveal ${founderVisible ? 'visible' : ''}`}
          >
            <PortraitFrame />

            <div className="text-center md:text-left">
              <div className={eyebrow}>
                <span className={eyebrowLine} />
                Founder
              </div>
              <h2 id="founder-heading" className="mb-2 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1]">
                Meet the Founder
              </h2>
              <h3 className="text-2xl font-semibold tracking-tight">{owner.name}</h3>
              <p className="mb-8 mt-1 text-[0.75rem] uppercase tracking-[0.12em] text-white-60">{owner.role}</p>

              <div className="mx-auto mb-8 max-w-xl space-y-6 md:mx-0">
                <div>
                  <h4 className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">Biography</h4>
                  <p className="text-[1rem] leading-[1.85] text-white-60">{owner.role_description}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">Vision</h4>
                  <p className="text-[1rem] leading-[1.85] text-white-60">{owner.bio[1]}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    Our commitment
                  </h4>
                  <p className="text-[1rem] leading-[1.85] text-white-60">
                    A commitment to quality and creativity, and to helping businesses grow online with websites they
                    can be proud of.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <CtaButton href="/#contact" variant="primary">
                  Work With Us
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
