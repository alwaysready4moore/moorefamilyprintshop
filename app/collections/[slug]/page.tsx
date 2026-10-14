import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { collections } from "../../../data/collections";
import { products } from "../../../data/products";

const details: Record<string, {headline: string; intro: string; productNames: string[]; extras: {image:string;alt:string}[]}> = {
  "tiny-treasures": {
    headline: "Small in size. Big on charm.",
    intro: "Miniatures and sweet little details made for shelves, desks, and the people who notice the small things.",
    productNames: ["Spongebob Dollar Enamel Pin"],
    extras: [{image:"/collections/tiny-treasures.webp",alt:"Tiny tree miniatures on a wooden desk"}],
  },
  "cozy-desk-friends": {
    headline: "Give your workspace a little company.",
    intro: "Cheerful companions, flowers that never wilt, and conversation starters for your desk.",
    productNames: ["Kawaii Dumpster Fire","Did You Open a Ticket Desk Sign"],
    extras: [{image:"/collections/cozy-desk-friends.webp",alt:"Soft pink and white printed flowers"}],
  },
  "pocket-worlds": {
    headline: "A little adventure goes everywhere.",
    intro: "Pocket-friendly charms and mini collectibles for bags, keys, and everyday adventures.",
    productNames: ["Spongebob Spooky Ghost Keychain","Llama Potion Fidget Keychain"],
    extras: [{image:"/collections/pocket-worlds.webp",alt:"Straw-hat character charm"},{image:"/studio/pink-hair-charm.webp",alt:"Pink-haired character keychain"},{image:"/studio/white-hair-charm.webp",alt:"White-haired character keychain"}],
  },
  "pokemon-league": {
    headline: "For the collectors at heart.",
    intro: "Playful collectible displays and gamer-inspired treasures worth making room for.",
    productNames: [],
    extras: [{image:"/collections/pokemon-league.webp",alt:"Purple collectible figure and a trading card"}],
  },
  "cute-chaos": {
    headline: "Just the right amount of ridiculous.",
    intro: "Clicky, quirky, smile-inducing prints for people who enjoy a little silliness.",
    productNames: ["Thumb Wrestling Arena","Kawaii Dumpster Fire","Llama Potion Fidget Keychain"],
    extras: [{image:"/collections/cute-chaos.webp",alt:"Blue paw-shaped clicker toy"}],
  },
};

export function generateStaticParams() {
  return collections.map(collection => ({slug: collection.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params;
  const collection = collections.find(c => c.slug === slug);
  if (!collection) return {title:"Collection not found"};
  return {title:collection.name,description:`Explore ${collection.name} from Moore Family Print Shop. ${collection.description}.`};
}

export default async function CollectionPage({params}: {params: Promise<{slug:string}>}) {
  const {slug} = await params;
  const collection = collections.find(c => c.slug === slug);
  const detail = details[slug];
  if (!collection || !detail) notFound();
  const picks = detail.productNames.map(name => products.find(product => product.name === name)).filter((product): product is (typeof products)[number] => Boolean(product));
  return (
    <main>
      <SiteHeader />
      <section className="pageHero collectionPageHero">
        <div className="pageWidth collectionHeroInner">
          <div className="collectionHeroCopy">
            <Link className="backLink" href="/shop">← All collections</Link>
            <p className="kicker">The {collection.name} collection</p>
            <h1>{detail.headline}</h1>
            <p>{detail.intro}</p>
            <a className="gradientButton inlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">Explore on Etsy ↗</a>
          </div>
          <div className="collectionHeroImage"><Image src={collection.image} alt={collection.alt} fill priority sizes="(max-width:700px) 95vw, 500px" /></div>
        </div>
      </section>
      {picks.length > 0 && <section className="sectionPad"><div className="pageWidth"><p className="kicker centeredKicker">A few things you might love</p><h2>Featured finds<span className="headingDot">.</span></h2><div className="productGrid">{picks.map(product => <ProductCard key={product.name} product={product} />)}</div><p className="priceNote">*Etsy confirms current prices and availability.</p></div></section>}
      <section className="creamBand sectionPad">
        <div className="pageWidth">
          <p className="kicker centeredKicker">A little look around</p><h2>From the collection <span className="titleSparkle">✳</span></h2>
          <div className="collectionGallery">{detail.extras.map(item => <div className="studioTile" key={item.image}><Image src={item.image} alt={item.alt} fill sizes="(max-width:700px) 95vw, 40vw" /></div>)}</div>
          <div className="centerAction"><a className="outlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">See what's currently available on Etsy ↗</a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}