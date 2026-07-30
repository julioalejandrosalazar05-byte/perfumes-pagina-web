import React, { useState } from 'react';
import { Perfume, QuizPreferences, SommelierResult } from '../types';
import { Sparkles, ShoppingBag, Wand2 } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface AIScentSommelierProps {
  perfumeList: Perfume[];
  onAddToCart: (perfume: Perfume, selectedSize: string, selectedPrice: number) => void;
  onQuickView: (perfume: Perfume) => void;
}

export const AIScentSommelier: React.FC<AIScentSommelierProps> = ({
  perfumeList,
  onAddToCart,
  onQuickView,
}) => {
  const [preferences, setPreferences] = useState<QuizPreferences>({
    occasion: 'Cita Romántica',
    family: 'Amaderado',
    vibe: 'Misterioso y Sofisticado',
    season: 'Otoño / Invierno',
    gender: 'Unisex',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SommelierResult | null>(null);

  const occasions = [
    'Cita Romántica',
    'Eventos de Noche & Galas',
    'Oficina & Uso Diario',
    'Verano & Días Soleados',
    'Regalo Inolvidable'
  ];

  const families = [
    'Amaderado (Sándalo, Cedro, Oud)',
    'Oriental & Ámbar (Vainilla, Especias)',
    'Cítrico & Fresco (Bergamota, Azahar)',
    'Floral Elegante (Rosa, Peonía, Iris)',
    'Gourmand (Tonka, Cacao, Vainilla)'
  ];

  const vibes = [
    'Misterioso y Sofisticado',
    'Luminoso, Fresco y Radiante',
    'Seductor, Cálido y Magnético',
    'Discreto, Limpio y Minimalista'
  ];

  const seasons = [
    'Otoño / Invierno',
    'Primavera / Verano',
    'Todo el Año'
  ];

  const genders = [
    'Unisex',
    'Hombre',
    'Mujer',
    'Nicho Exclusivo'
  ];

  const handleRunSommelier = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/ai-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userPreferences: preferences,
          perfumeList: perfumeList
        })
      });

      if (!response.ok) {
        throw new Error('Fallback response needed');
      }

      const data = await response.json();
      if (data.recommendedIds && data.recommendedIds.length > 0) {
        setResult(data);
      } else {
        throw new Error('No IDs');
      }
    } catch (err) {
      console.log('Using client fallback recommendation engine...');
      const matches = perfumeList.filter((p) => {
        const familyMatch = preferences.family.toLowerCase().includes(p.family.toLowerCase());
        const genderMatch = preferences.gender === 'Unisex' || p.gender === preferences.gender || p.gender === 'Unisex';
        return familyMatch || genderMatch;
      });

      const chosen = matches.length >= 2 ? matches.slice(0, 2) : perfumeList.slice(0, 2);

      setResult({
        recommendedIds: chosen.map((c) => c.id),
        sommelierAdvice: `Atendiendo a tu preferencia por aromas de carácter ${preferences.vibe.toLowerCase()} y tu búsqueda para ${preferences.occasion}, hemos seleccionado elíxires con fijadores nobles que encajan a la perfección con tu firma personal.`,
        matchingNotes: [
          chosen[0]?.notes.top[0] || 'Bergamota',
          chosen[0]?.notes.heart[0] || 'Sándalo',
          chosen[1]?.notes.base[0] || 'Ámbar Dorado'
        ],
        signatureLayeringTip: 'Consejo del Maestro: Aplica primero sobre puntos de pulso hidratados con una loción neutra para potenciar la fijación y duplicar la estela de aroma durante más de 12 horas.'
      });
    } finally {
      setLoading(false);
    }
  };

  const recommendedPerfumes = result
    ? perfumeList.filter((p) => result.recommendedIds.includes(p.id))
    : [];

  return (
    <section className="py-12 bg-[#070709] text-white" id="sommelier-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Inteligencia Olfativa de Autor</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
            Asesor Olfativo de Fragancias AI
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Responde nuestro diagnóstico olfativo y nuestra IA entrenada con perfiles de alta perfumería encontrará las notas perfectas para tu piel y ocasión.
          </p>
        </div>

        {/* Diagnostic Form Panel */}
        <div className="bg-[#0d0d12] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Ocasión */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                1. ¿Para qué ocasión buscas el perfume?
              </label>
              <select
                value={preferences.occasion}
                onChange={(e) => setPreferences({ ...preferences, occasion: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                {occasions.map((o) => (
                  <option key={o} value={o} className="bg-[#14141d] text-white">{o}</option>
                ))}
              </select>
            </div>

            {/* Familia Olfativa */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                2. Familia Olfativa Favorita
              </label>
              <select
                value={preferences.family}
                onChange={(e) => setPreferences({ ...preferences, family: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                {families.map((f) => (
                  <option key={f} value={f} className="bg-[#14141d] text-white">{f}</option>
                ))}
              </select>
            </div>

            {/* Personalidad / Vibe */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                3. Personalidad & Carácter
              </label>
              <select
                value={preferences.vibe}
                onChange={(e) => setPreferences({ ...preferences, vibe: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                {vibes.map((v) => (
                  <option key={v} value={v} className="bg-[#14141d] text-white">{v}</option>
                ))}
              </select>
            </div>

            {/* Estación & Género */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  4. Estación
                </label>
                <select
                  value={preferences.season}
                  onChange={(e) => setPreferences({ ...preferences, season: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {seasons.map((s) => (
                    <option key={s} value={s} className="bg-[#14141d] text-white">{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  5. Preferencia
                </label>
                <select
                  value={preferences.gender}
                  onChange={(e) => setPreferences({ ...preferences, gender: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {genders.map((g) => (
                    <option key={g} value={g} className="bg-[#14141d] text-white">{g}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Trigger Button */}
          <div className="pt-2 text-center">
            <button
              onClick={handleRunSommelier}
              disabled={loading}
              id="run-ai-sommelier-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 mx-auto"
            >
              {loading ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-black" />
                  <span>Analizando Pirámide Olfativa...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generar Recomendación de Autor</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Results Showcase */}
        {result && (
          <div className="bg-[#0d0d12] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 space-y-6 animate-fadeIn shadow-2xl">
            
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Diagnóstico Olfativo
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
                Consejo del Maestro Perfumista
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed italic">
                "{result.sommelierAdvice}"
              </p>

              {/* Matching notes tags */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <span className="text-xs text-white/50 font-semibold uppercase tracking-wider">Notas Afines:</span>
                {result.matchingNotes.map((note) => (
                  <span key={note} className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
                    {note}
                  </span>
                ))}
              </div>

              {/* Layering Tip */}
              {result.signatureLayeringTip && (
                <div className="p-4 rounded-2xl bg-[#14141d] border border-white/10 text-xs text-white/80 mt-3">
                  <strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider">💡 Secreto de Aplicación:</strong>
                  {result.signatureLayeringTip}
                </div>
              )}
            </div>

            {/* Recommended Perfumes Cards */}
            <div>
              <h4 className="text-xs font-extrabold tracking-widest text-[#D4AF37] uppercase mb-4">
                Fragancias Seleccionadas para ti:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recommendedPerfumes.map((perfume) => (
                  <div key={perfume.id} className="bg-[#14141d] rounded-2xl p-4 border border-white/10 flex gap-4 items-center">
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="w-24 h-28 object-cover rounded-xl border border-white/10 shrink-0"
                    />
                    <div className="space-y-2 flex-1">
                      <span className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase block">
                        {perfume.brand}
                      </span>
                      <h5 className="font-serif-luxury text-base font-bold text-white uppercase">
                        {perfume.name}
                      </h5>
                      <p className="text-xs text-white/60">
                        {perfume.family} • <strong className="text-[#D4AF37]">{formatPrice(perfume.price, perfume.priceBs)}</strong>
                      </p>

                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => onQuickView(perfume)}
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                        >
                          Ver Detalles
                        </button>
                        <button
                          onClick={() => onAddToCart(perfume, perfume.defaultSize, perfume.price)}
                          className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#e5be48] text-black text-xs font-bold transition-colors flex items-center gap-1 uppercase"
                        >
                          <ShoppingBag className="w-3 h-3" /> Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

