export interface Product {
  name: string;
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
    name: "Minimalist Sunscreen SPF 50 PA++++ | Clinically Tested in US (In-Vivo) | Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum | For Women & Men | 100g (Pack of 1)",
    rating: "4.1 ((30,019)",
    price: "₹629",
    mrp: "₹699",
    discountPercentage: 10,
    images: [
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-1.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-2.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-3.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/4rDlRhz", // TODO: Replace with actual Amazon affiliate link
    features: ["SPF 50 PA+++", "Lightweight", "Non-greasy"],
    bestFor: "Best Overall",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "The Derma Co Pore Minimizing Sunscreen I With SPF 50 & PA++++ I With Niacinamide | For Open Pores & UVA/UVB Protection I Suitable For All Skin Types- 50g",
    rating: "4.1 (2,060)",
    price: "₹394",
    mrp: "₹399",
    discountPercentage: 1,
    images: ["/sunscreen/DermaCo/derma-co-spf-50-pa++++-1.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-2.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-3.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/4qJseP1", // TODO: Replace with actual Amazon affiliate link
    features: ["Matte finish", "Oily skin friendly", "No white cast"],
    bestFor: "Best for Oily Skin",
    spf: "SPF 50 PA++++",
    skinType: "Oily Skin"
  },
  {
    name: "DOT & KEY Vitamin C + E Super Bright Sunscreen Spf 50 In-Vivo Tested | Water-Light,UVA/UVB & Blue Light Protection|For Even Toned & Glowing Skin|With Liquid Spf 50+++| No White Cast | For All Skin Types| 50G,Pack Of 1",
    rating: "4.3 (11,741)",
    price: "₹387",
    mrp: "₹445",
    discountPercentage: 13,
    images: ["/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-1.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-2.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-3.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/4rXvGXo", // TODO: Replace with actual Amazon affiliate link
    features: ["Brightening", "SPF 50", "Water resistant"],
    bestFor: "Best Budget Pick",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "Aqualogica Glow+ Infused Tinted Sunscreen For All Skin Types Spf 50+ Pa++++ With Papaya & Vitamin C | Protection Against Uva/B | Universal Tint | For Glowing & Sun-Safe Skin | 50 Gm, Pack Of 1",
    rating: "3.5 (162)",
    price: "₹559",
    mrp: "₹899",
    discountPercentage: 38,
    images: ["/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-1.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-2.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-3.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-4.png"
    ], // TODO: Replace with actual Amazon product image URL
      link: "https://amzn.to/3OenjrP", // TODO: Replace with actual Amazon affiliate link
      features: ["Dewy finish", "Hydrating", "Fragrance free"],
    bestFor: "Best for Sensitive Skin",
    spf: "SPF 50 PA+++",
    skinType: "Sensitive Skin"
  }
];

export const vitaminCSerums: Product[] = [
  {
    name: "Minimalist 10% Vitamin C Serum for Dull Skin, Dark Spots & Uneven Tone Treatment",
    rating: "4.1 (20,548",
    price: "₹615",
    mrp: "₹615",
    discountPercentage: 0,
    images: ["/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-1.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-2.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-3.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/3MfJqgW", // TODO: Replace with actual Amazon affiliate link
    features: ["10% Vitamin C", "Brightening", "Anti-aging"],
    bestFor: "Best Overall",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "Plum 15% Vitamin C Advanced Serum for Glowing Skin | for Oily, Dry & Combination Skin",
    rating: "4.0 (14,428)",
    price: "₹439",
    mrp: "₹550",
    discountPercentage: 20,
    images: ["/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-1.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-2.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-3.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/4kAvf2u", // TODO: Replace with actual Amazon affiliate link
    features: ["15% Vitamin C", "Kakadu plum", "Vegan"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin",
    concentration: "15%"
  },
  {
    name: "The Derma Co 10% Vitamin C Face Serum with 5% Niacinamide, Powered by Deep Penetration Formula",
    rating: "4.0 (13,675",
    price: "₹262",
    mrp: "₹349",
    discountPercentage: 25,
    images: ["/serums/DermaCo/derma-co-10-vitamin-c-serum-1.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-2.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-3.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/46Cz95e", // TODO: Replace with actual Amazon affiliate link
    features: ["Glow boosting", "Dark spot reduction", "Dermatologist tested"],
    bestFor: "Best Budget Pick",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "DOT & KEY 10% Vitamin C + E Serum with 5% Niacinamide,for Glowing Skin,Fades Dark Spots & Hyperpigmentation",
    rating: "4.1 (3,305",
    price: "₹576",
    mrp: "₹695",
    discountPercentage: 17,
    images: ["/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-1.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-2.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-3.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://amzn.to/4tEJdEA", // TODO: Replace with actual Amazon affiliate link
    features: ["10% Vitamin C", "Korean formula", "Fast absorbing"],
    bestFor: "Best for Sensitive Skin",
    skinType: "Sensitive Skin",
    concentration: "10%"
  }
];

export const featuredProducts: Product[] = [
  ...sunscreens.slice(0, 2),
  ...vitaminCSerums.slice(0, 2)
];
