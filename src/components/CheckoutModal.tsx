import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, CreditCard, Lock, ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { LumiereLogo } from './LumiereLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  appliedDiscountPercent: number;
  onOrderCompleted: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  appliedDiscountPercent,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [customerName, setCustomerName] = useState('Cliente Lumière');
  const [email, setEmail] = useState('cliente@ejemplo.com');
  const [phone, setPhone] = useState('+58 412 0000000');
  const [address, setAddress] = useState('Av. Principal de Las Mercedes');
  const [city, setCity] = useState('Caracas');
  const [postalCode, setPostalCode] = useState('1080');
  const [giftNote, setGiftNote] = useState('');

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'pagomovil' | 'transferencia' | 'zelle' | 'whatsapp'>('whatsapp');
  const [pagoMovilCedula, setPagoMovilCedula] = useState('V-12345678');
  const [pagoMovilPhone, setPagoMovilPhone] = useState('04120000000');
  const [refNumber, setRefNumber] = useState('');

  // Completed Order State
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedTracking, setCopiedTracking] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.selectedPrice * item.quantity, 0);
  const subtotalBs = cartItems.reduce((acc, item) => acc + (item.perfume.priceBs || item.selectedPrice * 140) * item.quantity, 0);

  const discountAmount = (subtotal * appliedDiscountPercent) / 100;
  const discountAmountBs = (subtotalBs * appliedDiscountPercent) / 100;

  const shippingCost = subtotal >= 60 ? 0 : 5;
  const shippingCostBs = subtotal >= 60 ? 0 : 700;

  const total = subtotal - discountAmount + shippingCost;
  const totalBs = subtotalBs - discountAmountBs + shippingCostBs;

  const handleOpenWhatsAppOrder = () => {
    const itemsList = cartItems.map(item => `- ${item.quantity}x ${item.perfume.brand} ${item.perfume.name} (${item.selectedSize}): ${formatPrice(item.selectedPrice * item.quantity, (item.perfume.priceBs || item.selectedPrice * 140) * item.quantity)}`).join('\n');
    
    const textMessage = `*NUEVO PEDIDO - LUMIÈRE PARFUMS VENEZUELA* 💎\n\n` +
      `*Cliente:* ${customerName}\n` +
      `*Teléfono:* ${phone}\n` +
      `*Ciudad / Dirección:* ${city}, ${address}\n\n` +
      `*PRODUCTOS SELECCIONADOS:*\n${itemsList}\n\n` +
      `*TOTAL A PAGAR:* ${formatPrice(total, totalBs)} (~$${total.toFixed(2)} USD)\n` +
      `*Método de Pago Preferido:* ${paymentMethod === 'pagomovil' ? 'Pago Móvil Bs.' : paymentMethod === 'zelle' ? 'Zelle' : paymentMethod === 'transferencia' ? 'Transferencia Bancaria Bs.' : 'WhatsApp Directo / Efectivo'}\n\n` +
      `Quedo a la espera de la confirmación de datos para el pago y envío. ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/584120000000?text=${encodedText}`, '_blank');
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === 'whatsapp') {
      handleOpenWhatsAppOrder();
    }

    const trackingNum = `LUMIERE-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: trackingNum,
      date: new Date().toLocaleDateString('es-VE', { day: 'numeric', month: 'long', year: 'numeric' }),
      customerName,
      email,
      phone,
      address,
      city,
      postalCode,
      items: cartItems,
      subtotal,
      discount: discountAmount,
      shipping: shippingCost,
      total,
      paymentMethod: paymentMethod === 'pagomovil' ? 'Pago Móvil (Bs.)' : paymentMethod === 'zelle' ? 'Zelle ($)' : paymentMethod === 'transferencia' ? 'Transferencia (Bs.)' : 'WhatsApp Directo',
      status: 'Procesado',
      trackingNumber: trackingNum,
      estimatedDelivery: '24-48 horas en Caracas / 48-72h Nacional (Tealca / Zoom)'
    };

    setCompletedOrder(newOrder);
    onOrderCompleted(newOrder);
    setStep(3);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTracking(true);
    setTimeout(() => setCopiedTracking(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      <div className="bg-[#070709] rounded-3xl border border-white/10 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col my-auto text-white">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-[#0d0d12] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <LumiereLogo size="sm" showText={false} />
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                Proceso de Compra Seguro
              </span>
              <h2 className="font-serif-luxury text-xl font-bold text-white uppercase tracking-wider">
                {step === 1 && '1. Dirección y Envío'}
                {step === 2 && '2. Pago Protegido'}
                {step === 3 && '3. ¡Pedido Confirmado!'}
              </h2>
            </div>
          </div>

          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Steps Progress Indicator */}
        {step !== 3 && (
          <div className="bg-[#14141d] px-6 py-3 flex justify-between items-center text-xs font-bold text-white border-b border-white/10 uppercase tracking-wider">
            <span className={step === 1 ? 'text-[#D4AF37]' : 'text-white/40'}>• 1. Datos de Envío</span>
            <span className={step === 2 ? 'text-[#D4AF37]' : 'text-white/40'}>• 2. Método de Pago</span>
            <span className="text-white/30">• 3. Confirmación</span>
          </div>
        )}

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Shipping Information */}
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Teléfono Móvil *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Ciudad *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Dirección de Entrega *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle, número, piso y puerta"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Tarjeta o Nota de Regalo en Cera (Opcional)</label>
                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Escribe el mensaje que grabaremos en el sobre de regalo..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d12] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Total a pagar: <span className="text-[#D4AF37]">{formatPrice(total, totalBs)}</span></span>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-2"
                >
                  <span>Continuar al Pago</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Selection */}
          {step === 2 && (
            <form onSubmit={handleProcessPayment} className="space-y-6">
              
              {/* Payment Type Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  Método de Pago para Venezuela:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'whatsapp'
                        ? 'bg-emerald-500 text-black border-emerald-400 shadow-md font-bold'
                        : 'bg-[#0d0d12] text-white/70 border-white/10 hover:border-emerald-500'
                    }`}
                  >
                    <span className="font-bold text-xs block uppercase">📲 WhatsApp</span>
                    <span className="text-[9px] block opacity-90">Recomendado</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pagomovil')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'pagomovil'
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-md font-bold'
                        : 'bg-[#0d0d12] text-white/70 border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-bold text-xs block uppercase">Pago Móvil</span>
                    <span className="text-[9px] block opacity-80">Bolívares (Bs.)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transferencia')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'transferencia'
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-md font-bold'
                        : 'bg-[#0d0d12] text-white/70 border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-bold text-xs block uppercase">Transferencia</span>
                    <span className="text-[9px] block opacity-80">Mercantil / Banesco</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('zelle')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'zelle'
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-md font-bold'
                        : 'bg-[#0d0d12] text-white/70 border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-bold text-xs block uppercase">Zelle ($)</span>
                    <span className="text-[9px] block opacity-80">USD Directo</span>
                  </button>

                </div>
              </div>

              {/* WHATSAPP DIRECT NOTICE */}
              {paymentMethod === 'whatsapp' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-white space-y-2">
                  <span className="font-bold text-emerald-400 block uppercase">
                    💬 Pedido Directo Asistido por WhatsApp:
                  </span>
                  <p className="text-white/80 leading-relaxed text-[11px]">
                    Al continuar, se abrirá tu aplicación de WhatsApp con un resumen detallado de tu orden. Podrás acordar el pago en Bolívares o Divisas, coordinar la entrega en Caracas o envío por Tealca/Zoom con nuestro asesor oficial.
                  </p>
                </div>
              )}

              {/* PAGO MÓVIL DETAILS */}
              {paymentMethod === 'pagomovil' && (
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-3 text-xs">
                  <div className="bg-[#14141d] p-3 rounded-xl border border-white/10 space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Banco:</span> <strong>0105 - Banco Mercantil</strong>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>RIF / CI:</span> <strong>J-501234567</strong>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Teléfono:</span> <strong>0412-0000000</strong>
                    </div>
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Monto Exacto:</span> <strong>{formatPrice(total, totalBs)}</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-[11px] font-bold text-[#D4AF37] uppercase block mb-1">Cédula del Titular</label>
                      <input
                        type="text"
                        value={pagoMovilCedula}
                        onChange={(e) => setPagoMovilCedula(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#D4AF37] uppercase block mb-1">Número de Referencia</label>
                      <input
                        type="text"
                        placeholder="Ej: 849201"
                        value={refNumber}
                        onChange={(e) => setRefNumber(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TRANSFERENCIA DETAILS */}
              {paymentMethod === 'transferencia' && (
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-3 text-xs">
                  <div className="bg-[#14141d] p-3 rounded-xl border border-white/10 space-y-1 font-mono text-[11px]">
                    <div className="text-[#D4AF37] font-bold">Banco Mercantil / Banesco</div>
                    <div className="text-white">Cuenta Corriente: 0105-0000-00-0000000000</div>
                    <div className="text-white">Titular: Lumière Parfums C.A.</div>
                    <div className="text-white">RIF: J-501234567</div>
                    <div className="text-[#D4AF37]">Monto: {formatPrice(total, totalBs)}</div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#D4AF37] uppercase block mb-1">Número de Referencia Bancaria</label>
                    <input
                      type="text"
                      placeholder="Ingrese los últimos 6 dígitos de la referencia"
                      value={refNumber}
                      onChange={(e) => setRefNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              )}

              {/* ZELLE DETAILS */}
              {paymentMethod === 'zelle' && (
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-3 text-xs">
                  <div className="bg-[#14141d] p-3 rounded-xl border border-white/10 space-y-1 font-mono text-[11px]">
                    <div className="text-[#D4AF37] font-bold">Zelle Oficial:</div>
                    <div className="text-white">pagos@lumiereparfums.ve</div>
                    <div className="text-white">Titular: Lumière Perfumes LLC</div>
                    <div className="text-[#D4AF37]">Monto a Transferir: ${total.toFixed(2)} USD</div>
                  </div>
                </div>
              )}

              {/* Guarantee and Legal Disclaimer */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-white/50 justify-center text-center px-4">
                  <Lock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Pago y entrega garantizada con sello de autenticidad Lumière</span>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/20 p-3 rounded-xl text-[10px] text-white/70 text-center leading-relaxed">
                  <strong>Nota Legal (Providencia SENIAT):</strong> Este documento electrónico representa una <strong>Orden de Compra / Toma de Pedido</strong>. La factura fiscal definitiva y legal será emitida a través de nuestro sistema homologado y entregada junto con su pedido o vía correo electrónico una vez confirmado el pago.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-white hover:bg-white/10 flex items-center gap-1 transition-colors uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" /> Volver
                </button>

                <button
                  type="submit"
                  id="confirm-pay-btn"
                  className={`px-8 py-3.5 rounded-xl text-black font-extrabold text-xs uppercase tracking-[0.15em] transition-all shadow-xl ${
                    paymentMethod === 'whatsapp' ? 'bg-emerald-400 hover:bg-emerald-300' : 'bg-[#D4AF37] hover:bg-[#e5be48]'
                  }`}
                >
                  {paymentMethod === 'whatsapp' ? '📲 Enviar Pedido por WhatsApp' : `Confirmar Pedido — ${formatPrice(total, totalBs)}`}
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Order Completed Receipt */}
          {step === 3 && completedOrder && (
            <div className="space-y-6 text-center animate-fadeIn">
              
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white uppercase tracking-wider">
                  ¡Gracias por tu compra, {completedOrder.customerName}!
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  Hemos enviado la confirmación y la orden de compra a <strong className="text-white">{completedOrder.email}</strong>.
                </p>
              </div>

              {/* Tracking Number Box */}
              <div className="p-4 rounded-2xl bg-[#0d0d12] text-white border border-white/10 space-y-2 max-w-sm mx-auto">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                  Número de Seguimiento del Pedido:
                </span>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-xl font-bold text-white">
                    #{completedOrder.trackingNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(completedOrder.trackingNumber)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D4AF37]"
                    title="Copiar código"
                  >
                    {copiedTracking ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <span className="text-[11px] text-white/50 block">
                  Fecha estimada de entrega: <strong className="text-white">{completedOrder.estimatedDelivery}</strong>
                </span>
              </div>

              {/* Order Items Summary */}
              <div className="bg-[#0d0d12] rounded-2xl p-4 border border-white/10 text-left text-xs space-y-2">
                <span className="font-bold text-white block border-b border-white/10 pb-1.5 uppercase tracking-wider">
                  Resumen de Artículos ({completedOrder.items.length}):
                </span>
                {completedOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-white/80">
                    <span>{item.quantity}x {item.perfume.name} ({item.selectedSize})</span>
                    <span className="font-bold text-[#D4AF37]">{formatPrice(item.selectedPrice * item.quantity, (item.perfume.priceBs || item.selectedPrice * 50) * item.quantity)}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white">
                  <span className="uppercase tracking-wider">Total Pagado:</span>
                  <span className="text-[#D4AF37]">{formatPrice(completedOrder.total, completedOrder.total * 50)}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all"
              >
                Volver a la Tienda
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

