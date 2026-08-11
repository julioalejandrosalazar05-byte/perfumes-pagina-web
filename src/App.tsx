import React, { useState, useEffect, useMemo } from 'react';
import { Perfume, CartItem, Review, Order, FilterState, ActiveTab, GenderCategory, OlfactoryFamily } from './types';
import { PERFUMES_DATA, MOCK_REVIEWS } from './data/perfumes';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryBanner } from './components/CategoryBanner';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AIScentSommelier } from './components/AIScentSommelier';
import { DiscoveryKitBuilder } from './components/DiscoveryKitBuilder';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { StockManagerModal } from './components/StockManagerModal';
import { Footer } from './components/Footer';
import {
  testFirestoreConnection,
  getPerfumesFromFirestore,
  savePerfumesToFirestore,
  recordSaleInFirestore,
  auth
} from './lib/firebase';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { onAuthStateChanged, User } from 'firebase/auth';
import { SQL_PERFUMES_DATA } from './data/sqlPerfumes';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const ADMIN_EMAILS = [
    'julioalejandrosalazar05@gmail.com',
    'vicentemontano59@gmail.com'
  ];
  const isAuthorizedAdmin = user && user.email && ADMIN_EMAILS.includes(user.email);

  useEffect(() => {
    // Check if we are on the admin route
    if (window.location.pathname === '/admin' || window.location.search.includes('admin=true')) {
      setIsAdminRoute(true);
    }
    
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, []);

  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');

  // Perfume Stock / Inventory State fetched from Firebase Firestore database
  const [perfumes, setPerfumes] = useState<Perfume[]>(SQL_PERFUMES_DATA);
  const [isStockManagerOpen, setIsStockManagerOpen] = useState<boolean>(false);
  const [exchangeRate, setExchangeRate] = useState<number>(50);

  // Sync with Firebase Firestore on app boot
  useEffect(() => {
    localStorage.removeItem('perfume_luxe_stock');

    async function initFirebaseStore() {
      // Test connectivity
      await testFirestoreConnection();

      try {
        // Obtener tasa de cambio del BCV
        let currentRate = 50; // Fallback
        try {
          const rateRes = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
          const rateData = await rateRes.json();
          if (rateData && rateData.promedio) {
            currentRate = rateData.promedio;
            setExchangeRate(currentRate);
          }
        } catch (e) {
          console.warn('Error obteniendo tasa BCV, usando fallback:', e);
        }

        const firestorePerfumes = await getPerfumesFromFirestore();
        
        // Función para aplicar la tasa de cambio a los precios
        const applyExchangeRate = (perfumeList: Perfume[]) => {
          return perfumeList.map(p => ({
            ...p,
            priceBs: parseFloat((p.price * currentRate).toFixed(2)),
            sizeOptions: p.sizeOptions.map(opt => ({
              ...opt,
              priceBs: parseFloat((opt.price * currentRate).toFixed(2))
            }))
          }));
        };

        const isUpdated = false; // Forzar actualización de precios en Firebase
        if (isUpdated) {
          setPerfumes(applyExchangeRate(firestorePerfumes));
        } else {
          // Re-seed Firestore with the requested catalog products
          if (firestorePerfumes.length === 0) {
            await savePerfumesToFirestore(SQL_PERFUMES_DATA);
            setPerfumes(applyExchangeRate(SQL_PERFUMES_DATA));
          } else {
            setPerfumes(applyExchangeRate(firestorePerfumes));
          }
        }
      } catch (err) {
        console.error('Error sincronizando con Firebase Firestore:', err);
      }
    }

    initFirebaseStore();
  }, []);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    gender: 'Todos',
    family: 'Todas',
    concentration: 'Todas',
    maxPrice: 250,
    sortBy: 'popularidad',
    onlyBestsellers: false,
    onlyNiche: false,
  });

  // Cart & Wishlist persisted in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('perfume_luxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('perfume_luxe_wishlist');
      if (saved) {
        const parsed: string[] = JSON.parse(saved);
        // Map any legacy 'pl-' IDs to 'perf-' IDs
        const updated = parsed.map((id) => id.startsWith('pl-') ? id.replace('pl-', 'perf-') : id);
        return updated;
      }
      return ['perf-01', 'perf-07'];
    } catch {
      return ['perf-01', 'perf-07'];
    }
  });

  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);

  // Initial sample order for order tracking demonstration
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'PL-8924',
      date: '26 de Julio, 2026',
      customerName: 'Sofía Martínez',
      email: 'sofia.martinez@example.com',
      phone: '+34 612 345 678',
      address: 'Passeig de Gràcia 45',
      city: 'Barcelona',
      postalCode: '08007',
      items: [
        {
          id: 'pl-01-100ml',
          perfume: perfumes[0] || PERFUMES_DATA[0],
          selectedSize: '100ml',
          selectedPrice: 135,
          quantity: 1
        }
      ],
      subtotal: 135,
      discount: 13.5,
      shipping: 0,
      total: 121.5,
      paymentMethod: 'card',
      status: 'En tránsito',
      trackingNumber: 'PL-8924',
      estimatedDelivery: '29 de Julio, 2026'
    }
  ]);

  // Modals & Drawers state
  const [quickViewPerfume, setQuickViewPerfume] = useState<Perfume | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutDiscountPercent, setCheckoutDiscountPercent] = useState<number>(0);

  // Save Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('perfume_luxe_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cartItems]);

  // Save Wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('perfume_luxe_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error('Error saving wishlist:', e);
    }
  }, [wishlistIds]);

  // Filtered & Sorted Perfumes
  const filteredPerfumes = useMemo(() => {
    return perfumes.filter((perfume) => {
      // Search query
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const nameMatch = perfume.name.toLowerCase().includes(query);
        const brandMatch = perfume.brand.toLowerCase().includes(query);
        const familyMatch = perfume.family.toLowerCase().includes(query);
        const topNotesMatch = perfume.notes.top.some((n) => n.toLowerCase().includes(query));
        const heartNotesMatch = perfume.notes.heart.some((n) => n.toLowerCase().includes(query));
        const baseNotesMatch = perfume.notes.base.some((n) => n.toLowerCase().includes(query));

        if (!nameMatch && !brandMatch && !familyMatch && !topNotesMatch && !heartNotesMatch && !baseNotesMatch) {
          return false;
        }
      }

      // Gender filter
      if (filters.gender !== 'Todos') {
        if (filters.gender === 'Nicho') {
          if (!perfume.isNiche && perfume.gender !== 'Nicho') return false;
        } else if (perfume.gender !== filters.gender && perfume.gender !== 'Unisex') {
          return false;
        }
      }

      // Olfactory Family filter
      if (filters.family !== 'Todas' && perfume.family !== filters.family) {
        return false;
      }

      // Bestseller filter
      if (filters.onlyBestsellers && !perfume.isBestseller) {
        return false;
      }

      // Niche filter
      if (filters.onlyNiche && !perfume.isNiche) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'precio-asc') return a.price - b.price;
      if (filters.sortBy === 'precio-desc') return b.price - a.price;
      if (filters.sortBy === 'valoracion') return b.rating - a.rating;
      // Default: popularidad (bestsellers first, then rating)
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0) || b.reviewCount - a.reviewCount;
    });
  }, [perfumes, filters]);

  // Wishlisted Perfumes Objects
  const wishlistPerfumes = useMemo(() => {
    return perfumes.filter((p) => wishlistIds.includes(p.id));
  }, [perfumes, wishlistIds]);


  // Handlers
  const handleAddToCart = (perfume: Perfume, selectedSize: string, selectedPrice: number, quantity = 1) => {
    const itemKey = `${perfume.id}-${selectedSize}`;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemKey,
            perfume,
            selectedSize,
            selectedPrice,
            quantity
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleToggleWishlist = (perfume: Perfume) => {
    setWishlistIds((prev) =>
      prev.includes(perfume.id) ? prev.filter((id) => id !== perfume.id) : [...prev, perfume.id]
    );
  };

  const handleAddReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const reviewObj: Review = {
      ...newReview,
      id: `r-${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    };
    setReviews((prev) => [reviewObj, ...prev]);
  };

  const handleProceedToCheckout = (discountPercent: number) => {
    setCheckoutDiscountPercent(discountPercent);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = async (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]); // Empty cart after successful checkout

    try {
      await recordSaleInFirestore({
        cliente_id: newOrder.email || newOrder.phone || 'cliente-anonimo',
        cliente_nombre: newOrder.customerName,
        estado_venezuela: newOrder.city || 'Distrito Capital',
        direccion: newOrder.address,
        ciudad: newOrder.city,
        total: newOrder.total,
        totalBs: newOrder.total > 0 ? parseFloat((newOrder.total * exchangeRate).toFixed(2)) : 0,
        metodo_pago: newOrder.paymentMethod,
        referencia_pago: newOrder.trackingNumber || '',
        estado_pedido: 'Pagado',
        items: newOrder.items.map((it) => ({
          producto_id: it.perfume.id,
          nombre_producto: it.perfume.name,
          marca: it.perfume.brand,
          capacidad: it.selectedSize,
          cantidad: it.quantity,
          precio_unitario: it.selectedPrice
        }))
      });
    } catch (err) {
      console.error('Error registrando venta en Firebase:', err);
    }
  };

  const scrollToCatalog = () => {
    setActiveTab('catalogo');
    const catalogElem = document.getElementById('catalogo-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (isAdminRoute) {
    if (isAuthorizedAdmin) {
      return <AdminDashboard />;
    }
    // If there's a user but they aren't authorized, we still show the login but with a prop or just let AdminLogin handle it.
    // Let's pass the user to AdminLogin so it can show "Access Denied" and a logout button.
    return <AdminLogin user={user} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col justify-between selection:bg-[#b8926a] selection:text-black">
      
      {/* Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartItemCount}
        wishlistCount={wishlistPerfumes.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={filters.search}
        setSearchQuery={(q) => setFilters((prev) => ({ ...prev, search: q }))}
        onOpenSearch={() => {
          setActiveTab('catalogo');
          const searchInput = document.getElementById('catalog-search-input');
          if (searchInput) searchInput.focus();
        }}
        onOpenStockManager={() => setIsStockManagerOpen(true)}
      />

      {/* Main Content Area according to activeTab */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <>
            <HeroSection
              onExploreCatalog={scrollToCatalog}
              onOpenSommelier={() => {
                setActiveTab('sommelier');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenDiscovery={() => {
                setActiveTab('discovery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={(gender) => {
                setFilters((prev) => ({ ...prev, gender }));
                scrollToCatalog();
              }}
            />

            <CategoryBanner
              selectedGender={filters.gender}
              setSelectedGender={(g: GenderCategory) => setFilters((prev) => ({ ...prev, gender: g }))}
              selectedFamily={filters.family}
              setSelectedFamily={(f: OlfactoryFamily) => setFilters((prev) => ({ ...prev, family: f }))}
            />

            <ProductGrid
              perfumes={filteredPerfumes}
              filters={filters}
              setFilters={setFilters}
              onQuickView={(p) => setQuickViewPerfume(p)}
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
            />

            <AIScentSommelier
              perfumeList={perfumes}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewPerfume(p)}
            />

            <DiscoveryKitBuilder
              perfumes={perfumes}
              onAddKitToCart={(kitItem) => {
                setCartItems((prev) => [...prev, kitItem]);
                setIsCartOpen(true);
              }}
            />
          </>
        )}

        {activeTab === 'catalogo' && (
          <>
            <CategoryBanner
              selectedGender={filters.gender}
              setSelectedGender={(g: GenderCategory) => setFilters((prev) => ({ ...prev, gender: g }))}
              selectedFamily={filters.family}
              setSelectedFamily={(f: OlfactoryFamily) => setFilters((prev) => ({ ...prev, family: f }))}
            />

            <ProductGrid
              perfumes={filteredPerfumes}
              filters={filters}
              setFilters={setFilters}
              onQuickView={(p) => setQuickViewPerfume(p)}
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
            />
          </>
        )}

        {activeTab === 'sommelier' && (
          <AIScentSommelier
            perfumeList={perfumes}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewPerfume(p)}
          />
        )}

        {activeTab === 'discovery' && (
          <DiscoveryKitBuilder
            perfumes={perfumes}
            onAddKitToCart={(kitItem) => {
              setCartItems((prev) => [...prev, kitItem]);
              setIsCartOpen(true);
            }}
          />
        )}

        {activeTab === 'rastreo' && (
          <OrderTrackerModal orders={orders} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsStockManagerOpen(true)}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        perfume={quickViewPerfume}
        onClose={() => setQuickViewPerfume(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewPerfume ? wishlistIds.includes(quickViewPerfume.id) : false}
        onToggleWishlist={handleToggleWishlist}
        reviews={reviews}
        onAddReview={handleAddReview}
      />

      {/* Slide-over Shopping Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistPerfumes={wishlistPerfumes}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewPerfume(p)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        appliedDiscountPercent={checkoutDiscountPercent}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Stock & Database Manager Modal */}
      <StockManagerModal
        isOpen={isStockManagerOpen}
        onClose={() => setIsStockManagerOpen(false)}
        perfumes={perfumes}
        onUpdatePerfumes={(newPerfumes) => setPerfumes(newPerfumes)}
        onResetToDemo={() => {
          if (confirm('¿Restablecer al catálogo de demostración inicial?')) {
            setPerfumes(PERFUMES_DATA);
            localStorage.removeItem('perfume_luxe_stock');
          }
        }}
      />


    </div>
  );
}
