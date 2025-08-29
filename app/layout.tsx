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
  title: "Matt Miller Contracting | Expert Roofing & Storm Restoration in Dallas-Fort Worth",
  description: "Professional roofing, exterior, and storm restoration services in Dallas-Fort Worth area. 24/7 emergency services, licensed contractors, and comprehensive warranties.",
  keywords: "roofing contractors, storm restoration, emergency roofing, Dallas Fort Worth, roof repair, roof replacement, exterior services",
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