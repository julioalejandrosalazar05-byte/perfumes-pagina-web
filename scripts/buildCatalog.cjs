const fs = require('fs');
const path = require('path');

// Exact list of 58 items with their ImgBB page URL and item details provided by the user
const rawMapping = [
  { url: "https://ibb.co/N27Y5978", brand: "Banderas", name: "Her Secret Absolu", gender: "Mujer", family: "Oriental", badge: "DISEÑADOR", price: 34 },
  { url: "https://ibb.co/SXTqcVZ3", brand: "Armaf", name: "Tag Uomo Rosso", gender: "Hombre", family: "Aromático", badge: "ÁRABE / NICHO", price: 45 },
  { url: "https://ibb.co/1GL4SFLv", brand: "Carolina Herrera", name: "212 VIP Black NYC", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 140 },
  { url: "https://ibb.co/qLtv1QPG", brand: "Banderas", name: "The Icon Supreme", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 40 },
  { url: "https://ibb.co/Y7D97QmB", brand: "Armaf", name: "Odyssey Ba Ha Mas", gender: "Hombre", family: "Cítrico", badge: "ODYSSEY COLLECTION", price: 50 },
  { url: "https://ibb.co/x8ghKLm2", brand: "Issey Miyake", name: "L'Eau d'Issey Pour Homme Intense", gender: "Hombre", family: "Amaderado", badge: "DISEÑADOR", price: 67 },
  { url: "https://ibb.co/pBcs84Pw", brand: "Cacharel", name: "Amor Amor", gender: "Mujer", family: "Floral", badge: "DISEÑADOR", price: 56 },
  { url: "https://ibb.co/sdW33Chb", brand: "Armaf", name: "Odyssey Homme White Edition", gender: "Hombre", family: "Oriental", badge: "ODYSSEY COLLECTION", price: 45 },
  { url: "https://ibb.co/Q74NtqH5", brand: "Rasasi", name: "Hawas ICE For Him", gender: "Hombre", family: "Cítrico", badge: "ÁRABE / NICHO", price: 73 },
  { url: "https://ibb.co/67sqqC0k", brand: "Halloween", name: "Halloween Blossom", gender: "Mujer", family: "Floral", badge: "DISEÑADOR", price: 51 },
  { url: "https://ibb.co/93TFHbxn", brand: "Lattafa", name: "Yara Candy", gender: "Mujer", family: "Gourmand", badge: "YARA COLLECTION", price: 45 },
  { url: "https://ibb.co/jPXP4wHx", brand: "Armaf", name: "Club de Nuit Untold", gender: "Unisex", family: "Oriental", badge: "CLUB DE NUIT", price: 67 },
  { url: "https://ibb.co/gLLd9n5j", brand: "Lattafa", name: "Nebras", gender: "Unisex", family: "Gourmand", badge: "PRIDE OF LATTAFA", price: 39 },
  { url: "https://ibb.co/8n49fhjF", brand: "Armaf", name: "Club de Nuit Sillage", gender: "Unisex", family: "Cítrico", badge: "CLUB DE NUIT", price: 56 },
  { url: "https://ibb.co/S48hpPd6", brand: "Carolina Herrera", name: "CH Men", gender: "Hombre", family: "Oriental", badge: "DISEÑADOR", price: 134 },
  { url: "https://ibb.co/7JGmLMH2", brand: "Ralph Lauren", name: "Polo Red", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 95 },
  { url: "https://ibb.co/21VD0hjg", brand: "Armaf", name: "Bon Bon", gender: "Mujer", family: "Gourmand", badge: "DELIGHTS", price: 78 },
  { url: "https://ibb.co/KcK1GMjG", brand: "Lattafa", name: "Eclaire Pistache", gender: "Mujer", family: "Gourmand", badge: "ÁRABE / NICHO", price: 56 },
  { url: "https://ibb.co/358YmwGc", brand: "Nautica", name: "Nautica Voyage", gender: "Hombre", family: "Cítrico", badge: "DISEÑADOR", price: 30 },
  { url: "https://ibb.co/wrWyZyTN", brand: "Armaf", name: "Odyssey Mandarin Sky Elixir", gender: "Hombre", family: "Gourmand", badge: "ODYSSEY COLLECTION", price: 62 },
  { url: "https://ibb.co/fVxKywdB", brand: "Ariana Grande", name: "Thank U, Next", gender: "Mujer", family: "Frutal", badge: "CELEBRIDAD", price: 106 },
  { url: "https://ibb.co/HfwdC1w5", brand: "Lattafa", name: "Mayar Natural Intense", gender: "Mujer", family: "Frutal", badge: "ÁRABE / NICHO", price: 45 },
  { url: "https://ibb.co/0R57rZK2", brand: "Montblanc", name: "Legend Blue", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 89 },
  { url: "https://ibb.co/Fb3sYsq5", brand: "Antonio Banderas", name: "Blue Seduction For Men", gender: "Hombre", family: "Cítrico", badge: "DISEÑADOR", price: 56 },
  { url: "https://ibb.co/LDNxVc6f", brand: "French Avenue", name: "Liquid Brun", gender: "Unisex", family: "Gourmand", badge: "NICHO / LUXE", price: 62 },
  { url: "https://ibb.co/nMvDzPZP", brand: "Armaf", name: "Odyssey Mandarin Limited Edition", gender: "Hombre", family: "Cítrico", badge: "ODYSSEY COLLECTION", price: 45 },
  { url: "https://ibb.co/4gV09hxF", brand: "Lattafa", name: "Angham", gender: "Mujer", family: "Oriental", badge: "PRIDE OF LATTAFA", price: 56 },
  { url: "https://ibb.co/yF81GNN9", brand: "Dumont Paris", name: "Nitro Red Pour Homme", gender: "Hombre", family: "Frutal", badge: "EXTRAIT DE PARFUM", price: 48 },
  { url: "https://ibb.co/Y7cTmwFS", brand: "Lattafa", name: "Musamam White Intense", gender: "Unisex", family: "Amaderado", badge: "PRIDE OF LATTAFA", price: 56 },
  { url: "https://ibb.co/PZs9MqNN", brand: "Carolina Herrera", name: "212 NYC", gender: "Mujer", family: "Floral", badge: "DISEÑADOR", price: 123 },
  { url: "https://ibb.co/6V97wQ3", brand: "Tommy Hilfiger", name: "Tommy", gender: "Hombre", family: "Cítrico", badge: "DISEÑADOR", price: 50.4 },
  { url: "https://ibb.co/pvQcpbSt", brand: "Antonio Banderas", name: "King of Seduction Absolute", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 34 },
  { url: "https://ibb.co/Nnmw8tr0", brand: "Lattafa", name: "His Confession", gender: "Hombre", family: "Oriental", badge: "ÁRABE / NICHO", price: 56 },
  { url: "https://ibb.co/DPX9mCVP", brand: "Lattafa", name: "Khamrah", gender: "Unisex", family: "Gourmand", badge: "BESTSELLER ÁRABE", price: 45 },
  { url: "https://ibb.co/ks65n1vm", brand: "Lattafa", name: "Asad", gender: "Hombre", family: "Oriental", badge: "BESTSELLER ÁRABE", price: 45 },
  { url: "https://ibb.co/vx0Q13DS", brand: "Armaf", name: "Club de Nuit Intense Man", gender: "Hombre", family: "Cítrico", badge: "CLUB DE NUIT", price: 51 },
  { url: "https://ibb.co/4gSCWBX7", brand: "Dolce & Gabbana", name: "Light Blue", gender: "Mujer", family: "Cítrico", badge: "DISEÑADOR", price: 90 },
  { url: "https://ibb.co/Q1DzPW0", brand: "Ariana Grande", name: "Cloud", gender: "Mujer", family: "Gourmand", badge: "CELEBRIDAD", price: 100 },
  { url: "https://ibb.co/9mnG51m4", brand: "Carolina Herrera", name: "212 Men NYC", gender: "Hombre", family: "Aromático", badge: "DISEÑADOR", price: 117 },
  { url: "https://ibb.co/m54NdgVk", brand: "French Avenue", name: "Veneno Bianco", gender: "Unisex", family: "Floral", badge: "NICHO / LUXE", price: 73 },
  { url: "https://ibb.co/Mx6V5y0r", brand: "Armaf", name: "Club de Nuit Milestone", gender: "Unisex", family: "Cítrico", badge: "CLUB DE NUIT", price: 56 },
  { url: "https://ibb.co/9H7TZZnM", brand: "Armaf", name: "Odyssey Artisto", gender: "Hombre", family: "Aromático", badge: "ODYSSEY COLLECTION", price: 48.16 },
  { url: "https://ibb.co/V0SrF4h0", brand: "Lattafa", name: "Yara Moi", gender: "Mujer", family: "Gourmand", badge: "YARA COLLECTION", price: 45 },
  { url: "https://ibb.co/8nrGWm77", brand: "Lattafa", name: "Yara", gender: "Mujer", family: "Gourmand", badge: "YARA COLLECTION", price: 45 },
  { url: "https://ibb.co/KczvzF5c", brand: "Lattafa", name: "Mayar", gender: "Mujer", family: "Frutal", badge: "ÁRABE / NICHO", price: 45 },
  { url: "https://ibb.co/j2hHWPP", brand: "Issey Miyake", name: "L'Eau d'Issey Pour Homme", gender: "Hombre", family: "Cítrico", badge: "DISEÑADOR", price: 67 },
  { url: "https://ibb.co/Dg1GnKXx", brand: "Lattafa", name: "Art of Nature II", gender: "Unisex", family: "Oriental", badge: "PRIDE OF LATTAFA", price: 61 },
  { url: "https://ibb.co/zHsrmkS4", brand: "Guess", name: "Guess Seductive Red", gender: "Mujer", family: "Floral", badge: "DISEÑADOR", price: 39 },
  { url: "https://ibb.co/60mWbfRm", brand: "Armaf", name: "Odyssey Homme Black Edition", gender: "Hombre", family: "Oriental", badge: "ODYSSEY COLLECTION", price: 45 },
  { url: "https://ibb.co/h1KtZZk3", brand: "Armaf", name: "The Pride of Armaf Admiral", gender: "Hombre", family: "Aromático", badge: "PRIDE OF ARMAF", price: 45 },
  { url: "https://ibb.co/gMqCztKh", brand: "Armaf", name: "Connoisseur Woman", gender: "Mujer", family: "Oriental", badge: "ÁRABE / NICHO", price: 56 },
  { url: "https://ibb.co/tPQrRjmx", brand: "Armaf", name: "Odyssey Limoni", gender: "Hombre", family: "Cítrico", badge: "ODYSSEY COLLECTION", price: 39.2 },
  { url: "https://ibb.co/f6MgchX", brand: "Antonio Banderas", name: "The Secret", gender: "Hombre", family: "Oriental", badge: "DISEÑADOR", price: 40 },
  { url: "https://ibb.co/Q7ppZ3vr", brand: "Marc Jacobs", name: "Daisy Dream", gender: "Mujer", family: "Floral", badge: "DISEÑADOR", price: 90 },
  { url: "https://ibb.co/yBZ0B99Y", brand: "Lattafa", name: "Khamrah Qahwa", gender: "Unisex", family: "Gourmand", badge: "BESTSELLER ÁRABE", price: 45 },
  { url: "https://ibb.co/FkfWMdwN", brand: "Dumont Paris", name: "Nitro Red Intensely Pour Homme", gender: "Hombre", family: "Frutal", badge: "EXTRAIT DE PARFUM", price: 67.2 },
  { url: "https://ibb.co/zhsP6KBv", brand: "Afnan", name: "9 PM", gender: "Hombre", family: "Gourmand", badge: "BESTSELLER ÁRABE", price: 46 }
];

