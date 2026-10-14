# Moore Family Print Shop

A family-run Next.js storefront that sends shoppers to Etsy for checkout.

## Pages

- Home `/`
- Shop `/shop`
- Our Story `/our-story`
- Studio `/studio`
- Individual collections `/collections/[slug]`

## Build

```bash
npm install
npm run build
npm start
```

## High-resolution photo upgrade

This project supports an optional one-file photo upgrade for the owner's
original photographs. Upload `moorefamily-photo-upgrade.tar.gz` to the ROOT
of this GitHub repository using **Add file > Upload files > Commit changes**.
Do not unzip or rename the archive before uploading it.

Every subsequent Netlify build will extract the high-resolution WebP photos
into their original `public/...` paths, replacing the tiny provisional copies.
No changes to the CSS, component image paths or deployment settings are needed.
The script quietly uses existing files until the archive has been uploaded.

Some submitted keychain and clicker pictures were only 200×200 pixels.
Those cannot be made genuinely sharp for large retina displays without
higher-resolution originals; Etsy-hosted photos are preferred when available.

## Updating products

Edit `data/products.ts` for products, prices, photos and Etsy listings.
Edit `data/collections.ts` for collection cards.
Edit `data/siteContent.ts` for reviews and studio imagery.
