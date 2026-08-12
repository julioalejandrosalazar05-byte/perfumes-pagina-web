import React, { useState, useEffect } from 'react';
import { Perfume } from '../types';
import { signOut } from 'firebase/auth';
import { auth, getPerfumesFromFirestore, deletePerfumeFromFirestore, 
getSalesFromFirestore, addPerfumeToFirestore, updatePerfumeInFirestore,
getExchangeRateFromFirestore, saveExchangeRateToFirestore } from '../lib/firebase';
import { LogOut, Package, ShoppingBag, Plus, Edit2, Trash2, TrendingUp, Users, DollarSign, Activity, X } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'sales'>('dashboard');
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [sales, setSales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPerfume, setEditingPerfume] = useState<Perfume | null>(null);
  
  // Form State
  const [formTab, setFormTab] = useState<'basic' | 'advanced'>('basic');
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: 0,
    size: '100ml',
    image: '',
    gender: 'Mujer',
    description: '',
    family: 'Todas',
    concentration: 'Eau de Parfum'
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const [bcvRate, setBcvRate] = useState<number>(766.86);
  const [isSavingRate, setIsSavingRate] = useState(false);

  const loadData = async () => {
    setLoading(true);
    if (activeTab === 'products') {
      const data = await getPerfumesFromFirestore();
      setPerfumes(data);
    } else if (activeTab === 'sales' || activeTab === 'dashboard') {
      const data = await getSalesFromFirestore();
      setSales(data);
      const rate = await getExchangeRateFromFirestore();
      if (rate) setBcvRate(rate);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleDelete = async (id: string) => {
    // Usamos alert normal por si window.confirm está bloqueado, pero primero intentamos borrar directo
    const success = await deletePerfumeFromFirestore(id);
    if (!success) {
      alert("Error: No se pudo eliminar. Tu base de datos Firebase tiene las reglas de seguridad vencidas o bloqueadas. Ve a la pestaña 'Seguridad' en Firebase y cambia la regla a 'allow read, write: if true;'.");
    } else {
      loadData();
    }
  };

  const handleSaveRate = async () => {
    setIsSavingRate(true);
    const success = await saveExchangeRateToFirestore(bcvRate);
    if (success) {
      alert("Tasa actualizada correctamente. Recarga la página principal para ver los cambios.");
    } else {
      alert("Error al actualizar la tasa. Revisa tus reglas de seguridad en Firebase.");
    }
    setIsSavingRate(false);
  };

  const openNewPerfumeModal = () => {
    setEditingPerfume(null);
    setFormData({
      name: '',
      brand: '',
      price: 0,
      size: '100ml',
      image: '',
      gender: 'Mujer',
      description: '',
      family: 'Todas',
      concentration: 'Eau de Parfum'
    });
    setFormTab('basic');
    setIsModalOpen(true);
  };

  const openEditPerfumeModal = (p: Perfume) => {
    setEditingPerfume(p);
    setFormData({
      name: p.name,
      brand: p.brand,
      price: p.price,
      size: p.defaultSize,
      image: p.image,
      gender: p.gender as any,
      description: p.description,
      family: p.family as any,
      concentration: p.concentration as any
    });
    setFormTab('basic');
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const sizeOptions = formData.size === '100ml' 
      ? [{ ml: 100, label: '100ml Standard', price: formData.price }] 
      : [{ ml: 50, label: '50ml Standard', price: formData.price }];

    const perfumeToSave: any = {
      name: formData.name,
      brand: formData.brand,
      price: formData.price,
      image: formData.image,
      hoverImage: formData.image, // Fallback
      defaultSize: formData.size,
      sizeOptions: sizeOptions,
      gender: formData.gender,
      description: formData.description,
      family: formData.family,
      concentration: formData.concentration,
      tagline: formData.description.substring(0, 50) + '...',
      notes: { top: [], heart: [], base: [] }, // Auto-fill empty to not break UI
      longevityScore: 4,
      projectionScore: 4,
      seasons: ['Diario'],
      occasions: ['Diario'],
      rating: 5,
      reviewCount: 0,
      stock: 10,
    };

    try {
      if (editingPerfume) {
        const success = await updatePerfumeInFirestore(editingPerfume.id, {
          ...perfumeToSave,
          notes: editingPerfume.notes,
          longevityScore: editingPerfume.longevityScore,
          projectionScore: editingPerfume.projectionScore,
          seasons: editingPerfume.seasons,
          occasions: editingPerfume.occasions,
          rating: editingPerfume.rating,
          reviewCount: editingPerfume.reviewCount,
          stock: editingPerfume.stock
        });
        if (!success) alert("Error: Firebase bloqueó la actualización. Ve a la pestaña 'Seguridad' en Firebase y cambia la regla a 'allow read, write: if true;'.");
      } else {
        const newId = await addPerfumeToFirestore(perfumeToSave);
        if (!newId) alert("Error: Firebase bloqueó la creación. Ve a la pestaña 'Seguridad' en Firebase y cambia la regla a 'allow read, write: if true;'.");
      }
    } catch (err) {
      alert("Error inesperado al guardar en Firebase.");
    }

    setIsModalOpen(false);
    setFormLoading(false);
    loadData();
  };

  // --- DATA PROCESSING FOR DASHBOARD ---
  const totalRevenue = sales.reduce((sum, sale) => sum + (sale.total || 0), 0);
  const totalProductsSold = sales.reduce((sum, sale) => {
    return sum + (sale.items ? sale.items.reduce((s: number, item: any) => s + (item.cantidad || 0), 0) : 0);
  }, 0);

  const salesByDate: Record<string, number> = {};
  sales.forEach(sale => {
    if (!sale.fecha_venta) return;
    const date = new Date(sale.fecha_venta).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
    salesByDate[date] = (salesByDate[date] || 0) + (sale.total || 0);
  });
  const salesTimeData = Object.keys(salesByDate).map(date => ({
    date,
    Ingresos: salesByDate[date]
  }));

  const productSales: Record<string, number> = {};
  sales.forEach(sale => {
    if (!sale.items) return;
    sale.items.forEach((item: any) => {
      productSales[item.nombre_producto] = (productSales[item.nombre_producto] || 0) + (item.cantidad || 0);
    });
  });
  const topProductsData = Object.keys(productSales)
    .map(name => ({ name, Cantidad: productSales[name] }))
    .sort((a, b) => b.Cantidad - a.Cantidad)
    .slice(0, 5);

  const stateSales: Record<string, number> = {};
  sales.forEach(sale => {
    const state = sale.estado_venezuela || 'Desconocido';
    stateSales[state] = (stateSales[state] || 0) + 1;
  });
  const stateData = Object.keys(stateSales).map(name => ({
    name,
    value: stateSales[name]
  }));
  const COLORS = ['#f59e0b', '#d97706', '#b45309', '#78350f', '#fbbf24', '#fcd34d'];

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-neutral-900 text-white flex flex-col">
        <div className="p-6 border-b border-neutral-800">
          <h1 className="text-xl font-bold tracking-widest text-amber-500">LUMIÈRE</h1>
          <p className="text-xs text-neutral-400 mt-1">Panel de Administración</p>
        </div>
        
        <div className="flex-1 py-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-6 py-3 text-sm transition-colors ${activeTab === 'dashboard' ? 'bg-amber-500/10 text-amber-500 border-r-4 border-amber-500' : 'text-neutral-400 hover:bg-neutral-800'}`}
          >
            <Activity className="w-5 h-5 mr-3" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center px-6 py-3 text-sm transition-colors ${activeTab === 'products' ? 'bg-amber-500/10 text-amber-500 border-r-4 border-amber-500' : 'text-neutral-400 hover:bg-neutral-800'}`}
          >
            <Package className="w-5 h-5 mr-3" />
            Inventario
          </button>
          <button 
            onClick={() => setActiveTab('sales')}
            className={`w-full flex items-center px-6 py-3 text-sm transition-colors ${activeTab === 'sales' ? 'bg-amber-500/10 text-amber-500 border-r-4 border-amber-500' : 'text-neutral-400 hover:bg-neutral-800'}`}
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Ventas
          </button>
        </div>

        <div className="p-4 border-t border-neutral-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 text-sm text-red-400 hover:bg-red-400/10 rounded transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto h-screen relative">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-neutral-800">Resumen Ejecutivo</h2>
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex items-center space-x-3">
                    <span className="text-amber-800 font-medium text-sm">Tasa BCV:</span>
                    <input 
                      type="number" 
                      value={bcvRate} 
                      onChange={(e) => setBcvRate(Number(e.target.value))}
                      className="w-24 px-2 py-1 border border-amber-300 rounded text-sm text-right focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                    <span className="text-amber-800 text-sm font-bold">Bs/$</span>
                    <button 
                      onClick={handleSaveRate}
                      disabled={isSavingRate}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-sm transition-colors disabled:opacity-50"
                    >
                      {isSavingRate ? '...' : 'Guardar'}
                    </button>
                  </div>
                </div>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-neutral-500">Ingresos Totales</p>
                        <h3 className="text-2xl font-bold text-neutral-900">${totalRevenue.toFixed(2)}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-neutral-500">Pedidos Totales</p>
                        <h3 className="text-2xl font-bold text-neutral-900">{sales.length}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-green-100 text-green-600">
                        <Package className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-neutral-500">Perfumes Vendidos</p>
                        <h3 className="text-2xl font-bold text-neutral-900">{totalProductsSold}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Line Chart */}
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100">
                    <h3 className="text-lg font-bold text-neutral-800 mb-4">Ingresos por Fecha (USD)</h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesTimeData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Ingresos']}
                          />
                          <Line type="monotone" dataKey="Ingresos" stroke="#f59e0b" strokeWidth={3} dot={{r: 4, fill: '#f59e0b', strokeWidth: 0}} activeDot={{r: 6}} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100">
                    <h3 className="text-lg font-bold text-neutral-800 mb-4">Top 5 Perfumes Más Vendidos</h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topProductsData} layout="vertical" margin={{ left: 80 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                          <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#374151', fontSize: 11}} width={80} />
                          <Tooltip 
                            cursor={{fill: '#f3f4f6'}}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          />
                          <Bar dataKey="Cantidad" fill="#d97706" radius={[0, 4, 4, 0]} barSize={24} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Pie Chart */}
                  <div className="bg-white rounded-lg shadow p-6 border border-neutral-100 lg:col-span-2">
                    <h3 className="text-lg font-bold text-neutral-800 mb-4">Distribución de Ventas por Estado</h3>
                    <div className="h-72 flex justify-center">
                      {stateData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={stateData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {stateData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                              formatter={(value: number) => [`${value} pedidos`, 'Cantidad']}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                          </PieChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="flex items-center justify-center h-full text-neutral-400">
                          No hay datos suficientes de estados
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-neutral-800">Gestión de Inventario</h2>
                  <button 
                    onClick={openNewPerfumeModal}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded shadow flex items-center text-sm font-medium transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Perfume
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Producto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Marca</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {perfumes.map((perfume) => (
                        <tr key={perfume.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img className="h-10 w-10 rounded object-cover" src={perfume.image || '/placeholder.svg'} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-neutral-900">{perfume.name}</div>
                                <div className="text-sm text-neutral-500">{perfume.gender}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-neutral-900">{perfume.brand}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-neutral-900">${perfume.price}</div>
                            <div className="text-xs text-neutral-500">{perfume.priceBs || (perfume.price * 50)} Bs</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => openEditPerfumeModal(perfume)}
                              className="text-amber-600 hover:text-amber-900 mr-4"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(perfume.id)} 
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'sales' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Registro de Ventas</h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Cliente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Fecha</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {sales.map((sale) => (
                        <tr key={sale.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-neutral-900">{sale.cliente_nombre || 'Cliente'}</div>
                            <div className="text-sm text-neutral-500">{sale.estado_venezuela}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-neutral-900">
                              {sale.fecha_venta ? new Date(sale.fecha_venta).toLocaleDateString() : 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-neutral-900">${sale.total}</div>
                            <div className="text-xs text-neutral-500">{sale.totalBs} Bs</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {sale.estado_pedido}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {sales.length === 0 && (
                        <tr>
                          <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                            No hay ventas registradas aún.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Perfume Create/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
                <h3 className="text-lg font-bold text-neutral-900">
                  {editingPerfume ? 'Editar Perfume' : 'Agregar Nuevo Perfume'}
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-neutral-400 hover:text-neutral-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="border-b border-neutral-200 bg-neutral-50 px-6">
                <nav className="-mb-px flex space-x-6">
                  <button
                    onClick={() => setFormTab('basic')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${formTab === 'basic' ? 'border-amber-500 text-amber-600' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'}`}
                  >
                    1. Información Básica
                  </button>
                  <button
                    onClick={() => setFormTab('advanced')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${formTab === 'advanced' ? 'border-amber-500 text-amber-600' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'}`}
                  >
                    2. Detalles Opcionales
                  </button>
                </nav>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                <form id="perfume-form" onSubmit={handleFormSubmit}>
                  {formTab === 'basic' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Nombre</label>
                          <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Ej: Sauvage" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Marca</label>
                          <input type="text" required value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Ej: Dior" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Precio (USD)</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">$</span>
                            <input type="number" required min="1" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full border border-neutral-300 rounded p-2 pl-7 focus:ring-amber-500 focus:border-amber-500" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Tamaño (Único)</label>
                          <select value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500">
                            <option value="100ml">100ml</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">URL de la Imagen (Link)</label>
                        <input type="url" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500" placeholder="https://ejemplo.com/foto.jpg" />
                        <p className="text-xs text-neutral-500 mt-1">Busca la foto en Google, haz clic derecho "Copiar dirección de la imagen" y pégala aquí.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Categoría / Género</label>
                          <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value as any})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500">
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Unisex">Unisex</option>
                            <option value="Nicho">Nicho</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Descripción</label>
                        <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
                      </div>
                    </div>
                  )}

                  {formTab === 'advanced' && (
                    <div className="space-y-4">
                      <div className="bg-amber-50 p-4 rounded-md border border-amber-200 mb-4">
                        <p className="text-sm text-amber-800">
                          Estos campos son opcionales y sirven para los filtros del catálogo. Si no estás seguro, déjalos como están.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Familia Olfativa</label>
                          <select value={formData.family} onChange={e => setFormData({...formData, family: e.target.value as any})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500">
                            <option value="Todas">No Especificada</option>
                            <option value="Cítrico">Cítrico</option>
                            <option value="Amaderado">Amaderado</option>
                            <option value="Oriental">Oriental</option>
                            <option value="Floral">Floral</option>
                            <option value="Gourmand">Gourmand</option>
                            <option value="Fresco">Fresco</option>
                            <option value="Frutal">Frutal</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Concentración</label>
                          <select value={formData.concentration} onChange={e => setFormData({...formData, concentration: e.target.value as any})} className="w-full border border-neutral-300 rounded p-2 focus:ring-amber-500 focus:border-amber-500">
                            <option value="Eau de Parfum">Eau de Parfum</option>
                            <option value="Parfum">Parfum</option>
                            <option value="Extrait de Parfum">Extrait de Parfum</option>
                            <option value="Eau de Toilette">Eau de Toilette</option>
                          </select>
                        </div>
                      </div>
                      
                      <p className="text-xs text-neutral-500 mt-4 italic">
                        Nota: Las notas olfativas (salida, corazón, base) se dejarán en blanco para no recargar la página del producto.
                      </p>
                    </div>
                  )}
                </form>
              </div>
              
              <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex justify-end space-x-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-neutral-300 rounded shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  form="perfume-form"
                  disabled={formLoading}
                  className="px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-black bg-amber-500 hover:bg-amber-400 focus:outline-none disabled:opacity-50"
                >
                  {formLoading ? 'Guardando...' : (editingPerfume ? 'Actualizar Perfume' : 'Crear Perfume')}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
