import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/our-story" },
  { label: "Studio", href: "/studio" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="topNote">Family-run in Delaware <span aria-hidden="true">✦</span> Made with care, delivered with joy</div>
      <header className="siteHeader">
        <div className="pageWidth headerInner">
          <Link className="brandLockup" href="/" aria-label="Moore Family Print Shop, home">
            <span className="brandMark"><Image src="/brand/family-logo.webp" alt="" fill sizes="50px" /></span>
            <span className="brandWords"><strong>Moore Family</strong><small>PRINT SHOP</small></span>
          </Link>
          <nav className="desktopNav" aria-label="Main navigation">
            {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <a className="headerEtsy" href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">Shop Etsy <span aria-hidden="true">↗</span></a>
          <details className="mobileNav">
            <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              <a href="https://www.etsy.com/shop/MooreFamilyPrintShop" target="_blank" rel="noopener noreferrer">Shop on Etsy ↗</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}