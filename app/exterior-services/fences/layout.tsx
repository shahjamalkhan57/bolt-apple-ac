import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Fence Installation & Repair Services | Matt Miller Contracting",
  description:
    "Expert fence installation and repair in Dallas-Fort Worth. Wood and vinyl fencing options. Storm damage restoration and gate installation. Enhance privacy and security.",
  keywords:
    "fence installation, fence repair, wood fencing, vinyl fencing, Dallas Fort Worth, gate installation, storm damage, privacy fencing",
  openGraph: {
    title: "Professional Fence Installation & Repair | Matt Miller Contracting",
    description:
      "Enhance your property with professional fence services in Dallas-Fort Worth. Wood and vinyl options with expert installation.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional fence installation and repair",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Fence Installation & Repair | Matt Miller Contracting",
    description:
      "Expert fence installation and repair services in Dallas-Fort Worth area. Wood and vinyl options available.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function FencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
