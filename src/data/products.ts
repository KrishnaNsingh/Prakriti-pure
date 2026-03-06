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
    name: "Hair Care",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1627921522614-86d4b431bd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtYWtldXB8ZW58MXx8fHwxNzYzMjEzNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "3",
    name: "lip care",
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
    id: "d-tan-soap",
    name: "D-Tan Clenser Soap",
    price: 100.00,
    image: "/images/d-tan-soap.jpeg",
    category: "Body Care",
    rating: 4.5,
    netWeight : "100gm",
    description: "A gentle cleansing soap formulated to help reduce tan, remove dirt, and refresh tired skin without stripping its natural moisture.",
    detailedDescription: "Helps cleanse tan and impurities while maintaining the skin’s natural moisture balance and softness.",
    howtoUse: "Apply on wet skin, gently massage to form lather, and rinse thoroughly with water."
  },
  {
    id: "manjistha-goat-milk-soap",
    name: "Manjistha Goat Milk Soap",
    price: 100.00,
    image: "/images/manjistha-goat-milk-soap.jpeg",
    category: "Body Care",
    rating: 4.8,
    netWeight : "100gm",
    description: "A nourishing bathing bar that blends traditional herbal care with the softness of goat milk for gentle daily cleansing.",
    detailedDescription: "Helps improve skin clarity while keeping the skin soft, hydrated, and comfortable.",
    howtoUse : "Use daily on wet skin, massage gently, and rinse well."
  },
  {
    id: "shea-butter-soap",
    name: "Shea Butter Soap",
    price: 100.00,
    image: "/images/shea-butter-soap.jpeg",
    category: "Body Care",
    rating: 4.7,
    netWeight : "100gm",
    description: "A moisturizing soap designed to cleanse the skin gently while providing lasting nourishment and softness.",
    detailedDescription: "Helps prevent dryness by locking in moisture and leaving the skin smooth and supple.",
    howtoUse : "Apply on damp skin, lather gently, and wash off with water."
  },
  {
    id: "papaya-&-orange-facial-bar",
    name: "Papaya & Orange Facial Bar",
    price: 299.00,
    image: "/images/papaya-&-orange-facial-bar.jpeg",
    category: "Skincare",
    rating: 4.9,
    netWeight : "85gm",
    description: "A refreshing facial cleansing bar enriched with papaya and orange extracts to gently cleanse, brighten, and revitalize the skin for a fresh and radiant appearance.",
    detailedDescription: "Papaya and orange extracts help gently cleanse the skin while supporting a fresh and vibrant appearance. The mild formula removes daily impurities while keeping the skin feeling soft and balanced.",
    howtoUse : "Create lather with water, massage gently onto the face, and rinse thoroughly."
  },
  {
    id: "french-pink-clay-&-rose-facial-bar",
    name: "French Pink Clay & Rose Facial Bar",
    price: 399.00,
    image: "/images/french-pink-clay-&-rose-facial-bar.jpeg",
    category: "Skincare",
    rating: 4.9,
    netWeight : "85gm",
    description: "A gentle facial cleansing bar made with French pink clay and rose extracts that helps cleanse, soothe, and refresh the skin while maintaining natural moisture.",
    detailedDescription: "This facial bar combines the mild purifying power of French pink clay with the soothing properties of rose. It helps remove impurities, excess oil, and daily buildup without drying the skin. The result is soft, balanced, and naturally refreshed skin after every wash.",
    howtoUse : "Rub the bar with water to create lather, gently massage onto the face, and rinse thoroughly."
  },
  {
    id: "nalugu-herbal-loofah-soap",
    name: "Nalugu Herbal Loofah Soap",
    price: 199.00,
    image: "/images/nalugu-herbal-loofah-soap.jpeg",
    category: "Body Care",
    rating: 4.9,
    netWeight : "85gm",
    description: "A traditional herbal soap inspired by the ancient Nalugu bath ritual, designed to cleanse and gently exfoliate the skin.",
    detailedDescription: "This soap combines herbal ingredients with natural loofah fibers to help remove dead skin cells while cleansing the skin. The mild exfoliation leaves the skin feeling smoother, refreshed, and revitalized after every use.",
    howtoUse : "Apply to wet skin, massage gently for mild exfoliation, and rinse well."
  },
  {
    id: "night-gel",
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
    id: "rose-bath-salt",
    name: "Rose Bath Salt",
    price: 199.00,
    image: "/images/rose-bath-salt.jpeg",
    category: "Body Care",
    rating: 4.9,
    netWeight : "200gm",
    description: "A soothing bath salt infused with the calming essence of rose to relax the body and refresh the skin.",
    detailedDescription: "Helps cleanse, soften, and rejuvenate the skin while providing a relaxing bathing experience.",
    howtoUse : "Add the required amount to warm bath water or mix with water for a foot soak and relax for 15–20 minutes."
  },
  {
    id: "lip-balm",
    name: "Lip Balm",
    price: 120.00,
    image: "/images/lip-balm.png",
    category: "lip care",
    rating: 4.9,
    netWeight : "8gm",
    description: "A gentle lip balm formulated to protect and nourish lips, keeping them soft and smooth.",
    detailedDescription: "Helps heal dryness and provides long-lasting moisture for healthy-looking lips.",
    howtoUse : "Apply evenly on lips whenever needed, especially before sleep."
  },
  {
    id: "Strawbarry-tented-lip-balm",
    name: "Strawbarry tented lip balm",
    price: 150.00,
    image: "/images/Strawbarry-tented-lip-balm.png",
    category: "lip care",
    rating: 4.7,
    netWeight : "8gm",
    description: "A moisture-rich balm that delivers a sheer wash of juicy strawberry color and a dewy, non-sticky finish.",
    detailedDescription: "Infused with Vitamin E and natural oils, this buildable tint deeply hydrates while giving lips a healthy, 'just-bitten' glow. It’s the perfect everyday essential for effortless color and long-lasting softness.",
    howtoUse : "Swipe once for a subtle hint of tint, or layer for a bolder pop of red. Reapply as needed for continuous hydration."
  },
  {
    id: "kumkumadi-tailam",
    name: "Kumkumadi Tailam (Ayurvedic Facial Oil)",
    price: 499.00,
    image: "/images/kumkumadi-tailam.jpeg",
    category: "Skincare",
    rating: 4.7,
    netWeight : "30ml",
    description: "A traditional Ayurvedic facial oil made with herbal ingredients known to nourish the skin and enhance natural radiance.",
    detailedDescription: "Kumkumadi Tailam is a classic Ayurvedic oil traditionally used to support glowing and healthy-looking skin. The herbal blend helps hydrate, improve skin texture, and maintain a smooth, radiant complexion when used regularly as part of a skincare routine.",
    howtoUse : "Apply 2–3 drops on clean skin and gently massage onto the face and neck."
  },
  {
    id: "glow-face-pack",
    name: "Glow Face Pack",
    price: 200.00,
    image: "/images/glow-face-pack.png",
    category: "Skincare",
    rating: 4.1,
    netWeight : "50gm",
    description: "A natural face pack created to refresh dull skin and enhance its natural glow.",
    detailedDescription: "Helps cleanse pores and improve skin brightness, leaving the skin fresh and smooth.",
    howtoUse : "Mix with water or rose water, apply evenly on face, leave for 10–15 minutes, then rinse off."
  },
  {
    id: "tridosha-hair-growth-oil",
    name: "Tridosha Hair Growth Oil",
    price: 399.00,
    image: "/images/tridosha-hair-growth-oil.jpeg",
    category: "Hair Care",
    rating: 4.6,
    netWeight : "200ml",
    description: "An herbal hair oil inspired by Ayurvedic traditions that helps nourish the scalp and support healthy hair growth.",
    detailedDescription: "This herbal oil blend helps moisturize the scalp, strengthen hair roots, and support healthy-looking hair. Regular scalp massage with the oil helps improve hair manageability and maintain scalp balance.",
    howtoUse : "Apply a small amount to the scalp, massage gently, leave for at least 30 minutes, then wash."
  },
  {
    id: "tridosha-herbal-shampoo",
    name: "Tridosha Herbal Shampoo",
    price: 299.00,
    image: "/images/tridosha-herbal-shampoo.jpeg",
    category: "Hair Care",
    rating: 4.2,
    netWeight : "200ml",
    description: "A gentle herbal shampoo that cleanses the scalp while helping reduce hair fall and maintain healthy hair.",
    detailedDescription: "Formulated with herbal ingredients traditionally used in hair care, this shampoo helps remove dirt and oil buildup while maintaining scalp moisture. It supports stronger hair and a clean, refreshed scalp.",
    howtoUse : "Apply to wet hair, massage into the scalp to create lather, then rinse thoroughly."
  },
  {
    id: "multani-miti",
    name: "Multani Miti",
    price: 49.00,
    image: "/images/Multani-Miti.jpeg",
    category: "Skincare",
    rating: 4.5,
    netWeight : "50gm",
    description: "A 100% natural healing clay that deeply cleanses pores and absorbs excess oil for a clear, matte finish.",
    detailedDescription: "Rich in magnesium chloride, this mineral-dense clay draws out impurities, fades dark spots, and cools the skin. It’s the ultimate traditional remedy for controlling acne and brightening dull complexions naturally.",
    howtoUse : "Mix with water or rose water to form a paste, apply to the face for 10–15 minutes, and rinse before it dries completely."
  },
  {
    id: "herbal-d-tan-clenser-powder",
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
    id: "body-butter",
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
    id: "charcoal-soap",
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