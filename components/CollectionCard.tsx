import Image from "next/image";
import Link from "next/link";
import type { Collection } from "../data/collections";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link className="collectionCard" href={`/collections/${collection.slug}`} aria-label={`Explore ${collection.name}`}>
      <div className="collectionImageWrap">
        <Image src={collection.image} alt={collection.alt} fill sizes="(max-width: 700px) 75vw, (max-width: 1100px) 32vw, 220px" className="collectionImage" />
        <span className="collectionArrow" aria-hidden="true">↗</span>
      </div>
      <div className="collectionInfo">
        <h3>{collection.name}</h3>
        <p>{collection.description}</p>
      </div>
    </Link>
  );
}