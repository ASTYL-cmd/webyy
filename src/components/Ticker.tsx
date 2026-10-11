import { tickerItems } from '../config';

export default function Ticker() {
  return (
    <section
      aria-label="Technologies used to build this site"
      className="marquee border-t border-b border-border py-4 overflow-hidden bg-surface"
    >
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex list-none" aria-hidden={copy === 1}>
            {tickerItems.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="inline-flex items-center gap-6 px-8 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-white-60"
              >
                {item}
                <span className="text-accent text-xl" aria-hidden="true">+</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
