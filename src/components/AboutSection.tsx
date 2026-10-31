import { useScrollReveal } from '../hooks/useScrollReveal';
import TeamGrid from './TeamGrid';
import Wordmark from './Wordmark';

/** Homepage "About Us": intro + Meet the Team Behind the Work (team cards live only here). */
export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about-us" aria-labelledby="about-us-heading" className="py-20 md:py-32 bg-surface scroll-mt-24">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div ref={ref} className={`mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-end reveal ${isVisible ? 'visible' : ''}`}>
          <div>
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              About Us
            </div>
            <h2 id="about-us-heading" className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Meet the team behind
              <br />
              <span className="text-white-20">the work</span>
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg text-white-60 leading-[1.75] mb-6">
              <Wordmark className="text-white" /> is a focused team that builds modern, responsive and user-friendly
              websites, with the people behind every project close to the work.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-accent underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Read more about Webyy →
            </a>
          </div>
        </div>

        <TeamGrid />
      </div>
    </section>
  );
}
