export interface Product {
  name: string;
  brand?: string;
  rating: string;
  price: string;
  mrp: string;
  discountPercentage: number;
  images: string[];
  link: string;
  features?: string[];
  bestFor?: string;
  spf?: string;
  skinType?: string;
  concentration?: string;
}

/**
 * IMPORTANT: Replace placeholder images with actual Amazon product images
 * 
 * How to get real Amazon product images:
 * 1. Go to the product page on Amazon.in
 * 2. Right-click on the main product image
 * 3. Select "Copy image address" or "Copy image URL"
 * 4. The URL will look like: https://m.media-amazon.com/images/I/[PRODUCT_ID]._AC_SL1500_.jpg
 * 5. Replace the placeholder URLs below with the actual image URLs
 * 
 * Legal Note: Using official product images from Amazon is generally allowed
 * for affiliate marketing purposes, but always verify Amazon's current policies.
 */

export const sunscreens: Product[] = [
  {
    name: "Sunscreen SPF 50 PA++++ | Clinically Tested in US (In-Vivo) | Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum | For Women & Men | 100g (Pack of 1)",
    brand: "Minimalist",
    rating: "4.1 ((30,019)",
    price: "₹664",
    mrp: "₹699",
    discountPercentage: 5,
    images: [
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-1.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-2.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-3.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-4.png"
    ],
    link: "https://amzn.to/4rDlRhz",
    features: ["SPF 50 PA+++", "Lightweight", "Non-greasy"],
    bestFor: "Best Overall",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "Pore Minimizing Sunscreen I With SPF 50 & PA++++ I With Niacinamide | For Open Pores & UVA/UVB Protection I Suitable For All Skin Types- 50g",
    brand: "The Derma Co",
    rating: "4.1 (2,060)",
    price: "₹403",
    mrp: "₹450",
    discountPercentage: 10,
    images: ["/sunscreen/DermaCo/derma-co-spf-50-pa++++-1.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-2.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-3.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-4.png"
    ],
    link: "https://amzn.to/4qJseP1",
    features: ["Matte finish", "Oily skin friendly", "No white cast"],
    bestFor: "Best for Oily Skin",
    spf: "SPF 50 PA++++",
    skinType: "Oily Skin"
  },
  {
    name: "Vitamin C + E Super Bright Sunscreen Spf 50 In-Vivo Tested | Water-Light,UVA/UVB & Blue Light Protection|For Even Toned & Glowing Skin|With Liquid Spf 50+++| No White Cast | For All Skin Types| 50G,Pack Of 1",
    brand: "DOT & KEY",
    rating: "4.3 (11,741)",
    price: "₹387",
    mrp: "₹445",
    discountPercentage: 13,
    images: ["/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-1.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-2.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-3.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-4.png"
    ],
    link: "https://amzn.to/4rXvGXo",
    features: ["Brightening", "SPF 50", "Water resistant"],
    bestFor: "Best Budget Pick",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "Glow+ Infused Tinted Sunscreen For All Skin Types Spf 50+ Pa++++ With Papaya & Vitamin C | Protection Against Uva/B | Universal Tint | For Glowing & Sun-Safe Skin | 50 Gm, Pack Of 1",
    brand: "Aqualogica",
    rating: "3.5 (162)",
    price: "₹763",
    mrp: "₹899",
    discountPercentage: 15,
    images: ["/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-1.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-2.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-3.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-4.png"
    ],
    link: "https://amzn.to/3OenjrP",
    features: ["Dewy finish", "Hydrating", "Fragrance free"],
    bestFor: "Best for Sensitive Skin",
    spf: "SPF 50 PA+++",
    skinType: "Sensitive Skin"
  },
  {
    name: "Neutrogena UltraSheer Sunscreen SPF 50+ PA++++ | Blue Light Protect | No White Cast | Water Resistant | Ultra Light & Non Sticky | 80g",
    brand: "Neutrogena",
    rating: "4.2 (22,599)",
    price: "₹514",
    mrp: "₹785",
    discountPercentage: 35,
    images: [
      "/sunscreen/Neutrogena/image.png",
      "/sunscreen/Neutrogena/image copy.png",
      "/sunscreen/Neutrogena/image copy 2.png",
      "/sunscreen/Neutrogena/image copy 3.png",
      "/sunscreen/Neutrogena/image copy 4.png"
    ],
    link: "https://amzn.to/4tO5CQb",
    features: ["SPF 50+ PA++++", "Water Resistant", "Ultra Light"],
    bestFor: "Best for Daily Use",
    spf: "SPF 50+ PA++++",
    skinType: "Oily, Dry & Sensitive Skin"
  },
  {
    name: "Aqualogica Glow+ Dewy Sunscreen Gel SPF 50+ PA++++ | Papaya & Vitamin C | UVA/B & Blue Light Protection | No White Cast | 50g",
    brand: "Aqualogica",
    rating: "4.2 (19,106)",
    price: "₹360",
    mrp: "₹450",
    discountPercentage: 20,
    images: [
      "/sunscreen/Aqualogica1/image.png",
      "/sunscreen/Aqualogica1/image copy.png",
      "/sunscreen/Aqualogica1/image copy 2.png",
      "/sunscreen/Aqualogica1/image copy 3.png"
    ],
    link: "https://amzn.to/4aUZ76v",
    features: ["SPF 50+ PA++++", "Vitamin C", "Dewy Finish"],
    bestFor: "Best for Glow",
    spf: "SPF 50+ PA++++",
    skinType: "All Skin Types"
  },
  {
    name: "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ | Hydrating & Lightweight | No White Cast | 50g",
    brand: "The Derma Co",
    rating: "4.2 (34,989)",
    price: "₹419",
    mrp: "₹499",
    discountPercentage: 16,
    images: [
      "/sunscreen/DermaCo1/image.png",
      "/sunscreen/DermaCo1/image copy.png",
      "/sunscreen/DermaCo1/image copy 2.png",
      "/sunscreen/DermaCo1/image copy 3.png",
      "/sunscreen/DermaCo1/image copy 4.png"
    ],
    link: "https://amzn.to/4rhpv0d",
    features: ["SPF 50 PA++++", "Hyaluronic Acid", "Non-Greasy"],
    bestFor: "Best for Hydration",
    spf: "SPF 50 PA++++",
    skinType: "Dry & Combination Skin"
  },
  {
    name: "Dr. Sheth's Ceramide & Vitamin C Sunscreen SPF 50+ PA++++ | Brightening & Moisturizing | No White Cast | 50g",
    brand: "Dr. Sheth's",
    rating: "4.2 (13,261)",
    price: "₹404",
    mrp: "₹499",
    discountPercentage: 19,
    images: [
      "/sunscreen/DrSheths/image.png",
      "/sunscreen/DrSheths/image copy.png",
      "/sunscreen/DrSheths/image copy 2.png",
      "/sunscreen/DrSheths/image copy 3.png",
      "/sunscreen/DrSheths/image copy 4.png"
    ],
    link: "https://amzn.to/4rymzw8",
    features: ["SPF 50+ PA++++", "Ceramide", "Vitamin C"],
    bestFor: "Best for Brightening",
    spf: "SPF 50+ PA++++",
    skinType: "Normal & Dry Skin"
  },
  {
    name: "Deconstruct Gel Sunscreen SPF 50 PA++++ | 100% Photostable | Lightweight & Non-Greasy | 50g",
    brand: "Deconstruct",
    rating: "4.1 (10,822)",
    price: "₹265",
    mrp: "₹349",
    discountPercentage: 24,
    images: [
      "/sunscreen/Deconstruct/image.png",
      "/sunscreen/Deconstruct/image copy.png",
      "/sunscreen/Deconstruct/image copy 2.png",
      "/sunscreen/Deconstruct/image copy 3.png",
      "/sunscreen/Deconstruct/image copy 4.png"
    ],
    link: "https://amzn.to/4qJHDyN",
    features: ["SPF 50 PA++++", "Photostable", "Oil Control"],
    bestFor: "Best for Oily Skin",
    spf: "SPF 50 PA++++",
    skinType: "Oily & Combination Skin"
  },
  {
    name: "RE' EQUIL Ultra Matte Dry Touch Sunscreen SPF 50 PA++++ | Water & Sweat Resistant | Non-Comedogenic | 50g",
    brand: "RE' EQUIL",
    rating: "4.3 (8,822)",
    price: "₹580",
    mrp: "₹645",
    discountPercentage: 10,
    images: [
      "/sunscreen/Reequil/image.png",
      "/sunscreen/Reequil/image copy.png",
      "/sunscreen/Reequil/image copy 2.png",
      "/sunscreen/Reequil/image copy 3.png",
      "/sunscreen/Reequil/image copy 4.png"
    ],
    link: "https://amzn.to/4aAODYx",
    features: ["SPF 50 PA++++", "Matte Finish", "Sweat Resistant"],
    bestFor: "Best for Outdoor Use",
    spf: "SPF 50 PA++++",
    skinType: "All Skin Types"
  },
  {
    name: "WishCare Niacinamide Oil Balance Fluid Sunscreen SPF 50 PA++++ | Matte & No White Cast | 8Hrs+ Protection | 50g",
    brand: "WishCare",
    rating: "4.5 (4,532)",
    price: "₹391",
    mrp: "₹499",
    discountPercentage: 22,
    images: [
      "/sunscreen/WishCare/image.png",
      "/sunscreen/WishCare/image copy.png",
      "/sunscreen/WishCare/image copy 2.png",
      "/sunscreen/WishCare/image copy 3.png"
    ],
    link: "https://amzn.to/400XoXj",
    features: ["SPF 50 PA++++", "Niacinamide", "Oil Control"],
    bestFor: "Best for Acne-Prone Skin",
    spf: "SPF 50 PA++++",
    skinType: "Oily, Sensitive & Combination Skin"
  },
  {
    name: "Neutrogena Ultra Sheer Sunscreen SPF 50+ | Broad Spectrum UVA/UVB | Water Resistant | Ultra Light | 30g",
    brand: "Neutrogena",
    rating: "4.1 (62,460)",
    price: "₹274",
    mrp: "₹299",
    discountPercentage: 8,
    images: [
      "/sunscreen/Neutrogena/image.png",
      "/sunscreen/Neutrogena/image copy.png",
      "/sunscreen/Neutrogena/image copy 2.png",
      "/sunscreen/Neutrogena/image copy 3.png"
    ],
    link: "https://amzn.to/4qMXWe9",
    features: ["SPF 50+", "Water Resistant", "Non-Sticky"],
    bestFor: "Best Budget Pick",
    spf: "SPF 50+",
    skinType: "All Skin Types"
  }
];

