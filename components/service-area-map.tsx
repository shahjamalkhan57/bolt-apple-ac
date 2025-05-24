"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronRight, ChevronLeft, Info } from "lucide-react"

interface ServiceAreaMapProps {
  serviceAreas: string[]
}

// Texas map coordinates for major cities
const cityCoordinates: Record<string, { x: number; y: number; size?: number }> = {
  Rockwall: { x: 52, y: 38, size: 1.5 },
  Dallas: { x: 48, y: 40 },
  Plano: { x: 49, y: 36 },
  Frisco: { x: 48, y: 33 },
  Garland: { x: 51, y: 39 },
  Mesquite: { x: 53, y: 41 },
  Irving: { x: 45, y: 40 },
  Rowlett: { x: 54, y: 38 },
  Forney: { x: 57, y: 40 },
  Fate: { x: 55, y: 37 },
  Sunnyvale: { x: 55, y: 42 },
  Corsicana: { x: 50, y: 55 },
  Ennis: { x: 48, y: 50 },
  Palmer: { x: 47, y: 47 },
  "Red Oak": { x: 45, y: 45 },
  Heartland: { x: 56, y: 43 },
  "Royce City": { x: 58, y: 35 },
}

export default function ServiceAreaMap({ serviceAreas }: ServiceAreaMapProps) {
  const [selectedArea, setSelectedArea] = useState<string | null>("Rockwall")
  const [activeView, setActiveView] = useState<"map" | "list">("map")
  const [visibleAreas, setVisibleAreas] = useState<string[]>([])
  const mapRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const areasPerPage = 6

  useEffect(() => {
    // Animate pins appearing one by one
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleAreas((prev) => {
          if (prev.length < serviceAreas.length) {
            return [...prev, serviceAreas[prev.length]]
          }
          clearInterval(interval)
          return prev
        })
      }, 100)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [serviceAreas])

  const handlePinClick = (area: string) => {
    setSelectedArea(area)
  }

  const totalPages = Math.ceil(serviceAreas.length / areasPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const paginatedAreas = serviceAreas.slice(currentPage * areasPerPage, (currentPage + 1) * areasPerPage)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
      {/* View Toggle */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          className={`flex-1 py-4 text-center font-medium transition-colors ${
            activeView === "map"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
          }`}
          onClick={() => setActiveView("map")}
        >
          Interactive Map
        </button>
        <button
          className={`flex-1 py-4 text-center font-medium transition-colors ${
            activeView === "list"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
          }`}
          onClick={() => setActiveView("list")}
        >
          Service Area List
        </button>
      </div>

      {/* Map View */}
      {activeView === "map" && (
        <div className="relative h-[500px] overflow-hidden" ref={mapRef}>
          {/* Texas Map Background */}
          <div className="absolute inset-0 bg-blue-50 dark:bg-gray-700/30">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full opacity-20 dark:opacity-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path
                d="M10,35 L15,15 L40,10 L45,5 L75,5 L80,10 L85,15 L90,35 L85,40 L85,45 L90,50 L90,60 L85,65 L80,70 L75,75 L70,80 L65,85 L60,90 L55,95 L35,95 L30,90 L25,85 L20,80 L15,75 L10,70 L5,65 L5,55 L10,50 L15,45 L10,40 L10,35"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="rgba(59, 130, 246, 0.3)"
              />
            </svg>
          </div>

          {/* Service Area Pins */}
          {Object.entries(cityCoordinates)
            .filter(([city]) => serviceAreas.includes(city) && visibleAreas.includes(city))
            .map(([city, coords]) => (
              <motion.div
                key={city}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  zIndex: selectedArea === city ? 20 : 10,
                }}
              >
                <button
                  className={`group relative ${selectedArea === city ? "z-20" : "z-10"}`}
                  onClick={() => handlePinClick(city)}
                  aria-label={`Select ${city}`}
                >
                  <div
                    className={`
                      flex items-center justify-center 
                      ${
                        selectedArea === city
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 dark:bg-gray-800 dark:text-red-400"
                      } 
                      ${city === "Rockwall" ? "w-12 h-12 text-sm" : "w-8 h-8 text-xs"}
                      rounded-full shadow-lg border-2 
                      ${
                        selectedArea === city
                          ? "border-white dark:border-gray-800"
                          : "border-red-500 dark:border-red-400"
                      }
                      transition-all duration-300 hover:scale-110
                    `}
                    style={{
                      transform: `scale(${coords.size || 1})`,
                    }}
                  >
                    {city === "Rockwall" ? (
                      <div className="text-center">
                        <MapPin className="h-4 w-4 mx-auto mb-0.5" />
                        <span className="font-bold text-xs">HQ</span>
                      </div>
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                  </div>

                  {/* City Label */}
                  <div
                    className={`
                      absolute top-full left-1/2 transform -translate-x-1/2 mt-1
                      whitespace-nowrap px-2 py-0.5 rounded-md text-xs font-medium
                      ${
                        selectedArea === city
                          ? "bg-red-500 text-white"
                          : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      }
                      shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    `}
                  >
                    {city}
                  </div>
                </button>
              </motion.div>
            ))}

          {/* Selected Area Info */}
          <AnimatePresence mode="wait">
            {selectedArea && (
              <motion.div
                key={selectedArea}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-red-500" />
                      {selectedArea}
                      {selectedArea === "Rockwall" && (
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs px-2 py-0.5 rounded-full">
                          Main Office
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {selectedArea === "Rockwall"
                        ? "Our headquarters and main service center"
                        : `We provide full HVAC services in ${selectedArea}`}
                    </p>

                    {selectedArea === "Rockwall" && (
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        <p>709 Country Club, Rockwall, TX 75032</p>
                      </div>
                    )}
                  </div>

                  <button
                    className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => setSelectedArea(null)}
                    aria-label="Close info"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-3 flex">
                  <a
                    href={`https://maps.google.com/?q=${selectedArea},TX`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Info className="h-3 w-3" />
                    View on Google Maps
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map Legend */}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-bold mb-2">Map Legend</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white dark:border-gray-800"></div>
              <span>Service Location</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-red-500 dark:bg-gray-800 dark:border-red-400"></div>
              <span>Available Service Area</span>
            </div>
          </div>

          {/* Map Instructions */}
          <div className="absolute bottom-24 right-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg shadow-md border border-blue-100 dark:border-blue-800/30 max-w-xs">
            <div className="text-xs text-blue-700 dark:text-blue-300 flex items-start gap-2">
              <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Click on any pin to see more information about our services in that area</span>
            </div>
          </div>
        </div>
      )}

      {/* List View */}
      {activeView === "list" && (
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {paginatedAreas.map((area) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`
                  p-4 rounded-lg border transition-colors
                  ${
                    area === "Rockwall"
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800/30"
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`
                    p-2 rounded-full 
                    ${
                      area === "Rockwall"
                        ? "bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-400"
                        : "bg-red-100 dark:bg-red-800/30 text-red-600 dark:text-red-400"
                    }
                  `}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">{area}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {area === "Rockwall" ? "Main Office & Service Center" : "Service Area"}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${area},TX`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-2"
                    >
                      View on map
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm">
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}