import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="pageWidth footerInner">
        <div className="footerBrand">
          <Link className="brandLockup" href="/">
            <span className="brandMark"><Image src="/brand/family-logo.webp" alt="" fill sizes="50px" /></span>
            <span className="brandWords"><strong>Moore Family</strong><small>PRINT SHOP</small></span>
          </Link>
          <p>Small-batch 3D printed happiness, from our family to yours.</p>
          <span className="footerSignature">Made with love in Delaware ♡</span>
        </div>
        <div className="footerColumn">
          <h3>Explore</h3>
          <Link href="/shop">Shop our collections</Link>
          <Link href="/studio">From the studio</Link>
          <Link href="/our-story">Our story</Link>
        </div>
        <div className="footerColumn">
          <h3>Stay a while</h3>
          <a href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">Our Etsy shop ↗</a>
          <a href="https://nicelittleclick.com" target="_blank" rel="noopener noreferrer">Nice Little Click ↗</a>
          <a href="https://www.etsy.com/shop/MooreFamilyPrintShop#reviews" target="_blank" rel="noopener noreferrer">Customer reviews ↗</a>
        </div>
      </div>
      <div className="pageWidth footerBottom"><span>© 2026 Moore Family Print Shop</span><span>Made by humans, with a little help from a printer.</span></div>
    </footer>
  );
}