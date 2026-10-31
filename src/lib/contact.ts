const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isContactHref = (href: string) => href === '/#contact' || href === '#contact';

export const onHomePage = () => (window.location.pathname.replace(/\/+$/, '') || '/') === '/';

/** Smoothly scroll to the enquiry form (same page) and move keyboard focus to its first field. */
export function scrollToContact() {
  const section = document.getElementById('contact');
  if (!section) return false;
  section.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
  window.setTimeout(() => document.getElementById('contact-name')?.focus({ preventScroll: true }), reduced() ? 0 : 700);
  return true;
}
