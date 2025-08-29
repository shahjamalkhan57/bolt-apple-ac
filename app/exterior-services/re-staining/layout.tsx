import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Wood Staining & Restoration Services | Matt Miller Contracting",
  description:
    "Expert wood staining and restoration in Dallas-Fort Worth. Deck staining, fence staining, and siding restoration. Protect and beautify your exterior wood surfaces.",
  keywords:
    "wood staining, deck staining, fence staining, wood restoration, Dallas Fort Worth, exterior wood protection, re-staining services",
  openGraph: {
    title: "Professional Wood Staining & Restoration | Matt Miller Contracting",
    description:
      "Protect and beautify your exterior wood with professional staining services in Dallas-Fort Worth. Expert restoration and maintenance.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional wood staining and restoration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Wood Staining & Restoration | Matt Miller Contracting",
    description:
      "Expert wood staining and restoration services in Dallas-Fort Worth area. Deck, fence, and siding staining.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function ReStainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
