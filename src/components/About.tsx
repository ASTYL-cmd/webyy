import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { stats, timeline, companyInfo } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatCounterProps {
  target: number;
  suffix: string;
}

function StatCounter({ target, suffix }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.round(current));
            }
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-[3rem] md:text-[3.5rem] font-extrabold tracking-[-0.04em] leading-[1] gradient-text">
      {count}
      <span className="text-blue">{suffix}</span>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left - Copy */}
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
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
                {companyInfo.name} is an independent digital experience studio founded on the
                conviction that{' '}
                <strong className="text-white font-medium">
                  remarkable work comes from unreasonable standards
                </strong>
                . We take on fewer clients than we could so we can go deeper than anyone else would.
              </p>
              <p className="text-[1.05rem] text-white-60 leading-[1.85] font-light">
                We sit at the intersection of strategy, design, and engineering — and we think that
                intersection is where the most interesting problems live.
              </p>
              <p className="text-[1.05rem] text-white-60 leading-[1.85] font-light">
                Trusted by{' '}
                <strong className="text-white font-medium">
                  startups, growing businesses, and established brands
                </strong>{' '}
                who found that ordinary agencies gave them ordinary results.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
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

            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex gap-6 py-6 border-t border-border ${
                    index === timeline.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="text-[0.7rem] font-semibold tracking-[0.15em] text-blue min-w-[60px] pt-1">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[0.78rem] text-white-60 leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 gap-[2px] reveal reveal-delay-2 ${statsVisible ? 'visible' : ''}`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden bg-surface-2 border border-border px-6 md:px-8 py-8 md:py-10 stat-card-hover stat-card-hover ${
                  index === 0 || index === 2 ? 'border-r-0' : ''
                }`}
              >
                <StatCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-[0.75rem] text-white-60 tracking-[0.05em] mt-2">
                  {stat.label}
                </div>
                <div className="text-[0.7rem] text-white-20 mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
