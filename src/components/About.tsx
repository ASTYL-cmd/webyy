import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div ref={ref} className={`max-w-3xl reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            About Us
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-8">
            A small team
            <br />
            with an outsized
            <br />
            impact
          </h2>
          <div className="space-y-4 mb-10">
            <p className="text-[1.05rem] text-white-60 leading-[1.85] font-light">
              {companyInfo.name} is an independent website design and development studio. We
              specialize in building high-performance websites for businesses, startups, and
              professionals who care about their digital presence.
            </p>
            <p className="text-[1.05rem] text-white-60 leading-[1.85] font-light">
              We sit at the intersection of design and engineering — and we believe that is where
              the best websites are built. Every project we take on gets our full attention,
              because <strong className="text-white font-medium">we only work on a few projects at a time</strong>.
            </p>
            <p className="text-[1.05rem] text-white-60 leading-[1.85] font-light">
              Based in {companyInfo.locations[0]} and working with clients across the globe.
              We focus on what we do best: building websites that are fast, beautiful, and built
              to convert.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 py-4 px-8 text-[0.82rem] font-semibold tracking-wide bg-gradient-primary text-white rounded-full btn-hover-lift shadow-glow-blue"
            >
              Work With Us
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 py-4 px-8 text-[0.82rem] font-normal tracking-wide bg-white-04 border border-border text-white rounded-full backdrop-blur-sm hover:bg-white-08 transition-all"
            >
              Our Process
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
