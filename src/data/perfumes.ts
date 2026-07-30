import { Perfume, Review } from '../types';
import { SQL_PERFUMES_DATA } from './sqlPerfumes';

export const PERFUMES_DATA: Perfume[] = SQL_PERFUMES_DATA;

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    perfumeId: 'prod-01',
    author: 'Elena R.',
    city: 'Caracas',
    rating: 5,
    date: '24 de Julio, 2026',
    title: 'Simplemente una joya oriental',
    comment: 'Llevo semanas usándolo a diario y es espectacular. La fijación de Armaf Connoisseur es increíble.',
    verifiedPurchase: true
  },
  {
    id: 'r2',
    perfumeId: 'prod-06',
    author: 'Carlos M.',
    city: 'Valencia',
    rating: 5,
    date: '18 de Julio, 2026',
    title: 'Duración insuperable y proyección brutal',
    comment: 'El Dumont Nitro Red es un imán de cumplidos. La sandía acuática dura más de 12 horas.',
    verifiedPurchase: true
  },
  {
    id: 'r3',
    perfumeId: 'prod-04',
    author: 'Sofía V.',
    city: 'Maracaibo',
    rating: 5,
    date: '10 de Julio, 2026',
    title: 'El dulce cremoso más adictivo',
    comment: 'Yara Moi es mil veces mejor que el Yara rosado. Es elegante, avainillado y duradero.',
    verifiedPurchase: true
  }
];

export const PROMO_CODES: Record<string, { discountPercent: number; description: string }> = {
  'LUXE10': { discountPercent: 10, description: '10% de descuento de bienvenida' },
  'VIP20': { discountPercent: 20, description: '20% de descuento especial de cliente VIP' },
  'VERANO15': { discountPercent: 15, description: '15% de descuento de temporada' }
};
