import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Expert Siding Installation & Repair Services | Matt Miller Contracting",
  description:
    "Professional siding installation and repair in Dallas-Fort Worth. Vinyl, fiber cement, wood, and metal siding options. Storm damage restoration and energy-efficient solutions.",
  keywords:
    "siding installation, siding repair, vinyl siding, fiber cement siding, Dallas Fort Worth, storm damage, energy efficiency",
  openGraph: {
    title: "Expert Siding Installation & Repair | Matt Miller Contracting",
    description:
      "Transform your home's exterior with professional siding services in Dallas-Fort Worth. All siding types available with expert installation.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional siding installation and repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Siding Installation & Repair | Matt Miller Contracting",
    description:
      "Professional siding installation and repair services in Dallas-Fort Worth area. All siding types available.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function SidingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
