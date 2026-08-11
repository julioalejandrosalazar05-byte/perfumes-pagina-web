import React from 'react';
import { Plane } from 'lucide-react';

interface LumiereLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
  className?: string;
  iconClassName?: string;
  fullImage?: boolean; // Prop para forzar la imagen completa (Hero)
}

export const LumiereLogo: React.FC<LumiereLogoProps> = ({
  size = 'md',
  showText = true,
  layout = 'horizontal',
  className = '',
  iconClassName = '',
  fullImage = false,
}) => {
  // Dimension mappings for logo symbol
  const sizeMap = {
    sm: { icon: 20, textTitle: 'text-base', textSub: 'text-[8px] tracking-[0.3em]', gap: 'gap-2', height: '40px' },
    md: { icon: 28, textTitle: 'text-2xl', textSub: 'text-[9px] tracking-[0.35em]', gap: 'gap-3', height: '70px' },
    lg: { icon: 36, textTitle: 'text-3xl', textSub: 'text-[10px] tracking-[0.4em]', gap: 'gap-3.5', height: '100px' },
    xl: { icon: 48, textTitle: 'text-4xl sm:text-5xl', textSub: 'text-xs tracking-[0.45em]', gap: 'gap-4', height: '140px' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (fullImage) {
    return (
      <img 
        src="/logo.png" 
        alt="Lumière Parfums" 
        className={`object-contain drop-shadow-[0_4px_15px_rgba(212,175,55,0.15)] ${className}`} 
        style={{ height: currentSize.height }} 
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center ${
        layout === 'vertical' ? 'flex-col justify-center text-center' : 'flex-row'
      } ${currentSize.gap} ${className}`}
    >
      {/* Icon: Airplane (parte del logo pequeño) */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${iconClassName} text-[#D4AF37]`}
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <Plane 
          className="w-full h-full transform rotate-45 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]" 
          strokeWidth={1.5} 
        />
      </div>

      {/* Brand Logotype Text */}
      {showText && (
        <div className={`flex flex-col ${layout === 'vertical' ? 'items-center mt-1' : 'items-start'}`}>
          <span
            className={`font-serif font-medium tracking-[0.2em] text-[#D4AF37] block leading-none ${currentSize.textTitle}`}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            LUMIÈRE
          </span>
          <span
            className={`font-sans text-[#D4AF37]/70 uppercase font-medium block mt-1 leading-none ${currentSize.textSub}`}
          >
            PARFUMS
          </span>
        </div>
      )}
    </div>
  );
};
