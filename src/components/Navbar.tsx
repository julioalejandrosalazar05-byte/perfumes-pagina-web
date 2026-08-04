import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Sparkles, ShoppingBag, Heart, Search, Menu, X, User, Gift, PackageCheck, Compass, SlidersHorizontal, Database } from 'lucide-react';
import { LumiereLogo } from './LumiereLogo';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenSearch: () => void;
  onOpenStockManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenStockManager,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'inicio', label: 'Inicio', icon: <Compass className="w-4 h-4" /> },
    { id: 'catalogo', label: 'Catálogo', icon: <SlidersHorizontal className="w-4 h-4" /> },
    { id: 'sommelier', label: 'Asesor Olfativo AI', icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" /> },
    { id: 'discovery', label: 'Set Muestras', icon: <Gift className="w-4 h-4" /> },
    { id: 'rastreo', label: 'Mis Pedidos', icon: <PackageCheck className="w-4 h-4" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#070709]/95 backdrop-blur-md border-b border-white/10 transition-all">
        {/* Top Banner Announcement - Exact match with PDF */}
        <div className="bg-[#000000] text-[#D4AF37] text-[11px] sm:text-xs py-2 px-4 text-center font-semibold tracking-[0.2em] uppercase flex justify-center items-center gap-2 border-b border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span>NUEVAS FRAGANCIAS DE EDICIÓN LIMITADA</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse hidden sm:inline" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Hamburger Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo - LUMIÈRE PARFUMS */}
            <button
              onClick={() => { setActiveTab('inicio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center justify-center group focus:outline-none cursor-pointer mx-auto md:mx-0"
              id="brand-logo-btn"
            >
              <LumiereLogo size="md" layout="horizontal" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    id={`nav-link-${item.id}`}
                    className={`px-3 lg:px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#18181f] text-[#D4AF37] border border-[#D4AF37]/50 shadow-sm'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Utilities & Action Buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                id="open-search-btn"
                className="p-2.5 rounded-full text-white/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors focus:outline-none"
                title="Buscar fragancias"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                id="open-wishlist-btn"
                className="p-2.5 rounded-full text-white/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors relative focus:outline-none"
                title="Lista de deseos"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#D4AF37] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Admin Database & Stock Button */}
              {onOpenStockManager && (
                <button
                  onClick={onOpenStockManager}
                  id="open-admin-btn"
                  className="p-2.5 rounded-full text-white/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors relative focus:outline-none"
                  title="Gestor de Inventario y Base de Datos (Admin)"
                >
                  <Database className="w-5 h-5" />
                </button>
              )}

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                id="open-cart-btn"
                className="p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#D4AF37] text-black hover:bg-[#e5be48] transition-all shadow-md focus:outline-none group font-bold flex items-center gap-2"
                title="Ver Carrito de Compra"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-[#D4AF37] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#D4AF37]">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold tracking-wider uppercase hidden sm:inline">
                  Carrito
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d10] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-[#1a1a22] text-[#D4AF37] border border-[#D4AF37]/40'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Sticky Bottom Navigation Bar (Mirroring PDF page 1 & 2 bottom bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#07070a]/95 backdrop-blur-lg border-t border-white/15 py-2 px-3 shadow-2xl md:hidden">
        <div className="grid grid-cols-4 gap-1 text-center">
          {/* INICIO */}
          <button
            onClick={() => {
              setActiveTab('inicio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              activeTab === 'inicio' ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
            }`}
          >
            <Sparkles className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">INICIO</span>
          </button>

          {/* BUSCAR */}
          <button
            onClick={() => {
              setActiveTab('catalogo');
              onOpenSearch();
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              activeTab === 'catalogo' ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
            }`}
          >
            <Search className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">BUSCAR</span>
          </button>

          {/* DESEOS */}
          <button
            onClick={onOpenWishlist}
            className="flex flex-col items-center justify-center py-1 rounded-xl text-white/60 hover:text-[#D4AF37] transition-all relative"
          >
            <Heart className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">DESEOS</span>
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-4 bg-[#D4AF37] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* CUENTA / CARRO */}
          <button
            onClick={onOpenCart}
            className="flex flex-col items-center justify-center py-1 rounded-xl text-white/60 hover:text-[#D4AF37] transition-all relative"
          >
            <User className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">CUENTA</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-4 bg-[#D4AF37] text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};


