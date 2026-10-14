import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moorefamilyprintshop.com"),
  title: {default:"Moore Family Print Shop | Colorful 3D Printed Gifts",template:"%s | Moore Family Print Shop"},
  description:"Family-run 3D print shop making colorful desk friends, fidgets, collectible gifts and tiny treasures. Made with love in Delaware. Shop on Etsy.",
  openGraph: {
    type:"website",
    title:"Moore Family Print Shop",
    description:"Tiny treasures. Lots of personality. Family-run 3D printed gifts and desk friends.",
    images:[{url:"/products/dumpster-fire.webp",width:800,height:1000,alt:"Cute mint green 3D printed dumpster fire"}],
  },
  icons: { icon:"/brand/family-logo.webp" },
};
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#f8f4ff"};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}