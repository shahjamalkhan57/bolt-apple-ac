import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Conditioning Services in Rockwall, TX | Apple AC & Heat",
  description:
    "Professional AC installation, repair, and maintenance services in Rockwall, TX. 24/7 emergency AC repair available. Licensed HVAC contractors serving Dallas-Fort Worth area.",
  keywords:
    "air conditioning, AC repair, AC installation, HVAC services, Rockwall TX, emergency AC repair, Dallas Fort Worth",
  openGraph: {
    title: "Expert Air Conditioning Services | Apple AC & Heat",
    description:
      "Keep your home cool with professional AC services in Rockwall, TX. Installation, repair, and maintenance by licensed HVAC experts.",
    images: [
      {
        url: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional AC technician working on air conditioning unit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Air Conditioning Services | Apple AC & Heat",
    description:
      "Professional AC installation, repair, and maintenance in Rockwall, TX. 24/7 emergency service available.",
    images: [
      "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg",
    ],
  },
};

export default function AirConditioningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
