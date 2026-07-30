import React from 'react';
import { Perfume } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { LumiereLogo } from './LumiereLogo';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistPerfumes: Perfume[];
  onRemoveFromWishlist: (perfume: Perfume) => void;
  onAddToCart: (perfume: Perfume, selectedSize: string, selectedPrice: number) => void;
  onQuickView: (perfume: Perfume) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistPerfumes,
  onRemoveFromWishlist,
  onAddToCart,
  onQuickView,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#070709] border-l border-white/10 shadow-2xl flex flex-col justify-between text-white">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-[#0d0d12] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LumiereLogo size="sm" showText={false} />
              <h2 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">
                Lista de Deseos ({wishlistPerfumes.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              id="close-wishlist-btn"
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistPerfumes.length > 0 ? (
              wishlistPerfumes.map((perfume) => (
                <div key={perfume.id} className="bg-[#0d0d12] rounded-2xl p-4 border border-white/10 flex gap-4 items-center relative group">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-16 h-20 object-cover rounded-xl border border-white/10 shrink-0 cursor-pointer"
                    onClick={() => {
                      onQuickView(perfume);
                      onClose();
                    }}
                  />

                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase block">
                      {perfume.brand}
                    </span>
                    <h4
                      onClick={() => {
                        onQuickView(perfume);
                        onClose();
                      }}
                      className="font-serif-luxury font-bold text-sm text-white hover:text-[#D4AF37] cursor-pointer uppercase"
                    >
                      {perfume.name}
                    </h4>
                    <span className="text-xs font-bold text-[#D4AF37] block">
                      {formatPrice(perfume.price, perfume.priceBs)}
                    </span>

                    <button
                      onClick={() => onAddToCart(perfume, perfume.defaultSize, perfume.price)}
                      className="mt-2 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#e5be48] text-black text-xs font-extrabold transition-all flex items-center gap-1.5 uppercase"
                    >
                      <ShoppingBag className="w-3 h-3" /> Añadir a la bolsa
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveFromWishlist(perfume)}
                    className="p-1.5 text-white/40 hover:text-red-400 transition-colors self-start"
                    title="Quitar de la lista"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 space-y-3 text-white/50">
                <Heart className="w-12 h-12 text-white/20 mx-auto" />
                <p className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">No tienes fragancias guardadas</p>
                <p className="text-xs max-w-xs mx-auto text-white/60">Haz clic en el corazón de cualquier perfume para guardarlo en tu lista.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

