import React, { useState } from 'react';
import { CartItem } from '../types';
import { PROMO_CODES } from '../data/perfumes';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Gift, Check } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { LumiereLogo } from './LumiereLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (appliedDiscountPercent: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percent: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [selectedFreeSample, setSelectedFreeSample] = useState<string>('Santal Impérial 2ml');

  const subtotal = cartItems.reduce((acc, item) => acc + item.selectedPrice * item.quantity, 0);
  const subtotalBs = cartItems.reduce((acc, item) => acc + (item.perfume.priceBs || item.selectedPrice * 50) * item.quantity, 0);

  const discountAmount = appliedPromo ? (subtotal * appliedPromo.percent) / 100 : 0;
  const discountAmountBs = appliedPromo ? (subtotalBs * appliedPromo.percent) / 100 : 0;

  const FREE_SHIPPING_THRESHOLD = 60;
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 4.95;
  const shippingCostBs = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 250;

  const finalTotal = subtotal - discountAmount + shippingCost;
  const finalTotalBs = subtotalBs - discountAmountBs + shippingCostBs;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const codeUpper = promoCodeInput.trim().toUpperCase();
    if (PROMO_CODES[codeUpper]) {
      setAppliedPromo({
        code: codeUpper,
        percent: PROMO_CODES[codeUpper].discountPercent,
      });
      setPromoCodeInput('');
    } else {
      setPromoError('Código no válido. Prueba con LUXE10');
    }
  };

  const freeSamplesOptions = [
    'Santal Impérial (2ml)',
    'Nuit d\'Ambre & Oud (2ml)',
    'Soleil de Méditerranée (2ml)',
    'Rose Velvet & Peony (2ml)'
  ];

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
                Bolsa de Compra ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              id="close-cart-btn"
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#14141d] text-white p-3 px-6 text-xs font-medium space-y-1.5 border-b border-white/10">
            {subtotal >= FREE_SHIPPING_THRESHOLD ? (
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-wider">
                <Check className="w-4 h-4" />
                <span>¡Enhorabuena! Tienes Envío Express Gratuito</span>
              </div>
            ) : (
              <div>
                <span>Añade <strong className="text-[#D4AF37]">{formatPrice(FREE_SHIPPING_THRESHOLD - subtotal, (FREE_SHIPPING_THRESHOLD - subtotal) * 50)}</strong> más para envío gratuito</span>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="bg-[#0d0d12] rounded-2xl p-4 border border-white/10 flex gap-4 items-center relative group">
                  <img
                    src={item.perfume.image || '/placeholder.svg'}
                    alt={item.perfume.name}
                    className="w-16 h-20 object-cover rounded-xl border border-white/10 shrink-0"
                  />
                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase block">
                      {item.perfume.brand}
                    </span>
                    <h4 className="font-serif-luxury font-bold text-sm text-white leading-tight uppercase">
                      {item.perfume.name}
                    </h4>
                    <span className="text-xs text-white/50 block">
                      Tamaño: <strong className="text-white">{item.selectedSize}</strong>
                    </span>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-white/10 rounded-lg bg-[#14141d] p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white/10 font-bold text-xs text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white/10 font-bold text-xs text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold text-xs text-[#D4AF37]">
                        {formatPrice(item.selectedPrice * item.quantity, (item.perfume.priceBs || item.selectedPrice * 50) * item.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Item button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-white/40 hover:text-red-400 transition-colors self-start"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 space-y-3 text-white/50">
                <ShoppingBag className="w-12 h-12 text-white/20 mx-auto" />
                <p className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">Tu bolsa está vacía</p>
                <p className="text-xs max-w-xs mx-auto text-white/60">Explora nuestras colecciones para descubrir tu firma olfativa ideal.</p>
              </div>
            )}

            {/* Free Sample Gift Choice when cart has items */}
            {cartItems.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Gift className="w-4 h-4 text-[#D4AF37]" />
                  <span>Tu Muestra Gratis de Regalo:</span>
                </div>
                <select
                  value={selectedFreeSample}
                  onChange={(e) => setSelectedFreeSample(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {freeSamplesOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#14141d] text-white">{opt}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Footer & Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#0d0d12] border-t border-white/10 space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Código promocional (ej. LUXE10)"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] uppercase tracking-wider"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black text-xs font-bold transition-all uppercase tracking-wider"
                >
                  Aplicar
                </button>
              </form>

              {appliedPromo && (
                <div className="flex justify-between items-center text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 p-2 rounded-lg font-medium">
                  <span>Descuento {appliedPromo.code} ({appliedPromo.percent}%)</span>
                  <button onClick={() => setAppliedPromo(null)} className="underline hover:text-white">Quitar</button>
                </div>
              )}

              {promoError && (
                <p className="text-[11px] text-red-400 font-medium">{promoError}</p>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-white/60 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-white">{formatPrice(subtotal, subtotalBs)}</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Descuento aplicado:</span>
                    <span>-{formatPrice(discountAmount, discountAmountBs)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Envío Express:</span>
                  <span className="font-semibold text-white">
                    {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost, shippingCostBs)}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span className="uppercase tracking-wider">Total Final:</span>
                  <span className="text-[#D4AF37]">{formatPrice(finalTotal, finalTotalBs)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="space-y-3">
                <button
                  onClick={() => onProceedToCheckout(appliedPromo ? appliedPromo.percent : 0)}
                  id="proceed-to-checkout-btn"
                  className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Generar Orden — {formatPrice(finalTotal, finalTotalBs)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[9px] text-white/40 text-center leading-tight">
                  Al continuar, generarás una Orden de Compra (Toma de Pedido). La Factura Fiscal definitiva será emitida con la entrega según providencias del SENIAT.
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

