import Image from 'next/image';

interface TripaLogoProps {
  /** Width in px — height auto-scales to preserve aspect ratio */
  width?: number;
  className?: string;
  variant?: 'default' | 'light';
}

/**
 * Official Tripa wordmark logo.
 * Source: /public/tripa-logo.png or /public/tripa-logo-light.png
 */
export function TripaLogo({ width = 100, className = '', variant = 'default' }: TripaLogoProps) {
  const src = variant === 'light' ? '/tripa-logo-light.png' : '/tripa-logo.png';
  return (
    <Image
      src={src}
      alt="Tripa"
      width={width}
      height={0}
      style={{ width: `${width}px`, height: 'auto' }}
      priority
      className={className}
    />
  );
}
