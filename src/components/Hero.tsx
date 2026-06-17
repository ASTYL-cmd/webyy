import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { companyInfo } from '../config';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Loader simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      color: string;
      phase: number;
    }> = [];

    const colors = [
      'rgba(79,142,247,',
      'rgba(139,92,246,',
      'rgba(34,211,238,',
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          a: Math.random() * 0.5 + 0.1,
          color,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = p.a * (0.5 + 0.5 * Math.sin(time + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + pulse + ')';
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,142,247,${0.04 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Mouse Spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const hero = document.getElementById('hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      spotlightRef.current.style.setProperty('--mx', px + '%');
      spotlightRef.current.style.setProperty('--my', py + '%');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Loader */}
      <div
        className={`fixed inset-0 z-[10000] bg-void flex flex-col items-center justify-center gap-8 transition-all duration-600 ${
          loaded ? 'opacity-0 invisible pointer-events-none' : ''
        }`}
      >
        <div className="text-sm font-extrabold tracking-[0.4em] uppercase gradient-text">
          {companyInfo.name}
        </div>
        <div className="w-52 h-[1px] bg-white-08 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-gradient-primary animate-[loadFill_1.4s_ease_forwards]" />
        </div>
        <div className="text-[0.7rem] tracking-[0.2em] text-white-60">Loading...</div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-[4vw] py-32 md:py-48"
      >
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />

        {/* Mouse Spotlight */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(79,142,247,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Orbital Rings */}
        <div className="absolute rounded-full border border-blue/8 animate-orbit pointer-events-none z-[1] w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div
          className="absolute rounded-full border border-purple/6 animate-orbit-reverse pointer-events-none z-[1] w-[400px] h-[400px] md:w-[700px] md:h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
        />
        <div
          className="absolute rounded-full border border-blue/4 animate-orbit pointer-events-none z-[1] hidden md:block w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animationDuration: '60s' }}
        />

        {/* Content */}
        <div className="relative z-[2] max-w-6xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-white-04 border border-border rounded-full text-[0.68rem] font-medium tracking-[0.15em] uppercase text-white-60 mb-8 md:mb-10 backdrop-blur-sm animate-fade-up opacity-0 [animation-delay:0.2s]">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-custom" />
            Available for New Projects
          </div>

          {/* Title */}
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6 md:mb-8 animate-fade-up opacity-0 [animation-delay:0.4s]">
            We Build
            <br />
            <span className="text-gradient-animated inline-block">Digital</span>
            <br />
            Experiences
          </h1>

          {/* Description */}
          <p className="text-[clamp(1rem,1.8vw,1.25rem)] font-light leading-relaxed text-white-60 max-w-[600px] mx-auto mb-8 md:mb-12 animate-fade-up opacity-0 [animation-delay:0.6s]">
            Premium website development agency crafting stunning, high-performance websites that
            convert visitors into customers. Strategy, design, and engineering — unified.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap animate-fade-up opacity-0 [animation-delay:0.8s]">
            <a
              href="#work"
              className="inline-flex items-center gap-2 py-4 px-8 text-[0.82rem] font-semibold tracking-wide bg-gradient-primary text-white rounded-full btn-hover-lift shadow-glow-blue hover:shadow-glow-blue-lg group"
            >
              View Our Work
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 py-4 px-8 text-[0.82rem] font-normal tracking-wide bg-white-04 border border-border text-white rounded-full backdrop-blur-sm btn-hover-lift hover:bg-white-08 hover:border-white-20"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2] animate-fade-up opacity-0 [animation-delay:1.2s]">
          <span className="text-[0.58rem] tracking-[0.3em] uppercase text-white-60">
            Scroll to explore
          </span>
          <div className="w-[22px] h-[34px] border border-white-20 rounded-[11px] relative">
            <div className="absolute w-[2px] h-[6px] bg-gradient-to-b from-blue to-transparent rounded-[1px] top-[5px] left-1/2 -translate-x-1/2 animate-scroll-drop" />
          </div>
        </div>
      </section>
    </>
  );
}
