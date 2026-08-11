import React, { useState, useEffect } from 'react';
import { Perfume } from '../types';
import { signOut } from 'firebase/auth';
import { auth, getPerfumesFromFirestore, deletePerfumeFromFirestore, getSalesFromFirestore } from '../lib/firebase';
import { LogOut, Package, ShoppingBag, Plus, Edit2, Trash2, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'sales'>('dashboard');
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [sales, setSales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    if (activeTab === 'products') {
      const data = await getPerfumesFromFirestore();
      setPerfumes(data);
    } else if (activeTab === 'sales' || activeTab === 'dashboard') {
      const data = await getSalesFromFirestore();
      setSales(data);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar este perfume?')) {
      await deletePerfumeFromFirestore(id);
      loadData();
    }
  };

  // --- DATA PROCESSING FOR DASHBOARD ---
  
  // Total Revenue
  const totalRevenue = sales.reduce((sum, sale) => sum + (sale.total || 0), 0);
  
  // Products Sold Count
  const totalProductsSold = sales.reduce((sum, sale) => {
    return sum + (sale.items ? sale.items.reduce((s: number, item: any) => s + (item.cantidad || 0), 0) : 0);
  }, 0);

  // Sales Over Time (Last 7 Days or grouped by date)
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

  // Top Selling Products
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
    .slice(0, 5); // Top 5

  // Sales by State
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
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row">
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
      <div className="flex-1 p-8 overflow-auto h-screen">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-800">Resumen Ejecutivo</h2>
                
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
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded shadow flex items-center text-sm font-medium transition-colors">
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
                                <img className="h-10 w-10 rounded object-cover" src={perfume.image} alt="" />
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
                            <div className="text-xs text-neutral-500">{perfume.priceBs} Bs</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-amber-600 hover:text-amber-900 mr-4">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete(perfume.id)} className="text-red-600 hover:text-red-900">
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
      </div>
    </div>
  );
}
