import { Perfume } from '../types';

export const DEFAULT_PERFUME_IMAGE = 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80';
export const DEFAULT_HOVER_IMAGE = 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80';

export function createDefaultPerfume(partial: Partial<Perfume> & { name: string; brand: string }): Perfume {
  const defaultSizeLabel = partial.defaultSize || '100ml';
  const basePrice = partial.price || 0;

  return {
    id: partial.id || `stock-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: partial.name,
    brand: partial.brand,
    tagline: partial.tagline || 'Fragancia de Autor en Stock',
    description: partial.description || `${partial.name} por ${partial.brand}. Formato ${defaultSizeLabel}. Disponibilidad en tienda.`,
    price: basePrice,
    priceBs: partial.priceBs || (basePrice > 0 ? basePrice * 50 : undefined),
    defaultSize: defaultSizeLabel,
    sizeOptions: partial.sizeOptions && partial.sizeOptions.length > 0 
      ? partial.sizeOptions 
      : [{ ml: 100, label: defaultSizeLabel, price: basePrice, priceBs: partial.priceBs }],
    image: partial.image && partial.image.trim() !== '' ? partial.image : DEFAULT_PERFUME_IMAGE,
    hoverImage: partial.hoverImage && partial.hoverImage.trim() !== '' ? partial.hoverImage : DEFAULT_HOVER_IMAGE,
    gender: partial.gender || 'Unisex',
    family: partial.family || 'Amaderado',
    concentration: partial.concentration || 'Eau de Parfum',
    notes: partial.notes || {
      top: ['Notas cítricas', 'Bergamota'],
      heart: ['Especias finas', 'Notas florales'],
      base: ['Madera noble', 'Ámbar', 'Almiscle']
    },
    longevityScore: partial.longevityScore || 4,
    projectionScore: partial.projectionScore || 4,
    seasons: partial.seasons || ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    occasions: partial.occasions || ['Diario', 'Eventos', 'Noche'],
    rating: partial.rating || 4.8,
    reviewCount: partial.reviewCount || 12,
    stock: partial.stock !== undefined ? partial.stock : 10,
    isBestseller: partial.isBestseller || false,
    isNew: partial.isNew || true,
    isNiche: partial.isNiche || false,
  };
}