function getSimilarTo(brand, name) {
  const full = `${brand} ${name}`.toLowerCase();
  if (full.includes('khamrah qahwa')) return "Angels' Share (Kilian) + Café Tostado";
  if (full.includes('khamrah')) return "Angels' Share (Kilian)";
  if (full.includes('asad')) return "Sauvage Elixir (Dior)";
  if (full.includes('club de nuit intense')) return "Aventus (Creed)";
  if (full.includes('untold')) return "Baccarat Rouge 540 (Maison Francis Kurkdjian)";
  if (full.includes('sillage')) return "Silver Mountain Water (Creed)";
  if (full.includes('milestone')) return "Millésime Impérial (Creed)";
  if (full.includes('yara candy')) return "Marshmallow, Caramelo & Frutas Exóticas";
  if (full.includes('yara moi')) return "Perfect (Marc Jacobs) / Gourmand Cremoso";
  if (full.includes('yara')) return "Poison Girl (Dior) / Sol de Janeiro";
  if (full.includes('liquid brun')) return "Althaïr (Parfums de Marly)";
  if (full.includes('nitro red intensely')) return "Invictus Victory Elixir (Paco Rabanne)";
  if (full.includes('nitro red')) return "Invictus (Paco Rabanne) / Erba Pura";
  if (full.includes('9 pm')) return "Ultra Male (Jean Paul Gaultier)";
  if (full.includes('hawas ice')) return "Invictus Aqua / Hawas Supreme";
  if (full.includes('nebras')) return "Eilish (Billie Eilish) / Cacao & Vainilla";
  if (full.includes('eclaire pistache')) return "Yum Pistachio Gelato (Kayali)";
  if (full.includes('mandarin sky')) return "Scandal Pour Homme (Jean Paul Gaultier)";
  if (full.includes('mayar natural')) return "Acqua di Gioia (Giorgio Armani)";
  if (full.includes('angham')) return "Goddess (Burberry)";
  if (full.includes('musamam white')) return "Sant33 (Le Labo) / Gris Charnel (BDK)";
  if (full.includes('his confession')) return "Dior Homme Intense";
  if (full.includes('veneno bianco')) return "Blanko / White Suede (Tom Ford)";
  if (full.includes('tag uomo rosso')) return "Invictus Red / Spicebomb";
  if (full.includes('odyssey ba ha mas')) return "Virgin Island Water (Creed)";
  if (full.includes('odyssey homme white') || full.includes('odyssey homme black')) return "Noir Extreme (Tom Ford)";
  if (full.includes('odyssey artisto')) return "L'Homme Ideal (Guerlain)";
  if (full.includes('odyssey limoni')) return "Allure Homme Édition Blanche (Chanel)";
  if (full.includes('pride of armaf admiral')) return "Bleu de Chanel / Sauvage";
  if (full.includes('connoisseur woman')) return "Libre Intense (YSL)";
  if (full.includes('bon bon')) return "Bonbon (Viktor&Rolf)";
  if (full.includes('art of nature ii')) return "Oud Wood (Tom Ford)";
  if (full.includes('mayar')) return "Angel Nova (Mugler) / Frutal Floral";
  if (brand.toLowerCase().includes('lattafa') || brand.toLowerCase().includes('armaf') || brand.toLowerCase().includes('afnan') || brand.toLowerCase().includes('dumont') || brand.toLowerCase().includes('rasasi') || brand.toLowerCase().includes('french avenue')) {
    return "Fragancia de autor árabe con acorde exclusivo";
  }
  return null;
}

