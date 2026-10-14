import type { Metadata } from "next";
import CollectionCard from "../../components/CollectionCard";
import ProductCard from "../../components/ProductCard";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { collections } from "../../data/collections";
import { products } from "../../data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse fun 3D printed desk decor, collectibles, fidgets and tiny treasures. Checkout on Etsy.",
};

export default function ShopPage() {
  const featured = [...products].sort((a,b) => {
    const order = ["Did You Open a Ticket Desk Sign","Kawaii Dumpster Fire","Thumb Wrestling Arena"];
    const ia = order.indexOf(a.name); const ib = order.indexOf(b.name);
    return (ia === -1 ? 100 : ia) - (ib === -1 ? 100 : ib);
  });
  return (
    <main>
      <SiteHeader />
      <section className="pageHero lavenderPageHero">
        <div className="pageWidth narrowWidth pageHeroInner">
          <p className="eyebrow">GOOD GIFTS, GREAT LITTLE FINDS <span aria-hidden="true">✳</span></p>
          <h1>Find your next <em>favorite little thing.</em></h1>
          <p>Take a look around, fall in love with something tiny, then checkout safely on Etsy.</p>
        </div>
      </section>

      <section className="sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">Browse by mood</p><h2>Pick a collection<span className="headingDot">.</span></h2></div></div>
          <div className="collectionGrid">{collections.map(collection => <CollectionCard key={collection.slug} collection={collection} />)}</div>
        </div>
      </section>

      <section id="best-sellers" className="lavenderBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">A few of our favorites</p><h2>Little things to love <span className="titleSparkle">✳</span></h2></div></div>
          <div className="productGrid">{featured.map(product => <ProductCard key={product.name} product={product} />)}</div>
          <p className="priceNote">*Prices and availability are confirmed on Etsy. Some cards open the full shop when a direct listing link is unavailable.</p>
          <div className="centerAction"><a className="gradientButton inlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">See everything on Etsy ↗</a></div>
        </div>
      </section>
      <section className="etsyNote sectionPad"><div className="pageWidth narrowWidth noteCard"><span className="noteIcon" aria-hidden="true">♡</span><div><h2>Shop happy, checkout securely.</h2><p>All purchases happen through our Etsy shop, where you can see current prices, availability, shipping and shop policies before ordering.</p></div><a href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer" className="textLink">Go to Etsy ↗</a></div></section>
      <SiteFooter />
    </main>
  );
}