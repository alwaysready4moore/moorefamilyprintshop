import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCards from "../../components/ReviewCards";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet the family and the licensed designers behind Moore Family Print Shop's colorful 3D printed gifts.",
};

export default function OurStoryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero mintPageHero">
        <div className="pageWidth storyHero">
          <div className="roundLogo storyLogo"><Image src="/brand/family-logo.webp" alt="Moore Family Print Shop illustrated family logo" fill sizes="(max-width:700px) 180px, 260px" priority /></div>
          <div className="storyIntro">
            <p className="eyebrow">HI FROM THE MOORES <span aria-hidden="true">♡</span></p>
            <h1>Made with love, <em>and a lot of filament.</em></h1>
            <p>A family-run print shop making gifts with personality, desk-side companions, and wonderfully weird little treasures.</p>
          </div>
        </div>
      </section>

      <section className="sectionPad storyCopySection">
        <div className="pageWidth storyGrid">
          <div><p className="kicker">A little introduction</p><h2>Small shop.<br />Big imagination.</h2></div>
          <div className="storyProse">
            <p>At Moore Family Print Shop, we love the kind of thing that makes you stop, smile, and say, “Okay, where did you get that?”</p>
            <p>From cute desk accessories to playful fidgets and collectible gifts, we bring colorful 3D prints to life with careful printing and finishing. We also proudly license designs from N3D, Mochi Makes, Jeffryin, Layers in Green, and Valeria Momo &amp; Mattia 3D.</p>
            <p className="signature largeSignature">— The Moore Family ♡</p>
            <Link className="gradientButton inlineButton" href="/shop">Explore our shop ↗</Link>
          </div>
        </div>
      </section>

      <section className="reviewsSection sectionPad">
        <div className="pageWidth">
          <p className="kicker centeredKicker">Words from our Etsy customers</p>
          <h2>Love notes from shoppers<span className="headingDot">.</span></h2>
          <ReviewCards />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}