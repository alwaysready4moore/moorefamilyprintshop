import Image from "next/image";
import Link from "next/link";
import CollectionCard from "../components/CollectionCard";
import ProductCard from "../components/ProductCard";
import ReviewCards from "../components/ReviewCards";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { collections } from "../data/collections";
import { products } from "../data/products";
import { studio } from "../data/siteContent";

const spotlight = ["Did You Open a Ticket Desk Sign", "Kawaii Dumpster Fire", "Thumb Wrestling Arena"];
export default function HomePage() {
  const featured = spotlight.map(name => products.find(p => p.name === name)).filter((p): p is (typeof products)[number] => Boolean(p));
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero">
        <div className="pageWidth heroInner">
          <div className="heroCopy">
            <p className="eyebrow">A FAMILY-RUN 3D PRINT SHOP <span aria-hidden="true">✳</span> MADE IN DELAWARE</p>
            <h1>Moore Family <span>Print Shop</span></h1>
            <p className="heroScript">Tiny treasures. Lots of personality.</p>
            <p className="lead">Colorful desk friends, playful fidgets, collectible gifts, and delightfully unexpected little things. Made with care, just for the joy of it.</p>
            <div className="buttonStack">
              <Link className="gradientButton" href="/shop">Explore our shop <span aria-hidden="true">↗</span></Link>
              <a className="secondaryButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">Visit us on Etsy ↗</a>
            </div>
            <div className="heroProof"><span className="proofStars" aria-hidden="true">★★★★★</span><span>Loved by shoppers on Etsy</span></div>
          </div>
          <div className="heroArt" aria-label="Featured 3D printed creations from our shop">
            <div className="heroGlow" aria-hidden="true"></div>
            <div className="heroPhoto heroPhotoLeft"><Image src="https://i.etsystatic.com/35919048/r/il/e3928d/8004940650/il_794xN.8004940650_9j24.jpg" alt="Did You Open a Ticket freestanding desk sign" fill priority sizes="(max-width: 700px) 54vw, 340px" /></div>
            <div className="heroPhoto heroPhotoRight"><Image src="/products/dumpster-fire.webp" alt="Smiling mint green 3D printed dumpster fire with orange flames" fill priority sizes="(max-width: 700px) 46vw, 280px" /></div>
            <span className="heroSticker" aria-hidden="true">made with <br />♡</span>
          </div>
        </div>
      </section>
      <div className="trustStrip"><div className="pageWidth trustInner"><span>✳ Family owned</span><span>♡ Printed with care</span><span>✦ Wonderfully giftable</span><span>↗ Checkout on Etsy</span></div></div>

      <section className="collectionsSection sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow">
            <div><p className="kicker">Discover your next favorite thing</p><h2>Find your happy place<span className="headingDot">.</span></h2></div>
            <Link className="textLink" href="/shop">See all collections ↗</Link>
          </div>
          <div className="collectionGrid">{collections.map(collection => <CollectionCard key={collection.slug} collection={collection} />)}</div>
        </div>
      </section>

      <section className="lavenderBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">Little crowd-pleasers</p><h2>Shop favorites <span className="titleSparkle">✳</span></h2></div><Link className="textLink" href="/shop">Browse the whole shop ↗</Link></div>
          <div className="productGrid homeProductGrid">{featured.map(product => <ProductCard key={product.name} product={product} />)}</div>
          <p className="priceNote">*Displayed prices are a guide. Etsy shows current pricing and availability.</p>
        </div>
      </section>

      <section className="mintBand sectionPad">
        <div className="pageWidth aboutSection">
          <div className="aboutLogoFrame"><div className="roundLogo"><Image src="/brand/family-logo.webp" alt="Illustrated Moore Family Print Shop family logo" fill sizes="220px" /></div><span className="roundLogoStamp">hello from us!</span></div>
          <div className="aboutCopy"><p className="kicker">A little about the makers</p><h2>From our family <span className="heart">to yours.</span></h2><p>We believe everyday objects should be fun to look at and even more fun to give. Our family print shop brings together playful ideas, licensed designs, and a whole lot of love for the details.</p><Link className="textLink" href="/our-story">Meet the Moore Family ↗</Link></div>
        </div>
      </section>

      <section className="reviewsSection sectionPad">
        <div className="pageWidth"><div className="sectionHeadingRow"><div><p className="kicker">Kind words from real customers</p><h2>Happy little reviews<span className="headingDot">.</span></h2></div><a className="textLink" href="https://www.etsy.com/shop/MooreFamilyPrintShop#reviews" target="_blank" rel="noopener noreferrer">More on Etsy ↗</a></div><ReviewCards /></div>
      </section>

      <section className="creamBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">Fresh from our little corner</p><h2>A peek at the prints <span className="titleSparkle">✳</span></h2></div><Link className="textLink" href="/studio">Visit the studio ↗</Link></div>
          <div className="studioGrid">{studio.slice(0,4).map(item => <div className="studioTile" key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 50vw, 25vw" /></div>)}</div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}