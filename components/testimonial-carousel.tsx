"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type TestimonialProps = {
  name: string
  text: string
  rating: number
  image: string
}

export default function TestimonialCarousel({ testimonials }: { testimonials: TestimonialProps[] }) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const length = testimonials.length

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }, [current, length])

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }, [current, length])

  // Handle autoplay
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden relative rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating ? "fill-current" : "opacity-30"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              current === index 
                ? "bg-blue-600 w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-blue-600" />
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-blue-600" />
      </button>
    </div>
  )
}