export const vitaminCSerums: Product[] = [
  {
    name: "10% Vitamin C Serum for Dull Skin, Dark Spots & Uneven Tone Treatment",
    brand: "Minimalist",
    rating: "4.1 (20,548",
    price: "₹664",
    mrp: "₹664",
    discountPercentage: 0,
    images: ["/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-1.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-2.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-3.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-4.png"
    ],
    link: "https://amzn.to/3MfJqgW",
    features: ["10% Vitamin C", "Brightening", "Anti-aging"],
    bestFor: "Best Overall",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "15% Vitamin C Advanced Serum for Glowing Skin | for Oily, Dry & Combination Skin",
    brand: "Plum",
    rating: "4.4 (18,862)",
    price: "₹473",
    mrp: "₹899",
    discountPercentage: 47,
    images: ["/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-1.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-2.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-3.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-4.png"],
    link: "https://amzn.to/4kAvf2u",
    features: ["15% Vitamin C", "Kakadu plum", "Vegan"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin",
    concentration: "15%"
  },
  {
    name: "10% Vitamin C Face Serum with 5% Niacinamide, Powered by Deep Penetration Formula",
    brand: "The Derma Co",
    rating: "4.0 (13,675",
    price: "₹239",
    mrp: "₹349",
    discountPercentage: 32,
    images: ["/serums/DermaCo/derma-co-10-vitamin-c-serum-1.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-2.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-3.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-4.png"],
    link: "https://amzn.to/46Cz95e",
    features: ["Glow boosting", "Dark spot reduction", "Dermatologist tested"],
    bestFor: "Best Budget Pick",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "10% Vitamin C + E Serum with 5% Niacinamide,for Glowing Skin,Fades Dark Spots & Hyperpigmentation",
    brand: "DOT & KEY",
    rating: "4.1 (3,305",
    price: "₹576",
    mrp: "₹695",
    discountPercentage: 17,
    images: ["/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-1.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-2.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-3.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-4.png"],
    link: "https://amzn.to/4tEJdEA",
    features: ["10% Vitamin C", "Korean formula", "Fast absorbing"],
    bestFor: "Best for Sensitive Skin",
    skinType: "Sensitive Skin",
    concentration: "10%"
  },
  {
    name: "Garnier Vitamin C Face Serum | 2% Niacinamide & 0.5% Salicylic Acid | Brightening & Anti-Dark Spots | 30ml",
    brand: "Garnier",
    rating: "4.0 (42,932)",
    price: "₹365",
    mrp: "₹619",
    discountPercentage: 41,
    images: [
      "/serums/Garnier/image.png",
      "/serums/Garnier/image copy.png",
      "/serums/Garnier/image copy 2.png",
      "/serums/Garnier/image copy 3.png",
      "/serums/Garnier/image copy 4.png"
    ],
    link: "https://amzn.to/4rZq4fe",
    features: ["Vitamin C", "2% Niacinamide", "0.5% Salicylic Acid"],
    bestFor: "Best for Dark Spots",
    skinType: "All Skin Types",
    concentration: "2% Niacinamide + 0.5% BHA"
  },
  {
    name: "Minimalist 2% Salicylic Acid Face Serum | Anti-Acne & Oil Control | BHA Exfoliant | 10ml",
    brand: "Minimalist",
    rating: "4.2 (24,336)",
    price: "₹235",
    mrp: "₹250",
    discountPercentage: 6,
    images: [
      "/serums/Minimalist1/image.png",
      "/serums/Minimalist1/image copy.png",
      "/serums/Minimalist1/image copy 2.png",
      "/serums/Minimalist1/image copy 3.png"
    ],
    link: "https://amzn.to/4tHK5Z4",
    features: ["2% Salicylic Acid", "Oil Control", "BHA Based"],
    bestFor: "Best for Acne",
    skinType: "All Skin Types",
    concentration: "2%"
  },
  {
    name: "Minimalist 10% Niacinamide Face Serum with Zinc | Oil Control & Pore Care | 30ml",
    brand: "Minimalist",
    rating: "4.2 (23,267)",
    price: "₹512",
    mrp: "₹602",
    discountPercentage: 15,
    images: [
      "/serums/Minimalist2/image.png",
      "/serums/Minimalist2/image copy.png",
      "/serums/Minimalist2/image copy 2.png",
      "/serums/Minimalist2/image copy 3.png"
    ],
    link: "https://amzn.to/4rsNkSQ",
    features: ["10% Niacinamide", "Zinc", "Oil Control"],
    bestFor: "Best for Oil Control",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "Aveeno Calm + Restore Triple Oat Serum | Soothing & Hydrating | 30ml",
    brand: "Aveeno",
    rating: "4.4 (4,597)",
    price: "₹911",
    mrp: "₹1001",
    discountPercentage: 9,
    images: [
      "/serums/Aveeno/image.png",
      "/serums/Aveeno/image copy.png",
      "/serums/Aveeno/image copy 2.png",
      "/serums/Aveeno/image copy 3.png",
      "/serums/Aveeno/image copy 4.png"
    ],
    link: "https://amzn.to/3ZDaXMi",
    features: ["Triple Oat", "Calming", "Hydrating"],
    bestFor: "Best for Sensitive Skin",
    skinType: "Sensitive & Dry Skin",
    concentration: "Oat Complex"
  },
  {
    name: "Asaya Advanced Spot Pigmentation Serum | Niacinamide & Alpha Arbutin | 30ml",
    brand: "Asaya",
    rating: "4.4 (2,598)",
    price: "₹675",
    mrp: "₹804",
    discountPercentage: 16,
    images: [
      "/serums/Asaya/image.png",
      "/serums/Asaya/image copy.png",
      "/serums/Asaya/image copy 2.png",
      "/serums/Asaya/image copy 3.png",
      "/serums/Asaya/image copy 4.png"
    ],
    link: "https://amzn.to/4s1lfSB",
    features: ["Niacinamide", "Alpha Arbutin", "Pigmentation Care"],
    bestFor: "Best for Hyperpigmentation",
    skinType: "All Skin Types",
    concentration: "Niacinamide + Alpha Arbutin"
  },
  {
    name: "Plum 10% Niacinamide Serum with Rice Water | Oil Control & Brightening | 30ml",
    brand: "Plum",
    rating: "4.1 (8,533)",
    price: "₹559",
    mrp: "₹649",
    discountPercentage: 14,
    images: [
      "/serums/Plum1/image.png",
      "/serums/Plum1/image copy.png",
      "/serums/Plum1/image copy 2.png",
      "/serums/Plum1/image copy 3.png",
      "/serums/Plum1/image copy 4.png"
    ],
    link: "https://amzn.to/4sgBZFF",
    features: ["10% Niacinamide", "Rice Water", "Oil Control"],
    bestFor: "Best for Acne-Prone Skin",
    skinType: "Oily & Combination Skin",
    concentration: "10%"
  },
  {
    name: "Minimalist 2% Alpha Arbutin Serum | Dark Spots & Hyperpigmentation | 10ml",
    brand: "Minimalist",
    rating: "4.0 (16,111)",
    price: "₹236",
    mrp: "₹249",
    discountPercentage: 5,
    images: [
      "/serums/Minimalist3/image.png",
      "/serums/Minimalist3/image copy.png",
      "/serums/Minimalist3/image copy 2.png",
      "/serums/Minimalist3/image copy 3.png",
      "/serums/Minimalist3/image copy 4.png"
    ],
    link: "https://amzn.to/3ZGPgLq",
    features: ["2% Alpha Arbutin", "Dark Spot Removal", "Fragrance-Free"],
    bestFor: "Best for Pigmentation",
    skinType: "All Skin Types",
    concentration: "2%"
  },
  {
    name: "Pilgrim 10% Vitamin C Face Serum | Brightening & Dark Spot Reduction | 10ml",
    brand: "Pilgrim",
    rating: "4.0 (4,202)",
    price: "₹232",
    mrp: "₹299",
    discountPercentage: 22,
    images: [
      "/serums/Pilgrim/image.png",
      "/serums/Pilgrim/image copy.png",
      "/serums/Pilgrim/image copy 2.png",
      "/serums/Pilgrim/image copy 3.png",
      "/serums/Pilgrim/image copy 4.png"
    ],
    link: "https://amzn.to/4anjcSN",
    features: ["10% Vitamin C", "Brightening", "Fragrance-Free"],
    bestFor: "Best Budget Vitamin C",
    skinType: "All Skin Types",
    concentration: "10%"
  }
];

export const moisturizers: Product[] = [
  {
    name: "Moisturising Cream 100 g for Dry & Sensitive Skin | 48H Hydration with Almond Oil, Niacinamide & Panthenol | Rich Fragrance and Paraben Free Moisturiser, Prevents Moisture Loss & Repairs Skin Barrier | Dermatologist Recommended",
    brand: "Cetaphil",
    rating: "4.4 (45,000+)",
    price: "₹746",
    mrp: "₹746",
    discountPercentage: 0,
    images: ["/mosturiser/Cetaphil/cetaphil-dry-sensitive-1.png",
      "/mosturiser/Cetaphil/cetaphil-dry-sensitive-2.png",
      "/mosturiser/Cetaphil/cetaphil-dry-sensitive-3.png",
      "/mosturiser/Cetaphil/cetaphil-dry-sensitive-4.png"
    ],
    link: "https://amzn.to/3OjJHQz",
    features: ["Non-comedogenic", "Dermatologist recommended", "Long-lasting hydration"],
    bestFor: "Best for Dry Skin",
    skinType: "Dry & Sensitive Skin"
  },
  {
    name: "Dehydrated Skin Moisturizer with 10% Vitamin B5 for Oily & Acne-Prone Skin | Oil-Free Hydration & Lightweight Gel Formula for Damaged Barrier Repair | Fast-Absorbing & Non-Sticky Lightweight Winter Cream For Women & Men| 50 grams",
    brand: "Minimalist",
    rating: "4.2 (12,712+)",
    price: "₹330",
    mrp: "₹349",  
    discountPercentage: 5,
    images: ["/mosturiser/Minimalist/minimalist-dehydrated-skin-moisturizer-1.png",
      "/mosturiser/Minimalist/minimalist-dehydrated-skin-moisturizer-2.png",
      "/mosturiser/Minimalist/minimalist-dehydrated-skin-moisturizer-3.png",
      "/mosturiser/Minimalist/minimalist-dehydrated-skin-moisturizer-4.png"
    ],
    link: "https://amzn.to/4qG1G0S",
    features: ["Oil-free", "Lightweight", "Barrier repair"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin"
  },
  {
    name: "Oil-Free Daily Face Moisturizer | With Hyaluronic Acid, Ceramides & Multivitamins | For Non-Greasy & Hydrated Skin | Prolonged Moisturization | Strengthens Skin Barrier | 100 g",
    brand: "The Derma Co",
    rating: "4.1 (2,953+)",
    price: "₹258",
    mrp: "₹349",
    discountPercentage: 26,
    images: ["/mosturiser/DermaCo/derma-co-oil-free-daily-face-moisturizer-1.png",
      "/mosturiser/DermaCo/derma-co-oil-free-daily-face-moisturizer-2.png",
      "/mosturiser/DermaCo/derma-co-oil-free-daily-face-moisturizer-3.png",
      "/mosturiser/DermaCo/derma-co-oil-free-daily-face-moisturizer-4.png"
    ],
    link: "https://amzn.to/3ZFU4jZ",
    features: ["Oil control", "Matte finish", "Fragrance free"],
    bestFor: "Best Budget Pick",
    skinType: "Acne Prone Skin"
  },
  {
    name: "Hydro Boost Hyaluronic Acid Face Moisturizer 50ml | 24 hours long lasting Hydration | Oil free non sticky light water gel fast absorbing| Daily use | All Skin Types | For Men & Women 50g",
    brand: "Neutrogena",
    rating: "4.4 (10,242+)",
    price: "₹750",
    mrp: "₹1190", 
    discountPercentage: 37,
    images: ["/mosturiser/Neutrogena/neutrogena-hydro-boost-hyaluronic-acid-face-moisturizer-1.png",
      "/mosturiser/Neutrogena/neutrogena-hydro-boost-hyaluronic-acid-face-moisturizer-2.png",
      "/mosturiser/Neutrogena/neutrogena-hydro-boost-hyaluronic-acid-face-moisturizer-3.png",
      "/mosturiser/Neutrogena/neutrogena-hydro-boost-hyaluronic-acid-face-moisturizer-4.png"
    ],
    link: "https://amzn.to/3MLUSks",
    features: ["Hyaluronic acid", "Water gel formula", "Fast absorbing"],
    bestFor: "Best Hydrating",
    skinType: "All Skin Types"
  },
  {
    name: "Dot & Key Barrier Repair Moisturizer | 5 Ceramides & Hyaluronic | 120 Hrs Moisturization | 100g",
    brand: "Dot & Key",
    rating: "4.3 (12,275)",
    price: "₹335",
    mrp: "₹394",
    discountPercentage: 15,
    images: [
      "/mosturiser/DotAndKey/image.png",
      "/mosturiser/DotAndKey/image copy.png",
      "/mosturiser/DotAndKey/image copy 2.png",
      "/mosturiser/DotAndKey/image copy 3.png"
    ],
    link: "https://amzn.to/4tCnPjD",
    features: ["5 Ceramides", "Barrier Repair", "Non-Comedogenic"],
    bestFor: "Best for Barrier Repair",
    skinType: "Normal, Dry & Sensitive Skin"
  },
  {
    name: "Minimalist Barrier Repair Face Moisturizer with Vitamin B12 Complex 5.5% | Ceramides | Lightweight Gel | 50g",
    brand: "Minimalist",
    rating: "4.3 (725)",
    price: "₹379",
    mrp: "₹399",
    discountPercentage: 5,
    images: [
      "/mosturiser/Minimalist1/image.png",
      "/mosturiser/Minimalist1/image copy.png",
      "/mosturiser/Minimalist1/image copy 2.png",
      "/mosturiser/Minimalist1/image copy 3.png",
      "/mosturiser/Minimalist1/image copy 4.png"
    ],
    link: "https://amzn.to/4rmDOk5",
    features: ["5.5% Vitamin B12 Complex", "Ceramides", "Lightweight Gel"],
    bestFor: "Best for Barrier Strengthening",
    skinType: "All Skin Types"
  },
  {
    name: "RE' EQUIL Ceramide & Hyaluronic Acid Moisturiser | Barrier Repair Cream | 100g",
    brand: "RE' EQUIL",
    rating: "4.3 (8,455)",
    price: "₹266",
    mrp: "₹295",
    discountPercentage: 10,
    images: [
      "/mosturiser/Reequil/image.png",
      "/mosturiser/Reequil/image copy.png",
      "/mosturiser/Reequil/image copy 2.png",
      "/mosturiser/Reequil/image copy 3.png",
      "/mosturiser/Reequil/image copy 4.png"
    ],
    link: "https://amzn.to/4cA6Vfb",
    features: ["Ceramides", "Hyaluronic Acid", "Long Lasting Hydration"],
    bestFor: "Best for Normal to Dry Skin",
    skinType: "Normal & Dry Skin"
  },
  {
    name: "Cetaphil Moisturising Lotion | 48H Hydration | Fragrance-Free & Non-Greasy | 118ml",
    brand: "Cetaphil",
    rating: "4.3 (16,750)",
    price: "₹654",
    mrp: "₹788",
    discountPercentage: 17,
    images: [
      "/mosturiser/Cetaphil1/image.png",
      "/mosturiser/Cetaphil1/image copy.png",
      "/mosturiser/Cetaphil1/image copy 2.png",
      "/mosturiser/Cetaphil1/image copy 3.png"
    ],
    link: "https://amzn.to/3OoiVq8",
    features: ["Niacinamide", "Panthenol", "Fragrance-Free"],
    bestFor: "Best Lightweight Lotion",
    skinType: "Dry to Normal & Sensitive Skin"
  },
  {
    name: "Pilgrim Korean Rice Water Hydra Glow Moisturizer | 5 Hyaluronic Acids & 5 Ceramides | 100g",
    brand: "Pilgrim",
    rating: "4.2 (1,564)",
    price: "₹299",
    mrp: "₹394",
    discountPercentage: 24,
    images: [
      "/mosturiser/Pilgrim/image.png",
      "/mosturiser/Pilgrim/image copy.png",
      "/mosturiser/Pilgrim/image copy 2.png",
      "/mosturiser/Pilgrim/image copy 3.png"
    ],
    link: "https://amzn.to/4bVzvaH",
    features: ["Rice Water", "5 Ceramides", "Oil-Free Gel"],
    bestFor: "Best for Glass Skin",
    skinType: "All Skin Types"
  },
  {
    name: "DAM Daily Advance Ultra Hydrating Lotion | Shea Butter | 30g",
    brand: "Cetaphil",
    rating: "4.3 (15,220)",
    price: "₹231",
    mrp: "₹279",
    discountPercentage: 17,
    images: [
      "/mosturiser/Cetaphil2/image.png",
      "/mosturiser/Cetaphil2/image copy.png",
      "/mosturiser/Cetaphil2/image copy 2.png",
      "/mosturiser/Cetaphil2/image copy 3.png"
    ],
    link: "https://amzn.to/4aEBeim",
    features: ["Ultra Hydrating", "Fragrance-Free", "Non-Greasy"],
    bestFor: "Best Travel Size",
    skinType: "Dry & Sensitive Skin"
  },
  {
    name: "Foxtale Nourishing Ceramide Face Moisturizer | 100 Hr Hydration | 10ml",
    brand: "Foxtale",
    rating: "4.1 (3,755)",
    price: "₹199",
    mrp: "₹249",
    discountPercentage: 20,
    images: [
      "/mosturiser/Foxtale/image.png",
      "/mosturiser/Foxtale/image copy.png"
    ],
    link: "https://amzn.to/4bVA04w",
    features: ["Ceramides", "Niacinamide", "Lightweight"],
    bestFor: "Best Budget Moisturizer",
    skinType: "All Skin Types"
  },
  {
    name: "Minimalist Marula Oil 5% Face Moisturizer | Hyaluronic Acid | Deep Nourishment",
    brand: "Minimalist",
    rating: "4.2 (7,225)",
    price: "₹269",
    mrp: "₹299",
    discountPercentage: 10,
    images: [
      "/mosturiser/Minimalist2/image.png",
      "/mosturiser/Minimalist2/image copy.png",
      "/mosturiser/Minimalist2/image copy 2.png",
      "/mosturiser/Minimalist2/image copy 3.png",
      "/mosturiser/Minimalist2/image copy 4.png"
    ],
    link: "https://amzn.to/46eWF8l",
    features: ["5% Marula Oil", "Hyaluronic Acid", "Deep Hydration"],
    bestFor: "Best for Very Dry Skin",
    skinType: "Dry Skin"
  }
  
];

export const faceWashes: Product[] = [
  {
    name: "Gentle Skin Hydrating Face Wash 236ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin",
    brand: "Cetaphil",
    rating: "4.4 (20,241+)",
    price: "₹799",
    mrp: "₹850",
    discountPercentage: 6,
    images: ["/cleanser/Cetaphil/cetaphil-gentle-skin-hydrating-face-wash-1.png",
      "/cleanser/Cetaphil/cetaphil-gentle-skin-hydrating-face-wash-2.png",
      "/cleanser/Cetaphil/cetaphil-gentle-skin-hydrating-face-wash-3.png",
      "/cleanser/Cetaphil/cetaphil-gentle-skin-hydrating-face-wash-4.png"
    ],
    link: "https://amzn.to/4rLGtU8",
    features: ["Soap-free", "Non-irritating", "Dermatologist tested"],
    bestFor: "Best for Dry Skin",
    skinType: "Dry & Sensitive Skin"
  },
  {
    name: "Anti-Acne Salicylic Acid 2% Face Wash For Oily & Acne Prone Skin | With LHA for Pore Cleansing, Oil Control & Sebum Regulation | Cleanser for Women & Men | 100 ml",
    brand: "Minimalist",
    rating: "4.2 (24,890+)",
    price: "₹255",
    mrp: "₹299",
    discountPercentage: 15,
    images: ["/cleanser/Minimalist/image.png",
      "/cleanser/Minimalist/image copy.png",
      "/cleanser/Minimalist/image copy 2.png",
      "/cleanser/Minimalist/image copy 3.png"
    ],
    link: "https://amzn.to/46TIHZD",
    features: ["2% Salicylic acid", "LHA for Pore Cleansing", "Oil Control & Sebum Regulation"],
    bestFor: "Best for Acne",
    skinType: "Oily Skin"
  },
  {
    name: "Kind To Skin Refreshing Facial Wash 150 ml | 100% Soap-Free Facewash that doesn't dry out your skin| For All Skin Types",
    brand: "Simple",
    rating: "4.3 (29,687+)",
    price: "₹243",
    mrp: "₹420",
    discountPercentage: 42,
    images: ["/cleanser/Simple/image.png",
      "/cleanser/Simple/image copy.png",
      "/cleanser/Simple/image copy 2.png",
      "/cleanser/Simple/image copy 3.png",
      "/cleanser/Simple/image copy 4.png"
    ],
    link: "https://amzn.to/4qKM1h1",
    features: ["No harsh chemicals", "Lightweight", "Soap-Free"],
    bestFor: "Best for All Skin Types",
    skinType: "All Skin Types"
  },
  {
    name: "Green Tea Pore Cleansing Face Wash for Oily, Acne Prone, Dry & Combination Skin | with Glycolic Acid | Fight Pimples & Control Excess Oil | Gentle Exfoliating & Non-Drying | Women & Men | 100ml",
    brand: "Plum",
    rating: "4.2 (16,183+)",
    price: "₹250",
    mrp: "₹275",
    discountPercentage: 9,
    images: ["/cleanser/Plum/image.png",
      "/cleanser/Plum/image copy.png",
      "/cleanser/Plum/image copy 2.png",
      "/cleanser/Plum/image copy 3.png"
    ],
    link: "https://amzn.to/3OfEeu5",
    features: ["Green tea", "Glycolic Acid", "Oil control"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin"
  },
  {
    name: "Garnier Bright Complete Vitamin C Face Wash | Brightening & Glowing Skin | Daily Cleanser | 160g",
    brand: "Garnier",
    rating: "4.2 (13,508)",
    price: "₹224",
    mrp: "₹299",
    discountPercentage: 25,
    images: [
      "/cleanser/Garnier/image.png",
      "/cleanser/Garnier/image copy.png",
      "/cleanser/Garnier/image copy 2.png",
      "/cleanser/Garnier/image copy 3.png"
    ],
    link: "https://amzn.to/3OoddEI",
    features: ["Vitamin C", "Brightening", "Daily Cleanser"],
    bestFor: "Best for Glowing Skin",
    skinType: "All Skin Types"
  },
  {
    name: "Himalaya Purifying Neem Face Wash | Clears Pimples & Acne | Gentle Cleanser | 400ml",
    brand: "Himalaya",
    rating: "4.3 (62,575)",
    price: "₹299",
    mrp: "₹599",
    discountPercentage: 50,
    images: [
      "/cleanser/Himalaya/image.png",
      "/cleanser/Himalaya/image copy.png",
      "/cleanser/Himalaya/image copy 2.png",
      "/cleanser/Himalaya/image copy 3.png",
      "/cleanser/Himalaya/image copy 4.png"
    ],
    link: "https://amzn.to/4kH3Rjl",
    features: ["Neem Extract", "Anti-Acne", "Gentle Cleanser"],
    bestFor: "Best for Acne-Prone Skin",
    skinType: "Oily & Acne-Prone Skin"
  },
  {
    name: "Cetaphil Gentle Skin Hydrating Face Wash 118ml | Niacinamide & Vitamin B5 | Paraben & Sulphate Free",
    brand: "Cetaphil",
    rating: "4.3 (40,709)",
    price: "₹381",
    mrp: "₹459",
    discountPercentage: 17,
    images: [
      "/cleanser/Cetaphil1/image.png",
      "/cleanser/Cetaphil1/image copy.png",
      "/cleanser/Cetaphil1/image copy 2.png",
      "/cleanser/Cetaphil1/image copy 3.png"
    ],
    link: "https://amzn.to/4kDDcE5",
    features: ["Soap-Free", "Hydrating", "Dermatologist Tested"],
    bestFor: "Best for Sensitive Skin",
    skinType: "Dry & Sensitive Skin"
  },
  {
    name: "The Derma Co Sali-Cinamide Anti-Acne Face Wash | 2% Salicylic Acid & 2% Niacinamide | 80ml",
    brand: "The Derma Co",
    rating: "4.2 (10,083)",
    price: "₹190",
    mrp: "₹250",
    discountPercentage: 24,
    images: [
      "/cleanser/DermaCo/image.png",
      "/cleanser/DermaCo/image copy.png",
      "/cleanser/DermaCo/image copy 2.png",
      "/cleanser/DermaCo/image copy 3.png",
      "/cleanser/DermaCo/image copy 4.png"
    ],
    link: "https://amzn.to/40fcMPH",
    features: ["2% Salicylic Acid", "2% Niacinamide", "Oil Control"],
    bestFor: "Best for Active Acne",
    skinType: "Oily & Acne-Prone Skin"
  },
  {
    name: "The Face Shop Rice Water Bright Foaming Face Wash | Korean Skincare | 100ml",
    brand: "The Face Shop",
    rating: "4.2 (23,590)",
    price: "₹565",
    mrp: "₹629",
    discountPercentage: 10,
    images: [
      "/cleanser/TheFaceShop/image.png",
      "/cleanser/TheFaceShop/image copy.png",
      "/cleanser/TheFaceShop/image copy 2.png",
      "/cleanser/TheFaceShop/image copy 3.png",
      "/cleanser/TheFaceShop/image copy 4.png"
    ],
    link: "https://amzn.to/4aVEcjG",
    features: ["Rice Water", "Brightening", "Foaming Cleanser"],
    bestFor: "Best for Uneven Skin Tone",
    skinType: "Oily Skin"
  },
  {
    name: "Cetaphil Oily Skin Cleanser | Deep Cleansing & pH Balanced | 118ml",
    brand: "Cetaphil",
    rating: "4.3 (16,325)",
    price: "₹636",
    mrp: "₹749",
    discountPercentage: 15,
    images: [
      "/cleanser/Cetaphil2/image.png",
      "/cleanser/Cetaphil2/image copy.png",
      "/cleanser/Cetaphil2/image copy 2.png",
      "/cleanser/Cetaphil2/image copy 3.png"
    ],
    link: "https://amzn.to/4kJn5VG",
    features: ["Deep Cleansing", "pH Balanced", "Non-Irritating"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily & Acne-Prone Skin"
  },
  {
    name: "Biotique Fruit Brightening Face Wash | 100% Botanical Extracts | 200ml",
    brand: "Biotique",
    rating: "4.0 (28,172)",
    price: "₹192",
    mrp: "₹320",
    discountPercentage: 40,
    images: [
      "/cleanser/Biotique/image.png",
      "/cleanser/Biotique/image copy.png",
      "/cleanser/Biotique/image copy 2.png",
      "/cleanser/Biotique/image copy 3.png"
    ],
    link: "https://amzn.to/4aA4E10",
    features: ["Botanical Extracts", "Brightening", "Ayurvedic Formula"],
    bestFor: "Best Budget Brightening",
    skinType: "All Skin Types"
  },
  {
    name: "Mamaearth Rice Dewy Bright Face Wash | Rice Water & Niacinamide | Hydrating & Glowing | 150ml",
    brand: "Mamaearth",
    rating: "4.2 (10,843)",
    price: "₹271",
    mrp: "₹417",
    discountPercentage: 35,
    images: [
      "/cleanser/Mamaearth/image.png",
      "/cleanser/Mamaearth/image copy.png",
      "/cleanser/Mamaearth/image copy 2.png",
      "/cleanser/Mamaearth/image copy 3.png"
    ],
    link: "https://amzn.to/4qFHY5y",
    features: ["Rice Water", "Niacinamide", "Hydrating"],
    bestFor: "Best for Glass Skin",
    skinType: "All Skin Types"
  }
];

export const toners: Product[] = [
  {
    name: "Green Tea Face Toner For Oily, Acne-Prone Skin | With Glycolic Acid | Alcohol-Free | Fights Pimples | Tightens Pores | Controls Oil | Gently Exfoliates Dead Skin Cells | Women & Men | 200ml",
    brand: "Plum",
    rating: "4.2 (13,860+)",
    price: "₹348",
    mrp: "₹420",
    discountPercentage: 17,
    images: ["/toner/Plum/image.png",
      "/toner/Plum/image copy.png",
      "/toner/Plum/image copy 2.png",
      "/toner/Plum/image copy 3.png"
    ],
    link: "https://amzn.to/4csb0C8",
    features: ["Alcohol free", "Glycolic Acid", "Green tea"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin"
  },
  {
    name: "Anti Acne PHA 3% Face Toner for Oily Skin | Pore Tightening & Mild Exfoliation For All Skin | Alcohol Free Hydrating Face Toner For Glowing Skin | 150 ml",
    brand: "Minimalist",
    rating: "4.2 (8,853+)",
    price: "₹379",
    mrp: "₹399",
    discountPercentage: 5,
    images: ["/toner/Minimalist/image.png",
      "/toner/Minimalist/image copy.png",
      "/toner/Minimalist/image copy 2.png",
      "/toner/Minimalist/image copy 3.png"
    ],
    link: "https://amzn.to/3ZFZTxR",
    features: ["PHA exfoliation", "Gentle", "Alcohol Free"],
    bestFor: "Best for For All Skin Types",
    skinType: "For All Skin Types"
  },
  {
    name: "Cica Calming Skin Clarifying Toner with Green Tea & Niacinamide | Toner for Acne Prone Skin | Niacinamide Toner For Acne, Oily & Sensitive Skin | Fades Acne Scars & Dark Spots | 150ml",
    brand: "Dot & Key",
    rating: "4.1 (723+)",
    price: "₹340",
    mrp: "₹395",
    discountPercentage: 14,
    images: ["/toner/Dot&Key/image.png",
      "/toner/Dot&Key/image copy.png",
      "/toner/Dot&Key/image copy 2.png",
      "/toner/Dot&Key/image copy 3.png"
    ],
    link: "https://amzn.to/4qFm02E",
    features: ["Cica extract", "Green Tea", "Niacinamide"],
    bestFor: "Best for Acne Prone Skin",
    skinType: "Acne Prone Skin"
  },
  {
    name: "Korean Beauty White Lotus Refreshing Face Mist & Toner | Toner for glowing skin | Alcohol-Free Mist & toner for open pores Tightening | Korean skin care products | Women & Men | 100 ml",
    brand: "Pilgrim",
    rating: "4.2 (3.671+)",
    price: "₹210",
    mrp: "₹300",
    discountPercentage: 30,
    images: ["/toner/Pilgrim/image.png",
      "/toner/Pilgrim/image copy.png",
      "/toner/Pilgrim/image copy 2.png",
      "/toner/Pilgrim/image copy 3.png"
    ],
    link: "https://amzn.to/3OipTNn",
    features: ["White lotus", "Alcohol free", "Mist & Toner"],
    bestFor: "Best for All Skin Types",
    skinType: "All Skin Types"
  },
  {
    name: "3% Niacinamide & Rice Water Face Toner | Alcohol-Free | Pore Tightening & Glowing Skin | Fades Blemishes & Brightens | 150ml",
    brand: "Plum",
    rating: "4.2 (5,131+)",
    price: "₹387",
    mrp: "₹440",
    discountPercentage: 12,
    images: [
      "/toner/Plum1/image.png",
      "/toner/Plum1/image copy.png",
      "/toner/Plum1/image copy 2.png",
      "/toner/Plum1/image copy 3.png",
      "/toner/Plum1/image copy 4.png",
      "/toner/Plum1/image copy 5.png"
    ],
    link: "https://amzn.to/4ap6K4Y",
    features: ["3% Niacinamide", "Rice Water", "Alcohol-Free", "Brightening"],
    bestFor: "Best for Acne & Blemishes",
    skinType: "Oily, Acne-Prone & Combination Skin"
  },
  {
    name: "8% Glycolic Acid Multi-Functional Exfoliating Toner with Bamboo Water | For Face, Body & Scalp | 150ml",
    brand: "Minimalist",
    rating: "4.3 (4,149+)",
    price: "₹474",
    mrp: "₹499",
    discountPercentage: 5,
    images: [
      "/toner/Minimalist1/image.png",
      "/toner/Minimalist1/image copy.png",
      "/toner/Minimalist1/image copy 2.png",
      "/toner/Minimalist1/image copy 3.png"
    ],
    link: "https://amzn.to/4aHrTX5",
    features: ["8% Glycolic Acid", "Exfoliating", "Bamboo Water", "Multi-use"],
    bestFor: "Best Exfoliating Toner",
    skinType: "All Skin Types"
  },
  {
    name: "Bulgarian Valley Rose Water Face Toner with Hyaluronic Acid | Hydrating & Pore Tightening | Alcohol-Free | 100ml",
    brand: "Plum",
    rating: "4.2 (5,823+)",
    price: "₹217",
    mrp: "₹225",
    discountPercentage: 4,
    images: [
      "/toner/Plum3/image.png",
      "/toner/Plum3/image copy.png",
      "/toner/Plum3/image copy 2.png",
      "/toner/Plum3/image copy 3.png"
    ],
    link: "https://amzn.to/3OvVMC6",
    features: ["Rose Water", "Hyaluronic Acid", "Hydrating", "pH Balancing"],
    bestFor: "Best Hydrating Toner",
    skinType: "All Skin Types"
  },
  {
    name: "100% Pure & Natural Rose Water Toner | Alcohol-Free & Paraben-Free | 200ml",
    brand: "WishCare",
    rating: "4.4 (1,978+)",
    price: "₹327",
    mrp: "₹399",
    discountPercentage: 18,
    images: [
      "/toner/Wishcare/image.png",
      "/toner/Wishcare/image copy.png",
      "/toner/Wishcare/image copy 2.png",
      "/toner/Wishcare/image copy 3.png",
      "/toner/Wishcare/image copy 4.png"
    ],
    link: "https://amzn.to/3Oo38Yo",
    features: ["100% Natural", "Alcohol-Free", "Hydrating", "Multi-use"],
    bestFor: "Best Natural Toner",
    skinType: "All Skin Types"
  }
  

];

export const eyeCreams: Product[] = [
  {
    name: "5% Caffeine Under Eye Serum with Retinol & Peptide for Dark Circles & Puffiness Treats Dark Circles | Fights Signs Of Aging",
    brand: "The Derma Co",
    rating: "3.8 (1,048+)",
    price: "₹509",
    mrp: "₹599",
    discountPercentage: 15,
    images: ["/eyecream/DermaCo/image.png",
      "/eyecream/DermaCo/image copy.png",
      "/eyecream/DermaCo/image copy 2.png",
      "/eyecream/DermaCo/image copy 3.png"
    ],
    link: "https://amzn.to/4akMlxV",
    features: ["5% Caffeine", "Reduces puffiness", "Targets dark circles"],
    bestFor: "Best for Dark Circles & Puffiness",
    skinType: "All Skin Types"
  },
  {
    name: "Bye Bye Dark Circle Eye Cream With Cucumber For Dark Circles - 20g",
    brand: "Mamaearth",
    rating: "3.8 (13,312+)",
    price: "₹319",
    mrp: "₹399",
    discountPercentage: 20,
    images: ["/eyecream/Mamaearth/image.png",
      "/eyecream/Mamaearth/image copy.png",
      "/eyecream/Mamaearth/image copy 2.png",
      "/eyecream/Mamaearth/image copy 3.png"
    ],
    link: "https://amzn.to/3Mz4Aqn",
    features: ["Peptides", "Cucumber extract", "Hydrating"],
    bestFor: "Best Budget Pick",
    skinType: "All Skin Types"
  },
  {
    name: "3% Vitamin C 3% Peptide & 3% Caffeine Eye Cream with Mandarin | Reduces Puffiness & Dark Circles | Improves Firmness & Elasticity| Reduces Fine Lines | Fragrance-Free | 100% Vegan",
    brand: "Plum",
    rating: "3.9 (341+)",
    price: "₹413",
    mrp: "₹475",
    discountPercentage: 13,
    images: ["/eyecream/Plum/image.png",
      "/eyecream/Plum/image copy.png",
      "/eyecream/Plum/image copy 2.png",
      "/eyecream/Plum/image copy 3.png"
    ],
    link: "https://amzn.to/3OKsFel",
    features: ["Vitamin C", "Peptide", "Caffeine"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin"
  },
  {
    name: "Vitamin K + Retinal 01% Under Eye Cream | Reduces Dark Circles, Wrinkles & Fine Lines | With Caffeine for Puffiness | For Women & Men | 14 gm",
    brand: "Minimalist",
    rating: "4.0 (2,776+)",
    price: "₹480",
    mrp: "₹550",
    discountPercentage: 13,
    images: ["/eyecream/Minimalist/image.png",
      "/eyecream/Minimalist/image copy.png",
      "/eyecream/Minimalist/image copy 2.png",
      "/eyecream/Minimalist/image copy 3.png"
    ],
    link: "https://amzn.to/4rn77mP",
    features: ["Vitamin K", "Retinal", "Caffeine"],
    bestFor: "Best for Anti-Aging",
    skinType: "All Skin Types"
  }
];

export const exfoliators: Product[] = [
  {
    name: "25% AHA + 2% BHA + 5% PHA Peeling Serum Solution for Glowing Skin, Smooth Texture & Pore Cleansing | AHA BHA PHA Peel Serum For Weekend Exfoliation | 30ml",
    brand: "Minimalist",
    rating: "4.0 (8,128+)",
    price: "₹604",
    mrp: "₹699",
    discountPercentage: 14,
    images: ["/exfoliator/Minimalist/image.png",
      "/exfoliator/Minimalist/image copy.png",
      "/exfoliator/Minimalist/image copy 2.png",
      "/exfoliator/Minimalist/image copy 3.png"
    ],
    link: "https://amzn.to/3Oiumj7",
    features: ["AHA", "BHA", "PHA Peeling Serum"],
    bestFor: "Best Chemical Peel",
    skinType: "For All Skin Types"
  },
  {
    name: "15% AHA + 1% BHA Beginner Face Peeling Solution | For 10-Minute Weekly Exfoliation | 30 ml",
    brand: "The Derma Co",
    rating: "4.0 (2,810+)",
    price: "₹399",
    mrp: "₹499",
    discountPercentage: 20,
    images: ["/exfoliator/DermaCo/image.png",
      "/exfoliator/DermaCo/image copy.png",
      "/exfoliator/DermaCo/image copy 2.png",
      "/exfoliator/DermaCo/image copy 3.png"
    ],
    link: "https://amzn.to/4cypGQ5",
    features: ["AHA", "BHA", "Peeling Serum"],
    bestFor: "Best for Beginners",
    skinType: "For All Skin Types"
  },
  {
    name: "Berries Brightening Coffee Face Scrub For Glowing Skin | Gently Exfoliates, Smoothes & Improves Skin Tone | Removes Tan&Dead Skin | Tan Removal Face Scrub | Non-Drying For Women & Men-75Gm",
    brand: "mcaffeine",
    rating: "4.2 (653+)",
    price: "₹227",
    mrp: "₹249",
    discountPercentage: 9,
    images: ["/exfoliator/Mcaffeine/image.png",
      "/exfoliator/Mcaffeine/image copy.png",
      "/exfoliator/Mcaffeine/image copy 2.png",
      "/exfoliator/Mcaffeine/image copy 3.png"
    ],
    link: "https://amzn.to/4rY4tnm",
    features: ["Coffee", "Berries", "Brightening"],
    bestFor: "Best Physical Scrub",
    skinType: "For All Skin Types"
  },
  {
    name: "At Play Gentle Exfoliating Face Wash+Scrub with Mandelic Acid & Walnuts | Face Wash–Like Daily Cleanse | Removes Dead Skin, Blackheads & Tan | Instant Glow | Women & Men | 100ml",
    brand: "Chemist At Play",
    rating: "4.3 (2,027+)",
    price: "₹299",
    mrp: "₹349",
    discountPercentage: 14,
    images: ["/exfoliator/ChemistAtPlay/image.png",
      "/exfoliator/ChemistAtPlay/image copy.png",
      "/exfoliator/ChemistAtPlay/image copy 2.png",
      "/exfoliator/ChemistAtPlay/image copy 3.png"
    ],
    link: "https://amzn.to/4rZ0N4S",
    features: ["Mandelic Acid", "Walnuts", "Brightening"],
    bestFor: "Best for Tan Removal",
    skinType: "Acne-Prone Skin"
  },
  {
    name: "mCaffeine Coffee Tan & Dead Skin Removal Face Scrub | Caffeine & Walnut | 75g",
    brand: "mCaffeine",
    rating: "4.1 (11,015)",
    price: "₹185",
    mrp: "₹228",
    discountPercentage: 19,
    images: [
      "/exfoliator/Mcaffeine1/image.png",
      "/exfoliator/Mcaffeine1/image copy.png",
      "/exfoliator/Mcaffeine1/image copy 2.png",
      "/exfoliator/Mcaffeine1/image copy 3.png",
      "/exfoliator/Mcaffeine1/image copy 4.png",
      "/exfoliator/Mcaffeine1/image copy 5.png"
    ],
    link: "https://amzn.to/3OQH6xu",
    features: ["Caffeine", "Walnut Scrub", "Detan"],
    bestFor: "Best for Tan Removal",
    skinType: "All Skin Types"
  },
  {
    name: "Glamveda Rice Water Brightening Face Scrub | Creamy Exfoliator | 100g",
    brand: "Glamveda",
    rating: "4.2 (426)",
    price: "₹149",
    mrp: "₹261",
    discountPercentage: 43,
    images: [
      "/exfoliator/Glamveda/image.png",
      "/exfoliator/Glamveda/image copy.png",
      "/exfoliator/Glamveda/image copy 2.png",
      "/exfoliator/Glamveda/image copy 3.png",
      "/exfoliator/Glamveda/image copy 4.png",
      "/exfoliator/Glamveda/image copy 5.png"
    ],
    link: "https://amzn.to/4sjrAcj",
    features: ["Rice Extract", "Brightening", "Creamy Texture"],
    bestFor: "Best Budget Scrub",
    skinType: "All Skin Types"
  },
  {
    name: "mCaffeine Pore Clearing Coffee & Cookie Face Scrub | 4.5% Exfoliants | 100g",
    brand: "mCaffeine",
    rating: "4.2 (116)",
    price: "₹310",
    mrp: "₹348",
    discountPercentage: 11,
    images: [
      "/exfoliator/Mcaffeine2/image.png",
      "/exfoliator/Mcaffeine2/image copy.png",
      "/exfoliator/Mcaffeine2/image copy 2.png",
      "/exfoliator/Mcaffeine2/image copy 3.png",
      "/exfoliator/Mcaffeine2/image copy 4.png",
      "/exfoliator/Mcaffeine2/image copy 5.png",
      "/exfoliator/Mcaffeine2/image copy 6.png",
      "/exfoliator/Mcaffeine2/image copy 7.png"
    ],
    link: "https://amzn.to/3MRTH31",
    features: ["Coffee", "Charcoal", "Clay"],
    bestFor: "Best for Blackheads",
    skinType: "Oily & Combination Skin"
  },
  {
    name: "DR.RASHEL De-Tan Scrub For Face & Body | Deep Exfoliation | 380ml",
    brand: "DR.RASHEL",
    rating: "4.1 (5,321)",
    price: "₹156",
    mrp: "₹274",
    discountPercentage: 43,
    images: [
      "/exfoliator/DRRASHEL/image.png",
      "/exfoliator/DRRASHEL/image copy.png",
      "/exfoliator/DRRASHEL/image copy 2.png",
      "/exfoliator/DRRASHEL/image copy 3.png",
      "/exfoliator/DRRASHEL/image copy 4.png"
    ],
    link: "https://amzn.to/3OnQmt6",
    features: ["De-Tan", "Deep Cleansing", "Blackhead Removal"],
    bestFor: "Best for Face & Body",
    skinType: "All Skin Types"
  }
];

export const faceOils: Product[] = [
  {
    name: "Squalane 100% (Plant Derived) Super-Lightweight Face Oil | Improves Skin Hydration, Provides light Moisturization & Reduces Fine Lines | 30 ml",
    brand: "Minimalist",
    rating: "4.3 (1,724+)",
    price: "₹664",
    mrp: "₹699",
    discountPercentage: 5,
    images: ["/faceoil/Minimalist/image.png",
      "/faceoil/Minimalist/image copy.png",
      "/faceoil/Minimalist/image copy 2.png",
      "/faceoil/Minimalist/image copy 3.png"
    ],
    link: "https://amzn.to/4tJNBm0",
    features: ["Squalane", "Lightweight", "Hydration"],
    bestFor: "Best for Hydration",
    skinType: "For All Skin Types"
  },
  {
    name: "Organic Rosehip Oil for Skin, Face & Hair 30 ml | Cold Pressed & Therapeutic Grade Carrier Oil for Face Massage, Makeup Prep, Scars, Cuticles, Stretch Marks, Fine Lines & Wrinkles",
    brand: "Juicy Chemistry",
    rating: "4.4 (1,434+)",
    price: "₹759",
    mrp: "₹950",
    discountPercentage: 20,
    images: ["/faceoil/JuicyChemistry/image.png",
      "/faceoil/JuicyChemistry/image copy.png",
      "/faceoil/JuicyChemistry/image copy 2.png",
      "/faceoil/JuicyChemistry/image copy 3.png"
    ],
    link: "https://amzn.to/46VPYYX",
    features: ["Rosehip Oil", "Cold pressed", "Therapeutic Grade"],
    bestFor: "Best for Anti-Aging",
    skinType: "For All Skin Types"
  },
  {
    name: "Rosehip Oil For Face | Face Oil For Glowing Skin and Hair Growth | All Skin Types | For Men & Women | 30 ml",
    brand: "INTIMIFY",
    rating: "4.4 (1,186+)",
    price: "₹159",
    mrp: "₹599",
    discountPercentage: 73,
    images: ["/faceoil/Intimify/image.png",
      "/faceoil/Intimify/image copy.png",
      "/faceoil/Intimify/image copy 2.png",
      "/faceoil/Intimify/image copy 3.png"
    ],
    link: "https://amzn.to/4qDvJpS",
    features: ["Rosehip Oil", "Glowing Skin", "Hair Growth"],
    bestFor: "Best for Glow",
    skinType: "For All Skin Types"
  },
  {
    name: "Kumkumadi Oil For Face 100 Ml, Kumkumadi Tailam Face Oil For Glowing Skin, Dark Spot Corrector Face Serum",
    brand: "Auravedic",
    rating: "4.0 (15,828+)",
    price: "₹387",
    mrp: "₹450",
    discountPercentage: 14,
    images: ["/faceoil/Auravedic/image.png",
      "/faceoil/Auravedic/image copy.png",
      "/faceoil/Auravedic/image copy 2.png",
      "/faceoil/Auravedic/image copy 3.png"
    ],
    link: "https://amzn.to/4tF7U3V",
    features: ["Kumkumadi Oil", "Glowing Skin", "Dark Spot Corrector"],
    bestFor: "Premium Pick",
    skinType: "For All Skin Types"
  }
];

export const featuredProducts: Product[] = [
  sunscreens[0],
  vitaminCSerums[1],
  moisturizers[3],
  faceWashes[0],
  toners[3],
  eyeCreams[0],
  exfoliators[3],
  faceOils[3]
];
