import { Perfume } from '../types';

export const SQL_PERFUMES_DATA: Perfume[] = [
  {
    "id": "perf-01",
    "name": "Her Secret Absolu",
    "brand": "Banderas",
    "badge": "DISEÑADOR",
    "tagline": "Banderas Her Secret Absolu - Fragancia elegante y distintiva (Mujer).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 65,
    "priceBs": 9100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 42,
        "priceBs": 5915
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 65,
        "priceBs": 9100
      }
    ],
    "image": "https://i.ibb.co/GQFPyWFK/IMG-20260729-WA0098.jpg",
    "hoverImage": "https://i.ibb.co/GQFPyWFK/IMG-20260729-WA0098.jpg",
    "gender": "Mujer",
    "family": "Oriental",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 12
  },
  {
    "id": "perf-02",
    "name": "Tag Uomo Rosso",
    "brand": "Armaf",
    "badge": "ÁRABE / NICHO",
    "tagline": "Armaf Tag Uomo Rosso - Fragancia elegante y distintiva (Hombre).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 85,
    "priceBs": 11900,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 55,
        "priceBs": 7735
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 85,
        "priceBs": 11900
      }
    ],
    "image": "https://i.ibb.co/Gvwg9Cr5/IMG-20260729-WA0097.jpg",
    "hoverImage": "https://i.ibb.co/Gvwg9Cr5/IMG-20260729-WA0097.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "similarTo": "Invictus Red / Spicebomb",
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 13
  },
  {
    "id": "perf-03",
    "name": "212 VIP Black NYC",
    "brand": "Carolina Herrera",
    "badge": "DISEÑADOR",
    "tagline": "Carolina Herrera 212 VIP Black NYC - Fragancia elegante y distintiva (Hombre).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 125,
    "priceBs": 17500,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 81,
        "priceBs": 11375
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 125,
        "priceBs": 17500
      }
    ],
    "image": "https://i.ibb.co/Dftjq0tV/IMG-20260729-WA0095.jpg",
    "hoverImage": "https://i.ibb.co/Dftjq0tV/IMG-20260729-WA0095.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 14
  },
  {
    "id": "perf-04",
    "name": "The Icon Supreme",
    "brand": "Banderas",
    "badge": "DISEÑADOR",
    "tagline": "Banderas The Icon Supreme - Fragancia elegante y distintiva (Hombre).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 70,
    "priceBs": 9800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 46,
        "priceBs": 6370
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 70,
        "priceBs": 9800
      }
    ],
    "image": "https://i.ibb.co/LDL3p72w/IMG-20260729-WA0094.jpg",
    "hoverImage": "https://i.ibb.co/LDL3p72w/IMG-20260729-WA0094.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 15
  },
  {
    "id": "perf-05",
    "name": "Odyssey Ba Ha Mas",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Ba Ha Mas - Fragancia elegante y distintiva (Hombre).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/Z6Hs6X5z/IMG-20260729-WA0093.jpg",
    "hoverImage": "https://i.ibb.co/Z6Hs6X5z/IMG-20260729-WA0093.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Virgin Island Water (Creed)",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 16
  },
  {
    "id": "perf-06",
    "name": "L'Eau d'Issey Pour Homme Intense",
    "brand": "Issey Miyake",
    "badge": "DISEÑADOR",
    "tagline": "Issey Miyake L'Eau d'Issey Pour Homme Intense - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 110,
    "priceBs": 15400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 72,
        "priceBs": 10010
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 110,
        "priceBs": 15400
      }
    ],
    "image": "https://i.ibb.co/R462Gbhg/IMG-20260729-WA0092.jpg",
    "hoverImage": "https://i.ibb.co/R462Gbhg/IMG-20260729-WA0092.jpg",
    "gender": "Hombre",
    "family": "Amaderado",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Bergamota",
        "Manzana"
      ],
      "heart": [
        "Jazmín",
        "Rosa"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Amaderado intenso",
        "color": "#a0522d",
        "width": 100
      },
      {
        "name": "Aromático picante",
        "color": "#2ecc71",
        "width": 80
      },
      {
        "name": "Ámbar & Cuero",
        "color": "#d35400",
        "width": 65
      },
      {
        "name": "Cítrico brillante",
        "color": "#f1c40f",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 17
  },
  {
    "id": "perf-07",
    "name": "Amor Amor",
    "brand": "Cacharel",
    "badge": "DISEÑADOR",
    "tagline": "Cacharel Amor Amor - Fragancia elegante y distintiva (Mujer).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 80,
    "priceBs": 11200,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 52,
        "priceBs": 7280
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 80,
        "priceBs": 11200
      }
    ],
    "image": "https://i.ibb.co/Zp5wPcJX/IMG-20260729-WA0090.jpg",
    "hoverImage": "https://i.ibb.co/Zp5wPcJX/IMG-20260729-WA0090.jpg",
    "gender": "Mujer",
    "family": "Floral",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 18
  },
  {
    "id": "perf-08",
    "name": "Odyssey Homme White Edition",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Homme White Edition - Fragancia elegante y distintiva (Hombre).",
    "description": "Una declaración de estilo absoluto. Cada gota de esta fragancia encierra una profunda riqueza aromática, proyectando confianza, poder y un gusto impecable.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/tTLCCzSQ/IMG-20260729-WA0091.jpg",
    "hoverImage": "https://i.ibb.co/tTLCCzSQ/IMG-20260729-WA0091.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Noir Extreme (Tom Ford)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 19
  },
  {
    "id": "perf-09",
    "name": "Hawas ICE For Him",
    "brand": "Rasasi",
    "badge": "ÁRABE / NICHO",
    "tagline": "Rasasi Hawas ICE For Him - Fragancia elegante y distintiva (Hombre).",
    "description": "Sensualidad y frescura en perfecta armonía. Una esencia que atrapa los sentidos y despierta emociones, convirtiéndose en tu firma personal definitiva.",
    "price": 130,
    "priceBs": 18200,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 85,
        "priceBs": 11830
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 130,
        "priceBs": 18200
      }
    ],
    "image": "https://i.ibb.co/6ckPLptd/IMG-20260729-WA0089.jpg",
    "hoverImage": "https://i.ibb.co/6ckPLptd/IMG-20260729-WA0089.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Invictus Aqua / Hawas Supreme",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 20
  },
  {
    "id": "perf-10",
    "name": "Halloween Blossom",
    "brand": "Halloween",
    "badge": "DISEÑADOR",
    "tagline": "Halloween Halloween Blossom - Fragancia elegante y distintiva (Mujer).",
    "description": "La máxima expresión del buen gusto. Una estela duradera y sofisticada que acompaña durante todo el día, evolucionando de manera espectacular sobre la piel.",
    "price": 60,
    "priceBs": 8400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 39,
        "priceBs": 5460
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 60,
        "priceBs": 8400
      }
    ],
    "image": "https://i.ibb.co/mVzPPW53/IMG-20260729-WA0088.jpg",
    "hoverImage": "https://i.ibb.co/mVzPPW53/IMG-20260729-WA0088.jpg",
    "gender": "Mujer",
    "family": "Floral",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 21
  },
  {
    "id": "perf-11",
    "name": "Yara Candy",
    "brand": "Lattafa",
    "badge": "YARA COLLECTION",
    "tagline": "Lattafa Yara Candy - Fragancia elegante y distintiva (Mujer).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 105,
    "priceBs": 14700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 68,
        "priceBs": 9555
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 105,
        "priceBs": 14700
      }
    ],
    "image": "https://i.ibb.co/x8jpq1nh/IMG-20260729-WA0087.jpg",
    "hoverImage": "https://i.ibb.co/x8jpq1nh/IMG-20260729-WA0087.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Marshmallow, Caramelo & Frutas Exóticas",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 22
  },
  {
    "id": "perf-12",
    "name": "Club de Nuit Untold",
    "brand": "Armaf",
    "badge": "CLUB DE NUIT",
    "tagline": "Armaf Club de Nuit Untold - Fragancia elegante y distintiva (Unisex).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 115,
    "priceBs": 16100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 75,
        "priceBs": 10465
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 115,
        "priceBs": 16100
      }
    ],
    "image": "https://i.ibb.co/pBFBXKns/IMG-20260729-WA0086.jpg",
    "hoverImage": "https://i.ibb.co/pBFBXKns/IMG-20260729-WA0086.jpg",
    "gender": "Unisex",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Baccarat Rouge 540 (Maison Francis Kurkdjian)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 23
  },
  {
    "id": "perf-13",
    "name": "Nebras",
    "brand": "Lattafa",
    "badge": "PRIDE OF LATTAFA",
    "tagline": "Lattafa Nebras - Fragancia elegante y distintiva (Unisex).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 110,
    "priceBs": 15400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 72,
        "priceBs": 10010
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 110,
        "priceBs": 15400
      }
    ],
    "image": "https://i.ibb.co/PvvMjS7m/IMG-20260729-WA0085.jpg",
    "hoverImage": "https://i.ibb.co/PvvMjS7m/IMG-20260729-WA0085.jpg",
    "gender": "Unisex",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Eilish (Billie Eilish) / Cacao & Vainilla",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 24
  },
  {
    "id": "perf-14",
    "name": "Club de Nuit Sillage",
    "brand": "Armaf",
    "badge": "CLUB DE NUIT",
    "tagline": "Armaf Club de Nuit Sillage - Fragancia elegante y distintiva (Unisex).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 100,
    "priceBs": 14000,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 65,
        "priceBs": 9100
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 100,
        "priceBs": 14000
      }
    ],
    "image": "https://i.ibb.co/HLpqbJrm/IMG-20260729-WA0084.jpg",
    "hoverImage": "https://i.ibb.co/HLpqbJrm/IMG-20260729-WA0084.jpg",
    "gender": "Unisex",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Silver Mountain Water (Creed)",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 25
  },
  {
    "id": "perf-15",
    "name": "CH Men",
    "brand": "Carolina Herrera",
    "badge": "DISEÑADOR",
    "tagline": "Carolina Herrera CH Men - Fragancia elegante y distintiva (Hombre).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 120,
    "priceBs": 16800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 78,
        "priceBs": 10920
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 120,
        "priceBs": 16800
      }
    ],
    "image": "https://i.ibb.co/XrghTb3W/IMG-20260729-WA0083.jpg",
    "hoverImage": "https://i.ibb.co/XrghTb3W/IMG-20260729-WA0083.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 26
  },
  {
    "id": "perf-16",
    "name": "Polo Red",
    "brand": "Ralph Lauren",
    "badge": "DISEÑADOR",
    "tagline": "Ralph Lauren Polo Red - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 115,
    "priceBs": 16100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 75,
        "priceBs": 10465
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 115,
        "priceBs": 16100
      }
    ],
    "image": "https://i.ibb.co/QF6wtSZr/IMG-20260729-WA0082.jpg",
    "hoverImage": "https://i.ibb.co/QF6wtSZr/IMG-20260729-WA0082.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 12
  },
  {
    "id": "perf-17",
    "name": "Bon Bon",
    "brand": "Armaf",
    "badge": "DELIGHTS",
    "tagline": "Armaf Bon Bon - Fragancia elegante y distintiva (Mujer).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/mVZLrTH6/IMG-20260729-WA0081.jpg",
    "hoverImage": "https://i.ibb.co/mVZLrTH6/IMG-20260729-WA0081.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Bonbon (Viktor&Rolf)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 13
  },
  {
    "id": "perf-18",
    "name": "Eclaire Pistache",
    "brand": "Lattafa",
    "badge": "ÁRABE / NICHO",
    "tagline": "Lattafa Eclaire Pistache - Fragancia elegante y distintiva (Mujer).",
    "description": "Una declaración de estilo absoluto. Cada gota de esta fragancia encierra una profunda riqueza aromática, proyectando confianza, poder y un gusto impecable.",
    "price": 120,
    "priceBs": 16800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 78,
        "priceBs": 10920
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 120,
        "priceBs": 16800
      }
    ],
    "image": "https://i.ibb.co/mrNxBLCB/IMG-20260729-WA0080.jpg",
    "hoverImage": "https://i.ibb.co/mrNxBLCB/IMG-20260729-WA0080.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Yum Pistachio Gelato (Kayali)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 14
  },
  {
    "id": "perf-19",
    "name": "Nautica Voyage",
    "brand": "Nautica",
    "badge": "DISEÑADOR",
    "tagline": "Nautica Nautica Voyage - Fragancia elegante y distintiva (Hombre).",
    "description": "Sensualidad y frescura en perfecta armonía. Una esencia que atrapa los sentidos y despierta emociones, convirtiéndose en tu firma personal definitiva.",
    "price": 45,
    "priceBs": 6300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 29,
        "priceBs": 4095
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 45,
        "priceBs": 6300
      }
    ],
    "image": "https://i.ibb.co/DP6gfNsQ/IMG-20260729-WA0079.jpg",
    "hoverImage": "https://i.ibb.co/DP6gfNsQ/IMG-20260729-WA0079.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 15
  },
  {
    "id": "perf-20",
    "name": "Odyssey Mandarin Sky Elixir",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Mandarin Sky Elixir - Fragancia elegante y distintiva (Hombre).",
    "description": "La máxima expresión del buen gusto. Una estela duradera y sofisticada que acompaña durante todo el día, evolucionando de manera espectacular sobre la piel.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/Cs7BpBq5/IMG-20260729-WA0078.jpg",
    "hoverImage": "https://i.ibb.co/Cs7BpBq5/IMG-20260729-WA0078.jpg",
    "gender": "Hombre",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Scandal Pour Homme (Jean Paul Gaultier)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 16
  },
  {
    "id": "perf-21",
    "name": "Thank U, Next",
    "brand": "Ariana Grande",
    "badge": "CELEBRIDAD",
    "tagline": "Ariana Grande Thank U, Next - Fragancia elegante y distintiva (Mujer).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 85,
    "priceBs": 11900,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 55,
        "priceBs": 7735
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 85,
        "priceBs": 11900
      }
    ],
    "image": "https://i.ibb.co/Q7KqTwvz/IMG-20260729-WA0077.jpg",
    "hoverImage": "https://i.ibb.co/Q7KqTwvz/IMG-20260729-WA0077.jpg",
    "gender": "Mujer",
    "family": "Frutal",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Sandía Jugosa",
        "Frambuesa"
      ],
      "heart": [
        "Lichi",
        "Peonía"
      ],
      "base": [
        "Sándalo",
        "Almizcle Blanco"
      ]
    },
    "mainAccords": [
      {
        "name": "Tropical & Frutal",
        "color": "#f39c12",
        "width": 100
      },
      {
        "name": "Dulce de frutas",
        "color": "#e84393",
        "width": 86
      },
      {
        "name": "Fresco rosado",
        "color": "#ff7675",
        "width": 72
      },
      {
        "name": "Flores suaves",
        "color": "#e0f7fa",
        "width": 55
      },
      {
        "name": "Almizclado",
        "color": "#b2bec3",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 17
  },
  {
    "id": "perf-22",
    "name": "Mayar Natural Intense",
    "brand": "Lattafa",
    "badge": "ÁRABE / NICHO",
    "tagline": "Lattafa Mayar Natural Intense - Fragancia elegante y distintiva (Mujer).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 105,
    "priceBs": 14700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 68,
        "priceBs": 9555
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 105,
        "priceBs": 14700
      }
    ],
    "image": "https://i.ibb.co/zT9JFj9q/IMG-20260729-WA0076.jpg",
    "hoverImage": "https://i.ibb.co/zT9JFj9q/IMG-20260729-WA0076.jpg",
    "gender": "Mujer",
    "family": "Frutal",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Sandía Jugosa",
        "Frambuesa"
      ],
      "heart": [
        "Lichi",
        "Peonía"
      ],
      "base": [
        "Sándalo",
        "Almizcle Blanco"
      ]
    },
    "similarTo": "Acqua di Gioia (Giorgio Armani)",
    "mainAccords": [
      {
        "name": "Tropical & Frutal",
        "color": "#f39c12",
        "width": 100
      },
      {
        "name": "Dulce de frutas",
        "color": "#e84393",
        "width": 86
      },
      {
        "name": "Fresco rosado",
        "color": "#ff7675",
        "width": 72
      },
      {
        "name": "Flores suaves",
        "color": "#e0f7fa",
        "width": 55
      },
      {
        "name": "Almizclado",
        "color": "#b2bec3",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 18
  },
  {
    "id": "perf-23",
    "name": "Legend Blue",
    "brand": "Montblanc",
    "badge": "DISEÑADOR",
    "tagline": "Montblanc Legend Blue - Fragancia elegante y distintiva (Hombre).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 105,
    "priceBs": 14700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 68,
        "priceBs": 9555
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 105,
        "priceBs": 14700
      }
    ],
    "image": "https://i.ibb.co/21J9dPSh/IMG-20260729-WA0074.jpg",
    "hoverImage": "https://i.ibb.co/21J9dPSh/IMG-20260729-WA0074.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 19
  },
  {
    "id": "perf-24",
    "name": "Blue Seduction For Men",
    "brand": "Antonio Banderas",
    "badge": "DISEÑADOR",
    "tagline": "Antonio Banderas Blue Seduction For Men - Fragancia elegante y distintiva (Hombre).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 50,
    "priceBs": 7000,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 33,
        "priceBs": 4550
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 50,
        "priceBs": 7000
      }
    ],
    "image": "https://i.ibb.co/4ZtsSsg8/IMG-20260729-WA0073.jpg",
    "hoverImage": "https://i.ibb.co/4ZtsSsg8/IMG-20260729-WA0073.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 20
  },
  {
    "id": "perf-25",
    "name": "Liquid Brun",
    "brand": "French Avenue",
    "badge": "NICHO / LUXE",
    "tagline": "French Avenue Liquid Brun - Fragancia elegante y distintiva (Unisex).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 135,
    "priceBs": 18900,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 88,
        "priceBs": 12285
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 135,
        "priceBs": 18900
      }
    ],
    "image": "https://i.ibb.co/9mZbQ12j/IMG-20260729-WA0072.jpg",
    "hoverImage": "https://i.ibb.co/9mZbQ12j/IMG-20260729-WA0072.jpg",
    "gender": "Unisex",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Althaïr (Parfums de Marly)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 21
  },
  {
    "id": "perf-26",
    "name": "Odyssey Mandarin Limited Edition",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Mandarin Limited Edition - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/xq0MJFPF/IMG-20260729-WA0071.jpg",
    "hoverImage": "https://i.ibb.co/xq0MJFPF/IMG-20260729-WA0071.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Fragancia de autor árabe con acorde exclusivo",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 22
  },
  {
    "id": "perf-27",
    "name": "Angham",
    "brand": "Lattafa",
    "badge": "PRIDE OF LATTAFA",
    "tagline": "Lattafa Angham - Fragancia elegante y distintiva (Mujer).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 115,
    "priceBs": 16100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 75,
        "priceBs": 10465
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 115,
        "priceBs": 16100
      }
    ],
    "image": "https://i.ibb.co/Vpqkrf8L/IMG-20260729-WA0070.jpg",
    "hoverImage": "https://i.ibb.co/Vpqkrf8L/IMG-20260729-WA0070.jpg",
    "gender": "Mujer",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Goddess (Burberry)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 23
  },
  {
    "id": "perf-28",
    "name": "Nitro Red Pour Homme",
    "brand": "Dumont Paris",
    "badge": "EXTRAIT DE PARFUM",
    "tagline": "Dumont Paris Nitro Red Pour Homme - Fragancia elegante y distintiva (Hombre).",
    "description": "Una declaración de estilo absoluto. Cada gota de esta fragancia encierra una profunda riqueza aromática, proyectando confianza, poder y un gusto impecable.",
    "price": 130,
    "priceBs": 18200,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 85,
        "priceBs": 11830
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 130,
        "priceBs": 18200
      }
    ],
    "image": "https://i.ibb.co/xqM0P22k/IMG-20260729-WA0069.jpg",
    "hoverImage": "https://i.ibb.co/xqM0P22k/IMG-20260729-WA0069.jpg",
    "gender": "Hombre",
    "family": "Frutal",
    "concentration": "Extrait de Parfum",
    "notes": {
      "top": [
        "Sandía Jugosa",
        "Frambuesa"
      ],
      "heart": [
        "Lichi",
        "Peonía"
      ],
      "base": [
        "Sándalo",
        "Almizcle Blanco"
      ]
    },
    "similarTo": "Invictus (Paco Rabanne) / Erba Pura",
    "mainAccords": [
      {
        "name": "Tropical & Frutal",
        "color": "#f39c12",
        "width": 100
      },
      {
        "name": "Dulce de frutas",
        "color": "#e84393",
        "width": 86
      },
      {
        "name": "Fresco rosado",
        "color": "#ff7675",
        "width": 72
      },
      {
        "name": "Flores suaves",
        "color": "#e0f7fa",
        "width": 55
      },
      {
        "name": "Almizclado",
        "color": "#b2bec3",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 24
  },
  {
    "id": "perf-29",
    "name": "Musamam White Intense",
    "brand": "Lattafa",
    "badge": "PRIDE OF LATTAFA",
    "tagline": "Lattafa Musamam White Intense - Fragancia elegante y distintiva (Unisex).",
    "description": "Sensualidad y frescura en perfecta armonía. Una esencia que atrapa los sentidos y despierta emociones, convirtiéndose en tu firma personal definitiva.",
    "price": 125,
    "priceBs": 17500,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 81,
        "priceBs": 11375
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 125,
        "priceBs": 17500
      }
    ],
    "image": "https://i.ibb.co/DD9ghTHF/IMG-20260729-WA0068.jpg",
    "hoverImage": "https://i.ibb.co/DD9ghTHF/IMG-20260729-WA0068.jpg",
    "gender": "Unisex",
    "family": "Amaderado",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Bergamota",
        "Manzana"
      ],
      "heart": [
        "Jazmín",
        "Rosa"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Sant33 (Le Labo) / Gris Charnel (BDK)",
    "mainAccords": [
      {
        "name": "Amaderado intenso",
        "color": "#a0522d",
        "width": 100
      },
      {
        "name": "Aromático picante",
        "color": "#2ecc71",
        "width": 80
      },
      {
        "name": "Ámbar & Cuero",
        "color": "#d35400",
        "width": 65
      },
      {
        "name": "Cítrico brillante",
        "color": "#f1c40f",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 25
  },
  {
    "id": "perf-30",
    "name": "212 NYC",
    "brand": "Carolina Herrera",
    "badge": "DISEÑADOR",
    "tagline": "Carolina Herrera 212 NYC - Fragancia elegante y distintiva (Mujer).",
    "description": "La máxima expresión del buen gusto. Una estela duradera y sofisticada que acompaña durante todo el día, evolucionando de manera espectacular sobre la piel.",
    "price": 115,
    "priceBs": 16100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 75,
        "priceBs": 10465
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 115,
        "priceBs": 16100
      }
    ],
    "image": "https://i.ibb.co/5WXnkb66/IMG-20260729-WA0067.jpg",
    "hoverImage": "https://i.ibb.co/5WXnkb66/IMG-20260729-WA0067.jpg",
    "gender": "Mujer",
    "family": "Floral",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 26
  },
  {
    "id": "perf-31",
    "name": "Tommy",
    "brand": "Tommy Hilfiger",
    "badge": "DISEÑADOR",
    "tagline": "Tommy Hilfiger Tommy - Fragancia elegante y distintiva (Hombre).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 70,
    "priceBs": 9800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 46,
        "priceBs": 6370
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 70,
        "priceBs": 9800
      }
    ],
    "image": "https://i.ibb.co/Wq845Cb/IMG-20260729-WA0066.jpg",
    "hoverImage": "https://i.ibb.co/Wq845Cb/IMG-20260729-WA0066.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 12
  },
  {
    "id": "perf-32",
    "name": "King of Seduction Absolute",
    "brand": "Antonio Banderas",
    "badge": "DISEÑADOR",
    "tagline": "Antonio Banderas King of Seduction Absolute - Fragancia elegante y distintiva (Hombre).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 55,
    "priceBs": 7700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 36,
        "priceBs": 5005
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 55,
        "priceBs": 7700
      }
    ],
    "image": "https://i.ibb.co/1fM1x7kD/IMG-20260729-WA0065.jpg",
    "hoverImage": "https://i.ibb.co/1fM1x7kD/IMG-20260729-WA0065.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 13
  },
  {
    "id": "perf-33",
    "name": "His Confession",
    "brand": "Lattafa",
    "badge": "ÁRABE / NICHO",
    "tagline": "Lattafa His Confession - Fragancia elegante y distintiva (Hombre).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 110,
    "priceBs": 15400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 72,
        "priceBs": 10010
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 110,
        "priceBs": 15400
      }
    ],
    "image": "https://i.ibb.co/5xnqNGkQ/IMG-20260729-WA0064.jpg",
    "hoverImage": "https://i.ibb.co/5xnqNGkQ/IMG-20260729-WA0064.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Dior Homme Intense",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 14
  },
  {
    "id": "perf-34",
    "name": "Khamrah",
    "brand": "Lattafa",
    "badge": "BESTSELLER ÁRABE",
    "tagline": "Lattafa Khamrah - Fragancia elegante y distintiva (Unisex).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 120,
    "priceBs": 16800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 78,
        "priceBs": 10920
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 120,
        "priceBs": 16800
      }
    ],
    "image": "https://i.ibb.co/GfwWG2xf/IMG-20260729-WA0063.jpg",
    "hoverImage": "https://i.ibb.co/GfwWG2xf/IMG-20260729-WA0063.jpg",
    "gender": "Unisex",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Angels' Share (Kilian)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 15
  },
  {
    "id": "perf-35",
    "name": "Asad",
    "brand": "Lattafa",
    "badge": "BESTSELLER ÁRABE",
    "tagline": "Lattafa Asad - Fragancia elegante y distintiva (Hombre).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/FLqmvVCH/IMG-20260729-WA0062.jpg",
    "hoverImage": "https://i.ibb.co/FLqmvVCH/IMG-20260729-WA0062.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Sauvage Elixir (Dior)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 16
  },
  {
    "id": "perf-36",
    "name": "Club de Nuit Intense Man",
    "brand": "Armaf",
    "badge": "CLUB DE NUIT",
    "tagline": "Armaf Club de Nuit Intense Man - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/sv86jKtZ/IMG-20260729-WA0061.jpg",
    "hoverImage": "https://i.ibb.co/sv86jKtZ/IMG-20260729-WA0061.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Aventus (Creed)",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 17
  },
  {
    "id": "perf-37",
    "name": "Light Blue",
    "brand": "Dolce & Gabbana",
    "badge": "DISEÑADOR",
    "tagline": "Dolce & Gabbana Light Blue - Fragancia elegante y distintiva (Mujer).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 110,
    "priceBs": 15400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 72,
        "priceBs": 10010
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 110,
        "priceBs": 15400
      }
    ],
    "image": "https://i.ibb.co/BK6vL8Qt/IMG-20260729-WA0060.jpg",
    "hoverImage": "https://i.ibb.co/BK6vL8Qt/IMG-20260729-WA0060.jpg",
    "gender": "Mujer",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 18
  },
  {
    "id": "perf-38",
    "name": "Cloud",
    "brand": "Ariana Grande",
    "badge": "CELEBRIDAD",
    "tagline": "Ariana Grande Cloud - Fragancia elegante y distintiva (Mujer).",
    "description": "Una declaración de estilo absoluto. Cada gota de esta fragancia encierra una profunda riqueza aromática, proyectando confianza, poder y un gusto impecable.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/5fKtrQZ/IMG-20260729-WA0059.jpg",
    "hoverImage": "https://i.ibb.co/5fKtrQZ/IMG-20260729-WA0059.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 19
  },
  {
    "id": "perf-39",
    "name": "212 Men NYC",
    "brand": "Carolina Herrera",
    "badge": "DISEÑADOR",
    "tagline": "Carolina Herrera 212 Men NYC - Fragancia elegante y distintiva (Hombre).",
    "description": "Sensualidad y frescura en perfecta armonía. Una esencia que atrapa los sentidos y despierta emociones, convirtiéndose en tu firma personal definitiva.",
    "price": 120,
    "priceBs": 16800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 78,
        "priceBs": 10920
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 120,
        "priceBs": 16800
      }
    ],
    "image": "https://i.ibb.co/j9hHXQ9w/IMG-20260729-WA0058.jpg",
    "hoverImage": "https://i.ibb.co/j9hHXQ9w/IMG-20260729-WA0058.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 20
  },
  {
    "id": "perf-40",
    "name": "Veneno Bianco",
    "brand": "French Avenue",
    "badge": "NICHO / LUXE",
    "tagline": "French Avenue Veneno Bianco - Fragancia elegante y distintiva (Unisex).",
    "description": "La máxima expresión del buen gusto. Una estela duradera y sofisticada que acompaña durante todo el día, evolucionando de manera espectacular sobre la piel.",
    "price": 130,
    "priceBs": 18200,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 85,
        "priceBs": 11830
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 130,
        "priceBs": 18200
      }
    ],
    "image": "https://i.ibb.co/r2HdqNRY/IMG-20260729-WA0057.jpg",
    "hoverImage": "https://i.ibb.co/r2HdqNRY/IMG-20260729-WA0057.jpg",
    "gender": "Unisex",
    "family": "Floral",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Blanko / White Suede (Tom Ford)",
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 21
  },
  {
    "id": "perf-41",
    "name": "Club de Nuit Milestone",
    "brand": "Armaf",
    "badge": "CLUB DE NUIT",
    "tagline": "Armaf Club de Nuit Milestone - Fragancia elegante y distintiva (Unisex).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 95,
    "priceBs": 13300,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 62,
        "priceBs": 8645
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 95,
        "priceBs": 13300
      }
    ],
    "image": "https://i.ibb.co/mV8qFrWk/IMG-20260729-WA0055.jpg",
    "hoverImage": "https://i.ibb.co/mV8qFrWk/IMG-20260729-WA0055.jpg",
    "gender": "Unisex",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Millésime Impérial (Creed)",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 22
  },
  {
    "id": "perf-42",
    "name": "Odyssey Artisto",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Artisto - Fragancia elegante y distintiva (Hombre).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/jkSMJJhp/IMG-20260729-WA0054.jpg",
    "hoverImage": "https://i.ibb.co/jkSMJJhp/IMG-20260729-WA0054.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "similarTo": "L'Homme Ideal (Guerlain)",
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 23
  },
  {
    "id": "perf-43",
    "name": "Yara Moi",
    "brand": "Lattafa",
    "badge": "YARA COLLECTION",
    "tagline": "Lattafa Yara Moi - Fragancia elegante y distintiva (Mujer).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 100,
    "priceBs": 14000,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 65,
        "priceBs": 9100
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 100,
        "priceBs": 14000
      }
    ],
    "image": "https://i.ibb.co/j9MBCXx9/IMG-20260729-WA0053.jpg",
    "hoverImage": "https://i.ibb.co/j9MBCXx9/IMG-20260729-WA0053.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Perfect (Marc Jacobs) / Gourmand Cremoso",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 24
  },
  {
    "id": "perf-44",
    "name": "Yara",
    "brand": "Lattafa",
    "badge": "YARA COLLECTION",
    "tagline": "Lattafa Yara - Fragancia elegante y distintiva (Mujer).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 100,
    "priceBs": 14000,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 65,
        "priceBs": 9100
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 100,
        "priceBs": 14000
      }
    ],
    "image": "https://i.ibb.co/bjsYS6KK/IMG-20260729-WA0052.jpg",
    "hoverImage": "https://i.ibb.co/bjsYS6KK/IMG-20260729-WA0052.jpg",
    "gender": "Mujer",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Poison Girl (Dior) / Sol de Janeiro",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": true,
    "stock": 25
  },
  {
    "id": "perf-45",
    "name": "Mayar",
    "brand": "Lattafa",
    "badge": "ÁRABE / NICHO",
    "tagline": "Lattafa Mayar - Fragancia elegante y distintiva (Mujer).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 105,
    "priceBs": 14700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 68,
        "priceBs": 9555
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 105,
        "priceBs": 14700
      }
    ],
    "image": "https://i.ibb.co/WNpJpgHN/IMG-20260729-WA0051.jpg",
    "hoverImage": "https://i.ibb.co/WNpJpgHN/IMG-20260729-WA0051.jpg",
    "gender": "Mujer",
    "family": "Frutal",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Sandía Jugosa",
        "Frambuesa"
      ],
      "heart": [
        "Lichi",
        "Peonía"
      ],
      "base": [
        "Sándalo",
        "Almizcle Blanco"
      ]
    },
    "similarTo": "Angel Nova (Mugler) / Frutal Floral",
    "mainAccords": [
      {
        "name": "Tropical & Frutal",
        "color": "#f39c12",
        "width": 100
      },
      {
        "name": "Dulce de frutas",
        "color": "#e84393",
        "width": 86
      },
      {
        "name": "Fresco rosado",
        "color": "#ff7675",
        "width": 72
      },
      {
        "name": "Flores suaves",
        "color": "#e0f7fa",
        "width": 55
      },
      {
        "name": "Almizclado",
        "color": "#b2bec3",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 26
  },
  {
    "id": "perf-46",
    "name": "L'Eau d'Issey Pour Homme",
    "brand": "Issey Miyake",
    "badge": "DISEÑADOR",
    "tagline": "Issey Miyake L'Eau d'Issey Pour Homme - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 105,
    "priceBs": 14700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 68,
        "priceBs": 9555
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 105,
        "priceBs": 14700
      }
    ],
    "image": "https://i.ibb.co/VZV3Qcc/IMG-20260729-WA0050.jpg",
    "hoverImage": "https://i.ibb.co/VZV3Qcc/IMG-20260729-WA0050.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 12
  },
  {
    "id": "perf-47",
    "name": "Art of Nature II",
    "brand": "Lattafa",
    "badge": "PRIDE OF LATTAFA",
    "tagline": "Lattafa Art of Nature II - Fragancia elegante y distintiva (Unisex).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 115,
    "priceBs": 16100,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 75,
        "priceBs": 10465
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 115,
        "priceBs": 16100
      }
    ],
    "image": "https://i.ibb.co/vvcs8z57/IMG-20260729-WA0049.jpg",
    "hoverImage": "https://i.ibb.co/vvcs8z57/IMG-20260729-WA0049.jpg",
    "gender": "Unisex",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Oud Wood (Tom Ford)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 13
  },
  {
    "id": "perf-48",
    "name": "Guess Seductive Red",
    "brand": "Guess",
    "badge": "DISEÑADOR",
    "tagline": "Guess Guess Seductive Red - Fragancia elegante y distintiva (Mujer).",
    "description": "Una declaración de estilo absoluto. Cada gota de esta fragancia encierra una profunda riqueza aromática, proyectando confianza, poder y un gusto impecable.",
    "price": 85,
    "priceBs": 11900,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 55,
        "priceBs": 7735
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 85,
        "priceBs": 11900
      }
    ],
    "image": "https://i.ibb.co/gFy3rnDR/IMG-20260729-WA0048.jpg",
    "hoverImage": "https://i.ibb.co/gFy3rnDR/IMG-20260729-WA0048.jpg",
    "gender": "Mujer",
    "family": "Floral",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 14
  },
  {
    "id": "perf-49",
    "name": "Odyssey Homme Black Edition",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Homme Black Edition - Fragancia elegante y distintiva (Hombre).",
    "description": "Sensualidad y frescura en perfecta armonía. Una esencia que atrapa los sentidos y despierta emociones, convirtiéndose en tu firma personal definitiva.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/yFXQ5bnX/IMG-20260729-WA0047.jpg",
    "hoverImage": "https://i.ibb.co/yFXQ5bnX/IMG-20260729-WA0047.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Noir Extreme (Tom Ford)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 15
  },
  {
    "id": "perf-50",
    "name": "The Pride of Armaf Admiral",
    "brand": "Armaf",
    "badge": "PRIDE OF ARMAF",
    "tagline": "Armaf The Pride of Armaf Admiral - Fragancia elegante y distintiva (Hombre).",
    "description": "La máxima expresión del buen gusto. Una estela duradera y sofisticada que acompaña durante todo el día, evolucionando de manera espectacular sobre la piel.",
    "price": 110,
    "priceBs": 15400,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 72,
        "priceBs": 10010
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 110,
        "priceBs": 15400
      }
    ],
    "image": "https://i.ibb.co/JFzMyyND/IMG-20260729-WA0046.jpg",
    "hoverImage": "https://i.ibb.co/JFzMyyND/IMG-20260729-WA0046.jpg",
    "gender": "Hombre",
    "family": "Aromático",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Menta",
        "Cardamomo"
      ],
      "heart": [
        "Salvia",
        "Lavanda"
      ],
      "base": [
        "Vetiver",
        "Ámbar Gris"
      ]
    },
    "similarTo": "Bleu de Chanel / Sauvage",
    "mainAccords": [
      {
        "name": "Aromático & Menta",
        "color": "#2ecc71",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#27ae60",
        "width": 85
      },
      {
        "name": "Cálido y especiado",
        "color": "#d35400",
        "width": 72
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 58
      },
      {
        "name": "Verde / Herbario",
        "color": "#16a085",
        "width": 45
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 16
  },
  {
    "id": "perf-51",
    "name": "Connoisseur Woman",
    "brand": "Armaf",
    "badge": "ÁRABE / NICHO",
    "tagline": "Armaf Connoisseur Woman - Fragancia elegante y distintiva (Mujer).",
    "description": "Una creación magistral que captura la esencia pura de la elegancia. Sus notas evolucionan sutilmente en la piel, revelando un carácter magnético y seductor.",
    "price": 125,
    "priceBs": 17500,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 81,
        "priceBs": 11375
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 125,
        "priceBs": 17500
      }
    ],
    "image": "https://i.ibb.co/C5CFhVGD/IMG-20260729-WA0045.jpg",
    "hoverImage": "https://i.ibb.co/C5CFhVGD/IMG-20260729-WA0045.jpg",
    "gender": "Mujer",
    "family": "Oriental",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "similarTo": "Libre Intense (YSL)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 17
  },
  {
    "id": "perf-52",
    "name": "Odyssey Limoni",
    "brand": "Armaf",
    "badge": "ODYSSEY COLLECTION",
    "tagline": "Armaf Odyssey Limoni - Fragancia elegante y distintiva (Hombre).",
    "description": "El equilibrio perfecto entre tradición y modernidad. Esta fragancia destaca por su luminosidad inmediata y un fondo profundo que deja una estela inolvidable.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/1J7Wcyvd/IMG-20260729-WA0044.jpg",
    "hoverImage": "https://i.ibb.co/1J7Wcyvd/IMG-20260729-WA0044.jpg",
    "gender": "Hombre",
    "family": "Cítrico",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Limón de Sicilia",
        "Bergamota"
      ],
      "heart": [
        "Pimienta Rosa",
        "Flor de Azahar"
      ],
      "base": [
        "Madera de Cedro",
        "Almizcle"
      ]
    },
    "similarTo": "Allure Homme Édition Blanche (Chanel)",
    "mainAccords": [
      {
        "name": "Cítrico fresco",
        "color": "#f1c40f",
        "width": 100
      },
      {
        "name": "Fresco picante",
        "color": "#2ecc71",
        "width": 85
      },
      {
        "name": "Aromático / Herbario",
        "color": "#27ae60",
        "width": 70
      },
      {
        "name": "Agrios & Flores",
        "color": "#f39c12",
        "width": 55
      },
      {
        "name": "Leñoso",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 18
  },
  {
    "id": "perf-53",
    "name": "The Secret",
    "brand": "Antonio Banderas",
    "badge": "DISEÑADOR",
    "tagline": "Antonio Banderas The Secret - Fragancia elegante y distintiva (Hombre).",
    "description": "Diseñada para quienes no temen destacar. Su composición aromática es una verdadera obra de arte olfativa, llena de contrastes fascinantes y vibrantes.",
    "price": 55,
    "priceBs": 7700,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 36,
        "priceBs": 5005
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 55,
        "priceBs": 7700
      }
    ],
    "image": "https://i.ibb.co/FZ6rPSh/IMG-20260729-WA0043.jpg",
    "hoverImage": "https://i.ibb.co/FZ6rPSh/IMG-20260729-WA0043.jpg",
    "gender": "Hombre",
    "family": "Oriental",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Azafrán",
        "Pimienta Negra"
      ],
      "heart": [
        "Incienso",
        "Tuberosa"
      ],
      "base": [
        "Oud",
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Ahumado & Incienso",
        "color": "#7f8c8d",
        "width": 88
      },
      {
        "name": "Ámbar & Oud",
        "color": "#d35400",
        "width": 75
      },
      {
        "name": "Vainilla especiada",
        "color": "#e74c3c",
        "width": 62
      },
      {
        "name": "Leñoso balsámico",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": false,
    "isNiche": false,
    "stock": 19
  },
  {
    "id": "perf-54",
    "name": "Daisy Dream",
    "brand": "Marc Jacobs",
    "badge": "DISEÑADOR",
    "tagline": "Marc Jacobs Daisy Dream - Fragancia elegante y distintiva (Mujer).",
    "description": "Una sinfonía de notas seleccionadas a mano. Un aroma envolvente y misterioso que se adapta a cualquier ocasión, dejando una impresión de lujo absoluto.",
    "price": 120,
    "priceBs": 16800,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 78,
        "priceBs": 10920
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 120,
        "priceBs": 16800
      }
    ],
    "image": "https://i.ibb.co/dsjjSw4G/IMG-20260729-WA0042.jpg",
    "hoverImage": "https://i.ibb.co/dsjjSw4G/IMG-20260729-WA0042.jpg",
    "gender": "Mujer",
    "family": "Floral",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Cereza Roja",
        "Peonía"
      ],
      "heart": [
        "Jazmín Sambac",
        "Rosa de Damasco"
      ],
      "base": [
        "Vainilla",
        "Ámbar"
      ]
    },
    "mainAccords": [
      {
        "name": "Flores blancas & Rosa",
        "color": "#e84393",
        "width": 100
      },
      {
        "name": "Dulce acaramelado",
        "color": "#ff7675",
        "width": 82
      },
      {
        "name": "Fresco floral",
        "color": "#fd79a8",
        "width": 70
      },
      {
        "name": "Atalcado",
        "color": "#dfe6e9",
        "width": 55
      },
      {
        "name": "Amaderado suave",
        "color": "#a0522d",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": false,
    "stock": 20
  },
  {
    "id": "perf-55",
    "name": "Khamrah Qahwa",
    "brand": "Lattafa",
    "badge": "BESTSELLER ÁRABE",
    "tagline": "Lattafa Khamrah Qahwa - Fragancia elegante y distintiva (Unisex).",
    "description": "Un viaje sensorial único. Desde su salida refrescante hasta su fondo cálido, esta fragancia es el accesorio invisible perfecto para la persona segura de sí misma.",
    "price": 125,
    "priceBs": 17500,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 81,
        "priceBs": 11375
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 125,
        "priceBs": 17500
      }
    ],
    "image": "https://i.ibb.co/tPvBPGGx/IMG-20260729-WA0041.jpg",
    "hoverImage": "https://i.ibb.co/tPvBPGGx/IMG-20260729-WA0041.jpg",
    "gender": "Unisex",
    "family": "Gourmand",
    "concentration": "Eau de Parfum",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Angels' Share (Kilian) + Café Tostado",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.8,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 21
  },
  {
    "id": "perf-56",
    "name": "Nitro Red Intensely Pour Homme",
    "brand": "Dumont Paris",
    "badge": "EXTRAIT DE PARFUM",
    "tagline": "Dumont Paris Nitro Red Intensely Pour Homme - Fragancia elegante y distintiva (Hombre).",
    "description": "Sofisticación embotellada. Su estructura olfativa compleja y refinada garantiza una presencia inconfundible, ideal para eventos especiales o uso diario premium.",
    "price": 140,
    "priceBs": 19600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 91,
        "priceBs": 12740
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 140,
        "priceBs": 19600
      }
    ],
    "image": "https://i.ibb.co/Q7qcRxNz/IMG-20260729-WA0040.jpg",
    "hoverImage": "https://i.ibb.co/Q7qcRxNz/IMG-20260729-WA0040.jpg",
    "gender": "Hombre",
    "family": "Frutal",
    "concentration": "Extrait de Parfum",
    "notes": {
      "top": [
        "Sandía Jugosa",
        "Frambuesa"
      ],
      "heart": [
        "Lichi",
        "Peonía"
      ],
      "base": [
        "Sándalo",
        "Almizcle Blanco"
      ]
    },
    "similarTo": "Invictus Victory Elixir (Paco Rabanne)",
    "mainAccords": [
      {
        "name": "Tropical & Frutal",
        "color": "#f39c12",
        "width": 100
      },
      {
        "name": "Dulce de frutas",
        "color": "#e84393",
        "width": 86
      },
      {
        "name": "Fresco rosado",
        "color": "#ff7675",
        "width": 72
      },
      {
        "name": "Flores suaves",
        "color": "#e0f7fa",
        "width": 55
      },
      {
        "name": "Almizclado",
        "color": "#b2bec3",
        "width": 40
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.88,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 22
  },
  {
    "id": "perf-57",
    "name": "9 PM",
    "brand": "Afnan",
    "badge": "BESTSELLER ÁRABE",
    "tagline": "Afnan 9 PM - Fragancia elegante y distintiva (Hombre).",
    "description": "Inspirada en el lujo moderno y la exclusividad. Una mezcla cautivadora que resalta la personalidad de quien la lleva con toques intensos y delicados a la vez.",
    "price": 90,
    "priceBs": 12600,
    "defaultSize": "100ml",
    "sizeOptions": [
      {
        "ml": 50,
        "label": "50 ml",
        "price": 59,
        "priceBs": 8190
      },
      {
        "ml": 100,
        "label": "100 ml",
        "price": 90,
        "priceBs": 12600
      }
    ],
    "image": "https://i.ibb.co/vx1LX2Tn/IMG-20260729-WA0039.jpg",
    "hoverImage": "https://i.ibb.co/vx1LX2Tn/IMG-20260729-WA0039.jpg",
    "gender": "Hombre",
    "family": "Gourmand",
    "concentration": "Eau de Toilette",
    "notes": {
      "top": [
        "Caramelo",
        "Mandarina"
      ],
      "heart": [
        "Canela",
        "Vainilla"
      ],
      "base": [
        "Habas Tonka",
        "Sándalo"
      ]
    },
    "similarTo": "Ultra Male (Jean Paul Gaultier)",
    "mainAccords": [
      {
        "name": "Cálido y picante",
        "color": "#c0392b",
        "width": 100
      },
      {
        "name": "Sabroso / Dulce",
        "color": "#e74c3c",
        "width": 88
      },
      {
        "name": "Ahumado & Canela",
        "color": "#7f8c8d",
        "width": 75
      },
      {
        "name": "Vainilla suave",
        "color": "#fd79a8",
        "width": 65
      },
      {
        "name": "Amaderado",
        "color": "#a0522d",
        "width": 50
      }
    ],
    "longevityScore": 5,
    "projectionScore": 4,
    "seasons": [
      "Primavera",
      "Verano",
      "Otoño",
      "Invierno"
    ],
    "occasions": [
      "Diario",
      "Noche",
      "Eventos",
      "Cita Romántica"
    ],
    "rating": 0.96,
    "reviewCount": 0,
    "isBestseller": true,
    "isNiche": true,
    "stock": 23
  }
];
