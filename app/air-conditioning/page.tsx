"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Phone,
  Snowflake,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wrench,
  ThermometerSun,
  Zap,
  Calendar,
  DollarSign,
  Wind,
  Fan,
  Thermometer,
} from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import ServiceRequestForm from "@/components/service-request-form"
import ParallaxSection from "@/components/parallax-section"
import { useState } from "react"
import { ScheduleServiceModal } from "@/components/schedule-service-modal"

const features = [
  {
    icon: <Fan className="h-6 w-6" />,
    title: "AC Installation",
    description: "Professional installation of new AC systems with top brands like Lennox, Trane, and Goodman.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "AC Repair",
    description: "Expert diagnosis and repair services for all AC makes and models.",
  },
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "AC Maintenance",
    description: "Regular maintenance to keep your system running efficiently and prevent costly repairs.",
  },
]

const warningSignsList = [
  "Sudden increases in electric bills",
  "Multiple repairs needed",
  "Blowing hot air or inconsistent temperatures",
  "Loud noises from the unit",
  "Persistent humidity issues",
  "Unit is over 10 years old",
]

export default function AirConditioningPage() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3637830/pexels-photo-3637830.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Expert Air Conditioning{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Keep your home cool and comfortable with our professional AC installation, repair, and maintenance services
                in Rockwall and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:4697653340"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  (469) 765-3340
                </Link>
                <ScheduleServiceModal />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
                  alt="AC Technician at work"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">Professional AC Services</p>
                    <p className="text-sm opacity-90">Available 24/7 for Emergency Repairs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ParallaxSection className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive AC Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              From installation to maintenance, we provide complete air conditioning services for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Warning Signs Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Signs Your AC Needs Attention</h2>
              <div className="space-y-4">
                {warningSignsList.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">{sign}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/4489755/pexels-photo-4489755.jpeg"
                alt="AC Unit"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Don&apos;t wait until your AC completely breaks down. Regular maintenance can prevent costly repairs and extend
                  your system&apos;s life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today for a free consultation and estimate. Our expert technicians are ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:4697653340"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
                <ScheduleServiceModal />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <Zap className="h-8 w-8 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency AC Service</h3>
                <p className="opacity-90">We&apos;re here when you need us most</p>
              </div>
            </div>
            <Link
              href="tel:4697653340"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (469) 765-3340
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}