function getMainAccords(family, notes) {
  if (family === 'Gourmand') {
    return [
      { name: "Cálido y picante", color: "#c0392b", width: 100 },
      { name: "Sabroso / Dulce", color: "#e74c3c", width: 88 },
      { name: "Ahumado & Canela", color: "#7f8c8d", width: 75 },
      { name: "Vainilla suave", color: "#fd79a8", width: 65 },
      { name: "Amaderado", color: "#a0522d", width: 50 }
    ];
  } else if (family === 'Cítrico') {
    return [
      { name: "Cítrico fresco", color: "#f1c40f", width: 100 },
      { name: "Fresco picante", color: "#2ecc71", width: 85 },
      { name: "Aromático / Herbario", color: "#27ae60", width: 70 },
      { name: "Agrios & Flores", color: "#f39c12", width: 55 },
      { name: "Leñoso", color: "#a0522d", width: 40 }
    ];
  } else if (family === 'Aromático') {
    return [
      { name: "Aromático & Menta", color: "#2ecc71", width: 100 },
      { name: "Fresco picante", color: "#27ae60", width: 85 },
      { name: "Cálido y especiado", color: "#d35400", width: 72 },
      { name: "Amaderado", color: "#a0522d", width: 58 },
      { name: "Verde / Herbario", color: "#16a085", width: 45 }
    ];
  } else if (family === 'Frutal') {
    return [
      { name: "Tropical & Frutal", color: "#f39c12", width: 100 },
      { name: "Dulce de frutas", color: "#e84393", width: 86 },
      { name: "Fresco rosado", color: "#ff7675", width: 72 },
      { name: "Flores suaves", color: "#e0f7fa", width: 55 },
      { name: "Almizclado", color: "#b2bec3", width: 40 }
    ];
  } else if (family === 'Floral') {
    return [
      { name: "Flores blancas & Rosa", color: "#e84393", width: 100 },
      { name: "Dulce acaramelado", color: "#ff7675", width: 82 },
      { name: "Fresco floral", color: "#fd79a8", width: 70 },
      { name: "Atalcado", color: "#dfe6e9", width: 55 },
      { name: "Amaderado suave", color: "#a0522d", width: 40 }
    ];
  } else if (family === 'Oriental') {
    return [
      { name: "Cálido y picante", color: "#c0392b", width: 100 },
      { name: "Ahumado & Incienso", color: "#7f8c8d", width: 88 },
      { name: "Ámbar & Oud", color: "#d35400", width: 75 },
      { name: "Vainilla especiada", color: "#e74c3c", width: 62 },
      { name: "Leñoso balsámico", color: "#a0522d", width: 50 }
    ];
  } else {
    return [
      { name: "Amaderado intenso", color: "#a0522d", width: 100 },
      { name: "Aromático picante", color: "#2ecc71", width: 80 },
      { name: "Ámbar & Cuero", color: "#d35400", width: 65 },
      { name: "Cítrico brillante", color: "#f1c40f", width: 50 }
    ];
  }
}

