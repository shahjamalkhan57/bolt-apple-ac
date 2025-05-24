"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Snowflake, Flame, AlertCircle, Settings, ArrowRight, Check } from "lucide-react"

interface ServiceProps {
  service: {
    title: string
    icon: string
    description: string
    services: string[]
    color: string
    animation: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (service.icon) {
      case "snowflake":
        return <Snowflake className="h-8 w-8" />
      case "flame":
        return <Flame className="h-8 w-8" />
      case "alert-circle":
        return <AlertCircle className="h-8 w-8" />
      case "settings":
        return <Settings className="h-8 w-8" />
      default:
        return <Snowflake className="h-8 w-8" />
    }
  }

  const getAnimation = () => {
    switch (service.animation) {
      case "cool-breeze":
        return {
          animate: isHovered ? { rotate: [0, 15, 0, -15, 0], scale: 1.05 } : { rotate: 0, scale: 1 },
          transition: { duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 },
        }
      case "warm-glow":
        return {
          animate: isHovered ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : { scale: 1, opacity: 1 },
          transition: { duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 },
        }
      case "pulse":
        return {
          animate: isHovered ? { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] } : { scale: 1, opacity: 1 },
          transition: { duration: 0.8, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 },
        }
      case "rotate":
        return {
          animate: isHovered ? { rotate: [0, 360] } : { rotate: 0 },
          transition: { duration: 3, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 },
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom right, ${service.color.split(" ")[1]}, ${service.color.split(" ")[3]})`,
        }}
      ></div>

      <div className="p-8">
        <div className="flex items-start justify-between">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${service.color}`}
            {...getAnimation()}
          >
            {getIcon()}
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
              <ArrowRight className="h-5 w-5 text-gray-500 dark:text-gray-300" />
            </Link>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

        <ul className="space-y-2">
          {service.services.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${service.color}`}
              >
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-200">{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            className={`inline-flex items-center gap-2 font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color} group-hover:underline`}
          >
            Learn more about {service.title}
            <ArrowRight
              className={`h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color} group-hover:translate-x-1 transition-transform`}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}