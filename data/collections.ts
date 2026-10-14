export type Collection = {
  name: string;
  slug: string;
  image: string;
  alt: string;
  description: string;
};

export const collections: Collection[] = [
  { name: "Tiny Treasures", slug: "tiny-treasures", image: "/collections/tiny-treasures.webp", alt: "Tiny colorful miniature trees", description: "Little things, lots of charm" },
  { name: "Cozy Desk Friends", slug: "cozy-desk-friends", image: "/collections/cozy-desk-friends.webp", alt: "Pink and white flower desk decoration", description: "A smile for your workspace" },
  { name: "Pocket Worlds", slug: "pocket-worlds", image: "/collections/pocket-worlds.webp", alt: "Small straw-hat character charm", description: "Fandom on the go" },
  { name: "Pokemon League", slug: "pokemon-league", image: "/collections/pokemon-league.webp", alt: "Purple collectible display beside cards", description: "For the collector in you" },
  { name: "Cute Chaos", slug: "cute-chaos", image: "/collections/cute-chaos.webp", alt: "Blue paw-shaped clicker with comic-style graphics", description: "Silly, sweet, satisfying" },
];