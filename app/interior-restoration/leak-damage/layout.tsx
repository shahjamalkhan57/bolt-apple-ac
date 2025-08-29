import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leak-Related Damage Repair & Restoration | Matt Miller Contracting",
  description:
    "Professional leak damage restoration in Dallas-Fort Worth. Expert leak detection, water damage repair, and mold prevention. Complete restoration services available.",
  keywords:
    "leak damage repair, leak detection, water damage restoration, mold prevention, Dallas Fort Worth, interior restoration, leak repair",
  openGraph: {
    title: "Leak-Related Damage Repair & Restoration | Matt Miller Contracting",
    description:
      "Professional leak damage restoration services in Dallas-Fort Worth. Expert detection and complete restoration to protect your home.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional leak damage repair and restoration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leak-Related Damage Repair & Restoration | Matt Miller Contracting",
    description:
      "Expert leak damage restoration services in Dallas-Fort Worth area. Professional detection and repair.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function LeakDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
