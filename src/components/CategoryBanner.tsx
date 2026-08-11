import React from 'react';
import { GenderCategory, OlfactoryFamily } from '../types';
import { Flame, Trees, Sun, Sparkles, HeartHandshake, Droplets, Compass } from 'lucide-react';

interface CategoryBannerProps {
  selectedGender: string;
  setSelectedGender: (gender: GenderCategory) => void;
  selectedFamily: string;
  setSelectedFamily: (family: OlfactoryFamily) => void;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({
  selectedGender,
  setSelectedGender,
  selectedFamily,
  setSelectedFamily,
}) => {
  const genderList: { id: GenderCategory; label: string }[] = [
    { id: 'Todos', label: 'Todos los Perfumes' },
    { id: 'Unisex', label: 'Unisex' },
    { id: 'Hombre', label: 'Hombre' },
    { id: 'Mujer', label: 'Mujer' },
    { id: 'Nicho', label: 'Perfumería Nicho' },
  ];

  const familiesList: { id: OlfactoryFamily; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'Todas', label: 'Todas las Familias', icon: <Compass className="w-5 h-5" />, desc: 'Explora toda la colección' },
    { id: 'Amaderado', label: 'Amaderados', icon: <Trees className="w-5 h-5 text-[#8B5E3C]" />, desc: 'Sándalo, Cedro & Oud' },
    { id: 'Oriental', label: 'Orientales', icon: <Flame className="w-5 h-5 text-[#C5A059]" />, desc: 'Ámbar, Especias & Incienso' },
    { id: 'Cítrico', label: 'Cítricos & Frescos', icon: <Sun className="w-5 h-5 text-[#EAB308]" />, desc: 'Bergamota & Azahar' },
    { id: 'Floral', label: 'Florales', icon: <Sparkles className="w-5 h-5 text-[#EC4899]" />, desc: 'Rosa de Grasse, Peonía & Iris' },
    { id: 'Gourmand', label: 'Gourmand', icon: <HeartHandshake className="w-5 h-5 text-[#955251]" />, desc: 'Vainilla, Tonka & Cacao' },
    { id: 'Fresco', label: 'Acuáticos & Verdes', icon: <Droplets className="w-5 h-5 text-[#0EA5E9]" />, desc: 'Vetiver & Brisa Marina' },
  ];

  return (
    <div className="bg-[#050505] py-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Gender Pills Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#b8926a] uppercase block">
              Exploración Olfativa
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Colecciones y Categorías
            </h2>
          </div>

          {/* Gender Pills */}
          <div className="flex flex-wrap gap-2">
            {genderList.map((g) => {
              const active = selectedGender === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGender(g.id)}
                  id={`gender-filter-${g.id.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    active
                      ? 'bg-[#b8926a] text-black font-bold shadow-md scale-105'
                      : 'bg-[#0d0d0d] text-white/70 hover:text-white hover:bg-[#1a1a1a] border border-white/10'
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Olfactory Families Cards Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {familiesList.map((f) => {
            const active = selectedFamily === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFamily(f.id)}
                id={`family-card-${f.id.toLowerCase()}`}
                className={`p-3.5 rounded-2xl text-left transition-all flex flex-col justify-between border ${
                  active
                    ? 'bg-[#1a1a1a] text-[#b8926a] border-[#b8926a]/60 shadow-lg scale-[1.03]'
                    : 'bg-[#0d0d0d] text-white border-white/10 hover:border-[#b8926a] hover:bg-[#141414]'
                }`}
              >
                <div className={`p-2 rounded-xl inline-block w-fit mb-2 ${active ? 'bg-white/10' : 'bg-[#141414]'}`}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xs leading-tight mb-0.5">{f.label}</h3>
                  <p className={`text-[10px] leading-tight ${active ? 'text-[#d6d3d1]' : 'text-[#a8a29e]'}`}>
                    {f.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
