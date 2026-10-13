import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

/** Shared shell for every page: navigation, content, footer, floating WhatsApp button. */
export default function PageLayout({ children }: { children: ReactNode }) {
  // Deep links such as /about#founder or /#contact: scroll once the page has rendered.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
      if (id === 'contact') document.getElementById('contact-name')?.focus({ preventScroll: true });
    }, 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-void text-white-custom font-sans antialiased">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
