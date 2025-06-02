"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Air Conditioning",
    href: "/air-conditioning",
    children: [
      { label: "AC Installation", href: "/air-conditioning#installation" },
      { label: "AC Repair", href: "/air-conditioning#repair" },
      { label: "AC Maintenance", href: "/air-conditioning#maintenance" },
      { label: "Duct Installation & Repair", href: "/air-conditioning#ducts" },
    ],
  },
  {
    label: "Heating",
    href: "/heating",
    children: [
      { label: "Furnace Installation", href: "/heating#installation" },
      { label: "Furnace Repair", href: "/heating#repair" },
      { label: "Furnace Service", href: "/heating#service" },
      { label: "Heat Pumps", href: "/heating#heat-pumps" },
    ],
  },
  {
    label: "Emergency Services",
    href: "/emergency",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const isMobile = useMobile()
  const [emergencyBannerVisible, setEmergencyBannerVisible] = useState(true)

  useEffect(() => {
    const handleBannerClose = () => {
      setEmergencyBannerVisible(false)
    }

    window.addEventListener("emergency-banner-closed", handleBannerClose)

    return () => {
      window.removeEventListener("emergency-banner-closed", handleBannerClose)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
        emergencyBannerVisible && !scrolled ? "mt-10" : "mt-0",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image 
              src="https://i.postimg.cc/Twxk7MTP/Screenshot-18-5-2025-234358-acheatservices-com.jpg"
              alt="Apple AC & Heat Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="font-bold text-xl md:text-2xl">
              <span className="text-blue-600 dark:text-blue-400">Apple</span>{" "}
              <span className="text-red-500 dark:text-red-400">AC & Heat</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-md flex items-center gap-1 group"
                    >
                      {item.label}
                    </Link>
                    <button
                      className="p-1 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-md block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="tel:4697653340"
              className={cn(
                "hidden md:flex items-center gap-2 text-white font-medium rounded-full transition-all",
                scrolled
                  ? "bg-blue-600 hover:bg-blue-700 px-4 py-2"
                  : "bg-blue-600/90 hover:bg-blue-600 backdrop-blur-sm px-4 py-2",
              )}
            >
              <Phone className="h-4 w-4" />
              <span>(469) 765-3340</span>
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden relative z-50 p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 lg:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container h-full mx-auto px-4 py-20 overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                {item.children ? (
                  <div>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full py-2 text-lg font-medium"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span className="sr-only">Toggle {item.label} menu</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          activeDropdown === item.label ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "mt-2 ml-4 space-y-2 transition-all duration-300",
                        activeDropdown === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                          onClick={toggleMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="block py-2 text-lg font-medium" onClick={toggleMenu}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Link
              href="tel:4697653340"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-medium rounded-full px-6 py-3 w-full"
              onClick={toggleMenu}
            >
              <Phone className="h-5 w-5" />
              <span>(469) 765-3340</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-red-500 text-white font-medium rounded-full px-6 py-3 w-full"
              onClick={toggleMenu}
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}