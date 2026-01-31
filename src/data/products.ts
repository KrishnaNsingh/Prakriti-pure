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
    price: 100.00,
    image: "/images/d-tan-soap.jpeg",
    category: "Skincare",
    rating: 4.5,
    netWeight : "100gm",
    description: "A gentle cleansing soap formulated to help reduce tan, remove dirt, and refresh tired skin without stripping its natural moisture.",
    detailedDescription: "Helps cleanse tan and impurities while maintaining the skin’s natural moisture balance and softness.",
    howtoUse: "Apply on wet skin, gently massage to form lather, and rinse thoroughly with water."
  },
  {
    id: "2",
    name: "Manjistha Goat Milk Soap",
    price: 100.00,
    image: "/images/manjistha-goat-milk-soap.jpeg",
    category: "Makeup",
    rating: 4.8,
    netWeight : "100gm",
    description: "A nourishing bathing bar that blends traditional herbal care with the softness of goat milk for gentle daily cleansing.",
    detailedDescription: "Helps improve skin clarity while keeping the skin soft, hydrated, and comfortable.",
    howtoUse : "Use daily on wet skin, massage gently, and rinse well."
  },
  {
    id: "3",
    name: "Shea Butter Soap",
    price: 100.00,
    image: "/images/shea-butter-soap.jpeg",
    category: "Fragrance",
    rating: 4.7,
    netWeight : "100gm",
    description: "A moisturizing soap designed to cleanse the skin gently while providing lasting nourishment and softness.",
    detailedDescription: "Helps prevent dryness by locking in moisture and leaving the skin smooth and supple.",
    howtoUse : "Apply on damp skin, lather gently, and wash off with water."
  },
  {
    id: "4",
    name: "Night Gel Cream",
    price: 150.00,
    image: "/images/night-gel.png",
    category: "Body Care",
    rating: 4.6,
    netWeight : "50gm",
    description: "A lightweight night gel cream that supports natural skin care and hydration while you sleep.",
    detailedDescription: "Helps nourish and refresh the skin overnight for a healthy and rested look by morning.",
    howtoUse : "Apply a small amount to clean face and neck before bedtime and gently massage until absorbed."
  },
  {
    id: "5",
    name: "Rose Bath Salt",
    price: 199.00,
    image: "/images/rose-bath-salt.jpeg",
    category: "Skincare",
    rating: 4.9,
    netWeight : "200gm",
    description: "A soothing bath salt infused with the calming essence of rose to relax the body and refresh the skin.",
    detailedDescription: "Helps cleanse, soften, and rejuvenate the skin while providing a relaxing bathing experience.",
    howtoUse : "Add the required amount to warm bath water or mix with water for a foot soak and relax for 15–20 minutes."
  },
  {
    id: "6",
    name: "Lip Balm",
    price: 120.00,
    image: "/images/lip-balm.png",
    category: "Skincare",
    rating: 4.9,
    netWeight : "8gm",
    description: "A gentle lip balm formulated to protect and nourish lips, keeping them soft and smooth.",
    detailedDescription: "Helps heal dryness and provides long-lasting moisture for healthy-looking lips.",
    howtoUse : "Apply evenly on lips whenever needed, especially before sleep."
  },
  {
    id: "7",
    name: "Glow Face Pack",
    price: 200.00,
    image: "/images/glow-face-pack.jpeg",
    category: "Makeup",
    rating: 4.5,
    netWeight : "50gm",
    description: "A natural face pack created to refresh dull skin and enhance its natural glow.",
    detailedDescription: "Helps cleanse pores and improve skin brightness, leaving the skin fresh and smooth.",
    howtoUse : "Mix with water or rose water, apply evenly on face, leave for 10–15 minutes, then rinse off."
  },
  {
    id: "8",
    name: "Herbal D-Tan Clenser Powder",
    price: 150.00,
    image: "/images/herbal-d-tan-clenser-powder.jpeg",
    category: "Body Care",
    rating: 4.4,
    netWeight : "100gm",
    description: "A traditional herbal cleanser powder that gently exfoliates and removes tan and impurities.",
    detailedDescription: "Helps cleanse dead skin and dullness while promoting a clean and refreshed appearance.",
    howtoUse : "Mix with water, apply gently on skin, massage lightly, and rinse off."
  },
  {
    id: "9",
    name: "Body Butter",
    price: 249.00,
    image: "/images/body-butter.jpeg",
    category: "Skincare",
    rating: 4.7,
    netWeight : "50gm",
    description: "A rich body butter designed to deeply nourish and moisturize dry and tired skin.",
    detailedDescription: "Helps provide long-lasting hydration and improves skin softness and comfort.",
    howtoUse : "Apply generously on clean, dry skin and massage until fully absorbed."
  },
  {
    id: "10",
    name: "Charcoal Soap",
    price: 100.00,
    image: "/images/charcoal-soap.jpeg",
    category: "Skincare",
    rating: 4.7,
    netWeight : "100gm",
    description: "A deep-cleansing soap designed to draw out dirt, excess oil, and impurities from the skin.",
    detailedDescription: "Helps purify pores and control excess oil while keeping the skin fresh and balanced.",
    howtoUse : "Apply on wet skin, gently massage to form lather, and rinse thoroughly with water."
  },
];
