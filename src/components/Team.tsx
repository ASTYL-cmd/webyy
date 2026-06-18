import { Linkedin } from 'lucide-react';
import { team } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Team() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div ref={ref} className={`mb-16 md:mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
            The Team
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            The people
            <br />
            <span className="text-white-20">behind the work</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white-60 leading-[1.7] max-w-lg">
            A focused two-person team. No bloated agency hierarchy — just two specialists who care
            deeply about your project.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5px] max-w-3xl">
          {team.map((member, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();
            const delayClass = index === 1 ? 'reveal-delay-2' : '';

            return (
              <div
                key={member.id}
                ref={cardRef}
                className={`relative bg-surface-2 border border-border p-8 md:p-10 transition-all duration-400 group hover:border-blue/30 reveal ${cardVisible ? 'visible' : ''} ${delayClass}`}
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white text-2xl font-extrabold mb-6 transition-transform duration-300 group-hover:scale-105">
                  {member.avatar}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold tracking-tight mb-1">{member.name}</h3>
                <div className="text-[0.72rem] tracking-[0.12em] uppercase text-blue mb-4">
                  {member.role}
                </div>

                {/* Description */}
                <p className="text-[0.82rem] text-white-60 leading-[1.75] mb-6">
                  {member.description}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 bg-white-04 border border-border rounded-full text-[0.72rem] text-white-60 hover:border-blue hover:text-blue transition-all"
                >
                  <Linkedin size={13} />
                  Connect on LinkedIn
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
