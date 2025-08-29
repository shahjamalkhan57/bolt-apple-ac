import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shingle Roofing Services - Asphalt, Metal, Tile & Slate | Matt Miller Contracting",
  description:
    "Professional shingle roofing installation and repair in Dallas-Fort Worth. Asphalt, metal, tile, and slate shingles available. Expert installation with comprehensive warranties.",
  keywords:
    "shingle roofing, asphalt shingles, metal shingles, tile shingles, slate shingles, roof installation, Dallas Fort Worth roofing",
  openGraph: {
    title: "Professional Shingle Roofing Services | Matt Miller Contracting",
    description:
      "Expert installation of asphalt, metal, tile, and slate shingles in Dallas-Fort Worth. Premium materials with professional installation.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional shingle roof installation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Shingle Roofing Services | Matt Miller Contracting",
    description:
      "Expert shingle roofing installation and repair. All shingle types available in Dallas-Fort Worth area.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function ShinglesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
