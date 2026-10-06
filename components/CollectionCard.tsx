import Image from "next/image";
import Link from "next/link";
import type { Collection } from "../data/collections";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link className="collectionCard" href={`/shop#${collection.slug}`} aria-label={`Browse ${collection.name}`}>
      <div className="collectionImageWrap">
        <Image
          src={collection.image}
          alt={collection.alt}
          fill
          sizes="(max-width: 700px) 46vw, 20vw"
          className="collectionImage"
        />
      </div>
      <span>{collection.name}</span>
    </Link>
  );
}
