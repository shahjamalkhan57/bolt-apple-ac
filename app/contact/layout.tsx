import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Matt Miller Contracting | Get Your Free Roofing Estimate",
  description:
    "Contact Matt Miller Contracting for expert roofing services in Dallas-Fort Worth. Call (469) 765-3340 for 24/7 emergency service or schedule your free estimate online.",
  keywords:
    "contact roofing contractor, Dallas Fort Worth roofing, free roofing estimate, emergency roofing service, Matt Miller Contracting contact",
  openGraph: {
    title: "Contact Matt Miller Contracting | Free Roofing Estimates",
    description:
      "Get in touch with Dallas-Fort Worth's trusted roofing experts. Free estimates, 24/7 emergency service, and professional consultation available.",
    images: [
      {
        url: "https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Matt Miller Contracting for roofing services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Matt Miller Contracting | Free Roofing Estimates",
    description:
      "Contact Dallas-Fort Worth's trusted roofing contractor. Free estimates and 24/7 emergency service available.",
    images: ["https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}