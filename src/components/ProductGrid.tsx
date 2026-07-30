import React, { useState, useEffect } from 'react';
import { Perfume, FilterState } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, RotateCcw, Sparkles, Sparkle, Flame, Droplets, Sun, Flower2, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGridProps {
  perfumes: Perfume[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onQuickView: (perfume: Perfume) => void;
  onAddToCart: (perfume: Perfume, selectedSize: string, selectedPrice: number) => void;
  wishlistIds: string[];
  onToggleWishlist: (perfume: Perfume) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  perfumes,
  filters,
  setFilters,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(perfumes.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPerfumes = perfumes.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const catalogSection = document.getElementById('catalogo-section');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      gender: 'Todos',
      family: 'Todas',
      concentration: 'Todas',
      maxPrice: 250,
      sortBy: 'popularidad',
      onlyBestsellers: false,
      onlyNiche: false,
    });
  };

  const activeFilterCount =
    (filters.gender !== 'Todos' ? 1 : 0) +
    (filters.family !== 'Todas' ? 1 : 0) +
    (filters.search !== '' ? 1 : 0) +
    (filters.onlyBestsellers ? 1 : 0) +
    (filters.onlyNiche ? 1 : 0);

  return (
    <section className="py-12 bg-[#070709]" id="catalogo-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-2 pt-4">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-[0.2em]">
            NUESTROS AROMAS
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] uppercase tracking-[0.3em]">
            EXPLORA LAS NOTAS EXCLUSIVAS DE LUMIÈRE
          </p>
        </div>

        {/* Search Bar & Controls Header */}
        <div className="bg-[#0d0d12] p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
          
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                placeholder="Buscar por marca, fragancia o notas..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                id="catalog-search-input"
              />
              {filters.search && (
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Checkboxes & Sort Dropdown */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              
              {/* Checkbox Bestsellers */}
              <label className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 cursor-pointer bg-[#14141d] px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">
                <input
                  type="checkbox"
                  checked={filters.onlyBestsellers}
                  onChange={(e) => setFilters((prev) => ({ ...prev, onlyBestsellers: e.target.checked }))}
                  className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <span className="uppercase tracking-wider">Más Vendidos</span>
              </label>

              {/* Checkbox Nicho */}
              <label className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 cursor-pointer bg-[#14141d] px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">
                <input
                  type="checkbox"
                  checked={filters.onlyNiche}
                  onChange={(e) => setFilters((prev) => ({ ...prev, onlyNiche: e.target.checked }))}
                  className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <span className="flex items-center gap-1 text-[#D4AF37] uppercase tracking-wider font-bold">
                  <Sparkles className="w-3 h-3" /> Solo Nicho
                </span>
              </label>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-white/50" />
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                  id="catalog-sort-select"
                  className="bg-[#14141d] border border-white/10 text-xs font-bold text-white uppercase tracking-wider rounded-xl px-3 py-2 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="popularidad" className="bg-[#14141d] text-white">Ordenar: Popularidad</option>
                  <option value="precio-asc" className="bg-[#14141d] text-white">Precio: Menor a Mayor</option>
                  <option value="precio-desc" className="bg-[#14141d] text-white">Precio: Mayor a Menor</option>
                  <option value="valoracion" className="bg-[#14141d] text-white">Mejor Valorados</option>
                </select>
              </div>

            </div>

          </div>

          {/* Active Filter Tags Bar */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-xs flex-wrap">
              <span className="text-white/50 font-semibold uppercase tracking-wider">Filtros activos:</span>
              
              {filters.gender !== 'Todos' && (
                <span className="bg-[#181820] text-[#D4AF37] border border-[#D4AF37]/40 px-2.5 py-1 rounded-full flex items-center gap-1 font-bold uppercase">
                  Género: {filters.gender}
                </span>
              )}

              {filters.family !== 'Todas' && (
                <span className="bg-[#D4AF37] text-black px-2.5 py-1 rounded-full flex items-center gap-1 font-bold uppercase">
                  Familia: {filters.family}
                </span>
              )}

              {filters.search && (
                <span className="bg-white/10 text-white px-2.5 py-1 rounded-full font-medium">
                  Búsqueda: "{filters.search}"
                </span>
              )}

              <button
                onClick={resetFilters}
                className="text-[#D4AF37] hover:underline font-bold ml-2 flex items-center gap-1 uppercase tracking-wider"
              >
                <RotateCcw className="w-3 h-3" /> Restablecer filtros
              </button>
            </div>
          )}

        </div>

        {/* Results Count Header */}
        <div className="flex justify-between items-center text-xs text-white/60 uppercase tracking-widest font-semibold">
          <p>
            Mostrando <strong className="text-[#D4AF37] text-sm font-extrabold">{startIndex + 1} - {Math.min(startIndex + itemsPerPage, perfumes.length)}</strong> de <strong className="text-white text-sm font-extrabold">{perfumes.length}</strong> fragancias
          </p>
          <p className="text-[#D4AF37]">Página {currentPage} de {totalPages}</p>
        </div>

        {/* Product Cards Grid */}
        {currentPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6">
            {currentPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(perfume.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[#0d0d12] rounded-3xl border border-white/10 p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#14141d] border border-white/10 flex items-center justify-center mx-auto text-[#D4AF37]">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white uppercase tracking-wider">
              No se encontraron fragancias
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              No encontramos resultados que coincidan con tu criterio de búsqueda.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#e5be48] transition-all"
            >
              Ver todas las fragancias
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d0d12] p-4 sm:px-6 rounded-2xl border border-white/10 mt-8">
            <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">
              Mostrando {startIndex + 1}–{Math.min(startIndex + itemsPerPage, perfumes.length)} de {perfumes.length} productos
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs font-bold text-white hover:border-[#D4AF37] disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 uppercase tracking-wider"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-xl text-xs font-extrabold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                        : 'bg-[#14141d] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs font-bold text-white hover:border-[#D4AF37] disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 uppercase tracking-wider"
              >
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* EDICIÓN LIMITADA BOX */}
        <div className="mt-16 rounded-3xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#0d0d12] via-[#12121c] to-[#0d0d12] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.3em] block">
              COLECCIÓN DE AUTOR
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-[0.2em]">
              EDICIÓN LIMITADA LUMIÈRE
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Una combinación única creada para perdurar. Notas exclusivas seleccionadas a mano por nuestros maestros perfumistas.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setFilters({
                    search: '',
                    gender: 'Todos',
                    family: 'Todas',
                    concentration: 'Todas',
                    maxPrice: 250,
                    sortBy: 'popularidad',
                    onlyBestsellers: false,
                    onlyNiche: true,
                  });
                  const input = document.getElementById('catalog-search-input');
                  if (input) {
                    input.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-extrabold text-xs uppercase tracking-[0.25em] transition-all shadow-lg cursor-pointer"
              >
                DESCUBRIR FRAGANCIAS NICHO
              </button>
            </div>
          </div>
        </div>

        {/* NUESTROS INGREDIENTES Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-[0.2em]">
              NUESTROS INGREDIENTES
            </h3>
            <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-[0.25em]">
              SELECCIONA UNA NOTA OLFATIVA PARA FILTRAR EL CATÁLOGO
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            
            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Ámbar' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Sparkle className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Ámbar Dorado</p>
              <p className="text-[10px] text-white/50">Resina cálida</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Cedro' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Droplets className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Madera Cedro</p>
              <p className="text-[10px] text-white/50">Fijación noble</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Oud' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Flame className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Extracto Puro</p>
              <p className="text-[10px] text-white/50">Oud e incienso</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Bergamota' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Sun className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Cítricos Sol</p>
              <p className="text-[10px] text-white/50">Bergamota efervescente</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Rosa' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Flower2 className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Rosa Nocturna</p>
              <p className="text-[10px] text-white/50">Pétalos de terciopelo</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, search: 'Vainilla' }));
                const input = document.getElementById('catalog-search-input');
                if (input) { input.scrollIntoView({ behavior: 'smooth' }); }
              }}
              className="bg-[#0d0d12] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37] hover:bg-[#14141d] active:scale-95 transition-all space-y-2 group cursor-pointer text-center"
            >
              <Leaf className="w-6 h-6 text-[#D4AF37] mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">Vainilla & Especias</p>
              <p className="text-[10px] text-white/50">Gourmand dulce</p>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider pt-1 opacity-80 group-hover:opacity-100">Filtrar aroma</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};


