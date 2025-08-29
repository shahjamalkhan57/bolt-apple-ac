import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Leak Repair Services | Matt Miller Contracting",
  description:
    "Immediate emergency roof leak repair in Dallas-Fort Worth. 24/7 response to stop water damage and protect your home. Professional emergency roofing services available now.",
  keywords:
    "emergency roof leak repair, 24/7 emergency roofing, water damage repair, emergency roof service, Dallas Fort Worth, immediate leak repair",
  openGraph: {
    title: "24/7 Emergency Roof Leak Repair Services | Matt Miller Contracting",
    description:
      "Stop roof leaks immediately with 24/7 emergency repair services in Dallas-Fort Worth. Prevent water damage with professional leak repair.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Emergency roof leak repair and water damage prevention",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Roof Leak Repair Services | Matt Miller Contracting",
    description:
      "Emergency roof leak repair available 24/7 in Dallas-Fort Worth area. Stop water damage now.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function LeakRepairsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
