import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCards from "../../components/ReviewCards";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Moore Family Print Shop, our Delaware family business, and the independent 3D artists whose designs we license.",
};

export default function OurStoryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero mintPageHero">
        <div className="pageWidth storyHero">
          <div className="roundLogo storyLogo"><Image src="/brand/family-logo.webp" alt="Moore Family Print Shop illustrated family logo" fill sizes="(max-width:700px) 180px, 260px" priority /></div>
          <div className="storyIntro">
            <p className="eyebrow">ABOUT MOORE FAMILY PRINT SHOP</p>
            <h1>Meet the <em>Moores.</em></h1>
            <p>We're a family-run 3D printing business based in Delaware. Our shop offers finished prints through Etsy.</p>
          </div>
        </div>
      </section>

      <section className="sectionPad storyCopySection">
        <div className="pageWidth storyGrid">
          <div><p className="kicker">ABOUT THE SHOP</p><h2>What we make</h2></div>
          <div className="storyProse">
            <p>Our catalog includes desk signs, keychains, fidgets, decorative pieces, and collectible displays. We like practical accessories, but we also have room for the occasional ridiculous desk ornament.</p>
            <p>We license 3D models from independent creators including N3D, Mochi Makes, Jeffryin, Layers in Green, and Valeria Momo &amp; Mattia 3D. We print and finish the physical pieces for our customers.</p>
            <p className="signature largeSignature">— The Moore Family</p>
            <Link className="gradientButton inlineButton" href="/shop">Explore our shop ↗</Link>
          </div>
        </div>
      </section>

      <section className="reviewsSection sectionPad">
        <div className="pageWidth">
          <p className="kicker centeredKicker">PUBLIC ETSY REVIEWS</p>
          <h2>Customer reviews</h2>
          <ReviewCards />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}