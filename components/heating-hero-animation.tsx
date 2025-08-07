"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function HeatingHeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      isFlame: boolean

      constructor(isFlame = false) {
        if (!canvas) {
          // Provide default values if canvas is null
          this.x = 0
          this.y = 0
          this.size = 0
          this.speedX = 0
          this.speedY = 0
          this.color = "#000000"
          this.opacity = 0
          this.isFlame = false
          return
        }

        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = isFlame
          ? Math.random() > 0.5
            ? "#E54B3B"
            : "#2C3E50"
          : Math.random() > 0.5
          ? "#E54B3B"
          : "#2C3E50"
        this.opacity = Math.random() * 0.5 + 0.1
        this.isFlame = isFlame
      }

      update() {
        if (!canvas) return

        this.x += this.speedX
        this.y += this.speedY

        if (this.isFlame) {
          this.y -= 0.5
          this.size -= 0.02
          if (this.size <= 0) this.size = 0.1
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx || !canvas) return

        if (this.isFlame) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle =
            this.color +
            Math.floor(this.opacity * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fill()
          ctx.shadowBlur = 15
          ctx.shadowColor = this.color
        } else {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle =
            this.color +
            Math.floor(this.opacity * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }
    }

    // Only create particles if canvas and context exist
    if (!canvas || !ctx) return

    // Create particles
    const particles: Particle[] = []
    const flameParticles: Particle[] = []

    const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 12000))
    const flameCount = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 20000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    for (let i = 0; i < flameCount; i++) {
      flameParticles.push(new Particle(true))
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw regular particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Update and draw flame particles
      flameParticles.forEach((particle, index) => {
        particle.update()
        particle.draw()

        // Reset flame particles that have risen too high or become too small
        if (particle.y < 0 || particle.size <= 0.1) {
          flameParticles[index] = new Particle(true)
          if (canvas) {
            flameParticles[index].y = canvas.height
            flameParticles[index].x = Math.random() * canvas.width
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
}