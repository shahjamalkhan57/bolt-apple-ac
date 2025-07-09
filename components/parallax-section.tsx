"use client"

import React, { useRef, useEffect, useState } from "react"
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
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle parallax effect on scroll
  useEffect(() => {
    if (!mounted) return

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
  }, [speed, mounted])

  return (
    <section 
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
      style={{ transform: mounted ? `translateY(${offset}px)` : undefined }}
    >
      {children}
    </section>
  )
}