import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Matt Miller Contracting | 18+ Years of Roofing Excellence",
  description:
    "Learn about Matt Miller's 18+ years of roofing experience in Dallas-Fort Worth. Committed to providing the best roofing and exterior services with local expertise and dedication.",
  keywords:
    "Matt Miller, roofing contractor, Dallas Fort Worth, 18 years experience, local roofing expert, roofing company history",
  openGraph: {
    title: "About Matt Miller Contracting | Local Roofing Expert",
    description:
      "Discover Matt Miller's journey from experienced roofer to trusted local contractor serving Dallas-Fort Worth with 18+ years of expertise.",
    images: [
      {
        url: "https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg",
        width: 1200,
        height: 630,
        alt: "Matt Miller Contracting - Local roofing expert",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Matt Miller Contracting | Local Roofing Expert",
    description:
      "18+ years of roofing experience serving Dallas-Fort Worth with dedication and local expertise.",
    images: ["https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}