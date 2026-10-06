export type Collection = {
  name: string;
  slug: string;
  image: string;
  alt: string;
};

export const collections: Collection[] = [
  { name: "Tiny Treasures", slug: "tiny-treasures", image: "/collections/tiny-treasures.webp", alt: "Tiny colorful tree miniatures" },
  { name: "Cozy Desk Friends", slug: "cozy-desk-friends", image: "/collections/cozy-desk-friends.webp", alt: "Pink crochet-look flower desk decorations" },
  { name: "Pocket Worlds", slug: "pocket-worlds", image: "/collections/pocket-worlds.webp", alt: "Small character charm inspired by a pocket-sized adventure" },
  { name: "Pokemon League", slug: "pokemon-league", image: "/collections/pokemon-league.webp", alt: "Purple creature figurine beside trading cards" },
  { name: "Cute Chaos", slug: "cute-chaos", image: "/collections/cute-chaos.webp", alt: "Blue paw-shaped clicker toy with comic-style click graphics" },
];
