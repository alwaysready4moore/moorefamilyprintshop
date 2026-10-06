# Moore Family Print Shop

A custom Next.js storefront for Moore Family Print Shop. The site acts as a colorful catalog and sends customers to Etsy for checkout.

## Pages

- `/` — Home: hero, collection preview, bestseller preview, story preview, studio preview
- `/shop` — Collections, all current bestseller cards, and Etsy checkout handoff
- `/our-story` — About the shop, licensed designers, and customer reviews
- `/studio` — Larger behind-the-scenes gallery

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy

Push this folder to GitHub and connect the repository to Netlify. Netlify should detect Next.js automatically.

## Product updates

Edit `data/products.ts` to change products, prices, photos, featured status, and Etsy URLs.
Edit `data/collections.ts` for collection names and images.
Edit `data/siteContent.ts` for reviews and studio images.

Images live under `public/`.

## v4 image refresh
This version replaces the temporary Canva screenshot crops with original supplied product photography and logo assets. Pocket Worlds currently uses the straw-hat character charm, and Cute Chaos uses the blue paw clicker as their collection thumbnails. The Studio page now includes seven supplied product photos.
