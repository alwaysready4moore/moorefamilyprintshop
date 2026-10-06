import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="miniBrand" href="/" aria-label="Moore Family Print Shop home">
        MFPS
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/shop">Shop</Link>
        <Link href="/our-story">Our Story</Link>
        <Link href="/studio">Studio</Link>
        <a className="navEtsy" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noreferrer">Etsy ↗</a>
      </nav>
    </header>
  );
}
