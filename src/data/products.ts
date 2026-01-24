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
    name: "D-Tan Clenser Soap",
    price: 150.00,
    image: "/images/D-Tan.jpeg",
    category: "Skincare",
    rating: 4.5,
    description: "A gentle cleansing soap formulated to help reduce tan, remove dirt, and refresh tired skin without stripping its natural moisture.",
    detailedDescription: "Helps cleanse tan and impurities while maintaining the skin’s natural moisture balance and softness.",
    howtoUse: "Apply on wet skin, gently massage to form lather, and rinse thoroughly with water."
  },
  {
    id: "2",
    name: "Manjistha Goat Milk Soap",
    price: 100.00,
    image: "/images/Manjistha.jpeg",
    category: "Makeup",
    rating: 4.8,
    description: "A nourishing bathing bar that blends traditional herbal care with the softness of goat milk for gentle daily cleansing.",
    detailedDescription: "Helps improve skin clarity while keeping the skin soft, hydrated, and comfortable.",
    howtoUse : "Use daily on wet skin, massage gently, and rinse well."
  },
  {
    id: "3",
    name: "Shea Butter Soap",
    price: 100.00,
    image: "/images/Shea Butter Soap.jpeg",
    category: "Fragrance",
    rating: 4.7,
    description: "A moisturizing soap designed to cleanse the skin gently while providing lasting nourishment and softness.",
    detailedDescription: "Helps prevent dryness by locking in moisture and leaving the skin smooth and supple.",
    howtoUse : "Apply on damp skin, lather gently, and wash off with water."
  },
  {
    id: "4",
    name: "Night Gel Cream",
    price: 150.00,
    image: "/images/Night Gel.png",
    category: "Body Care",
    rating: 4.6,
    description: "A lightweight night gel cream that supports natural skin care and hydration while you sleep.",
    detailedDescription: "Helps nourish and refresh the skin overnight for a healthy and rested look by morning.",
    howtoUse : "Apply a small amount to clean face and neck before bedtime and gently massage until absorbed."
  },
  {
    id: "5",
    name: "Lip Balm",
    price: 120.00,
    image: "/images/Lip Balm.png",
    category: "Skincare",
    rating: 4.9,
    description: "A gentle lip balm formulated to protect and nourish lips, keeping them soft and smooth.",
    detailedDescription: "Helps heal dryness and provides long-lasting moisture for healthy-looking lips.",
    howtoUse : "Apply evenly on lips whenever needed, especially before sleep."
  },
  {
    id: "6",
    name: "Glow Face Pack",
    price: 200.00,
    image: "/images/Glow-face-pack.jpeg",
    category: "Makeup",
    rating: 4.5,
    description: "A natural face pack created to refresh dull skin and enhance its natural glow.",
    detailedDescription: "Helps cleanse pores and improve skin brightness, leaving the skin fresh and smooth.",
    howtoUse : "Mix with water or rose water, apply evenly on face, leave for 10–15 minutes, then rinse off."
  },
  {
    id: "7",
    name: "Herbal D-Tan Clenser Powder",
    price: 150.00,
    image: "/images/Herbal D-Tan Clenser Powder.jpeg",
    category: "Body Care",
    rating: 4.4,
    description: "A traditional herbal cleanser powder that gently exfoliates and removes tan and impurities.",
    detailedDescription: "Helps cleanse dead skin and dullness while promoting a clean and refreshed appearance.",
    howtoUse : "Mix with water, apply gently on skin, massage lightly, and rinse off."
  },
  {
    id: "8",
    name: "Body Butter",
    price: 249.00,
    image: "/images/Body Butter.jpeg",
    category: "Skincare",
    rating: 4.7,
    description: "A rich body butter designed to deeply nourish and moisturize dry and tired skin.",
    detailedDescription: "Helps provide long-lasting hydration and improves skin softness and comfort.",
    howtoUse : "Apply generously on clean, dry skin and massage until fully absorbed."
  },
  {
    id: "9",
    name: "Rose ",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1629380108574-40c083555579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjMyMTg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Skincare",
    rating: 4.7,
    description: "Refresh and balance your skin with rosewater.",
    detailedDescription: "Our Rose Mist Toner is a refreshing spray that hydrates and balances your skin's pH. Made with pure rosewater and witch hazel, it minimizes pores, soothes inflammation, and prepares your skin for moisturizer. Use throughout the day for a quick refresh.",
    howtoUse : "I do not Know 😂"
  },
];
