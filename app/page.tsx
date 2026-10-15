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
            <p className="eyebrow">3D PRINTED GIFTS AND ACCESSORIES <span aria-hidden="true">✳</span> DELAWARE</p>
            <h1>Moore Family <span>Print Shop</span></h1>
            <p className="heroScript">Printed in Delaware. Available on Etsy.</p>
            <p className="lead">We print desk signs, fidgets, keychains, and collectible displays. Some are useful; some are just funny. Browse the catalog here and order through our Etsy shop.</p>
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
            <span className="heroSticker" aria-hidden="true">3D printed <br />in Delaware</span>
          </div>
        </div>
      </section>
      <div className="trustStrip"><div className="pageWidth trustInner"><span>Family-owned shop</span><span>Printed in Delaware</span><span>Orders through Etsy</span></div></div>

      <section className="collectionsSection sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow">
            <div><p className="kicker">CATEGORIES</p><h2>Shop by collection</h2></div>
            <Link className="textLink" href="/shop">View collections ↗</Link>
          </div>
          <div className="collectionGrid">{collections.map(collection => <CollectionCard key={collection.slug} collection={collection} />)}</div>
        </div>
      </section>

      <section className="lavenderBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">FROM OUR CATALOG</p><h2>Featured products</h2></div><Link className="textLink" href="/shop">See more products ↗</Link></div>
          <div className="productGrid homeProductGrid">{featured.map(product => <ProductCard key={product.name} product={product} />)}</div>
          <p className="priceNote">*Displayed prices are a guide. Etsy shows current pricing and availability.</p>
        </div>
      </section>

      <section className="mintBand sectionPad">
        <div className="pageWidth aboutSection">
          <div className="aboutLogoFrame"><div className="roundLogo"><Image src="/brand/family-logo.webp" alt="Illustrated Moore Family Print Shop family logo" fill sizes="220px" /></div><span className="roundLogoStamp">Delaware, USA</span></div>
          <div className="aboutCopy"><p className="kicker">FAMILY-OWNED IN DELAWARE</p><h2>About the shop</h2><p>Moore Family Print Shop offers finished 3D prints, from desk accessories and fidgets to keychains and collectibles. Our catalog includes work from independent designers whose models we license.</p><Link className="textLink" href="/our-story">Read our story ↗</Link></div>
        </div>
      </section>

      <section className="reviewsSection sectionPad">
        <div className="pageWidth"><div className="sectionHeadingRow"><div><p className="kicker">REVIEWS FROM ETSY</p><h2>Customer reviews</h2></div><a className="textLink" href="https://www.etsy.com/shop/MooreFamilyPrintShop#reviews" target="_blank" rel="noopener noreferrer">See more reviews ↗</a></div><ReviewCards /></div>
      </section>

      <section className="creamBand sectionPad">
        <div className="pageWidth">
          <div className="sectionHeadingRow"><div><p className="kicker">GALLERY</p><h2>From the studio</h2></div><Link className="textLink" href="/studio">Visit the studio ↗</Link></div>
          <div className="studioGrid">{studio.slice(0,4).map(item => <div className="studioTile" key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 50vw, 25vw" /></div>)}</div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}