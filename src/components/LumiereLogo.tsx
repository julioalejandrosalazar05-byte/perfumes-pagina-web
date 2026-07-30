import React from 'react';

interface LumiereLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
  className?: string;
  iconClassName?: string;
}

export const LumiereLogo: React.FC<LumiereLogoProps> = ({
  size = 'md',
  showText = true,
  layout = 'horizontal',
  className = '',
  iconClassName = '',
}) => {
  // Dimension mappings for logo symbol
  const sizeMap = {
    sm: { icon: 24, textTitle: 'text-base', textSub: 'text-[8px] tracking-[0.3em]', gap: 'gap-2' },
    md: { icon: 32, textTitle: 'text-2xl', textSub: 'text-[9px] tracking-[0.35em]', gap: 'gap-3' },
    lg: { icon: 44, textTitle: 'text-3xl', textSub: 'text-[10px] tracking-[0.4em]', gap: 'gap-3.5' },
    xl: { icon: 60, textTitle: 'text-4xl sm:text-5xl', textSub: 'text-xs tracking-[0.45em]', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`inline-flex items-center ${
        layout === 'vertical' ? 'flex-col justify-center text-center' : 'flex-row'
      } ${currentSize.gap} ${className}`}
    >
      {/* Lumière Emblem - Geometric Shape */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${iconClassName}`}
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105"
          aria-label="Logo Lumière"
        >
          <defs>
            {/* Rich Luxury Gold Gradient */}
            <linearGradient id="lumiereGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7E28B" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA820A" />
              <stop offset="100%" stopColor="#F5DC78" />
            </linearGradient>

            <linearGradient id="lumiereInnerGlow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Simple Geometric Shape: Faceted Diamond + Perfume Drop Core */}
          {/* Outer Rhombus / Diamond Frame */}
          <polygon
            points="50,4 96,50 50,96 4,50"
            stroke="url(#lumiereGold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Inner Inverted Diamond Accent */}
          <polygon
            points="50,16 84,50 50,84 16,50"
            stroke="url(#lumiereGold)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
            opacity="0.75"
          />

          {/* Center Light Ray Rays */}
          <line x1="50" y1="12" x2="50" y2="88" stroke="url(#lumiereGold)" strokeWidth="1.5" opacity="0.6" />
          <line x1="12" y1="50" x2="88" y2="50" stroke="url(#lumiereGold)" strokeWidth="1.5" opacity="0.6" />

          {/* Central Perfume Drop / Flame Shape */}
          <path
            d="M50 26 C50 26 66 45 66 58 C66 67.3828 58.8366 75 50 75 C41.1634 75 34 67.3828 34 58 C34 45 50 26 50 26 Z"
            fill="url(#lumiereGold)"
          />

          {/* Drop Inner Core Highlight */}
          <path
            d="M50 34 C50 34 59 48 59 56 C59 61.5 54.97 66 50 66 C45.03 66 41 61.5 41 56 C41 48 50 34 50 34 Z"
            fill="url(#lumiereInnerGlow)"
            opacity="0.85"
          />

          {/* Small Top Light Sparkle */}
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Logotype Text */}
      {showText && (
        <div className={`flex flex-col ${layout === 'vertical' ? 'items-center mt-1' : 'items-start'}`}>
          <span
            className={`font-cinzel font-extrabold tracking-[0.22em] text-[#D4AF37] block leading-none ${currentSize.textTitle}`}
          >
            LUMIÈRE
          </span>
          <span
            className={`font-sans text-white/70 uppercase font-medium block mt-1 leading-none ${currentSize.textSub}`}
          >
            PARFUMS
          </span>
        </div>
      )}
    </div>
  );
};
