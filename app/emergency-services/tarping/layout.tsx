import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Tarping Services | Matt Miller Contracting",
  description:
    "Immediate emergency roof tarping in Dallas-Fort Worth. 24/7 storm damage response to prevent further water damage. Professional emergency roofing services available now.",
  keywords:
    "emergency roof tarping, 24/7 emergency roofing, storm damage, emergency roof repair, Dallas Fort Worth, immediate roof protection",
  openGraph: {
    title: "24/7 Emergency Roof Tarping Services | Matt Miller Contracting",
    description:
      "Immediate emergency roof protection in Dallas-Fort Worth. Professional tarping services available 24/7 to prevent further damage.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Emergency roof tarping and storm damage protection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Roof Tarping Services | Matt Miller Contracting",
    description:
      "Immediate emergency roof protection available 24/7 in Dallas-Fort Worth area.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function TarpingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
