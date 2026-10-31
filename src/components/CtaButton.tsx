import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { isContactHref, onHomePage, scrollToContact } from '../lib/contact';

type Variant = 'primary' | 'glass' | 'about';

interface CtaButtonProps {
  href: string;
  variant?: Variant;
  size?: 'md' | 'sm';
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * The three main calls to action.
 *  primary – flowing gradient (Start a Project)
 *  glass   – translucent glass with animated gradient border (See Our Projects)
 *  about   – tinted blue/violet glass with glow (About Us)
 * Contact links scroll + focus the form when already on the homepage; elsewhere they navigate to /#contact.
 */
export default function CtaButton({ href, variant = 'primary', size = 'md', children, className = '', onClick }: CtaButtonProps) {
  const Icon = variant === 'about' ? ArrowUpRight : ArrowRight;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (isContactHref(href) && onHomePage()) {
      e.preventDefault();
      if (window.location.hash !== '#contact') history.pushState(null, '', '/#contact');
      scrollToContact();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={`cta cta-${variant} ${size === 'sm' ? 'cta-sm' : ''} ${className}`}>
      <span className="cta-label">
        {children}
        <Icon className="cta-icon" size={size === 'sm' ? 14 : 16} aria-hidden="true" />
      </span>
    </a>
  );
}
