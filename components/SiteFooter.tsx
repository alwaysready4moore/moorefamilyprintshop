import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="pageWidth">
        <h2>Moore Family Print Shop</h2>
        <p>Bringing color &amp; joy to your world, one print at a time 🌈</p>
        <div className="socialLinks" aria-label="Footer links">
          <Link href="/shop">Shop</Link>
          <Link href="/our-story">Our Story</Link>
          <Link href="/studio">Studio</Link>
          <a href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noreferrer">Etsy</a>
          <a href="https://nicelittleclick.com" target="_blank" rel="noreferrer">Nice Little Click</a>
        </div>
        <small>© 2026 Moore Family Print Shop. Made with <span aria-hidden="true">♥</span> in Delaware.</small>
      </div>
    </footer>
  );
}
