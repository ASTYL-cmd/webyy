import { useState } from 'react';
import type { ReactNode } from 'react';

interface AssetImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fit?: 'contain' | 'cover';
  /** Shown only if the file fails to load. */
  fallback: ReactNode;
  priority?: boolean;
}

export default function AssetImage({
  src,
  alt,
  width,
  height,
  className = '',
  fit = 'contain',
  fallback,
  priority = false,
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
    />
  );
}
