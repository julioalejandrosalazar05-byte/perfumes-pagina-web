import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Gift, Star, Flame } from 'lucide-react';
import { LumiereLogo } from './LumiereLogo';

interface HeroSectionProps {
  onExploreCatalog: () => void;
  onOpenSommelier: () => void;
  onOpenDiscovery: () => void;
  onSelectCategory?: (gender: 'Mujer' | 'Hombre') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onOpenSommelier,
  onSelectCategory
}) => {
  return (
    <div className="relative overflow-hidden bg-[#070709] text-white">
      
      {/* Hero Banner Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-16">
        
        {/* Main Hero Card with Atmospheric Perfume Background (PDF Page 1 Style) */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d0d12] min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          
          {/* Background Image - Luxury Golden Glass Perfume Bottle */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=80"
              alt="Lumière Noir Perfume"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            />
            {/* Vignette gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-xl space-y-4">
            
            {/* Logo Emblem Header */}
            <div className="mb-2">
              <LumiereLogo size="md" layout="horizontal" />
            </div>

            {/* Eyebrow - Tracked Gold Header */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#D4AF37] uppercase block">
              MÁS ALLÁ DE LA SUPERFICIE
            </span>

            {/* Main Title - LUMIÈRE NOIR */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-none">
              LUMIÈRE <span className="text-[#D4AF37]">NOIR</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Elíxir místico de notas solares, ámbar denso y rosa silvestre. Creado con aceites esenciales puros seleccionados a mano.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap gap-3 items-center">
              <button
                onClick={onExploreCatalog}
                id="hero-explore-btn"
                className="px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
              >
                <span>EXPLORAR COLECCIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSommelier}
                id="hero-sommelier-btn"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>ASESOR OLFATIVO AI</span>
              </button>
            </div>

          </div>
        </div>

        {/* Category Banners: LUMIÈRE FOR HER & LUMIÈRE FOR HIM (PDF Page 1 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
          
          {/* LUMIÈRE FOR HER */}
          <div
            onClick={() => onSelectCategory?.('Mujer')}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121218] aspect-[16/7] sm:aspect-[16/6] flex items-center justify-center p-6 cursor-pointer hover:border-[#D4AF37]/80 transition-all duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
              alt="Lumière For Her"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 text-center space-y-1">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase block group-hover:text-[#D4AF37] transition-colors">
                LUMIÈRE FOR HER
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-semibold block">
                VER FRAGANCIAS DE MUJER
              </span>
            </div>
          </div>

          {/* LUMIÈRE FOR HIM */}
          <div
            onClick={() => onSelectCategory?.('Hombre')}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121218] aspect-[16/7] sm:aspect-[16/6] flex items-center justify-center p-6 cursor-pointer hover:border-[#D4AF37]/80 transition-all duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80"
              alt="Lumière For Him"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 text-center space-y-1">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase block group-hover:text-[#D4AF37] transition-colors">
                LUMIÈRE FOR HIM
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-semibold block">
                VER FRAGANCIAS DE HOMBRE
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Value Props Banner */}
      <div className="relative z-10 border-t border-b border-white/10 bg-[#000000]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Truck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Envío Gratis &gt; Bs. 8.400</p>
                <p className="text-[11px] text-white/60">Entrega express asegurada</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Gift className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">2 Muestras de Autor</p>
                <p className="text-[11px] text-white/60">En cada pedido</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">100% Auténtico</p>
                <p className="text-[11px] text-white/60">Sello Lumière Parfums</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Flame className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Alta Fijación</p>
                <p className="text-[11px] text-white/60">Extractos puros concentrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

