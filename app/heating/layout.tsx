import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heating Services & Furnace Repair in Rockwall, TX | Apple AC & Heat",
  description:
    "Expert heating services, furnace repair, and installation in Rockwall, TX. 24/7 emergency heating repair available. Licensed HVAC contractors serving Dallas-Fort Worth.",
  keywords:
    "heating services, furnace repair, furnace installation, HVAC heating, Rockwall TX, emergency heating repair, Dallas Fort Worth",
  openGraph: {
    title: "Professional Heating Services | Apple AC & Heat",
    description:
      "Keep your home warm with expert heating services in Rockwall, TX. Furnace repair, installation, and maintenance by licensed professionals.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional heating technician servicing furnace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Heating Services | Apple AC & Heat",
    description:
      "Expert heating services, furnace repair, and installation in Rockwall, TX. 24/7 emergency service available.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function HeatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
