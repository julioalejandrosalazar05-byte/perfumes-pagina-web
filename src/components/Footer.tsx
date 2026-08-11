import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Phone, Mail, Instagram, Music2, Youtube, ShieldCheck, X } from 'lucide-react';
import { ActiveTab } from '../types';
import { LumiereLogo } from './LumiereLogo';

interface FooterProps {
  onOpenAdmin?: () => void;
  onSelectTab?: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onSelectTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [showGuaranteeModal, setShowGuaranteeModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  const navigateTo = (tab: ActiveTab) => {
    if (onSelectTab) {
      onSelectTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] text-white pt-16 pb-24 sm:pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Card */}
        <div className="bg-[#0d0d12] rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/40 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.25em] flex items-center justify-center lg:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" /> CLUB PRIVÉ LUMIÈRE PARFUMS
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              10% de Descuento en tu Primer Elíxir
            </h3>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Suscríbete a nuestra lista privada para acceder a los lanzamientos de edición limitada, catas olfativas exclusivas y ofertas especiales.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSubscribed ? (
              <div className="bg-emerald-500/20 text-emerald-400 p-4 rounded-2xl border border-emerald-500/30 text-xs font-bold flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>¡Suscrito con éxito! Usa el código <strong>LUMIERE10</strong> en tu compra.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Introduce tu e-mail..."
                  className="px-4 py-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] flex-1"
                />
                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
                >
                  <span>UNIRSE AL CLUB</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6 text-xs text-white/70 border-b border-white/10 pb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div>
              <LumiereLogo size="lg" layout="horizontal" />
            </div>
            <p className="font-light leading-relaxed text-white/60">
              Alta perfumería de autor, elíxires puros y notas exclusivas curadas para perdurar en el tiempo.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-white/60">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors p-2 bg-[#14141d] rounded-full border border-white/10"><Instagram className="w-4 h-4" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors p-2 bg-[#14141d] rounded-full border border-white/10"><Music2 className="w-4 h-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors p-2 bg-[#14141d] rounded-full border border-white/10"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Col 2: Colecciones */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-sm text-white uppercase tracking-wider">
              Fragancias Exclusivas
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <button onClick={() => navigateTo('catalogo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  EDICIÓN ORIENTAL & ÁRABE
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('catalogo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  COLECCIÓN DISEÑADOR
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('catalogo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  GOUROUMAND & VANILLA
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('catalogo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  AMADERADOS & INTENSOS
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('catalogo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  EDICIÓN LIMITADA LUMIÈRE
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Atención al Cliente */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-sm text-white uppercase tracking-wider">
              Atención & Guía
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <button onClick={() => navigateTo('sommelier')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Asesor Olfativo AI
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('rastreo')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Rastrear mi Pedido
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('discovery')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Set de Muestras Personalizado
                </button>
              </li>
              <li>
                <button onClick={() => setShowGuaranteeModal(true)} className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5 text-[#D4AF37]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Garantía de Satisfacción 100%</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Tienda Física */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-sm text-white uppercase tracking-wider">
              Ubicación & Contacto
            </h4>
            <ul className="space-y-2 text-white/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Tienda Física: Av. Principal de Las Mercedes, Caracas</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+58 412-0000000 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>contacto@lumiereparfums.ve</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div className="flex items-center gap-3">
            <p>Copyright © 2026 LUMIÈRE PARFUMS VENEZUELA. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-mono">PagoMóvil Bs.</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-mono">Banesco / Mercantil</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-mono">Zelle</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-mono">Efectivo</span>
          </div>
        </div>

      </div>

      {/* Guarantee Modal */}
      {showGuaranteeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0d0d12] border border-[#D4AF37] rounded-3xl max-w-md w-full p-6 text-white space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowGuaranteeModal(false)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[#D4AF37]">
              <ShieldCheck className="w-8 h-8" />
              <div>
                <h3 className="font-serif-luxury font-bold text-lg uppercase">Garantía de Satisfacción Total</h3>
                <p className="text-[10px] text-white/60">Sello de Autenticidad Lumière Parfums</p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light">
              En Lumière Parfums garantizamos que el 100% de nuestras fragancias son auténticas y selladas de origen.
            </p>

            <ul className="text-xs space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>100% Fragancias Originales:</strong> Importación directa garantizada.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Envío Asegurado a toda Venezuela:</strong> MRW, Tealca y Zoom.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Soporte Personalizado:</strong> Asesoría vía WhatsApp antes y después de tu compra.</span>
              </li>
            </ul>

            <button
              onClick={() => setShowGuaranteeModal(false)}
              className="w-full py-3 bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#e5be48] transition-all"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

