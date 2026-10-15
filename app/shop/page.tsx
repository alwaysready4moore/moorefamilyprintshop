import type { Metadata } from "next";
import CollectionCard from "../../components/CollectionCard";
import ProductCard from "../../components/ProductCard";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { collections } from "../../data/collections";
import { products } from "../../data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse 3D-printed desk accessories, keychains, fidgets, collectibles and gifts. Purchases are completed on Etsy.",
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
          <p className="eyebrow">MOORE FAMILY PRINT SHOP <span aria-hidden="true">✳</span></p>
          <h1>Shop our <em>3D prints.</em></h1>
          <p>Browse our collections and featured prints. Each product links to Etsy for current availability and ordering.</p>
        </div>
      </section>

      <section className="sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">CATEGORIES</p><h2>Browse collections</h2></div></div>
          <div className="collectionGrid">{collections.map(collection => <CollectionCard key={collection.slug} collection={collection} />)}</div>
        </div>
      </section>

      <section id="best-sellers" className="lavenderBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">OUR CATALOG</p><h2>Featured products</h2></div></div>
          <div className="productGrid">{featured.map(product => <ProductCard key={product.name} product={product} />)}</div>
          <p className="priceNote">*Prices and availability are confirmed on Etsy. Some cards open the full shop when a direct listing link is unavailable.</p>
          <div className="centerAction"><a className="gradientButton inlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">View all Etsy listings ↗</a></div>
        </div>
      </section>
      <section className="etsyNote sectionPad"><div className="pageWidth narrowWidth noteCard"><span className="noteIcon" aria-hidden="true">♡</span><div><h2>Ordering through Etsy</h2><p>We use Etsy for checkout. Current prices, shipping details, availability, and shop policies are shown on each Etsy listing.</p></div><a href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer" className="textLink">Go to Etsy ↗</a></div></section>
      <SiteFooter />
    </main>
  );
}