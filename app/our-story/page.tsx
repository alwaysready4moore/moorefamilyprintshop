import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { reviews } from "../../data/siteContent";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Moore Family Print Shop and learn about the licensed designs behind our colorful 3D printed treasures.",
};

export default function OurStoryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero mintPageHero">
        <div className="pageWidth storyHero">
          <div className="roundLogo storyLogo">
            <Image src="/brand/family-logo.webp" alt="Moore Family Print Shop family logo" fill sizes="210px" priority />
          </div>
          <div>
            <p className="eyebrow"><span>✨</span> A FAMILY SHOP WITH A LOVE FOR TINY THINGS <span>✨</span></p>
            <h1>Made With Love <span className="heart">♥</span></h1>
            <p>At Moore Family Print Shop, we specialize in crafting high-quality 3D prints that bring your ideas to life.</p>
          </div>
        </div>
      </section>

      <section className="sectionPad storyCopySection">
        <div className="pageWidth proseWidth">
          <h2>Our Shop</h2>
          <p>We are proud to license designs from N3D, Mochi Makes, Jeffryin, Layers in Green, and Valeria Momo &amp; Mattia 3D to offer unique and creative products you’ll love.</p>
          <p className="signature largeSignature">— The Moore Family ✨</p>
          <div className="centerAction">
            <Link className="gradientButton inlineButton" href="/shop">Browse the shop</Link>
          </div>
        </div>
      </section>

      <section className="reviewsSection sectionPad">
        <div className="pageWidth narrowWidth">
          <p className="kicker centeredKicker">Straight from Etsy</p>
          <h2>What Our Customers Say</h2>
          <div className="reviewsGrid">
            {reviews.map((review) => (
              <article className="reviewCard" key={review.name}>
                <p>“{review.quote}”</p>
                <footer><span>— {review.name}</span> <b aria-label="5 out of 5 stars">★★★★★</b></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
