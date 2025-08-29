import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hail Damage Repair & Restoration Services | Matt Miller Contracting",
  description:
    "Expert hail damage assessment and repair in Dallas-Fort Worth. Professional storm damage restoration with insurance claim assistance. Free hail damage inspections available.",
  keywords:
    "hail damage repair, storm damage restoration, roof hail damage, insurance claims, Dallas Fort Worth, emergency roof repair",
  openGraph: {
    title: "Hail Damage Repair & Restoration | Matt Miller Contracting",
    description:
      "Professional hail damage assessment and repair services in Dallas-Fort Worth. Expert storm damage restoration with insurance assistance.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional hail damage assessment and repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Damage Repair & Restoration | Matt Miller Contracting",
    description:
      "Expert hail damage assessment and repair in Dallas-Fort Worth. Free inspections and insurance assistance.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function HailDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
