import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Water Damage Restoration Services | Matt Miller Contracting",
  description:
    "Emergency water damage restoration in Dallas-Fort Worth. Professional water extraction, structural drying, and complete restoration. 24/7 response to minimize damage.",
  keywords:
    "water damage restoration, emergency water extraction, structural drying, Dallas Fort Worth, 24/7 water damage, mold prevention",
  openGraph: {
    title: "24/7 Water Damage Restoration | Matt Miller Contracting",
    description:
      "Professional water damage restoration services in Dallas-Fort Worth. Emergency response available 24/7 to minimize damage and restore your home.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional water damage restoration services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Water Damage Restoration | Matt Miller Contracting",
    description:
      "Emergency water damage restoration available 24/7 in Dallas-Fort Worth area.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function WaterDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
