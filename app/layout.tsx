import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moorefamilyprintshop.com"),
  title: {
    default: "Moore Family Print Shop",
    template: "%s | Moore Family Print Shop",
  },
  description: "Colorful 3D printed creatures, cozy desk friends and tiny treasures — made with love for collectors and dreamers.",
  openGraph: {
    title: "Moore Family Print Shop",
    description: "Colorful 3D printed creatures, cozy desk friends and tiny treasures.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
