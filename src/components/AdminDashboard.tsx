import React, { useState, useEffect } from 'react';
import { Perfume } from '../types';
import { signOut } from 'firebase/auth';
import { auth, getPerfumesFromFirestore, deletePerfumeFromFirestore } from '../lib/firebase';
import { LogOut, Package, ShoppingBag, Plus, Edit2, Trash2 } from 'lucide-react';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'sales'>('products');
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    if (activeTab === 'products') {
      const data = await getPerfumesFromFirestore();
      setPerfumes(data);
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
      <div className="flex-1 p-8 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
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
                <div className="bg-white rounded-lg shadow p-6 text-center text-neutral-500">
                  <ShoppingBag className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
                  <p>Próximamente: Historial detallado de compras de clientes extraído de Firebase.</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
