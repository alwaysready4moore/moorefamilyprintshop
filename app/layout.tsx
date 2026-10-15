import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moorefamilyprintshop.com"),
  title: {default:"Moore Family Print Shop | Colorful 3D Printed Gifts",template:"%s | Moore Family Print Shop"},
  description:"Delaware family-owned 3D print shop selling finished desk signs, keychains, fidgets, decor, and collectible displays through Etsy.",
  openGraph: {
    type:"website",
    title:"Moore Family Print Shop",
    description:"3D-printed desk accessories, keychains, fidgets, and collectibles from Moore Family Print Shop in Delaware.",
    images:[{url:"/products/dumpster-fire.webp",width:800,height:1000,alt:"Cute mint green 3D printed dumpster fire"}],
  },
  icons: { icon:"/brand/family-logo.webp" },
};
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#f8f4ff"};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}