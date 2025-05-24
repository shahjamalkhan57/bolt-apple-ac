"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, ChevronRight, ChevronLeft, Info } from "lucide-react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

// Dynamically import Leaflet components with no SSR to avoid hydration issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
)
const ZoomControl = dynamic(
  () => import("react-leaflet").then((mod) => mod.ZoomControl),
  { ssr: false }
)

interface ServiceArea {
  name: string
  coordinates: [number, number] // Fixed type to be a tuple
  isMainOffice?: boolean
  address?: string
  description?: string
}

interface ServiceAreaMapProps {
  serviceAreas: ServiceArea[]
}

export default function EnhancedServiceAreaMap({
  serviceAreas,
}: ServiceAreaMapProps) {
  const [activeView, setActiveView] = useState<"map" | "list">("map")
  const [currentPage, setCurrentPage] = useState(0)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [customIcon, setCustomIcon] = useState<any>(null)
  const [mainOfficeIcon, setMainOfficeIcon] = useState<any>(null)
  const mapRef = useRef<any>(null)
  const areasPerPage = 6

  // Center map on Rockwall, TX
  const mapCenter: [number, number] = [32.8998, -96.4594]
  const totalPages = Math.ceil(serviceAreas.length / areasPerPage)
  const paginatedAreas = serviceAreas.slice(
    currentPage * areasPerPage,
    (currentPage + 1) * areasPerPage
  )

  // Load Leaflet and create custom icons when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import Leaflet and create custom icons
      import("leaflet").then((L) => {
        // Fix the icon image paths by directly setting the options
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })

        // Create custom icon for service areas
        const serviceIcon = new L.Icon({
          iconUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
          iconRetinaUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          shadowUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
          className: "service-area-marker",
        })

        // Create custom icon for main office
        const mainIcon = new L.Icon({
          iconUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
          iconRetinaUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          shadowUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
          iconSize: [40, 65], // Much larger size for main office
          iconAnchor: [20, 65],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
          className: "main-office-marker",
        })

        setCustomIcon(serviceIcon)
        setMainOfficeIcon(mainIcon)
        setMapLoaded(true)
      })
    }
  }, [])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Function to fly to a location on the map
  const flyToLocation = (coordinates: [number, number]) => {
    if (mapRef.current) {
      mapRef.current.flyTo(coordinates, 12, {
        duration: 1.5,
      })
    }
  }

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
        <div className="relative h-[500px]">
          {mapLoaded && customIcon && mainOfficeIcon ? (
            <MapContainer
              center={mapCenter}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ZoomControl position="bottomright" />

              {/* Render markers for each service area */}
              {serviceAreas.map((area) => (
                <Marker
                  key={area.name}
                  position={area.coordinates}
                  icon={area.isMainOffice ? mainOfficeIcon : customIcon}
                >
                  <Tooltip
                    permanent={area.isMainOffice}
                    direction="top"
                    className={`custom-tooltip ${
                      area.isMainOffice ? "main-office-tooltip" : ""
                    }`}
                    offset={[0, -20]}
                  >
                    <div
                      className={`text-center ${
                        area.isMainOffice ? "font-bold text-base" : "text-sm"
                      }`}
                    >
                      {area.name}
                      {area.isMainOffice && (
                        <div className="text-xs text-blue-100">Main Office</div>
                      )}
                    </div>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <div className="animate-pulse text-gray-500 dark:text-gray-400">
                Loading map...
              </div>
            </div>
          )}

          {/* Map Legend */}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-bold mb-2">Map Legend</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Service Location</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px] font-bold">
                HQ
              </div>
              <span>Main Office</span>
            </div>
          </div>

          {/* Map Instructions */}
          <div className="absolute bottom-4 left-4 md:left-auto md:right-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg shadow-md border border-blue-100 dark:border-blue-800/30 max-w-xs">
            <div className="text-xs text-blue-700 dark:text-blue-300 flex items-start gap-2">
              <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Hover over any pin to see location information</span>
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
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`
                  p-4 rounded-lg border transition-colors cursor-pointer
                  ${
                    area.isMainOffice
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800/30"
                  }
                `}
                onClick={() => {
                  setActiveView("map")
                  setTimeout(() => flyToLocation(area.coordinates), 100)
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`
                    p-2 rounded-full 
                    ${
                      area.isMainOffice
                        ? "bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-400"
                        : "bg-red-100 dark:bg-red-800/30 text-red-600 dark:text-red-400"
                    }
                  `}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">
                      {area.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {area.isMainOffice
                        ? "Main Office & Service Center"
                        : "Service Area"}
                    </p>
                    {area.address && (
                      <p className="text-xs text-gray-500 mt-1">
                        {area.address}
                      </p>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveView("map")
                        setTimeout(() => flyToLocation(area.coordinates), 100)
                      }}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-2"
                    >
                      View on map
                      <ChevronRight className="h-3 w-3" />
                    </button>
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