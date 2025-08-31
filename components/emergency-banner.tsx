"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Phone, X } from "lucide-react"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const closeEmergencyBanner = () => {
    setIsVisible(false)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("emergency-banner-closed"))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="relative">
          <motion.div
            initial={false}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#be1d1d] text-white overflow-hidden z-50"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-center sm:text-left flex-1">
                  <AlertTriangle className="h-5 w-5 animate-pulse" />
                  <p className="text-xs font-medium whitespace-nowrap flex-shrink-0">Roofing Emergency? We offer 24/7 service!</p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link href="tel:4697653340" className="hidden md:flex text-sm font-bold items-center gap-1 hover:underline">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </Link>

                  <button
                    onClick={closeEmergencyBanner}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close banner"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}