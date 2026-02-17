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
    price: "₹629",
    mrp: "₹699",
    discountPercentage: 10,
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
    price: "₹394",
    mrp: "₹399",
    discountPercentage: 1,
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
    price: "₹559",
    mrp: "₹899",
    discountPercentage: 38,
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
  }
];

export const vitaminCSerums: Product[] = [
  {
    name: "10% Vitamin C Serum for Dull Skin, Dark Spots & Uneven Tone Treatment",
    brand: "Minimalist",
    rating: "4.1 (20,548",
    price: "₹615",
    mrp: "₹615",
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
    price: "₹439",
    mrp: "₹899",
    discountPercentage: 20,
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
    price: "₹262",
    mrp: "₹349",
    discountPercentage: 25,
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
  }
];

export const moisturizers: Product[] = [
  {
    name: "Moisturising Cream 100 g for Dry & Sensitive Skin | 48H Hydration with Almond Oil, Niacinamide & Panthenol | Rich Fragrance and Paraben Free Moisturiser, Prevents Moisture Loss & Repairs Skin Barrier | Dermatologist Recommended",
    brand: "Cetaphil",
    rating: "4.4 (45,000+)",
    price: "₹746",
    mrp: "₹550",
    discountPercentage: 15,
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
    price: "₹332",
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
    price: "₹242",
    mrp: "₹349",
    discountPercentage: 31,
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
    price: "₹749",
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
  }
];

export const faceWashes: Product[] = [
  {
    name: "Gentle Skin Hydrating Face Wash 236ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin",
    brand: "Cetaphil",
    rating: "4.4 (20,241+)",
    price: "₹669",
    mrp: "₹733",
    discountPercentage: 16,
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
    price: "₹284",
    mrp: "₹299",
    discountPercentage: 5,
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
    price: "₹285",
    mrp: "₹420",
    discountPercentage: 32,
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
    price: "₹245",
    mrp: "₹275",
    discountPercentage: 11,
    images: ["/cleanser/Plum/image.png",
      "/cleanser/Plum/image copy.png",
      "/cleanser/Plum/image copy 2.png",
      "/cleanser/Plum/image copy 3.png"
    ],
    link: "https://amzn.to/3OfEeu5",
    features: ["Green tea", "Glycolic Acid", "Oil control"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin"
  }
];

export const toners: Product[] = [
  {
    name: "Green Tea Face Toner For Oily, Acne-Prone Skin | With Glycolic Acid | Alcohol-Free | Fights Pimples | Tightens Pores | Controls Oil | Gently Exfoliates Dead Skin Cells | Women & Men | 200ml",
    brand: "Plum",
    rating: "4.2 (13,860+)",
    price: "₹365",
    mrp: "₹420",
    discountPercentage: 13,
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
    price: "₹320",
    mrp: "₹395",
    discountPercentage: 19,
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
    price: "₹201",
    mrp: "₹300",
    discountPercentage: 33,
    images: ["/toner/Pilgrim/image.png",
      "/toner/Pilgrim/image copy.png",
      "/toner/Pilgrim/image copy 2.png",
      "/toner/Pilgrim/image copy 3.png"
    ],
    link: "https://amzn.to/3OipTNn",
    features: ["White lotus", "Alcohol free", "Mist & Toner"],
    bestFor: "Best for All Skin Types",
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
    price: "₹499",
    mrp: "₹499",
    discountPercentage: 0,
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
    price: "₹664",
    mrp: "₹699",
    discountPercentage: 5,
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
