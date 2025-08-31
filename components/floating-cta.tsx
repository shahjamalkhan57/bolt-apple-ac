"use client"

import React, { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Show the CTA after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const dismissCTA = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <div 
      className={cn(
        "fixed bottom-[120px] right-6 z-[9999] transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
        isDismissed && "hidden"
      )}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
        <button 
          className="absolute -top-3 -right-3 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full text-gray-500"
          onClick={dismissCTA}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-sm text-gray-600">Need help?</p>
            <p className="font-bold text-gray-900">Call us now!</p>
          </div>
        </div>
        
        <Link
          href="tel:2147897262"
          className="bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 w-full transition-colors"
        >
          <Phone className="h-4 w-4" />
          (214) 789-7262
        </Link>
      </div>
    </div>
  )
}