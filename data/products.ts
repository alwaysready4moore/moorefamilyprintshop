export type Product = {
  name: string;
  price: number;
  image: string;
  etsyUrl: string;
  featured: boolean;
  alt: string;
};

const ETSY_SHOP = "https://www.etsy.com/shop/MooreFamilyPrintShop";

export const products: Product[] = [
  {
    name: "Spongebob Dollar Enamel Pin",
    price: 9.99,
    image: "/products/spongebob-dollar.webp",
    etsyUrl: "https://www.etsy.com/listing/1761792475/shell-dollar-enamel-pin-collectible",
    featured: true,
    alt: "Green novelty dollar enamel pin displayed on a wooden surface",
  },
  {
    name: "Spongebob Spooky Ghost Keychain",
    price: 5.99,
    image: "/products/spooky-ghost.webp",
    etsyUrl: ETSY_SHOP,
    featured: true,
    alt: "Small white ghost keychain on a desk",
  },
  {
    name: "Llama Potion Fidget Keychain",
    price: 8.99,
    image: "https://i.etsystatic.com/35919048/r/il/f06515/6645304942/il_794xN.6645304942_6jd6.jpg",
    etsyUrl: "https://www.etsy.com/listing/1860273962/llama-potion-fidget-keychain-fun",
    featured: true,
    alt: "Colorful llama potion fidget keychain held in a hand",
  },
  {
    name: "Kawaii Dumpster Fire",
    price: 14.99,
    image: "/products/dumpster-fire.webp",
    etsyUrl: ETSY_SHOP,
    featured: true,
    alt: "Cute mint green 3D printed dumpster with orange flames",
  },
  {
    name: "Did You Open a Ticket Desk Sign",
    price: 11.99,
    image: "https://i.etsystatic.com/35919048/r/il/e3928d/8004940650/il_794xN.8004940650_9j24.jpg",
    etsyUrl: "https://www.etsy.com/listing/1855115287/it-help-desk-desk-sign-did-you-open-a",
    featured: true,
    alt: "Black desk sign reading Did You Open a Ticket in white and blue letters",
  },
  {
    name: "Thumb Wrestling Arena",
    price: 9.99,
    image: "https://i.etsystatic.com/35919048/r/il/681b16/6476681398/il_794xN.6476681398_nodw.jpg",
    etsyUrl: "https://www.etsy.com/listing/1836120033/thumb-wrestling-arena-fun-and-unique",
    featured: true,
    alt: "Miniature thumb wrestling ring with comic book graphics",
  },
];