async function resolveDirectUrl(pageUrl) {
  try {
    const res = await fetch(pageUrl);
    const text = await res.text();
    const match = text.match(/https:\/\/i\.ibb\.co\/[^\s\"']+/);
    return match ? match[0] : pageUrl;
  } catch (err) {
    console.error(`Error resolving ${pageUrl}:`, err);
    return pageUrl;
  }
}

async function main() {
  console.log(`Resolving direct URLs for ${rawMapping.length} products...`);
  const perfumes = [];

  for (let i = 0; i < rawMapping.length; i++) {
    const item = rawMapping[i];
    const directImage = await resolveDirectUrl(item.url);

    let notes = { top: ["Bergamota", "Manzana"], heart: ["Jazmín", "Rosa"], base: ["Vainilla", "Ámbar"] };
    if (item.family === 'Gourmand') {
      notes = { top: ["Caramelo", "Mandarina"], heart: ["Canela", "Vainilla"], base: ["Habas Tonka", "Sándalo"] };
    } else if (item.family === 'Cítrico') {
      notes = { top: ["Limón de Sicilia", "Bergamota"], heart: ["Pimienta Rosa", "Flor de Azahar"], base: ["Madera de Cedro", "Almizcle"] };
    } else if (item.family === 'Aromático') {
      notes = { top: ["Menta", "Cardamomo"], heart: ["Salvia", "Lavanda"], base: ["Vetiver", "Ámbar Gris"] };
    } else if (item.family === 'Frutal') {
      notes = { top: ["Sandía Jugosa", "Frambuesa"], heart: ["Lichi", "Peonía"], base: ["Sándalo", "Almizcle Blanco"] };
    } else if (item.family === 'Floral') {
      notes = { top: ["Cereza Roja", "Peonía"], heart: ["Jazmín Sambac", "Rosa de Damasco"], base: ["Vainilla", "Ámbar"] };
    } else if (item.family === 'Oriental') {
      notes = { top: ["Azafrán", "Pimienta Negra"], heart: ["Incienso", "Tuberosa"], base: ["Oud", "Vainilla", "Ámbar"] };
    }

    const priceBs = item.price * 140;
    const isNiche = item.badge.includes('ÁRABE') || item.badge.includes('NICHO') || item.badge.includes('CLUB DE NUIT') || item.badge.includes('YARA') || item.badge.includes('EXTRAIT') || item.badge.includes('PRIDE') || item.badge.includes('ODYSSEY');
    const isBestseller = item.price > 100 || item.badge.includes('BESTSELLER') || i % 3 === 0;

    const similarTo = getSimilarTo(item.brand, item.name);
    const mainAccords = getMainAccords(item.family, notes);

    const perf = {
      id: `perf-${(i + 1).toString().padStart(2, '0')}`,
      name: item.name,
      brand: item.brand,
      badge: item.badge,
      tagline: `${item.brand} ${item.name} - Fragancia elegante y distintiva (${item.gender}).`,
      description: `${item.brand} ${item.name} ofrece una estela inconfundible de alta calidad. Presenta notas de ${notes.top.join(', ')} con un corazón de ${notes.heart.join(', ')} y fondo de ${notes.base.join(', ')}.`,
      price: item.price,
      priceBs: priceBs,
      defaultSize: "100ml",
      sizeOptions: [
        { ml: 50, label: "50 ml", price: Math.round(item.price * 0.65), priceBs: Math.round(priceBs * 0.65) },
        { ml: 100, label: "100 ml", price: item.price, priceBs: priceBs }
      ],
      image: directImage,
      hoverImage: directImage,
      gender: item.gender,
      family: item.family,
      concentration: item.badge.includes('EXTRAIT') ? "Extrait de Parfum" : (item.price > 90 ? "Eau de Parfum" : "Eau de Toilette"),
      notes: notes,
      similarTo: similarTo || undefined,
      mainAccords: mainAccords,
      longevityScore: 5,
      projectionScore: 4,
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
      occasions: ["Diario", "Noche", "Eventos", "Cita Romántica"],
      rating: parseFloat((4.8 + (i % 3) * 0.08).toFixed(2)),
      reviewCount: 80 + (i * 7) % 200,
      isBestseller: isBestseller,
      isNiche: isNiche,
      stock: 12 + (i % 15)
    };

    perfumes.push(perf);
    console.log(`[${i+1}/${rawMapping.length}] ${perf.brand} ${perf.name} -> ${directImage}`);
  }

  // Generate src/data/sqlPerfumes.ts
  const tsContent = `import { Perfume } from '../types';\n\nexport const SQL_PERFUMES_DATA: Perfume[] = ${JSON.stringify(perfumes, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '../src/data/sqlPerfumes.ts'), tsContent, 'utf-8');
  console.log('Generated src/data/sqlPerfumes.ts');

  // Generate data/inventory.json
  fs.writeFileSync(path.join(__dirname, '../data/inventory.json'), JSON.stringify(perfumes, null, 2), 'utf-8');
  console.log('Generated data/inventory.json');
}

main();
