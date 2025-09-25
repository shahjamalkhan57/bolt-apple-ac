import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./map-styles.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EmergencyBanner from "@/components/emergency-banner";
import { Toaster } from "@/components/ui/sonner";
import AIChatbot from "@/components/ai-chatbot";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Matt Miller Contracting | Expert Roofing & Storm Restoration in Dallas-Fort Worth",
  description:
    "Professional roofing, exterior, and storm restoration services in Dallas-Fort Worth area. 24/7 emergency services, licensed contractors, and comprehensive warranties.",
  keywords:
    "roofing contractors, storm restoration, emergency roofing, Dallas Fort Worth, roof repair, roof replacement, exterior services",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1336702017824166');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1336702017824166&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <EmergencyBanner />
          <Header />
          <main>{children}</main>
          <Footer />
          <AIChatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
