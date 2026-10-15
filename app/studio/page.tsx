import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { studio } from "../../data/siteContent";

export const metadata: Metadata = {
  title: "Studio",
  description: "Photos of 3D-printed miniatures, keychains, desk decor and other items from Moore Family Print Shop.",
};

export default function StudioPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero creamPageHero">
        <div className="pageWidth narrowWidth pageHeroInner">
          <p className="eyebrow">PHOTO GALLERY</p>
          <h1>From Our Studio</h1>
          <p>A closer look at the 3D prints, keychains, and desk accessories featured in our shop.</p>
        </div>
      </section>

      <section className="sectionPad">
        <div className="pageWidth narrowWidth">
          <div className="studioGalleryLarge">
            {studio.map((item, index) => (
              <figure className={`studioFeature studioFeature${index + 1}`} key={item.src}>
                <div className="studioFeatureImage">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mintBand studioCta sectionPad">
        <div className="pageWidth narrowWidth">
          <h2>Browse available products</h2>
          <p>Browse the catalog here or visit Etsy to see current listings and prices.</p>
          <div className="dualActions">
            <Link className="gradientButton inlineButton" href="/shop">Browse products</Link>
            <a className="outlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noreferrer">Visit Etsy ↗</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
