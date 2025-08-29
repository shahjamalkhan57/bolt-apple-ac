import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Expert Roof Repair Services in Dallas-Fort Worth | Matt Miller Contracting",
  description:
    "Professional roof repair services in Dallas-Fort Worth area. Emergency leak repair, storm damage restoration, and shingle replacement. Licensed roofing contractors available 24/7.",
  keywords:
    "roof repair, emergency roof repair, leak repair, storm damage repair, Dallas Fort Worth, roofing contractors, shingle repair",
  openGraph: {
    title: "Expert Roof Repair Services | Matt Miller Contracting",
    description:
      "Fast, reliable roof repair services in Dallas-Fort Worth. Emergency repairs available 24/7 to protect your home from further damage.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional roofer performing roof repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Roof Repair Services | Matt Miller Contracting",
    description:
      "Professional roof repair services in Dallas-Fort Worth. Emergency repairs available 24/7.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function RepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
