import { reviews } from "../data/siteContent";

export default function ReviewCards() {
  return (
    <div className="reviewsGrid">
      {reviews.map(review => (
        <article className="reviewCard" key={review.name}>
          <div className="reviewStars" aria-label="5 out of 5 stars">★★★★★</div>
          <p className="reviewQuote">“{review.quote}”</p>
          <div className="reviewAttribution">
            <strong>{review.name}</strong><span>{review.item} · {review.date}</span>
            <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Read review on Etsy ↗</a>
          </div>
        </article>
      ))}
    </div>
  );
}