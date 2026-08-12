import React, { useState } from 'react';
import { Perfume, Review } from '../types';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, Sparkles, Check, MessageSquare } from 'lucide-react';
import { formatPrice } from '../utils/format';

interface ProductDetailModalProps {
  perfume: Perfume | null;
  onClose: () => void;
  onAddToCart: (perfume: Perfume, selectedSize: string, selectedPrice: number, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (perfume: Perfume) => void;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  perfume,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  reviews,
  onAddReview,
}) => {
  if (!perfume) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(1); // Default to 100ml if present
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'piramide' | 'detalles' | 'resenas'>('piramide');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  // Review Form State
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const images = perfume.image ? [perfume.image, perfume.hoverImage || perfume.image] : ['/placeholder.svg'];
  const currentOption = perfume.sizeOptions[selectedSizeIndex] || perfume.sizeOptions[0];

  const handleAddToCart = () => {
    onAddToCart(perfume, currentOption.label, currentOption.price, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment || !newTitle) return;

    onAddReview({
      perfumeId: perfume.id,
      author: newAuthor,
      city: newCity || 'Caracas',
      rating: newRating,
      title: newTitle,
      comment: newComment,
      verifiedPurchase: true
    });

    setReviewSubmitted(true);
    setNewAuthor('');
    setNewCity('');
    setNewTitle('');
    setNewComment('');
  };

  const perfumeReviews = reviews.filter((r) => r.perfumeId === perfume.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      <div className="bg-[#0a0a0e] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-product-modal-btn"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#14141d] hover:bg-[#262636] text-white border border-white/10 shadow-md transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#14141d] rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group">
              <img
                src={images[activeImageIndex]}
                alt={perfume.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Badge Overlay */}
              {perfume.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#D4AF37] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest shadow-lg">
                    {perfume.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Floating Button */}
              <button
                onClick={() => onToggleWishlist(perfume)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all shadow-md z-10 border border-white/10 ${
                  isWishlisted
                    ? 'bg-black/80 text-[#EC4899]'
                    : 'bg-black/60 text-white/80 hover:bg-black'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#EC4899]' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#D4AF37] shadow-md scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Vista previa" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Value Guarantees */}
            <div className="bg-[#0d0d12] p-4 rounded-2xl border border-white/10 text-xs space-y-2 text-white/70">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Envío express asegurado en Caracas y resto del país</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Fragancia 100% auténtica y garantizada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              {/* Brand and Badges */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                  {perfume.brand}
                </span>
                <div className="flex gap-1.5">
                  <span className="bg-[#181820] border border-white/10 text-white/90 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    {perfume.gender}
                  </span>
                  <span className="bg-[#D4AF37] text-black text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    {perfume.family}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white leading-tight uppercase tracking-wider">
                {perfume.name}
              </h1>

              {/* Tagline & Concentration */}
              <p className="text-xs text-white/60 font-serif-luxury italic mt-1">
                {perfume.concentration} — {perfume.tagline}
              </p>

              {/* Rating Summary */}
              <div className="flex items-center gap-2 mt-3 text-xs">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(perfume.rating) ? 'fill-[#D4AF37]' : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-white">{perfume.rating}</span>
                <span className="text-white/40">({perfume.reviewCount} opiniones)</span>
              </div>

              {/* Similar To Banner (For Niche / Arabic Perfumes) */}
              {perfume.similarTo && (
                <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#14141d] to-[#0d0d12] border border-[#D4AF37]/40 text-xs shadow-md flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                      Perfil Olfativo & Inspiración:
                    </span>
                    <span className="text-white font-bold">
                      Asemeja a: <span className="text-[#D4AF37] underline decoration-dashed">{perfume.similarTo}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mt-4">
                {perfume.description}
              </p>

              {/* Size Selector */}
              <div className="mt-5 space-y-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider block">
                  Seleccionar Presentación:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {perfume.sizeOptions.map((opt, idx) => (
                    <button
                      key={opt.ml}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedSizeIndex === idx
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-extrabold shadow-md'
                          : 'bg-[#0d0d12] text-white border-white/10 hover:border-[#D4AF37]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{opt.label}</span>
                      <span className={`block text-[11px] mt-1 ${selectedSizeIndex === idx ? 'text-black/90 font-bold' : 'text-white/60'}`}>
                        {formatPrice(opt.price, perfume.priceBs ? (perfume.priceBs / perfume.price) * opt.price : undefined)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Quantity Controls */}
              <div className="mt-6 p-4 rounded-2xl bg-[#0d0d12] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/50 block font-medium uppercase tracking-wider">Precio total:</span>
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-[#D4AF37]">
                      {formatPrice(currentOption.price * quantity, perfume.priceBs ? (perfume.priceBs / perfume.price) * currentOption.price * quantity : undefined)}
                    </span>
                    {perfume.originalPrice && selectedSizeIndex === 1 && (
                      <span className="text-xs text-white/40 line-through">
                        {formatPrice(perfume.originalPrice * quantity)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center border border-white/10 rounded-xl bg-[#14141d] p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#262636] font-bold text-white hover:bg-[#333346] flex items-center justify-center text-sm shadow-xs"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#262636] font-bold text-white hover:bg-[#333346] flex items-center justify-center text-sm shadow-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button
                  onClick={handleAddToCart}
                  id="modal-add-to-cart-btn"
                  className={`w-full py-4 rounded-xl font-extrabold text-xs tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                    addedSuccess
                      ? 'bg-emerald-500 text-black'
                      : 'bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-5 h-5 animate-bounce" />
                      <span>¡Añadido a la Bolsa!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Añadir a la Bolsa — {formatPrice(currentOption.price * quantity)}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Tabs: Olfactory Pyramid, Performance, Reviews */}
        <div className="border-t border-white/10 p-6 sm:p-8 bg-[#08080c] rounded-b-3xl space-y-6">
          
          {/* Tabs Selector */}
          <div className="flex border-b border-white/10 gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('piramide')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'piramide'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Pirámide Olfativa
            </button>
            <button
              onClick={() => setActiveTab('detalles')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'detalles'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Estela & Ocasión
            </button>
            <button
              onClick={() => setActiveTab('resenas')}
              className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'resenas'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Opiniones ({perfumeReviews.length})
            </button>
          </div>

          {/* TAB 1: Olfactory Pyramid & Acuerdos Principales */}
          {activeTab === 'piramide' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Fragrantica Style Acuerdos Principales Bar Chart */}
              <div className="bg-[#0d0d12] p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="text-center">
                  <span className="text-[11px] font-medium tracking-widest text-white/80 lowercase block font-serif">
                    acuerdos principales
                  </span>
                </div>

                <div className="space-y-1.5 max-w-lg mx-auto pt-1">
                  {(perfume.mainAccords && perfume.mainAccords.length > 0
                    ? perfume.mainAccords
                    : [
                        { name: "Cálido y picante", color: "#c0392b", width: 100 },
                        { name: "tropical", color: "#f39c12", width: 88 },
                        { name: "sabroso", color: "#e74c3c", width: 78 },
                        { name: "ahumado", color: "#7f8c8d", width: 68 },
                        { name: "dulce", color: "#e84393", width: 58 },
                        { name: "agrios", color: "#f1c40f", width: 48 },
                        { name: "fresco picante", color: "#2ecc71", width: 40 }
                      ]
                  ).map((accord, idx) => (
                    <div
                      key={idx}
                      className="h-7 rounded-full flex items-center px-4 font-sans text-xs font-bold text-white shadow-sm transition-all duration-700 hover:scale-[1.01]"
                      style={{
                        backgroundColor: accord.color,
                        width: `${Math.max(30, accord.width)}%`,
                        color: ['#f1c40f', '#f39c12', '#e0f7fa', '#fd79a8'].includes(accord.color) ? '#000000' : '#ffffff'
                      }}
                    >
                      <span className="truncate drop-shadow-xs">{accord.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Pyramid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Top Notes */}
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                    Primeros 15-30 Minutos
                  </span>
                  <h4 className="font-serif-luxury font-bold text-base text-white uppercase">
                    Notas de Salida
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {perfume.notes.top.map((note) => (
                      <span key={note} className="px-2.5 py-1 rounded-lg bg-[#14141d] border border-white/10 text-xs text-white/80 font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                    Corazón (2-4 Horas)
                  </span>
                  <h4 className="font-serif-luxury font-bold text-base text-white uppercase">
                    Notas de Corazón
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {perfume.notes.heart.map((note) => (
                      <span key={note} className="px-2.5 py-1 rounded-lg bg-[#14141d] border border-white/10 text-xs text-white/80 font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                    Fijación (8+ Horas)
                  </span>
                  <h4 className="font-serif-luxury font-bold text-base text-white uppercase">
                    Notas de Fondo
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {perfume.notes.base.map((note) => (
                      <span key={note} className="px-2.5 py-1 rounded-lg bg-[#14141d] border border-white/10 text-xs text-white/80 font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: Performance Gauges */}
          {activeTab === 'detalles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              
              {/* Gauges */}
              <div className="space-y-4 bg-[#0d0d12] p-5 rounded-2xl border border-white/10">
                <h4 className="font-serif-luxury font-bold text-base text-white uppercase tracking-wider">
                  Rendimiento & Fijación
                </h4>
                
                {/* Longevity */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-white mb-1">
                    <span>Duración / Longitud:</span>
                    <span className="text-[#D4AF37] font-bold">{perfume.longevityScore} / 5 ({perfume.longevityScore * 2 + 2}h aprox)</span>
                  </div>
                  <div className="w-full bg-[#14141d] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D4AF37] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(perfume.longevityScore / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Projection */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-white mb-1">
                    <span>Proyección / Estela:</span>
                    <span className="text-[#D4AF37] font-bold">{perfume.projectionScore} / 5</span>
                  </div>
                  <div className="w-full bg-[#14141d] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D4AF37] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(perfume.projectionScore / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Seasons and Occasions */}
              <div className="space-y-4 bg-[#0d0d12] p-5 rounded-2xl border border-white/10">
                <h4 className="font-serif-luxury font-bold text-base text-white uppercase tracking-wider">
                  Uso Recomendado
                </h4>

                <div>
                  <span className="text-xs font-semibold text-white/50 block mb-1.5 uppercase tracking-wider">Estaciones Ideales:</span>
                  <div className="flex flex-wrap gap-2">
                    {perfume.seasons.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-[#14141d] border border-white/10 text-xs font-semibold text-white">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-white/50 block mb-1.5 uppercase tracking-wider">Ocasiones:</span>
                  <div className="flex flex-wrap gap-2">
                    {perfume.occasions.map((o) => (
                      <span key={o} className="px-3 py-1 rounded-full bg-[#181820] text-white border border-white/10 text-xs font-medium">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Reviews */}
          {activeTab === 'resenas' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Existing Reviews List */}
              <div className="space-y-3">
                {perfumeReviews.length > 0 ? (
                  perfumeReviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-white">{rev.author}</span>
                          {rev.city && <span className="text-[10px] text-white/40">({rev.city})</span>}
                          {rev.verifiedPurchase && (
                            <span className="bg-[#10B981]/20 text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Check className="w-3 h-3" /> Compra Verificada
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-white/40">{rev.date}</span>
                      </div>

                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-[#D4AF37]' : 'text-white/20'}`}
                          />
                        ))}
                      </div>

                      <h5 className="font-bold text-xs text-white pt-1">{rev.title}</h5>
                      <p className="text-xs text-white/70 font-light leading-relaxed">{rev.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-white/50 italic text-center py-4">
                    Sé el primero en dejar una reseña para esta fragancia.
                  </p>
                )}
              </div>

              {/* Leave a Review Form */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-serif-luxury font-bold text-base text-white mb-3 uppercase tracking-wider">
                  Escribir una Opinión
                </h4>

                {reviewSubmitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 font-medium text-xs text-center border border-emerald-500/30">
                    ¡Gracias por tu opinión! Tu reseña ha sido enviada con éxito.
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-3 bg-[#0d0d12] p-4 rounded-2xl border border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">Nombre</label>
                        <input
                          type="text"
                          required
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          placeholder="Tu nombre"
                          className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">Ciudad</label>
                        <input
                          type="text"
                          value={newCity}
                          onChange={(e) => setNewCity(e.target.value)}
                          placeholder="Ej. Caracas, Valencia..."
                          className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">Valoración</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewRating(star)}
                            className="p-1 text-[#D4AF37] focus:outline-none"
                          >
                            <Star className={`w-5 h-5 ${star <= newRating ? 'fill-[#D4AF37]' : 'text-white/20'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">Título de la reseña</label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Ej. Fragancia inolvidable"
                        className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">Comentario</label>
                      <textarea
                        required
                        rows={3}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Describe las notas, la duración y tus sensaciones..."
                        className="w-full px-3 py-2 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-extrabold uppercase tracking-widest hover:bg-[#e5be48] transition-all"
                    >
                      Publicar Opinión
                    </button>
                  </form>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

