import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./map-styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EmergencyBanner from "@/components/emergency-banner"
import { Toaster } from "@/components/ui/sonner"
import AIChatbot from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apple AC & Heat | HVAC Services in Rockwall, TX",
  description: "Professional HVAC services in Rockwall, TX and surrounding areas. Heating, cooling, and emergency repairs with 24/7 service available.",
  keywords: "HVAC, air conditioning, heating, repair, maintenance, Rockwall, Texas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
  )
}