import { Product, Category } from "../types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Skincare",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1629380106682-6736d2c327ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MzIxODUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "2",
    name: "Makeup",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1627921522614-86d4b431bd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtYWtldXB8ZW58MXx8fHwxNzYzMjEzNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "3",
    name: "Fragrance",
    icon: "Droplet",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2MzExMzA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "4",
    name: "Body Care",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1629380108574-40c083555579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjMyMTg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "D-Tan",
    price: 150.00,
    image: "/images/D-Tan.jpeg",
    category: "Skincare",
    rating: 4.5,
    description: "Brighten and hydrate your skin with this luxurious serum.",
    detailedDescription: "Our Radiance Glow Serum is formulated with vitamin C and hyaluronic acid to deeply hydrate your skin while promoting a natural, healthy glow. Perfect for all skin types, this lightweight formula absorbs quickly and works to reduce the appearance of fine lines and dark spots."
  },
  {
    id: "2",
    name: "Manjistha Goat Milk Soap",
    price: 100.00,
    image: "/images/Manjistha.jpeg",
    category: "Makeup",
    rating: 4.8,
    description: "Long-lasting matte finish with rich color.",
    detailedDescription: "Experience the perfect pout with our Velvet Matte Lipstick. This formula provides intense color payoff with a comfortable, non-drying matte finish. Enriched with nourishing oils, it keeps your lips soft and hydrated throughout the day. Available in 12 stunning shades."
  },
  {
    id: "3",
    name: "Shea Butter Soap",
    price: 100.00,
    image: "/images/Shea Butter Soap.jpeg",
    category: "Fragrance",
    rating: 4.7,
    description: "Floral and fresh fragrance for everyday elegance.",
    detailedDescription: "Blossom Eau de Parfum is a delicate blend of rose, jasmine, and sandalwood. This elegant fragrance opens with fresh citrus notes, transitions to a heart of white florals, and settles into a warm, woody base. Perfect for any occasion, this scent embodies timeless femininity."
  },
  {
    id: "4",
    name: "Night Gel Cream",
    price: 150.00,
    image: "/images/Night Gel.png",
    category: "Body Care",
    rating: 4.6,
    description: "Deeply moisturize and soften your skin.",
    detailedDescription: "Our Nourishing Body Cream is a rich, luxurious formula that provides intense hydration for dry skin. Infused with shea butter, coconut oil, and vitamin E, it absorbs quickly without leaving a greasy residue. Use daily for soft, supple, and radiant skin."
  },
  {
    id: "5",
    name: "Lip Balm",
    price: 120.00,
    image: "/images/Lip Balm.png",
    category: "Skincare",
    rating: 4.9,
    description: "Revitalize your skin with this hydrating treatment.",
    detailedDescription: "This Hydrating Face Mask is designed to give your skin an instant moisture boost. Formulated with aloe vera and green tea extract, it soothes irritation while providing deep hydration. Use 2-3 times a week for best results and wake up to plump, glowing skin."
  },
  {
    id: "6",
    name: "Glow Face Pack",
    price: 200.00,
    image: "/images/Glow-face-pack.jpeg",
    category: "Makeup",
    rating: 4.5,
    description: "Four blendable shades for a natural flush.",
    detailedDescription: "Create the perfect rosy glow with our Natural Blush Palette. This collection features four complementary shades that blend seamlessly for a natural, healthy flush. The silky, buildable formula is perfect for all skin tones and provides long-lasting color."
  },
  {
    id: "7",
    name: "Herbal D-Tan Clenser Powder",
    price: 150.00,
    image: "/images/Herbal D-Tan Clenser Powder.jpeg",
    category: "Body Care",
    rating: 4.4,
    description: "Protect and soften your hands with botanical extracts.",
    detailedDescription: "Our Botanical Hand Cream is enriched with chamomile, lavender, and jojoba oil to deeply nourish and protect your hands. The non-greasy formula absorbs instantly, leaving your skin soft and lightly scented. Perfect for on-the-go hydration."
  },
  {
    id: "8",
    name: "Body Butter",
    price: 249.00,
    image: "/images/Body Butter.jpeg",
    category: "Skincare",
    rating: 4.7,
    description: "Refresh and balance your skin with rosewater.",
    detailedDescription: "Our Rose Mist Toner is a refreshing spray that hydrates and balances your skin's pH. Made with pure rosewater and witch hazel, it minimizes pores, soothes inflammation, and prepares your skin for moisturizer. Use throughout the day for a quick refresh."
  },
  {
    id: "9",
    name: "Rose ",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1629380108574-40c083555579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjMyMTg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Skincare",
    rating: 4.7,
    description: "Refresh and balance your skin with rosewater.",
    detailedDescription: "Our Rose Mist Toner is a refreshing spray that hydrates and balances your skin's pH. Made with pure rosewater and witch hazel, it minimizes pores, soothes inflammation, and prepares your skin for moisturizer. Use throughout the day for a quick refresh."
  },
];
