import { useState } from 'react';
import { assets, companyInfo } from '../config';

interface LogoProps {
  /** Rendered height in px. Width follows the logo's own proportions. */
  height?: number;
  className?: string;
  eager?: boolean;
}

/**
 * Official WEBYY logo, one asset everywhere. If the file is missing the
 * original gradient wordmark is shown so the layout never breaks.
 */
export default function Logo({ height, className = '', eager = true }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`font-display font-bold tracking-[0.25em] uppercase gradient-text ${className}`}
        style={{ fontSize: Math.max(12, (height ?? 40) * 0.45) }}
      >
        {companyInfo.name}
      </span>
    );
  }

  return (
    <img
      src={assets.logo}
      alt="WEBYY logo"
      height={height}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={`block w-auto object-contain ${className}`}
      style={height ? { height } : undefined}
    />
  );
}
