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
            className="bg-gradient-to-r from-[#be1d1d] to-[#0f1724] text-white overflow-hidden z-50"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 animate-pulse" />
                  <p className="text-sm font-medium">Roofing Emergency? We offer 24/7 service!</p>
                </div>

                <div className="flex items-center gap-4">
                  <Link href="tel:4697653340" className="text-sm font-bold flex items-center gap-1 hover:underline">
                    <Phone className="h-4 w-4" />
                    (469) 765-3340
                  </Link>

                  <button
                    onClick={closeEmergencyBanner}
                    className="p-1 hover:bg-[#0f1724]/20 rounded-full transition-colors"
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