import { tickerItems } from '../config';

export default function Ticker() {
  // Duplicate items for seamless loop
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="border-t border-b border-border py-4 overflow-hidden bg-surface">
      <div className="flex whitespace-nowrap animate-ticker">
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-6 px-8 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-white-60"
          >
            {item}
            <span className="text-blue text-xl">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
