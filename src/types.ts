export type GenderCategory = 'Todos' | 'Hombre' | 'Mujer' | 'Unisex' | 'Nicho';

export type OlfactoryFamily = 'Todas' | 'Cítrico' | 'Amaderado' | 'Oriental' | 'Floral' | 'Gourmand' | 'Fresco' | 'Frutal' | 'Aromático' | 'Acuático';

export type Concentration = 'Todas' | 'Eau de Parfum' | 'Parfum' | 'Extrait de Parfum' | 'Eau de Toilette';

export interface SizeOption {
  ml: number;
  label: string;
  price: number;
  priceBs?: number;
}

export interface OlfactoryPyramid {
  top: string[];    // Notas de salida
  heart: string[];  // Notas de corazón
  base: string[];   // Notas de fondo
}

export interface MainAccord {
  name: string;
  color: string;
  width: number; // Percentage width 0-100
}

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  price: number; // Base price for default size
  originalPrice?: number;
  defaultSize: string;
  sizeOptions: SizeOption[];
  image: string;
  hoverImage: string;
  gender: 'Hombre' | 'Mujer' | 'Unisex' | 'Nicho';
  family: 'Cítrico' | 'Amaderado' | 'Oriental' | 'Floral' | 'Gourmand' | 'Fresco' | 'Frutal' | 'Aromático' | 'Acuático';
  concentration: 'Eau de Parfum' | 'Parfum' | 'Extrait de Parfum' | 'Eau de Toilette';
  notes: OlfactoryPyramid;
  similarTo?: string;       // A qué perfume de diseñador se asemeja (para perfumes de nicho/árabes)
  mainAccords?: MainAccord[]; // Acuerdos principales visuales (estilo Fragrantica)
  longevityScore: number;  // 1 to 5
  projectionScore: number; // 1 to 5
  seasons: string[];       // Primavera, Verano, Otoño, Invierno
  occasions: string[];     // Noche, Diario, Eventos, Cita Romántica, Oficina
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isNiche?: boolean;
  badge?: string;
  priceBs?: number;
  stock: number;
}

export interface CartItem {
  id: string; // unique cart item key (e.g. perfumeId-size)
  perfume: Perfume;
  selectedSize: string;
  selectedPrice: number;
  quantity: number;
}

export interface Review {
  id: string;
  perfumeId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  city?: string;
}

export interface FilterState {
  search: string;
  gender: string;
  family: string;
  concentration: string;
  maxPrice: number;
  sortBy: 'popularidad' | 'precio-asc' | 'precio-desc' | 'valoracion';
  onlyBestsellers: boolean;
  onlyNiche: boolean;
}

export interface QuizPreferences {
  occasion: string;
  family: string;
  vibe: string;
  season: string;
  gender: string;
}

export interface SommelierResult {
  recommendedIds: string[];
  sommelierAdvice: string;
  matchingNotes: string[];
  signatureLayeringTip: string;
}

export interface DiscoveryKitSelection {
  perfumes: Perfume[];
  customEngraving: string;
  boxColor: 'Negro Azabache' | 'Dorado Champán' | 'Blanco Marfil';
}

export interface Order {
  id: string;
  date: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  status: 'Procesado' | 'En empaque de cera' | 'En tránsito' | 'Entregado';
  trackingNumber: string;
  estimatedDelivery: string;
}

export type ActiveTab = 'inicio' | 'catalogo' | 'sommelier' | 'discovery' | 'rastreo';
