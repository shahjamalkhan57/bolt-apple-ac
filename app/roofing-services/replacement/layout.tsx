import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Roof Replacement Services | Matt Miller Contracting",
  description:
    "Complete roof replacement services in Dallas-Fort Worth area. Premium materials, expert installation, and comprehensive warranties. Licensed roofing contractors with 20+ years experience.",
  keywords:
    "roof replacement, new roof installation, roofing contractors, Dallas Fort Worth, premium roofing materials, roof installation",
  openGraph: {
    title: "Professional Roof Replacement Services | Matt Miller Contracting",
    description:
      "Transform your home with professional roof replacement. Premium materials, expert installation, and comprehensive warranties in Dallas-Fort Worth.",
    images: [
      {
        url: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional roof replacement installation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Roof Replacement Services | Matt Miller Contracting",
    description:
      "Complete roof replacement with premium materials and expert installation in Dallas-Fort Worth area.",
    images: [
      "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg",
    ],
  },
};

export default function ReplacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
