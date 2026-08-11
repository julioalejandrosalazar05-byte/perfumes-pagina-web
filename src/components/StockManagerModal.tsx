import React, { useState } from 'react';
import { Perfume } from '../types';
import { createDefaultPerfume, DEFAULT_PERFUME_IMAGE } from '../utils/defaults';
import { formatPrice } from '../utils/format';
import { X, Plus, Trash2, Edit3, Upload, Download, PackageCheck, Sparkles, AlertCircle, RefreshCw, Check } from 'lucide-react';
import { savePerfumesToFirestore, deletePerfumeFromFirestore } from '../lib/firebase';

interface StockManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  perfumes: Perfume[];
  onUpdatePerfumes: (newPerfumes: Perfume[]) => void;
  onResetToDemo: () => void;
}

export const StockManagerModal: React.FC<StockManagerModalProps> = ({
  isOpen,
  onClose,
  perfumes,
  onUpdatePerfumes,
  onResetToDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'lista' | 'agregar' | 'importar'>('lista');

  // Single perfume add form state
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [gender, setGender] = useState<'Hombre' | 'Mujer' | 'Unisex' | 'Nicho'>('Unisex');
  const [family, setFamily] = useState<'Cítrico' | 'Amaderado' | 'Oriental' | 'Floral' | 'Gourmand' | 'Fresco'>('Amaderado');
  const [size, setSize] = useState('100ml');
  const [price, setPrice] = useState('');
  const [priceBs, setPriceBs] = useState('');
  const [stock, setStock] = useState('10');
  const [imageUrl, setImageUrl] = useState('');
  const [savedSuccessMsg, setSavedSuccessMsg] = useState('');

  // Bulk import state
  const [bulkText, setBulkText] = useState('');

  // Quick edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState('');
  const [editStock, setEditStock] = useState('');

  if (!isOpen) return null;

  const handleAddSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !brand.trim()) return;

    const numPrice = parseFloat(price) || 0;
    const numPriceBs = parseFloat(priceBs) || (numPrice > 0 ? numPrice * 50 : 0);

    const newPerfume = createDefaultPerfume({
      name: name.trim(),
      brand: brand.trim(),
      gender,
      family,
      defaultSize: size || '100ml',
      price: numPrice,
      priceBs: numPriceBs,
      stock: parseInt(stock) || 10,
      image: imageUrl.trim() || DEFAULT_PERFUME_IMAGE,
    });

    const updated = [newPerfume, ...perfumes];
    onUpdatePerfumes(updated);

    try {
      await savePerfumesToFirestore(updated);
      await fetch('/api/admin/perfumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perfumes: updated }),
      });
    } catch (err) {
      console.error('Error guardando en backend o Firebase:', err);
    }

    setName('');
    setBrand('');
    setPrice('');
    setPriceBs('');
    setImageUrl('');
    setSavedSuccessMsg(`¡${newPerfume.name} agregado a la base de datos de Firebase!`);
    setTimeout(() => setSavedSuccessMsg(''), 3000);
  };

  const handleBulkImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkText.trim()) return;

    // Parse lines: e.g. "Brand - Name" or "Name"
    const lines = bulkText.split('\n').filter((l) => l.trim().length > 0);
    const newItems: Perfume[] = lines.map((line, idx) => {
      let b = 'Perfume Luxe';
      let n = line.trim();

      if (line.includes('-')) {
        const parts = line.split('-');
        b = parts[0].trim();
        n = parts.slice(1).join('-').trim();
      } else if (line.includes(':')) {
        const parts = line.split(':');
        b = parts[0].trim();
        n = parts.slice(1).join(':').trim();
      }

      return createDefaultPerfume({
        id: `stock-import-${Date.now()}-${idx}`,
        name: n,
        brand: b,
        defaultSize: '100ml',
        price: 0, // 0 = Consultar precio
        stock: 10,
      });
    });

    const updated = [...newItems, ...perfumes];
    onUpdatePerfumes(updated);

    try {
      await savePerfumesToFirestore(updated);
      await fetch('/api/admin/perfumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perfumes: updated }),
      });
    } catch (err) {
      console.error('Error guardando en backend o Firebase:', err);
    }

    setBulkText('');
    setSavedSuccessMsg(`¡${newItems.length} perfumes importados a Firebase!`);
    setTimeout(() => setSavedSuccessMsg(''), 4000);
    setActiveTab('lista');
  };

  const handleDeleteItem = async (id: string) => {
    if (confirm('¿Deseas eliminar esta fragancia de la base de datos?')) {
      const updated = perfumes.filter((p) => p.id !== id);
      onUpdatePerfumes(updated);

      try {
        await deletePerfumeFromFirestore(id);
        await fetch('/api/admin/perfumes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ perfumes: updated }),
        });
      } catch (err) {
        console.error('Error guardando en backend o Firebase:', err);
      }
    }
  };

  const handleStartEdit = (p: Perfume) => {
    setEditingId(p.id);
    setEditPrice(p.price ? String(p.price) : '');
    setEditStock(String(p.stock));
  };

  const handleSaveEdit = async (id: string) => {
    const pVal = parseFloat(editPrice) || 0;
    const sVal = parseInt(editStock) || 0;

    const updated = perfumes.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          price: pVal,
          priceBs: pVal > 0 ? pVal * 50 : 0,
          stock: sVal,
          sizeOptions: p.sizeOptions.map((s) => ({
            ...s,
            price: pVal,
            priceBs: pVal > 0 ? pVal * 50 : 0,
          })),
        };
      }
      return p;
    });

    onUpdatePerfumes(updated);
    setEditingId(null);

    try {
      await savePerfumesToFirestore(updated);
      await fetch('/api/admin/perfumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perfumes: updated }),
      });
    } catch (err) {
      console.error('Error guardando en backend o Firebase:', err);
    }
  };

  const handleResetServerDatabase = async () => {
    if (confirm('¿Restablecer la base de datos del servidor y borrar todos los nombres pegados erróneamente?')) {
      try {
        const res = await fetch('/api/admin/reset', { method: 'POST' });
        const data = await res.json();
        if (data.perfumes) {
          onUpdatePerfumes(data.perfumes);
          localStorage.removeItem('perfume_luxe_stock');
          setSavedSuccessMsg('¡Base de datos del servidor restablecida al catálogo limpio sin errores!');
          setTimeout(() => setSavedSuccessMsg(''), 4000);
        }
      } catch (err) {
        console.error('Error reiniciando la base de datos:', err);
        onResetToDemo();
      }
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(perfumes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `inventario_perfumes_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#070709] rounded-3xl border border-[#D4AF37]/30 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col my-auto text-white">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-[#0d0d12] flex items-center justify-between sticky top-0 z-10 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                Base de Datos y Control de Stock
              </span>
              <h2 className="font-serif-luxury text-xl font-bold text-white uppercase tracking-wider">
                Gestor de Inventario Real
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subheader / Tabs */}
        <div className="bg-[#14141d] px-6 py-3 border-b border-white/10 flex flex-wrap justify-between items-center gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('lista')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'lista'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Lista en Stock ({perfumes.length})
            </button>
            <button
              onClick={() => setActiveTab('agregar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'agregar'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <Plus className="w-3.5 h-3.5" /> Agregar Perfume
            </button>
            <button
              onClick={() => setActiveTab('importar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'importar'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <Upload className="w-3.5 h-3.5" /> Pega Masiva
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              title="Descargar respaldo JSON de inventario"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white/80 flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Exportar JSON
            </button>
            <button
              onClick={handleResetServerDatabase}
              title="Restablecer base de datos limpia del servidor y borrar pegados erróneos"
              className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Limpiar & Restablecer BD
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {savedSuccessMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{savedSuccessMsg}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          
          {/* TAB 1: LISTA EN STOCK */}
          {activeTab === 'lista' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 text-xs text-white/70 leading-relaxed flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Gestión con Datos Incompletos:</strong>
                  Puedes tener perfumes sin precio definido (se mostrarán como <em>"Consultar precio"</em>), sin fotos (usarán la botella de lujo por defecto) y con tamaño de 100ml por defecto.
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 rounded-2xl bg-[#0d0d12] overflow-hidden">
                {perfumes.map((p) => (
                  <div key={p.id} className="p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-14 object-cover rounded-xl border border-white/10 bg-black"
                      />
                      <div>
                        <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">
                          {p.brand}
                        </span>
                        <h4 className="font-serif-luxury text-sm font-bold text-white uppercase">
                          {p.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-white/50 mt-0.5">
                          <span>{p.defaultSize}</span>
                          <span>•</span>
                          <span>{p.gender}</span>
                          <span>•</span>
                          <span className="text-[#D4AF37] font-semibold">
                            {formatPrice(p.price, p.priceBs)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions / Editing */}
                    {editingId === p.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Precio ($ / Bs)"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className="w-24 px-2 py-1 rounded bg-[#14141d] border border-white/20 text-xs text-white"
                        />
                        <input
                          type="number"
                          placeholder="Stock"
                          value={editStock}
                          onChange={(e) => setEditStock(e.target.value)}
                          className="w-16 px-2 py-1 rounded bg-[#14141d] border border-white/20 text-xs text-white"
                        />
                        <button
                          onClick={() => handleSaveEdit(p.id)}
                          className="px-3 py-1 rounded-lg bg-emerald-500 text-black text-xs font-bold uppercase"
                        >
                          Guardar
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          p.stock > 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          Stock: {p.stock}
                        </span>
                        <button
                          onClick={() => handleStartEdit(p)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                          title="Editar rápido"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(p.id)}
                          className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                          title="Eliminar de stock"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AGREGAR PERFUME */}
          {activeTab === 'agregar' && (
            <form onSubmit={handleAddSingle} className="space-y-4 max-w-xl mx-auto">
              <h3 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Añadir Fragancia Real en Stock
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Marca / Casa de Perfumería *
                  </label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Ej. Creed, Chanel, Tom Ford"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Nombre del Perfume *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Aventus, Bleu, Baccarat"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Tamaño
                  </label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="100ml"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Precio ($ / Bs.) (Opcional)
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Dejar vacío si no hay"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Cantidad Stock
                  </label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Género / Categoría
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Unisex">Unisex</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Nicho">Nicho</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Familia Olfativa
                  </label>
                  <select
                    value={family}
                    onChange={(e) => setFamily(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Amaderado">Amaderado</option>
                    <option value="Oriental">Oriental</option>
                    <option value="Cítrico">Cítrico</option>
                    <option value="Floral">Floral</option>
                    <option value="Gourmand">Gourmand</option>
                    <option value="Fresco">Fresco</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                  URL Fotografía (Opcional)
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Dejar vacío para usar la botella de autor por defecto"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141d] border border-white/10 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
                <span className="text-[10px] text-white/40 block mt-1">
                  Si no tienes la foto aún, se asignará automáticamente una imagen elegante de frasco de cristal.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Añadir al Inventario Real</span>
              </button>
            </form>
          )}

          {/* TAB 3: IMPORTAR PEGA MASIVA */}
          {activeTab === 'importar' && (
            <form onSubmit={handleBulkImport} className="space-y-4 max-w-xl mx-auto">
              <h3 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Pega Masiva de Lista de Perfumes
              </h3>

              <div className="p-4 rounded-2xl bg-[#0d0d12] border border-white/10 text-xs text-white/70 space-y-1">
                <p className="font-bold text-[#D4AF37]">Formato recomendado (1 perfume por línea):</p>
                <p className="font-mono text-[11px] text-white/60">Marca - Nombre del Perfume</p>
                <p className="text-[10px] text-white/40 italic">
                  Ejemplo:<br />
                  Chanel - Bleu de Chanel<br />
                  Dior - Sauvage Parfum<br />
                  Tom Ford - Ombre Leather
                </p>
              </div>

              <textarea
                rows={8}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder="Pega aquí tu lista de perfumes..."
                className="w-full p-4 rounded-2xl bg-[#14141d] border border-white/10 text-xs text-white font-mono placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5be48] text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Importar Perfumes a la Tienda</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
