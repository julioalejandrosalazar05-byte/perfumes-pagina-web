import React, { useState } from 'react';
import { Perfume, CartItem } from '../types';
import { Gift, Check, Plus } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface DiscoveryKitBuilderProps {
  perfumes: Perfume[];
  onAddKitToCart: (kitItem: CartItem) => void;
}

export const DiscoveryKitBuilder: React.FC<DiscoveryKitBuilderProps> = ({
  perfumes,
  onAddKitToCart,
}) => {
  const [selectedPerfumes, setSelectedPerfumes] = useState<Perfume[]>([]);
  const [boxColor, setBoxColor] = useState<'Negro Azabache' | 'Dorado Champán' | 'Blanco Marfil'>('Negro Azabache');
  const [engravingText, setEngravingText] = useState<string>('');
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const KIT_PRICE = 45;
  const KIT_PRICE_BS = 2250;

  const handleToggleSelect = (perfume: Perfume) => {
    if (selectedPerfumes.some((p) => p.id === perfume.id)) {
      setSelectedPerfumes(selectedPerfumes.filter((p) => p.id !== perfume.id));
    } else {
      if (selectedPerfumes.length < 3) {
        setSelectedPerfumes([...selectedPerfumes, perfume]);
      }
    }
  };

  const handleAddToCart = () => {
    if (selectedPerfumes.length !== 3) return;

    const names = selectedPerfumes.map((p) => p.name).join(', ');
    const kitPerfumeObject: Perfume = {
      id: `kit-${Date.now()}`,
      name: `Discovery Set Custom (3x10ml)`,
      brand: 'Lumière Parfums',
      tagline: `Estuche ${boxColor} grabado`,
      description: `Cofre de descubrimiento personalizado con 3 atomizadores de viaje (10ml cada uno): ${names}. Grabado: "${engravingText || 'Sin grabado'}".`,
      price: KIT_PRICE,
      priceBs: KIT_PRICE_BS,
      defaultSize: '3x10ml',
      sizeOptions: [{ ml: 30, label: '3x10 ml', price: KIT_PRICE, priceBs: KIT_PRICE_BS }],
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
      gender: 'Unisex',
      family: 'Fresco',
      concentration: 'Eau de Parfum',
      notes: { top: ['Muestras de Autor'], heart: ['Variedad Olfativa'], base: ['Viaje'] },
      longevityScore: 5,
      projectionScore: 4,
      seasons: ['Todo el año'],
      occasions: ['Regalo', 'Viaje'],
      rating: 5,
      reviewCount: 42,
      stock: 50
    };

    const cartItem: CartItem = {
      id: `kit-${Date.now()}`,
      perfume: kitPerfumeObject,
      selectedSize: `3x10ml (${boxColor})`,
      selectedPrice: KIT_PRICE,
      quantity: 1
    };

    onAddKitToCart(cartItem);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <section className="py-12 bg-[#070709] text-white" id="discovery-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
            <Gift className="w-3.5 h-3.5" />
            <span>Atelier de Muestras de Autor</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
            Diseña tu Set Descubrimiento (3x10ml)
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Selecciona 3 fragancias en formato atomizador de viaje (10ml). Incluye cofre rígido de lujo con cierre magnético y grabado láser personalizado por solo <strong className="text-[#D4AF37]">{formatPrice(KIT_PRICE, KIT_PRICE_BS)}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Fragrance Picker */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-luxury text-xl font-bold text-white uppercase tracking-wider">
                Paso 1: Elige 3 Fragancias ({selectedPerfumes.length}/3)
              </h3>
              {selectedPerfumes.length > 0 && (
                <button
                  onClick={() => setSelectedPerfumes([])}
                  className="text-xs text-[#D4AF37] hover:underline font-bold uppercase tracking-wider"
                >
                  Vaciar selección
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {perfumes.map((perfume) => {
                const isSelected = selectedPerfumes.some((p) => p.id === perfume.id);
                return (
                  <div
                    key={perfume.id}
                    onClick={() => handleToggleSelect(perfume)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#14141d] text-white border-[#D4AF37] shadow-lg scale-[1.02]'
                        : 'bg-[#0d0d12] text-white border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={perfume.image || '/placeholder.svg'}
                        alt={perfume.name}
                        className="w-12 h-14 object-cover rounded-xl border border-white/10"
                      />
                      <div>
                        <span className={`text-[10px] uppercase font-bold block ${isSelected ? 'text-[#D4AF37]' : 'text-white/50'}`}>
                          {perfume.brand}
                        </span>
                        <h4 className="font-bold text-xs text-white uppercase">{perfume.name}</h4>
                        <span className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-white/50'}`}>
                          {perfume.family}
                        </span>
                      </div>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                        : 'border-white/20 text-white/50'
                    }`}>
                      {isSelected ? <Check className="w-4 h-4 font-bold" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Box Customization & Summary */}
          <div className="bg-[#0d0d12] rounded-3xl p-6 border border-white/10 shadow-xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-5">
              <h3 className="font-serif-luxury text-xl font-bold text-white border-b border-white/10 pb-3 uppercase tracking-wider">
                Paso 2: Personaliza el Cofre
              </h3>

              {/* Color Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  Color del Cofre:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Negro Azabache', 'Dorado Champán', 'Blanco Marfil'] as const).map((color) => (
                    <button
                      key={color}
                      onClick={() => setBoxColor(color)}
                      className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all text-center uppercase tracking-wider ${
                        boxColor === color
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-sm'
                          : 'bg-[#14141d] text-white/70 border-white/10 hover:border-[#D4AF37]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Laser Engraving */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  Grabado Láser Personalizado (Opcional):
                </label>
                <input
                  type="text"
                  maxLength={25}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="Ej. Lumière, 2026, Mi Aroma"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
                <span className="text-[10px] text-white/40 block">
                  Máximo 25 caracteres. Grabado con tipografía romana dorada.
                </span>
              </div>

              {/* Selection Summary */}
              <div className="p-4 rounded-2xl bg-[#14141d] border border-white/10 space-y-2 text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">Resumen del Set:</span>
                {selectedPerfumes.length === 0 ? (
                  <p className="text-white/40 italic">Aún no has seleccionado 3 fragancias.</p>
                ) : (
                  <ul className="space-y-1">
                    {selectedPerfumes.map((p) => (
                      <li key={p.id} className="flex justify-between text-white/80">
                        <span>• 10ml {p.name}</span>
                        <span className="text-[#D4AF37] font-semibold">{p.brand}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Total Price & CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Precio Total Cofre:</span>
                <span className="text-2xl font-bold text-[#D4AF37]">{formatPrice(KIT_PRICE, KIT_PRICE_BS)}</span>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={selectedPerfumes.length !== 3}
                id="add-discovery-kit-btn"
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2 ${
                  selectedPerfumes.length !== 3
                    ? 'bg-white/10 text-white/30 cursor-not-allowed'
                    : addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#D4AF37] hover:bg-[#e5be48] text-black'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>Discovery Set Añadido</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4" />
                    <span>{selectedPerfumes.length === 3 ? `Añadir Set (${formatPrice(KIT_PRICE, KIT_PRICE_BS)})` : `Selecciona ${3 - selectedPerfumes.length} más`}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

