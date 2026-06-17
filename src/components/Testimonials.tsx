import { Star } from 'lucide-react';
import { testimonials } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 md:p-8 bg-glass border border-border rounded-2xl backdrop-blur-xl transition-colors hover:border-blue/30">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="text-blue fill-blue" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[0.88rem] text-white-60 leading-[1.7] mb-6">{testimonial.text}</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-[0.8rem] font-semibold">{testimonial.author}</div>
          <div className="text-[0.68rem] text-white-60">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  // Duplicate testimonials for seamless loop
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4, 6), ...testimonials.slice(4, 6), ...testimonials.slice(4, 6), ...testimonials.slice(4, 6)];

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-void overflow-hidden">
      {/* Header */}
      <div
        ref={ref}
        className={`px-[4vw] mb-12 md:mb-16 reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
          <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
          Client Voices
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
          What they
          <br />
          <span className="text-white-20">say about us</span>
        </h2>
      </div>

      {/* Marquee Rows */}
      <div className="relative">
        {/* Row 1 - Moving Left */}
        <div className="flex gap-4 mb-4 animate-marquee-left">
          {row1.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex gap-4 animate-marquee-right">
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
