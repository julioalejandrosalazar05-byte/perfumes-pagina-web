import React, { useState } from 'react';
import { Order } from '../types';
import { Search, PackageCheck, Truck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { LumiereLogo } from './LumiereLogo';

interface OrderTrackerModalProps {
  orders: Order[];
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ orders }) => {
  const [searchTracking, setSearchTracking] = useState('PL-8924');
  const [activeOrder, setActiveOrder] = useState<Order | null>(orders[0] || null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const cleanQuery = searchTracking.trim().toUpperCase().replace('#', '');
    const found = orders.find((o) => o.trackingNumber.toUpperCase() === cleanQuery || o.id.toUpperCase() === cleanQuery);
    if (found) {
      setActiveOrder(found);
    } else {
      setActiveOrder(null);
    }
  };

  const steps = [
    { title: 'Pedido Confirmado', desc: 'Pago verificado y registrado', done: true },
    { title: 'Sellado en Cera & Empaque', desc: 'Cofre preparado con sobre aromático', done: true },
    { title: 'En Tránsito Express', desc: 'En manos del courier en Barcelona', done: true },
    { title: 'Entrega Estimada', desc: '29-30 de Julio, 2026', done: false },
  ];

  return (
    <section className="py-12 bg-[#050505] text-white" id="order-tracker-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-2">
            <LumiereLogo size="md" layout="vertical" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8926a]/15 border border-[#b8926a]/30 text-[#b8926a] text-xs font-bold uppercase tracking-widest">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Seguimiento de Pedidos en Tiempo Real</span>
          </div>
          <h2 className="font-serif-luxury text-3xl font-bold text-white">
            Rastrear mi Envío de Perfume Luxe
          </h2>
          <p className="text-xs text-white/60">
            Introduce tu número de seguimiento (ejemplo: <strong className="text-[#b8926a]">PL-8924</strong>) para ver el estado de tu pedido.
          </p>
        </div>

        {/* Search Input Form */}
        <form onSubmit={handleSearch} className="flex gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchTracking}
              onChange={(e) => setSearchTracking(e.target.value)}
              placeholder="Número de seguimiento (ej. PL-8924)"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs font-mono uppercase text-white placeholder-white/30 focus:outline-none focus:border-[#b8926a]"
              id="order-tracker-input"
            />
          </div>
          <button
            type="submit"
            id="search-order-btn"
            className="px-6 py-3 rounded-xl bg-[#b8926a] hover:bg-[#d4ad83] text-black font-bold text-xs uppercase tracking-wider transition-all"
          >
            Buscar
          </button>
        </form>

        {/* Order Result Card */}
        {activeOrder ? (
          <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg space-y-6 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#b8926a] uppercase tracking-widest block">
                  Pedido #{activeOrder.trackingNumber}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Cliente: {activeOrder.customerName}
                </h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold w-fit">
                Estado: {activeOrder.status}
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-6 pt-2">
              <h4 className="text-xs font-bold uppercase text-white/50 tracking-wider">
                Línea de Tiempo del Pedido:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {steps.map((st, idx) => (
                  <div key={idx} className="relative space-y-1.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      st.done ? 'bg-[#b8926a] text-black' : 'bg-[#141414] border border-white/10 text-white/40'
                    }`}>
                      {st.done ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                    </div>
                    <h5 className="font-bold text-xs text-white">{st.title}</h5>
                    <p className="text-[11px] text-white/50 leading-tight">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Items Included */}
            <div className="bg-[#141414] p-4 rounded-2xl border border-white/10 text-xs space-y-2">
              <span className="font-bold text-white block">Contenido del Paquete:</span>
              {activeOrder.items.map((it) => (
                <div key={it.id} className="flex justify-between text-white/80">
                  <span>{it.quantity}x {it.perfume.name} ({it.selectedSize})</span>
                  <span className="font-semibold text-white">{formatPrice(it.selectedPrice * it.quantity, (it.perfume.priceBs || it.selectedPrice * 140) * it.quantity)}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white">
                <span>Dirección de Entrega:</span>
                <span className="text-white/80">{activeOrder.address}, {activeOrder.city}</span>
              </div>
            </div>

          </div>
        ) : searched ? (
          <div className="bg-[#0d0d0d] rounded-3xl p-8 border border-white/10 text-center space-y-2 max-w-md mx-auto">
            <Clock className="w-10 h-10 text-[#b8926a] mx-auto" />
            <h4 className="font-serif-luxury text-lg font-bold text-white">Pedido no encontrado</h4>
            <p className="text-xs text-white/60">
              Verifica que el código ingresado sea correcto (ejemplo: <strong className="text-[#b8926a]">PL-8924</strong>).
            </p>
          </div>
        ) : null}

      </div>
    </section>
  );
};
