import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const INVENTORY_FILE = path.join(process.cwd(), "data", "inventory.json");

const DEFAULT_CATALOG = [
  {
    id: "lum-01",
    name: "NIGHT BLOOM",
    brand: "LUMIÈRE PARFUMS",
    badge: "EDICIÓN NOCTURNA",
    tagline: "Flores de noche, ámbar denso y acordes amaderados.",
    description: "Flores de noche, ámbar denso y acordes amaderados. Una fragancia envolvente y misteriosa ideada para las veladas más sofisticadas.",
    price: 180,
    priceBs: 25000,
    defaultSize: "100ml",
    sizeOptions: [
      { ml: 50, label: "50 ml", price: 120 },
      { ml: 100, label: "100 ml", price: 180 },
      { ml: 10, label: "Travel Spray 10 ml", price: 35 }
    ],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    gender: "Unisex",
    family: "Oriental",
    concentration: "Extrait de Parfum",
    notes: {
      top: ["Flores de Noche", "Incienso Místico", "Bergamota Oscura"],
      heart: ["Ámbar Denso", "Rosa Nocturna", "Jazmín de Medianoche"],
      base: ["Acordes Amaderados", "Sándalo", "Oud de Laos"]
    },
    longevityScore: 5,
    projectionScore: 5,
    seasons: ["Otoño", "Invierno"],
    occasions: ["Noche", "Eventos"],
    rating: 4.98,
    reviewCount: 215,
    isBestseller: true,
    isNiche: true,
    stock: 15
  },
  {
    id: "lum-02",
    name: "SOLAR BLOOM",
    brand: "LUMIÈRE PARFUMS",
    badge: "SOLAR",
    tagline: "Cítricos dorados, especias y notas solares.",
    description: "Cítricos dorados, especias y notas solares. Un baño de luz de verano que despierta los sentidos con notas efervescentes y luminosas.",
    price: 180,
    priceBs: 25000,
    defaultSize: "100ml",
    sizeOptions: [
      { ml: 50, label: "50 ml", price: 120 },
      { ml: 100, label: "100 ml", price: 180 },
      { ml: 10, label: "Travel Spray 10 ml", price: 35 }
    ],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    gender: "Mujer",
    family: "Cítrico",
    concentration: "Eau de Parfum",
    notes: {
      top: ["Cítricos Dorados", "Mandarina Solar", "Flor de Naranjo"],
      heart: ["Especias Finas", "Jazmín Dorado", "Brisa de Mar"],
      base: ["Ámbar Cálido", "Notas Solares", "Cedro Rubio"]
    },
    longevityScore: 4,
    projectionScore: 4,
    seasons: ["Primavera", "Verano"],
    occasions: ["Diario", "Eventos"],
    rating: 4.92,
    reviewCount: 180,
    isBestseller: true,
    isNew: true,
    stock: 20
  },
  {
    id: "lum-03",
    name: "VELVET BLOOM",
    brand: "LUMIÈRE PARFUMS",
    badge: "EDICIÓN LIMITADA",
    tagline: "Rosa de terciopelo, madera y vainilla negra.",
    description: "Rosa de terciopelo, madera y vainilla negra. Una creación aterciopelada y envolvente donde la flor reina abraza la sensualidad maderosa.",
    price: 180,
    priceBs: 25000,
    defaultSize: "100ml",
    sizeOptions: [
      { ml: 50, label: "50 ml", price: 120 },
      { ml: 100, label: "100 ml", price: 180 },
      { ml: 10, label: "Travel Spray 10 ml", price: 35 }
    ],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    gender: "Mujer",
    family: "Floral",
    concentration: "Parfum",
    notes: {
      top: ["Pétalos de Rosa Velada", "Pimienta Rosa", "Frambuesa"],
      heart: ["Rosa de Terciopelo", "Flor de Almendro", "Iris"],
      base: ["Vainilla Negra", "Madera de Ámbar", "Almizcle"]
    },
    longevityScore: 5,
    projectionScore: 4,
    seasons: ["Otoño", "Invierno", "Primavera"],
    occasions: ["Cita Romántica", "Eventos"],
    rating: 4.95,
    reviewCount: 140,
    isNiche: true,
    stock: 12
  },
  {
    id: "lum-04",
    name: "INTENSE",
    brand: "LUMIÈRE PARFUMS",
    badge: "FOR HIM",
    tagline: "Esencia pura de maderas exóticas y cuero.",
    description: "Esencia pura de maderas exóticas y cuero. Una mezcla masculina sobria, poderosa y sumamente elegante.",
    price: 180,
    priceBs: 25000,
    defaultSize: "100ml",
    sizeOptions: [
      { ml: 50, label: "50 ml", price: 120 },
      { ml: 100, label: "100 ml", price: 180 },
      { ml: 10, label: "Travel Spray 10 ml", price: 35 }
    ],
    image: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    gender: "Hombre",
    family: "Amaderado",
    concentration: "Eau de Parfum",
    notes: {
      top: ["Bergamota de Calabria", "Cardamomo", "Toronja"],
      heart: ["Cuero de Toscana", "Maderas Exóticas", "Vetiver"],
      base: ["Ambergris", "Cedro del Atlas", "Pachulí"]
    },
    longevityScore: 5,
    projectionScore: 5,
    seasons: ["Otoño", "Invierno", "Primavera"],
    occasions: ["Oficina", "Eventos", "Noche"],
    rating: 4.89,
    reviewCount: 165,
    isBestseller: true,
    stock: 18
  },
  {
    id: "lum-05",
    name: "LUMIÈRE NOIR",
    brand: "LUMIÈRE PARFUMS",
    badge: "EDICIÓN NOCTURNA",
    tagline: "Más allá de la superficie. Mística pura de ámbar negro y rosa silvestre.",
    description: "Más allá de la superficie. Lumière Noir explora las profundidades del lujo silencioso con notas de ámbar negro, oud real y un velo de incienso místico.",
    price: 220,
    priceBs: 30000,
    defaultSize: "100ml",
    sizeOptions: [
      { ml: 50, label: "50 ml", price: 150 },
      { ml: 100, label: "100 ml", price: 220 },
      { ml: 10, label: "Travel Spray 10 ml", price: 42 }
    ],
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    gender: "Nicho",
    family: "Oriental",
    concentration: "Extrait de Parfum",
    notes: {
      top: ["Azafrán de Cachemira", "Bergamota Oscura", "Orquídea"],
      heart: ["Rosa Silvestre", "Oud Real", "Incienso Dulce"],
      base: ["Ámbar Negro", "Vainilla Bourbon", "Pachulí"]
    },
    longevityScore: 5,
    projectionScore: 5,
    seasons: ["Otoño", "Invierno"],
    occasions: ["Noche", "Eventos"],
    rating: 4.99,
    reviewCount: 310,
    isBestseller: true,
    isNiche: true,
    stock: 10
  }
];

