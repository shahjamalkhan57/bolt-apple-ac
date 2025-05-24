"use client"

import React, { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function ParallaxSection({ 
  children, 
  className,
  speed = 0.1 
}: { 
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how far into the viewport the section is
      const sectionTop = top - windowHeight
      const sectionPosition = Math.max(0, Math.min(1, -sectionTop / windowHeight))
      
      // Set parallax offset
      setOffset(sectionPosition * speed * 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section 
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </section>
  )
}

// We need to import useState here at the bottom to avoid the React error
import { useState } from "react"