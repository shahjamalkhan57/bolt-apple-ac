import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Gutter Installation & Repair Services | Matt Miller Contracting",
  description:
    "Expert gutter installation, repair, and cleaning in Dallas-Fort Worth. Seamless gutters, gutter guards, and storm damage restoration. Protect your home's foundation.",
  keywords:
    "gutter installation, gutter repair, seamless gutters, gutter guards, Dallas Fort Worth, foundation protection, storm damage",
  openGraph: {
    title: "Professional Gutter Services | Matt Miller Contracting",
    description:
      "Expert gutter installation and repair services in Dallas-Fort Worth. Seamless gutters and gutter guards to protect your home.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional gutter installation and repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Gutter Services | Matt Miller Contracting",
    description:
      "Expert gutter installation, repair, and cleaning services in Dallas-Fort Worth area.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function GuttersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
