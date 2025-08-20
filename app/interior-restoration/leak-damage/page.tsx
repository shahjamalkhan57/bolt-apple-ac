"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Phone,
  Home,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wrench,
  Shield,
  Zap,
  Calendar,
  DollarSign,
  Droplets,
} from "lucide-react"
import ParallaxSection from "@/components/parallax-section"
import CalendlyWidget from "@/components/calendly-widget"

export default function LeakDamagePage() {
  const leakSources = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Roof Leaks",
      description:
        "Damaged or missing shingles, flashing issues, and storm damage can cause water to penetrate your home&apos;s interior.",
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Plumbing Leaks",
      description:
        "Burst pipes, failed fixtures, and plumbing connections can cause significant water damage to walls and floors.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Window & Door Leaks",
      description:
        "Poor sealing around windows and doors allows water infiltration during storms and heavy rain.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "HVAC System Leaks",
      description:
        "Air conditioning condensation issues and heating system problems can create ongoing moisture damage.",
    },
  ]

  const services = [
    {
      title: "Leak Source Identification",
      description: "Professional inspection to locate and identify all sources of water infiltration in your home.",
      icon: <AlertTriangle className="h-6 w-6" />,
    },
    {
      title: "Water Damage Restoration",
      description: "Complete restoration of leak-damaged areas including drying, cleaning, and structural repairs.",
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      title: "Mold Prevention & Remediation",
      description: "Professional mold prevention and removal services to protect your family&apos;s health.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Structural Repairs",
      description: "Complete repair of structural damage caused by long-term leaks and water infiltration.",
      icon: <Home className="h-6 w-6" />,
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Prevents Further Damage",
      description:
        "Quick identification and repair of leaks prevents extensive damage and costly repairs.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health Protection",
      description:
        "Professional restoration prevents mold growth that can cause serious health issues.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Insurance Assistance",
      description:
        "We work with insurance companies to document damage and maximize your coverage.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Complete Restoration",
      description:
        "Full restoration services return your home to its original condition or better.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-[#be1d1d] text-white px-4 py-1 rounded-full text-sm font-medium mb-2"
              >
                Professional Leak Damage Restoration
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1724]"
              >
                Leak-Related Damage Repair
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              >
                Stop leaks at their source and restore the damage they&apos;ve caused. Matt Miller Contracting provides comprehensive leak detection and damage restoration services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="tel:4697653340"
                  className="rounded-full bg-[#be1d1d] px-6 py-4 text-white shadow-lg transition-all hover:bg-[#be1d1d]/90 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 font-bold">
                    <Phone className="h-5 w-5" />
                    (469) 765-3340
                  </span>
                </Link>
                <Link
                  href="#service-form"
                  className="rounded-full bg-white border-2 border-[#0f1724] px-6 py-4 text-[#0f1724] shadow-lg transition-all hover:bg-[#0f1724] hover:text-white hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 font-bold">
                    Emergency Service
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#be1d1d] rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white transform hover:rotate-2 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
                  alt="Leak Damage Restoration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">Expert Leak Damage Restoration</p>
                  <p className="text-sm mt-2">Complete leak detection and repair</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Complete Leak Damage Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From leak detection to complete restoration, we handle every aspect of leak-related damage
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0f1724] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Leak Sources */}
      <ParallaxSection>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Common Sources of Leak Damage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              We identify and repair leaks from all sources to prevent ongoing damage
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leakSources.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0f1724] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                  {source.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{source.title}</h3>
                <p className="text-gray-600">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Address Leak Damage Quickly
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Professional leak damage restoration protects your home and family
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0f1724] p-3 rounded-xl text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call-Out Section */}
      <section className="py-20 bg-[#be1d1d] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Emergency Leak Damage Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Stop Leaks Before They Cause Major Damage!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Leaks don&apos;t fix themselves - they only get worse. Matt Miller Contracting provides immediate leak detection and comprehensive damage restoration to protect your home and prevent costly repairs down the road.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="tel:4697653340"
                className="inline-flex items-center gap-2 bg-white text-[#be1d1d] font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Phone className="h-6 w-6 animate-pulse" />
                <span>Emergency: (469) 765-3340</span>
              </Link>
              <Link
                href="#service-form"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Service</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section id="service-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Get Emergency Leak Damage Help
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Contact us immediately for leak detection and damage restoration services
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CalendlyWidget />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}