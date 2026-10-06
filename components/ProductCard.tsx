import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      className="productCard"
      href={product.etsyUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Shop ${product.name} on Etsy`}
    >
      <div className="productImageWrap">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className="productImage"
        />
        <span className="etsyBadge">Etsy ↗</span>
      </div>
      <div className="productInfo">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </a>
  );
}
