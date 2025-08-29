import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Window Installation & Repair Services | Matt Miller Contracting",
  description:
    "Expert window installation and repair in Dallas-Fort Worth. Energy-efficient windows, storm damage restoration, and professional installation. Enhance comfort and security.",
  keywords:
    "window installation, window repair, energy efficient windows, Dallas Fort Worth, storm damage, window replacement",
  openGraph: {
    title:
      "Professional Window Installation & Repair | Matt Miller Contracting",
    description:
      "Enhance your home with professional window services in Dallas-Fort Worth. Energy-efficient installation and expert repairs.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional window installation and repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Window Installation & Repair | Matt Miller Contracting",
    description:
      "Expert window installation and repair services in Dallas-Fort Worth area. Energy-efficient solutions available.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function WindowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
