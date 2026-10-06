import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { studio } from "../../data/siteContent";

export const metadata: Metadata = {
  title: "Studio",
  description: "A peek behind the scenes at colorful 3D printed creations from Moore Family Print Shop.",
};

export default function StudioPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero creamPageHero">
        <div className="pageWidth narrowWidth pageHeroInner">
          <p className="eyebrow"><span>✨</span> A PEEK BEHIND THE PRINTS <span>✨</span></p>
          <h1>From Our Studio <span className="sparkles">✦</span></h1>
          <p>Small prints, cheerful experiments, and the tiny details that make the shop feel like us.</p>
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
          <h2>See something you love?</h2>
          <p>Take a look through the shop, or visit Etsy for the latest available listings.</p>
          <div className="dualActions">
            <Link className="gradientButton inlineButton" href="/shop">Shop the collection</Link>
            <a className="outlineButton" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noreferrer">Visit Etsy ↗</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
