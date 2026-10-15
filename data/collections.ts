export type Collection = {
  name: string;
  slug: string;
  image: string;
  alt: string;
  description: string;
};

export const collections: Collection[] = [
  { name: "Tiny Treasures", slug: "tiny-treasures", image: "/collections/tiny-treasures.webp", alt: "Tiny colorful miniature trees", description: "Miniatures and small gifts" },
  { name: "Cozy Desk Friends", slug: "cozy-desk-friends", image: "/collections/cozy-desk-friends.webp", alt: "Pink and white flower desk decoration", description: "Desk signs and decorations" },
  { name: "Pocket Worlds", slug: "pocket-worlds", image: "/collections/pocket-worlds.webp", alt: "Small straw-hat character charm", description: "Keychains and bag charms" },
  { name: "Pokemon League", slug: "pokemon-league", image: "/collections/pokemon-league.webp", alt: "Purple collectible display beside cards", description: "Trading card displays" },
  { name: "Cute Chaos", slug: "cute-chaos", image: "/collections/cute-chaos.webp", alt: "Blue paw-shaped clicker with comic-style graphics", description: "Fidgets and novelty prints" },
];