import Image from "next/image";
import Link from "next/link";
import CollectionCard from "../components/CollectionCard";
import ProductCard from "../components/ProductCard";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { collections } from "../data/collections";
import { products } from "../data/products";
import { studio } from "../data/siteContent";

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 3);

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <div className="pageWidth heroInner">
          <div className="heroCopy">
            <p className="eyebrow"><span>✨</span> HANDCRAFTED GOODS AND MOORE <span>✨</span></p>
            <h1>Moore Family<br />Print Shop</h1>
            <p className="lead">Colorful 3D printed creatures,<br className="desktopBreak" /> cozy desk friends &amp; tiny<br className="desktopBreak" /> treasures — made with love for<br className="desktopBreak" /> collectors and dreamers.</p>
            <div className="buttonStack">
              <Link className="gradientButton" href="/shop">Shop Our Collection</Link>
              <a className="gradientButton" href="https://nicelittleclick.com" target="_blank" rel="noreferrer">Nice Little Click</a>
            </div>
          </div>

          <div className="heroArt" aria-label="Featured Moore Family Print Shop products">
            <div className="heroPhoto heroPhotoLeft">
              <Image src="/products/ticket-sign.webp" alt="Did You Open a Ticket desk sign" fill priority sizes="260px" />
            </div>
            <div className="heroPhoto heroPhotoRight">
              <Image src="/products/dumpster-fire.webp" alt="Kawaii dumpster fire desk friend" fill priority sizes="260px" />
            </div>
          </div>
        </div>
      </section>

      <section className="collectionsSection sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow">
            <div>
              <p className="kicker">Find your favorite kind of tiny</p>
              <h2>Shop Our Collections</h2>
            </div>
            <Link className="textLink" href="/shop">Visit the full shop →</Link>
          </div>
          <div className="collectionGrid">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      <section className="lavenderBand sectionPad">
        <div className="pageWidth narrowWidth">
          <h2 className="withIcon"><span className="bigStar">★</span> Best Sellers</h2>
          <div className="productGrid homeProductGrid">
            {featured.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="centerAction">
            <Link className="outlineButton" href="/shop">See the full shop →</Link>
          </div>
        </div>
      </section>

      <section className="mintBand sectionPad">
        <div className="pageWidth aboutSection">
          <div className="roundLogo">
            <Image src="/brand/family-logo.webp" alt="Moore Family Print Shop family logo" fill sizes="180px" />
          </div>
          <div className="aboutCopy">
            <p className="kicker">Our little family shop</p>
            <h2>Made With Love <span className="heart">♥</span></h2>
            <p>At Moore Family Print Shop, we specialize in crafting high-quality 3D prints that bring your ideas to life.</p>
            <Link className="textLink" href="/our-story">Read our story →</Link>
          </div>
        </div>
      </section>

      <section className="creamBand sectionPad">
        <div className="pageWidth narrowWidth">
          <div className="sectionHeadingRow">
            <div>
              <p className="kicker">Fresh off the printer</p>
              <h2>From Our Studio <span className="sparkles">✦</span></h2>
            </div>
            <Link className="textLink" href="/studio">Visit the studio →</Link>
          </div>
          <div className="studioGrid">
            {studio.slice(0, 4).map((item) => (
              <div className="studioTile" key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 46vw, 240px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