function readCatalog() {
  try {
    if (!fs.existsSync(INVENTORY_FILE)) {
      const dataDir = path.dirname(INVENTORY_FILE);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(INVENTORY_FILE, JSON.stringify(DEFAULT_CATALOG, null, 2), "utf-8");
      return DEFAULT_CATALOG;
    }
    const raw = fs.readFileSync(INVENTORY_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_CATALOG;
  } catch (err) {
    console.error("Error leyendo base de datos de inventario:", err);
    return DEFAULT_CATALOG;
  }
}

function writeCatalog(data: any) {
  try {
    const dataDir = path.dirname(INVENTORY_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(INVENTORY_FILE, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error guardando base de datos de inventario:", err);
    return false;
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Perfume Luxe" });
  });

  // GET Perfumes catalog from backend database
  app.get("/api/perfumes", (req, res) => {
    const perfumes = readCatalog();
    res.json(perfumes);
  });

  // POST Admin update perfumes catalog in backend database
  app.post("/api/admin/perfumes", (req, res) => {
    const { perfumes } = req.body;
    if (!Array.isArray(perfumes)) {
      return res.status(400).json({ error: "Formato de perfumes inválido" });
    }
    const success = writeCatalog(perfumes);
    if (success) {
      return res.json({ success: true, count: perfumes.length });
    }
    return res.status(500).json({ error: "Error guardando en la base de datos" });
  });

  // POST Admin reset perfumes catalog to clean default
  app.post("/api/admin/reset", (req, res) => {
    const success = writeCatalog(DEFAULT_CATALOG);
    if (success) {
      return res.json({ success: true, perfumes: DEFAULT_CATALOG });
    }
    return res.status(500).json({ error: "Error reiniciando la base de datos" });
  });

  // AI Fragrance Sommelier endpoint
  app.post("/api/ai-recommend", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(503).json({
          error: "GEMINI_API_KEY no configurada",
          fallback: true
        });
      }

      const { userPreferences, perfumeList } = req.body;

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Eres un Maestro Perfumista y Sommelier Olfativo de la prestigiosa casa 'Perfume Luxe'.
Analiza la siguiente solicitud del cliente en español y sugiere la combinación de perfumes perfecta de nuestro catálogo.

Preferencias del cliente:
- Ocasión / Uso: ${userPreferences.occasion || 'Cualquiera'}
- Notas / Familia Olfativa favorita: ${userPreferences.family || 'Todas'}
- Personalidad / Vibras: ${userPreferences.vibe || 'Elegante y sofisticado'}
- Estación del año: ${userPreferences.season || 'Todo el año'}
- Género / Preferencia: ${userPreferences.gender || 'Unisex'}

Catálogo disponible (IDs y nombres):
${JSON.stringify(perfumeList.map((p: any) => ({ id: p.id, name: p.name, brand: p.brand, family: p.family, topNotes: p.notes?.top, heartNotes: p.notes?.heart, baseNotes: p.notes?.base })))}

Responde ÚNICAMENTE en formato JSON válido con esta estructura exacta (sin bloques markdown extras ni comillas triples):
{
  "recommendedIds": ["id1", "id2"],
  "sommelierAdvice": "Una explicación poética, elegante y profesional de por qué estas fragancias combinan perfectamente con la personalidad y momento descritos por el cliente.",
  "matchingNotes": ["Bergamota de Calabria", "Ámbar Gris", "Sándalo de Mysore"],
  "signatureLayeringTip": "Consejo especial de layering (combinación de aromas) o aplicación para máxima duración."
}`
      });

      const responseText = response.text || "";
      const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      return res.json(parsed);
    } catch (err: any) {
      console.error("Error en recomendación AI:", err);
      return res.status(500).json({ error: "Error procesando recomendación olfativa", fallback: true });
    }
  });

  // Vite middleware for development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Perfume Luxe server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
