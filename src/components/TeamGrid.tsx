import { Linkedin } from 'lucide-react';
import { team } from '../config';
import type { TeamMember } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const delayClass = index === 1 ? 'reveal-delay-2' : '';

  return (
    <div
      ref={ref}
      className={`glass-card fx-card relative rounded-2xl p-8 md:p-10 group reveal ${isVisible ? 'visible' : ''} ${delayClass}`}
    >
      <span className="fx-glow" aria-hidden="true" />
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

      {/* Each person links only to their own profile */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2 px-4 bg-white-04 border border-border rounded-full text-[0.72rem] text-white-60 hover:border-blue hover:text-blue transition-all"
        >
          <Linkedin size={13} />
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl">
      {team.map((member, index) => (
        <TeamCard key={member.id} member={member} index={index} />
      ))}
    </div>
  );
}
