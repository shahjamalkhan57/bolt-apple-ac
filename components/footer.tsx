import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Matt Miller Contracting</h3>
            <p className="text-gray-400">
              Providing reliable roofing and restoration in Dallas–Fort Worth and surrounding areas.
            </p>
            <p className="text-sm text-gray-400">License: #RC123456</p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/roofing-services" className="text-gray-400 hover:text-white transition-colors">
                  Roofing Services
                </Link>
              </li>
              <li>
                <Link href="/exterior-services" className="text-gray-400 hover:text-white transition-colors">
                  Exterior Services
                </Link>
              </li>
              <li>
                <Link href="/interior-restoration" className="text-gray-400 hover:text-white transition-colors">
                  Interior Restoration
                </Link>
              </li>
              <li>
                <Link href="/emergency-services" className="text-gray-400 hover:text-white transition-colors">
                  24/7 Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Main Street, Fort Worth, TX 76000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <Link href="tel:4697653340" className="text-gray-400 hover:text-white transition-colors">
                  (469) 765-3340
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <Link
                  href="mailto:matt@millerroofs.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  matt@millerroofs.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-400">Fort Worth</span>
              <span className="text-gray-400">Dallas</span>
              <span className="text-gray-400">Arlington</span>
              <span className="text-gray-400">Plano</span>
              <span className="text-gray-400">Irving</span>
              <span className="text-gray-400">Garland</span>
              <span className="text-gray-400">Mesquite</span>
              <span className="text-gray-400">Grand Prairie</span>
              <Link href="/locations" className="text-blue-400 hover:text-blue-300 col-span-2">
                View All Locations →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} All rights reserved, Matt Miller Contracting</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}