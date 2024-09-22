// I have comented the price input, if need then just ucomment it and and also from different places and from Product folder

export interface Product {
  id: number;
  name: string;
  category: string;
  // price: number;
  image: string;
  brand?: string;
  description?: string;
  variations?: Variation[];
}

interface Variation {
  id: number;
  name: string;
  image: string;
  // price: number;
}

export const products: Product[] = [
  // For Earrings
  {
    id: 1,
    name: "Earrings",
    category: "Earrings",
    // price: 29.99,
    image: "/Earrings/earrings.jpg",
    brand: "Brand A",
    description: "Elegant gold ring with intricate design.",
    // now under each porduct there are subproducts so variations hold all the products as separate object
    variations: [
      {
        id: 101,
        name: "Gold Ring 1",
        image: "/Earrings/ear1.jpeg",
        // price: 29.99,
      },
      {
        id: 102,
        name: "Gold Ring 1",
        image: "/Earrings/ear2.jpeg",
        // price: 29.99,
      },
      {
        id: 103,
        name: "Gold Ring 1",
        image: "/Earrings/ear3.jpeg",
        // price: 29.99,
      },
      {
        id: 104,
        name: "Gold Ring 1",
        image: "/Earrings/ear4.jpeg",
        // price: 29.99,
      },
      {
        id: 105,
        name: "Gold Ring 1",
        image: "/Earrings/ear5.jpeg",
        // price: 29.99,
      },
      {
        id: 106,
        name: "Gold Ring 1",
        image: "/Earrings/ear6.jpeg",
        // price: 29.99,
      },
      {
        id: 107,
        name: "Gold Ring 1",
        image: "/Earrings/ear7.jpeg",
        // price: 29.99,
      },
      {
        id: 108,
        name: "Gold Ring 1",
        image: "/Earrings/ear8.jpeg",
        // price: 29.99,
      },
      {
        id: 109,
        name: "Gold Ring 1",
        image: "/Earrings/ear9.jpeg",
        // price: 29.99,
      },
      {
        id: 110,
        name: "Gold Ring 1",
        image: "/Earrings/ear10.jpeg",
        // price: 29.99,
      },
      {
        id: 111,
        name: "Gold Ring 1",
        image: "/Earrings/ear11.jpeg",
        // price: 29.99,
      },
      {
        id: 112,
        name: "Gold Ring 1",
        image: "/Earrings/ear12.jpeg",
        // price: 29.99,
      },
      {
        id: 113,
        name: "Gold Ring 1",
        image: "/Earrings/ear13.jpeg",
        // price: 29.99,
      },
      {
        id: 114,
        name: "Gold Ring 1",
        image: "/Earrings/ear14.jpeg",
        // price: 29.99,
      },
      {
        id: 115,
        name: "Gold Ring 1",
        image: "/Earrings/ear15.jpeg",
        // price: 29.99,
      },

      // Add up to 10 variations
    ],
  },
  // For Bangles
  {
    id: 2,
    name: "Bangles",
    category: "Bangles",
    // price: 29.99,
    image: "/Bangles/bangles.jpg",
    brand: "Brand A",
    description: "Elegant gold ring with intricate design.",
    // now under each porduct there are subproducts so variations hold all the products as separate object
    variations: [
      {
        id: 101,
        name: "Bangles",
        image: "/Bangles/bangle.jpg",
        // price: 29.99,
      },

      // Add more if you want
    ],
  },
  // For Hand Ring
  {
    id: 3,
    name: "Hand Ring",
    category: "Hand Ring",
    // price: 29.99,
    image: "/Hand Ring/ring.jpg",
    brand: "Brand A",
    description: "Elegant gold ring with intricate design.",
    // now under each porduct there are subproducts so variations hold all the products as separate object
    variations: [
      {
        id: 101,
        name: "Bangles",
        image: "/Bangles/bangle.jpg",
        // price: 29.99,
      },

      // Add more if you want
    ],
  },
  // For Necklace
  {
    id: 4,
    name: "Necklace",
    category: "Necklace",
    // price: 29.99,
    image: "/Necklace/necklaceshow.jpg",
    brand: "Brand A",
    description: "Elegant gold ring with intricate design.",
    // now under each porduct there are subproducts so variations hold all the products as separate object
    variations: [
      {
        id: 101,
        name: "Necklace",
        image: "/Necklace/necklace1.jpeg",
        // price: 29.99,
      },
      {
        id: 102,
        name: "Necklace",
        image: "/Necklace/necklace2.jpeg",
        // price: 29.99,
      },
      {
        id: 103,
        name: "Necklace",
        image: "/Necklace/necklace3.jpeg",
        // price: 29.99,
      },
      {
        id: 104,
        name: "Necklace",
        image: "/Necklace/necklace4.jpeg",
        // price: 29.99,
      },
      {
        id: 105,
        name: "Necklace",
        image: "/Necklace/necklace5.jpeg",
        // price: 29.99,
      },
      {
        id: 106,
        name: "Necklace",
        image: "/Necklace/necklace6.jpeg",
        // price: 29.99,
      },
      {
        id: 107,
        name: "Necklace",
        image: "/Necklace/necklace7.jpeg",
        // price: 29.99,
      },
      {
        id: 108,
        name: "Necklace",
        image: "/Necklace/necklace8.jpeg",
        // price: 29.99,
      },
      {
        id: 109,
        name: "Necklace",
        image: "/Necklace/necklace9.jpeg",
        // price: 29.99,
      },
      {
        id: 110,
        name: "Necklace",
        image: "/Necklace/necklace10.jpeg",
        // price: 29.99,
      },
      {
        id: 111,
        name: "Necklace",
        image: "/Necklace/necklace11.jpeg",
        // price: 29.99,
      },
      {
        id: 112,
        name: "Necklace",
        image: "/Necklace/necklace12.jpeg",
        // price: 29.99,
      },
      {
        id: 113,
        name: "Necklace",
        image: "/Necklace/necklace13.jpeg",
        // price: 29.99,
      },
      {
        id: 114,
        name: "Necklace",
        image: "/Necklace/necklace14.jpeg",
        // price: 29.99,
      },
      {
        id: 115,
        name: "Necklace",
        image: "/Necklace/necklace15.jpeg",
        // price: 29.99,
      },
      {
        id: 116,
        name: "Necklace",
        image: "/Necklace/necklace16.jpeg",
        // price: 29.99,
      },
      {
        id: 117,
        name: "Necklace",
        image: "/Necklace/necklace17.jpeg",
        // price: 29.99,
      },

      // Add more if you want
    ],
  },
];
