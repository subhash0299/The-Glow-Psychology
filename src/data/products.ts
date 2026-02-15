export interface Product {
  name: string;
  rating: string;
  price: string;
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
    images: [
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-1.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-2.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-3.png",
      "/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Minimalist-Sunscreen-Clinically-Lightweight-Multi-Vitamins/dp/B0DHY6LQTW/ref=sr_1_1_sspa?crid=3B9R9SDHD6004&dib=eyJ2IjoiMSJ9.yjpRI0aDN-1s-MtzV6z7EJJOZXHOcIzmTofPmoK6kN0oL6NJAvFwW1ogs9_QIxI4PCdpsSN08EDqX4bhMB8DPSB6XL71D5pPgYbysvLYP8vJiWB51gKZK8IWYSOtgvfxj-13NZhf5eIER-bDzOBWLS5C7g-OBxgpRAxMlCPSiev9-drBfrmjYGi9sRtP_JYKb_Beeb-amwaXHH6hoWjRefMqf9O6nR0w0-xRiAKPYdKVgHMPoVcgmaER-976N9nnAIBqOcm7XSiJRGA2OIeb_YFS5iMdBQAaDkshjvf32QE.oyzOeyQROVuGPe4RNSto9unYcyOtmwnOoYQOmCJ4Ke0&dib_tag=se&keywords=Minimalist%2BSPF%2B50%2BSunscreen&qid=1771129772&sprefix=%2Caps%2C352&sr=8-1-spons&aref=n0jMKoEpm5&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["SPF 50 PA+++", "Lightweight", "Non-greasy"],
    bestFor: "Best Overall",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "The Derma Co Pore Minimizing Sunscreen I With SPF 50 & PA++++ I With Niacinamide | For Open Pores & UVA/UVB Protection I Suitable For All Skin Types- 50g",
    rating: "4.1 (2,060)",
    price: "₹349",
    images: ["/sunscreen/DermaCo/derma-co-spf-50-pa++++-1.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-2.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-3.png",
      "/sunscreen/DermaCo/derma-co-spf-50-pa++++-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Derma-Co-Minimizing-Sunscreen-Protection/dp/B0BHW5HCV3/ref=sr_1_7?crid=3JNP0VK2E1TWV&dib=eyJ2IjoiMSJ9.rLljA-XFpSlgcMlSuBCZ4X118Si7Q9Ghx10sR3fOjsw9iSHDldq-WVdwswf2Ukgu_mZKUTuFnBS_f5u7PCm4eUen4xFqm4QlyO1MPxLUwM9x5W8-qdB_0NZ3dCnf9uAx5YmMOhXuqH1nCoQ0FqDd0bzu3iM9fED6-dcHOq3dKVAutCp9IJfNL_svp0S66WDlw4AKim8yC7hZ8RLgQ8MZ8HTjXnrnHGgyBs9mSR3f5QZzyWhvo2BRD3CCJR_bwOpJKXo0pFdF85zH0LGkQl-CQAULXczB59C99OC3iSyS-Lw.KZUWpT_OJa7cASTbrRvighd9Q3t9BQNfqpYAJSMQ8D0&dib_tag=se&keywords=Derma%2BCo%2BSPF%2B50%2BPA%2B%2B%2B%2B&qid=1771130282&sprefix=derma%2Bco%2Bspf%2B50%2Bpa%2B%2B%2B%2B%2Caps%2C378&sr=8-7&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["Matte finish", "Oily skin friendly", "No white cast"],
    bestFor: "Best for Oily Skin",
    spf: "SPF 50 PA++++",
    skinType: "Oily Skin"
  },
  {
    name: "DOT & KEY Vitamin C + E Super Bright Sunscreen Spf 50 In-Vivo Tested | Water-Light,UVA/UVB & Blue Light Protection|For Even Toned & Glowing Skin|With Liquid Spf 50+++| No White Cast | For All Skin Types| 50G,Pack Of 1",
    rating: "4.3 (11,741)",
    price: "₹387",
    images: ["/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-1.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-2.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-3.png",
      "/sunscreen/Dot&Key/dot-key-vitamin-c-sunscreen-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Vitamin-Sunscreen-Water-Light-Protection-Absorption/dp/B0BLK4YRSN/ref=sr_1_1_sspa?crid=3Q2ES30S1IZ04&dib=eyJ2IjoiMSJ9.gQ21fgWACEvWhOUZ36j8rEc3KNJ9oVD8r-xH78f8vVdEI-s51aV8bIXMKJmbVNaxdpUk0rGlyerCxjRZWOm1p_8ZgNAcrISAAr44RJVjq4QdhXCptp39nQBnfowIBtcxacdYB39Vf8nv_hJg7ELEz2tqIP96BU_Ta5z9KxQkE0FIBdbsp8zc47_PAf8yhgAMIt3rysPb3oDVPWFSJxduc3R4nWa2RrXu5gynEX2gSCEkTJMlRrAqaTFLOSHoT8pg3mk0czCLTM-LQ1XrMysbp8m28BLqpCWUXM1VEiWVm0A.TMbApzrUIQr7bxt7zp08uoTr5XdP0wqzZWpX6sb4o4k&dib_tag=se&keywords=Dot%2B%26%2BKey%2BVitamin%2BC%2BSunscreen&qid=1771130485&sprefix=derma%2Bco%2Bspf%2B50%2Bpa%2B%2B%2B%2B%2Caps%2C518&sr=8-1-spons&aref=zf0uc76Bdl&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["Brightening", "SPF 50", "Water resistant"],
    bestFor: "Best Budget Pick",
    spf: "SPF 50 PA+++",
    skinType: "All Skin Types"
  },
  {
    name: "Aqualogica Glow+ Infused Tinted Sunscreen For All Skin Types Spf 50+ Pa++++ With Papaya & Vitamin C | Protection Against Uva/B | Universal Tint | For Glowing & Sun-Safe Skin | 50 Gm, Pack Of 1",
    rating: "3.5 (162)",
    price: "₹559",
    images: ["/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-1.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-2.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-3.png",
      "/sunscreen/Aqualogica/aqualogica-glow+-sunscreen-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Aqualogica-Sunscreen-Protection-Universal-Sun-Safe/dp/B0CRNKQCG4/ref=sr_1_13?crid=107B3EJLXJ45K&dib=eyJ2IjoiMSJ9.mRcoxRNHeUTuNKYugnN31RHW3FtRukV7qSr8GdA53MyWiPLz0glNmGqnvc7HEadyXKnGg1B9OoODWMjKeV3U_OD3WTPwI_QCEBuef5fNLwvzEwVQ5rkUSsFRCh2f3TztG7qUsVKCuDIqMMKPWnG9iEMUnbb9YIUWuayJlYOYAWEB68gzs8c2Ct-3EyXqTpKrHz8NjDz1MO0wKvy6jmoKn3jYQzjCJQJlvBCLCU1jARaJO-84Ub05AJ7JVJCWAM8HZha_VfKoJ12duExdLS5fSMgfh_2fs631hvdSNc_SyNQ.tntag6mzLLCgfHYNjMrI1i0Zelu4QyxmiYxPugMj-YI&dib_tag=se&keywords=Aqualogica+Glow%2B+Sunscreen&qid=1771130650&sprefix=dot%2B%26%2Bkey%2Bvitamin%2Bc%2Bsunscreen%2Caps%2C465&sr=8-13", // TODO: Replace with actual Amazon affiliate link
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
    price: "₹629",
    images: ["/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-1.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-2.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-3.png",
      "/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-4.png"
    ], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Minimalist-Vitamin-Glowing-Effective-Brightening/dp/B08MVBF4P8/ref=sr_1_5?crid=3E069AF3II76S&dib=eyJ2IjoiMSJ9.zJS7O29FplYxtMkwyQHH2jtK61Uu2FUKo_I2TZegoKgJr4HrIedvc0X7mIPMk-yJcX6drp_IihDRVWhIXInvcjbIWRrC38B9JIcDWShOI9uTUlHd7eV0gL8Z7PdL9nXBPT4yfS9y9bn5exaPuBXkFQxQQcrTphb3foQ-SFyr6D_bL7rtfVquIKUnyVkvLMXaVkHgPqQRR1_l3tVHmmksP8mP-vza6uNP6IAWWc9n515OUeVMry_No462BXBhS51t-d32pAjN1aoJLz51P90IbK9cqK9IGgy12PUwkzOFzR4.AoACGHbAWxPsAPrdKucqeRSqUrurd3dkP3X7xOV8P5I&dib_tag=se&keywords=Minimalist%2B10%25%2BVitamin%2BC%2BSerum&qid=1771130849&sprefix=aqualogica%2Bglow%2B%2Bsunscreen%2Caps%2C503&sr=8-5&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["10% Vitamin C", "Brightening", "Anti-aging"],
    bestFor: "Best Overall",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "Plum 15% Vitamin C Advanced Serum for Glowing Skin | for Oily, Dry & Combination Skin",
    rating: "4.0 (14,428)",
    price: "₹439",
    images: ["/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-1.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-2.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-3.png",
      "/serums/Plum/Plum-15-Vitamin-C-Advanced-Serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Plum-Combination-Pigmentation-Non-Irritating-Hydrating/dp/B095PRGHDX/ref=sr_1_5?crid=1BX67EEBYWHD9&dib=eyJ2IjoiMSJ9.RtuK-ztjgz-SGPSDGRVHb3T2kDr7cAnSw-0-hAdhWyFS7Ma1imA8nDNYs5YVk3VwW-AnLkw7yoXk-bW2dGzrQhUZcyWz3eXDXXBrfy0btVN1hGQpbQ94NKv0vUypoaOlgQF4yFdW5me4lur9ESXxzewWJy1ewdxxgnpogRAf_zyLnxIOl5vzowPkSXbi5y9M4W3R60_RMV2j-Afijm5-43Hmsn7DQgRZkuGvu7zjv8hvTR2DTDIiKpqX2rF7LWli3kpw-RU_s81B-Yn-orPIZ1Ntg9HN-_ETHvdIBQU5wIY.gAr1DT0rbjhBpachb9H2RtCn5eNYuZJdCM_6dOJV5hI&dib_tag=se&keywords=Plum%2B15%25%2BVitamin%2BC%2BSerum&qid=1771131306&sprefix=plum%2B15%25%2Bvitamin%2Bc%2Bserum%2Caps%2C405&sr=8-5&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["15% Vitamin C", "Kakadu plum", "Vegan"],
    bestFor: "Best for Oily Skin",
    skinType: "Oily Skin",
    concentration: "15%"
  },
  {
    name: "The Derma Co 10% Vitamin C Face Serum with 5% Niacinamide, Powered by Deep Penetration Formula",
    rating: "4.0 (13,675",
    price: "₹599",
    images: ["/serums/DermaCo/derma-co-10-vitamin-c-serum-1.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-2.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-3.png",
      "/serums/DermaCo/derma-co-10-vitamin-c-serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Derma-Co-Niacinamide-Hyaluronic-Radiance/dp/B096MNYLWS/ref=sr_1_1_in_f3_0o_fs_sspa?crid=JDMRWQ8X8728&dib=eyJ2IjoiMSJ9.uyTk6TT9hdhFIhIiwgz4VBwLplV8q6QFFx1sNcqJcd-JKpD40gJ1qfD3w_KKp5Kpyh8-4L_DJRw6kkbrKjR0eHmH77NGWKzcR_TcK_FE-IW4gsGJXdXGijB7aFCkF-y0X7XdvWayqMBztOUvfaXbk-Sjc_hW8PHSzjerCjL9qz5wtVlVg47vrRcTzEZdMJpkH198S_2c5wK-dhiHhL6u7MGQHgVtfPP48A2s3F079g0cuTmGs0zX9xeeO5OW5Dl34ykNsgGZmIOWcLqdwkuHXLD646VXIOJ06VGCHGXKRCY.PV1CJxvbtn33QCk0v96o0dzWVUobZxs3AV_oipBXKGQ&dib_tag=se&keywords=Derma%2BCo%2B10%25%2BVitamin%2BC%2BSerum&qid=1771131634&sprefix=derma%2Bco%2B10%25%2Bvitamin%2Bc%2Bserum%2Caps%2C395&sr=8-1-spons&aref=mgpSNBIyff&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1", // TODO: Replace with actual Amazon affiliate link
    features: ["Glow boosting", "Dark spot reduction", "Dermatologist tested"],
    bestFor: "Best Budget Pick",
    skinType: "All Skin Types",
    concentration: "10%"
  },
  {
    name: "DOT & KEY 10% Vitamin C + E Serum with 5% Niacinamide,for Glowing Skin,Fades Dark Spots & Hyperpigmentation",
    rating: "4.1 (3,305",
    price: "₹429",
    images: ["/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-1.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-2.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-3.png",
      "/serums/Dot&Key/dot-key-10-vitamin-c-e-serum-4.png"], // TODO: Replace with actual Amazon product image URL
    link: "https://www.amazon.in/Vitamin-Niacinamide-Glowing-Fights-Pigmentation/dp/B0BCQ5RJH1/ref=sr_1_5?crid=1O6OT5YAYMC83&dib=eyJ2IjoiMSJ9.fKgXqmDtX2BlmYn1NoGzXBi8SQUp7soNNg-0aROJJV1rViHxx-rneuI_Eqs-5uCs1Lwnd9a9zXV5HQ0706MBLMFRojfjxuMJeEbTDWi0KpMudNV3wYeCSUDkVYPYozfERH-In7okP1N2VkA77L5_kZ0b-xfPVl0z-_fm4se2dI-h167GF__FF7t3HVWkfydthFNhbq99JcusDFxAipU3Gdwq57Y5rUh5NrCL1kz4VfQhiVB4oZl-pyc6VBxvVwykQg0qKPxCzkDSfRNxOViIanU5YLYv6fRPaoZUga46WHc.jOqtzfuacoyieCTMi7mqXlW5Y07VlTPaKYDBqc5K7G0&dib_tag=se&keywords=Dot%2B%26%2BKey%2BVitamin%2BC%2BSerum%2B20%25%2BVitamin%2BC&nsdOptOutParam=true&qid=1771131905&sprefix=dot%2B%26%2Bkey%2Bvitamin%2Bc%2Bserum%2B20%25%2Bvitamin%2Bc%2Caps%2C463&sr=8-5&th=1", // TODO: Replace with actual Amazon affiliate link
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
