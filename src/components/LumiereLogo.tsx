import React from 'react';

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
  className = '',
}) => {
  // Dimension mappings for logo image height
  const sizeMap = {
    sm: { height: '45px' },
    md: { height: '80px' },
    lg: { height: '120px' },
    xl: { height: '180px' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <img 
      src="/logo.png" 
      alt="Lumière Parfums" 
      className={`object-contain ${className}`} 
      style={{ height: currentSize.height }} 
    />
  );
};
