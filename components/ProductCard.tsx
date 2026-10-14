import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const directListing = product.etsyUrl.includes("/listing/");
  return (
    <a className="productCard" href={product.etsyUrl} target="_blank" rel="noopener noreferrer"
      aria-label={`${directListing ? "View" : "Find"} ${product.name} on Etsy`}>
      <div className="productImageWrap">
        <Image src={product.image} alt={product.alt} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 32vw" className="productImage" />
        <span className="etsyBadge">{directListing ? "View on Etsy ↗" : "Browse Etsy ↗"}</span>
      </div>
      <div className="productInfo">
        <div><h3>{product.name}</h3><p>From ${product.price.toFixed(2)}*</p></div>
        <span className="productArrow" aria-hidden="true">↗</span>
      </div>
    </a>
  );
}