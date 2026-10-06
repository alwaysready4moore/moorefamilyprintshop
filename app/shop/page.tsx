import type { Metadata } from "next";
import CollectionCard from "../../components/CollectionCard";
import ProductCard from "../../components/ProductCard";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { collections } from "../../data/collections";
import { products } from "../../data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse colorful 3D printed desk friends, tiny treasures, keychains, gifts, and more from Moore Family Print Shop.",
};

export default function ShopPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero lavenderPageHero">
        <div className="pageWidth narrowWidth pageHeroInner">
          <p className="eyebrow"><span>✨</span> COLORFUL, TINY, DELIGHTFULLY WEIRD <span>✨</span></p>
          <h1>Shop the Good Stuff</h1>
          <p>Browse our collections here, then hop over to Etsy when you’re ready to bring something home.</p>
        </div>
      </section>

      <section className="sectionPad">
        <div className="pageWidth">
          <h2>Shop Our Collections</h2>
          <div className="collectionGrid">
            {collections.map((collection) => (
              <div id={collection.slug} key={collection.slug} className="collectionAnchor">
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="lavenderBand sectionPad">
        <div className="pageWidth narrowWidth">
          <h2 className="withIcon"><span className="bigStar">★</span> Best Sellers</h2>
          <div className="productGrid">
            {products.filter((product) => product.featured).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="centerAction">
            <a className="gradientButton inlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noreferrer">See everything on Etsy ↗</a>
          </div>
        </div>
      </section>

      <section className="etsyNote sectionPad">
        <div className="pageWidth narrowWidth noteCard">
          <span className="noteIcon">🛍️</span>
          <div>
            <h2>Checkout stays on Etsy</h2>
            <p>You can explore here as long as you like. When you choose a product, its card opens the Etsy listing so Etsy can securely handle checkout and order details.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
