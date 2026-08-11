import React, { useState } from 'react';
import { Perfume } from '../types';
import { Star, Heart, Eye, ShoppingBag, Check, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  perfume: Perfume;
  onQuickView: (perfume: Perfume) => void;
  onAddToCart: (perfume: Perfume, selectedSize: string, selectedPrice: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (perfume: Perfume) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  perfume,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const currentOption = perfume.sizeOptions[selectedSizeIndex] || perfume.sizeOptions[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(perfume, currentOption.label, currentOption.price);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      className="group bg-[#0d0d12] rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`product-card-${perfume.id}`}
    >
      {/* Top Image Box */}
      <div className="relative aspect-[4/5] bg-[#14141d] overflow-hidden cursor-pointer" onClick={() => onQuickView(perfume)}>
        
        {/* Main & Hover Image Switch */}
        <img
          src={isHovered ? perfume.hoverImage : perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient Overlay for Text legibility on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges - Exact styling from PDF */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {perfume.badge ? (
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-extrabold tracking-widest uppercase shadow-md">
              {perfume.badge}
            </span>
          ) : perfume.isBestseller ? (
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-extrabold tracking-widest uppercase shadow-md">
              MÁS VENDIDO
            </span>
          ) : perfume.isNew ? (
            <span className="px-3 py-1 rounded-full bg-[#10B981] text-white text-[10px] font-extrabold tracking-widest uppercase shadow-md">
              NUEVO
            </span>
          ) : null}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(perfume);
          }}
          id={`wishlist-btn-${perfume.id}`}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md z-10 border border-white/10 ${
            isWishlisted
              ? 'bg-black/90 text-[#EC4899]'
              : 'bg-black/60 text-white/80 hover:bg-black hover:text-[#D4AF37]'
          }`}
          title="Guardar en lista de deseos"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#EC4899]' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(perfume);
            }}
            id={`quick-view-btn-${perfume.id}`}
            className="w-full py-2.5 rounded-xl bg-white/95 text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" /> Vista Rápida
          </button>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Brand & Family */}
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">
            <span className="text-[#D4AF37]">
              {perfume.brand}
            </span>
            <span className="bg-[#181820] px-2 py-0.5 rounded-md text-white/70 border border-white/10">
              {perfume.family} • {perfume.gender}
            </span>
          </div>

          {/* Title - Bold Uppercase */}
          <h3
            onClick={() => onQuickView(perfume)}
            className="font-serif-luxury text-lg font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer leading-snug tracking-wider uppercase"
          >
            {perfume.name}
          </h3>

          {/* Tagline / PDF Description */}
          <p className="text-xs text-white/70 font-light mt-1.5 leading-snug line-clamp-2">
            {perfume.tagline}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(perfume.rating) ? 'fill-[#D4AF37]' : 'text-white/20'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-white">{perfume.rating}</span>
            <span className="text-white/40">({perfume.reviewCount})</span>
          </div>
        </div>

        {/* Size Selection & Price Footer */}
        <div className="pt-3 border-t border-white/10 space-y-3">
          
          {/* Size Pills */}
          <div className="flex items-center justify-between gap-1 text-[11px]">
            <span className="text-white/50 font-medium text-[10px] uppercase tracking-wider">Tamaño:</span>
            <div className="flex gap-1">
              {perfume.sizeOptions.map((opt, idx) => (
                <button
                  key={opt.ml}
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`px-2 py-0.5 rounded-md font-bold text-[10px] tracking-wider transition-all ${
                    selectedSizeIndex === idx
                      ? 'bg-[#D4AF37] text-black shadow-xs'
                      : 'bg-[#181820] text-white/70 hover:bg-[#22222d] hover:text-white border border-white/10'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price and Action */}
          <div className="space-y-2 pt-1">
            <div className="flex items-baseline justify-between">
              <span className="text-base sm:text-lg font-extrabold text-[#D4AF37] tracking-wider">
                {formatPrice(perfume.priceBs || currentOption.price * 138.88)}
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                {perfume.concentration}
              </span>
            </div>

            {/* COMPRAR AHORA Button - Matching PDF button style */}
            <button
              onClick={handleAdd}
              id={`add-to-cart-btn-${perfume.id}`}
              className={`w-full py-2.5 rounded-xl text-xs font-extrabold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 ${
                addedAnimation
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#181822] hover:bg-[#D4AF37] hover:text-black text-white border border-white/15 hover:border-[#D4AF37]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4 animate-bounce" />
                  <span>AÑADIDO A LA BOLSA</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>COMPRAR AHORA</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

