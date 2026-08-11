export function formatPrice(amount: number, priceBs?: number | boolean): string {
  if (!amount || amount <= 0) {
    return 'Consultar precio';
  }
  if (typeof priceBs === 'number' && priceBs > 0) {
    return `Bs. ${Math.round(priceBs).toLocaleString('es-VE')}`;
  }
  const showBs = priceBs !== false;
  if (showBs) {
    const bsAmount = amount < 1000 ? Math.round(amount * 140) : Math.round(amount);
    return `Bs. ${bsAmount.toLocaleString('es-VE')}`;
  }
  return `Bs. ${Math.round(amount * 140).toLocaleString('es-VE')}`;
}



