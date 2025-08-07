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
  Hammer,
} from "lucide-react"
import ServiceRequestForm from "@/components/service-request-form"
import ParallaxSection from "@/components/parallax-section"
import CalendlyWidget from "@/components/calendly-widget"

export default function RoofReplacementPage() {
  const repairSigns = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Age of Roof",
      description:
        "If your roof is over 20-25 years old, it may be time for a complete replacement to ensure optimal protection.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Frequent Repairs",
      description:
        "Multiple repairs in a short period often indicate that a full replacement would be more cost-effective than continued patching.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Missing or Damaged Shingles",
      description:
        "Widespread shingle damage, curling, or missing shingles across large areas of your roof indicate replacement is needed.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Granule Loss",
      description:
        "Excessive granule loss from asphalt shingles, visible in gutters or around your home, signals aging and deterioration.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sagging Roof Deck",
      description:
        "A sagging or uneven roof line indicates structural issues that require immediate attention and likely full replacement.",
    },
  ]

  const services = [
    {
      title: "Complete Roof Replacement",
      description: "Full roof system replacement with premium materials and professional installation for maximum protection.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Material Selection",
      description: "Expert guidance in choosing the right roofing materials for your home, climate, and budget requirements.",
      icon: <Hammer className="h-6 w-6" />,
    },
    {
      title: "Structural Assessment",
      description: "Comprehensive evaluation of your roof structure to ensure proper support for your new roofing system.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Warranty Protection",
      description: "Comprehensive warranties on both materials and workmanship to protect your investment for years to come.",
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-[#be1d1d] text-white px-4 py-1 rounded-full text-sm font-medium mb-2"
              >
                #1 Roof Replacement in Dallas-Fort Worth
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1724]"
              >
                Professional Roof Replacement Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              >
                Is your roof showing signs of age or storm damage? Matt Miller Contracting provides complete roof replacement services with premium materials and expert installation in the Dallas-Fort Worth area.
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
                    Get Free Estimate
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
                  alt="Professional Roof Replacement"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">Expert Roof Replacement</p>
                  <p className="text-sm mt-2">Quality materials, professional installation</p>
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
              Complete Roof Replacement Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From material selection to final installation, we handle every aspect of your roof replacement project
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

      {/* Roof Replacement Process */}
      <ParallaxSection>
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#be1d1d] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/4489755/pexels-photo-4489755.jpeg"
                  alt="Roof Replacement Process"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  Professional Installation
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Roof Replacement Process</h2>
              <div className="w-20 h-1.5 bg-[#be1d1d] rounded-full"></div>
              <p className="text-lg text-gray-700">
                At Matt Miller Contracting, we follow a systematic approach to roof replacement that ensures quality, efficiency, and minimal disruption to your daily life. Our process begins with a comprehensive inspection and assessment of your current roof structure.
              </p>
              <p className="text-lg text-gray-700">
                We then work with you to select the best materials for your specific needs, climate, and budget. Our experienced team handles all aspects of the installation, from removing the old roofing materials to installing your new roof system with precision and care.
              </p>
              <p className="text-lg text-gray-700">
                Every project includes thorough cleanup and a final inspection to ensure your complete satisfaction. We stand behind our work with comprehensive warranties on both materials and workmanship.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Trust Matt Miller Contracting for a roof replacement that protects your home and adds value to your property for decades to come.
              </p>
              <div className="pt-4">
                <Link
                  href="#service-form"
                  className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Signs You Need Roof Replacement */}
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
              Signs Your Roof Needs Replacement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Recognizing these warning signs early can help you avoid costly damage to your home&apos;s interior
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairSigns.map((sign, index) => (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0f1724] p-3 rounded-xl text-white">
                    {sign.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{sign.title}</h3>
                    <p className="text-gray-600">{sign.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              At Matt Miller Contracting, we recommend having your roof inspected regularly, especially after severe weather events. Early detection of these issues can help you plan for replacement and avoid emergency situations.
            </p>
            <Link
              href="tel:4697653340"
              className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Schedule Free Inspection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Premium Roofing Materials</h2>
              <div className="w-20 h-1.5 bg-[#be1d1d] rounded-full"></div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#be1d1d]" />
                  Quality Materials & Warranties
                </h3>
                <p className="text-gray-700">
                  We work with top manufacturers like GAF, Owens Corning, and CertainTeed to provide you with the highest quality roofing materials. All our installations come with comprehensive manufacturer warranties and our own workmanship guarantee.
                </p>
              </div>

              <p className="text-lg text-gray-700">
                Whether you prefer traditional asphalt shingles, architectural shingles, metal roofing, or specialty materials like slate or tile, we have the expertise to install your chosen system properly and efficiently.
              </p>

              <p className="text-lg text-gray-700">
                Our team will help you select the best materials based on your home&apos;s architecture, local climate conditions, energy efficiency goals, and budget requirements. We provide detailed estimates and explain the benefits of each option.
              </p>

              <div className="pt-4">
                <Link
                  href="#service-form"
                  className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Material Options
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute -inset-4 bg-[#be1d1d] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/4489755/pexels-photo-4489755.jpeg"
                  alt="Premium Roofing Materials"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  Premium Materials Available
                </div>
              </div>
            </motion.div>
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
              <span className="font-semibold">Professional Roof Replacement Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready for a New Roof? We&apos;ve Got You Covered!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Don't wait until small problems become major headaches. Matt Miller Contracting provides complete roof replacement services with premium materials, expert installation, and comprehensive warranties. Our experienced team ensures your new roof will protect your home for decades to come.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8"
            >
              We offer transparent pricing with no hidden fees and work with your insurance company to maximize your coverage. Contact us today for a free consultation and detailed estimate for your roof replacement project.
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
                <span>Call Now: (469) 765-3340</span>
              </Link>
              <Link
                href="#service-form"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Consultation</span>
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
                Schedule Your Roof Replacement Consultation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Get a free estimate and consultation for your roof replacement project
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