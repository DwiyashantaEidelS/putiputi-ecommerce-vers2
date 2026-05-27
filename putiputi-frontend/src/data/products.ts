import type { Product } from "../types/product";

import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Bloom Bouquet",
    price: 250000,
    image: img1,
    category: "Bouquet",
    description:
      "Elegant artificial rose bouquet perfect for gifts and room decoration.",
  },

  {
    id: 2,
    name: "Tulip Basket",
    price: 180000,
    image: img2,
    category: "Decoration",
    description:
      "Beautiful handcrafted tulip arrangement for modern interiors.",
  },

  {
    id: 3,
    name: "White Lily Vase",
    price: 320000,
    image: img3,
    category: "Vase Flower",
    description:
      "Minimalist white lily decoration with premium vase design.",
  },

  {
    id: 4,
    name: "Pink Peony Set",
    price: 290000,
    image: img4,
    category: "Bouquet",
    description:
      "Soft pink peony arrangement designed for elegant occasions.",
  },
];