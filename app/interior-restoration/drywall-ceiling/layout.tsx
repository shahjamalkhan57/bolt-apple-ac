import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Drywall & Ceiling Repair Services | Matt Miller Contracting",
  description: "Expert drywall and ceiling repair in Dallas-Fort Worth. Water damage restoration, hole repair, texture matching, and seamless finishing. Professional interior restoration.",
  keywords: "drywall repair, ceiling repair, water damage restoration, texture matching, Dallas Fort Worth, interior restoration, hole repair",
  openGraph: {
    title: "Professional Drywall & Ceiling Repair | Matt Miller Contracting",
    description: "Expert drywall and ceiling repair services in Dallas-Fort Worth. Seamless repairs and water damage restoration for perfect results.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional drywall and ceiling repair services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Drywall & Ceiling Repair | Matt Miller Contracting",
    description: "Expert drywall and ceiling repair services in Dallas-Fort Worth area. Seamless repairs and restoration.",
    images: ["https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg"],
  },
};

export default function DrywallCeilingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
