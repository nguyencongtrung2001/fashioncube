import i11 from "../assets/women/look_11.webp";
import i14 from "../assets/women/look_14.webp";
import i20 from "../assets/women/look_20.webp";
import i26 from "../assets/women/look_26.webp";
import i27 from "../assets/women/look_27.webp";
import i30 from "../assets/women/look_30.webp";
import i35 from "../assets/women/look_35.webp";

import i5 from "../assets/men/look_05.webp";
import i16 from "../assets/men/look_16.webp";
import i22 from "../assets/men/look_22.webp";
import i25 from "../assets/men/look_25.webp";
import i29 from "../assets/men/look_29.webp";
import i31 from "../assets/men/look_31.webp";
import i45 from "../assets/men/look_45.webp";

export const clothemen = [
  {
    image: i5,
    name: "Classic Men's Shirt",
    price: 1200000,
    description: "Premium cotton shirt perfect for business and casual wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Gray"],
    inStock: true
  },
  {
    image: i16,
    name: "Modern Casual Jacket",
    price: 2500000,
    description: "Stylish jacket made from high-quality materials",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "Brown"],
    inStock: true
  },
  {
    image: i22,
    name: "Formal Business Suit",
    price: 4500000,
    description: "Elegant suit for professional occasions",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Charcoal"],
    inStock: true
  },
  {
    image: i25,
    name: "Casual Polo Shirt",
    price: 850000,
    description: "Comfortable polo shirt for everyday wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Red", "Green", "Blue"],
    inStock: false
  },
  {
    image: i29,
    name: "Denim Casual Wear",
    price: 1800000,
    description: "Premium denim for a relaxed, stylish look",
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true
  },
  {
    image: i31,
    name: "Sports Active Wear",
    price: 950000,
    description: "High-performance athletic wear for active lifestyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Blue"],
    inStock: true
  },
  {
    image: i45,
    name: "Winter Coat",
    price: 3200000,
    description: "Warm and stylish winter coat for cold weather",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"],
    inStock: true
  },
];

export const clothewomen = [
  {
    image: i11,
    name: "Elegant Evening Dress",
    price: 2800000,
    description: "Beautiful dress perfect for special occasions",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Red", "Blue"],
    inStock: true
  },
  {
    image: i14,
    name: "Casual Summer Blouse",
    price: 750000,
    description: "Light and comfortable blouse for summer days",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink", "Yellow"],
    inStock: true
  },
  {
    image: i20,
    name: "Professional Blazer",
    price: 2200000,
    description: "Smart blazer for business and formal events",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    inStock: true
  },
  {
    image: i26,
    name: "Chic Midi Skirt",
    price: 1100000,
    description: "Stylish midi skirt that pairs well with any top",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Brown", "Beige"],
    inStock: false
  },
  {
    image: i27,
    name: "Trendy Jumpsuit",
    price: 1950000,
    description: "Modern jumpsuit for a contemporary look",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Olive"],
    inStock: true
  },
  {
    image: i30,
    name: "Cozy Sweater",
    price: 1400000,
    description: "Soft and warm sweater for cool weather",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Pink", "Gray"],
    inStock: true
  },
  {
    image: i35,
    name: "Designer Coat",
    price: 3800000,
    description: "Luxurious designer coat for the fashion-forward",
    sizes: ["S", "M", "L"],
    colors: ["Camel", "Black", "White"],
    inStock: true
  },
];

export const clotheall = [[...clothemen], [...clothewomen]];