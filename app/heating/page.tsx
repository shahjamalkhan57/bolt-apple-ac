"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Phone,
  Flame,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wrench,
  ThermometerSnowflake,
  Zap,
  Calendar,
  DollarSign,
  Shield,
} from "lucide-react"
import ServiceRequestForm from "@/components/service-request-form"
import ParallaxSection from "@/components/parallax-section"
import CalendlyWidget from "@/components/calendly-widget"

export default function HeatingPage() {
  const repairSigns = [
    {
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      title: "Inconsistent Heating",
      description:
        "Uneven temperatures across different areas of your home can indicate an issue with your heating system.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Rise in Energy Bills",
      description:
        "An unexpected spike in your energy bills often suggests that your heating system is working harder than it should, indicating a potential efficiency problem.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Unusual Noises",
      description:
        "Strange sounds such as banging, rattling, or squealing coming from your heating unit may signify a mechanical problem.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Frequent Cycling",
      description:
        "If your system is turning on and off more frequently than usual, it might be struggling to maintain the desired temperature due to a malfunction.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Poor Air Quality",
      description:
        "A decline in indoor air quality, evidenced by increased dust or a stale smell, could mean your system needs cleaning or repair.",
    },
  ]

  const services = [
    {
      title: "Furnace Installation",
      description: "Professional installation of high-efficiency furnaces tailored to your home&apos;s specific needs.",
      icon: <Flame className="h-6 w-6" />,
    },
    {
      title: "Furnace Repair",
      description: "Quick diagnosis and repair services for all furnace issues to restore your comfort as soon as possible.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Furnace Maintenance",
      description: "Regular tune-ups to keep your heating system running efficiently and prevent costly breakdowns.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for those unexpected heating emergencies that can&apos;t wait.",
      icon: <Clock className="h-6 w-6" />,
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
                #1 Heating Service in Rockwall, TX
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1724]"
              >
                HVAC Heating Service in Rockwall
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              >
                Is it cold outside and you just noticed your HVAC system isn&apos;t warming up your house? Call Apple AC &
                Heat for furnace heating repairs and replacement in Rockwall, TX.
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
                    Schedule Service
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white transform hover:rotate-2 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg"
                  alt="Heating Service Technician"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">Expert Heating Solutions</p>
                  <p className="text-sm mt-2">Reliable service when you need it most</p>
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
              Our Comprehensive Heating Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From installation to maintenance and emergency repairs, we keep your home warm and comfortable
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

      {/* Furnace Maintenance */}
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/4489755/pexels-photo-4489755.jpeg"
                  alt="HVAC Furnace Maintenance"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  HVAC Furnace Maintenance
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
              <h2 className="text-3xl md:text-4xl font-bold">Dallas Furnace Repair</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full"></div>
              <p className="text-lg text-gray-700">
                Routine maintenance is vital to the lifespan, efficiency, and safety of your heating system. At Apple AC
                & Heat, we champion these regular checks as a preventive measure against untimely breakdowns, especially
                during the cold season.
              </p>
              <p className="text-lg text-gray-700">
                Consistent maintenance enhances your system&apos;s functionality, leading to reliable heating and energy
                efficiency, which results in lower energy costs. By identifying minor issues early, we prevent them from
                escalating into larger problems, saving you time and money.
              </p>
              <p className="text-lg text-gray-700">
                Moreover, regular checks ensure your system operates safely, eliminating potential hazards like carbon
                monoxide leaks.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Trust Apple AC & Heat for comprehensive maintenance, securing your comfort and peace of mind all year
                round.
              </p>
              <div className="pt-4">
                <Link
                  href="#service-form"
                  className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Maintenance
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Signs Your Furnace Needs Repair */}
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
              Signs Your HVAC Furnace Needs Repair
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              While routine maintenance is crucial, there might be times when your heating system will exhibit signs of
              needing immediate attention
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
              At Apple AC & Heat, we urge homeowners to reach out at the first sign of trouble. Prompt attention to
              these warning signs can prevent minor issues from becoming major problems, ensuring your home remains warm
              and comfortable through the colder months.
            </p>
            <Link
              href="tel:4697653340"
              className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Contact Apple AC & Heat Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Heating Repair & Replacement */}
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
              <h2 className="text-3xl md:text-4xl font-bold">Heating Repair & Replacement Service</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full"></div>

              <div className="bg-red-50 dark:bg-[#be1d1d]/10 rounded-xl p-6 border border-red-100 dark:border-[#be1d1d]/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#be1d1d]" />
                  24/7 Heating Repairs
                </h3>
                <p className="text-gray-700">
                  Cold temperatures outside have you worried? Our experienced technicians provide quick and efficient
                  repair services for various heating issues, ensuring your unit operates at peak performance and
                  prolonging its lifespan.
                </p>
              </div>

              <p className="text-lg text-gray-700">
                However, if your system is old or frequently malfunctioning, an HVAC furnace replacement might be more
                practical. A new heating system is more energy-efficient, consistently heats your home, and minimizes
                the risk of frequent breakdowns.
              </p>

              <p className="text-lg text-gray-700">
                If this is the best course of action for you, we will expertly guide you through the replacement
                process, helping you select the perfect system tailored to your needs and budget.
              </p>

              <div className="pt-4">
                <Link
                  href="#service-form"
                  className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Your HVAC System Fixed
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/4489755/pexels-photo-4489755.jpeg"
                  alt="Air Conditioner covered in snow"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  Air Conditioner covered in snow
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Call-Out Section */}
      <section className="py-20 bg-[#be1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
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
              <span className="font-semibold">24/7 Emergency Heating Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Don&apos;t Let the Cold Take Over Your Home!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Are you tired of bearing the discomfort of a malfunctioning HVAC system? Wait no longer. Apple AC & Heat
              is at your service, ready to restore the optimal functioning of your system. Our skilled technicians
              provide quick and efficient repair, maintenance, and replacement services to ensure you have a comfortable
              living environment, no matter the weather outside.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8"
            >
              What&apos;s more, we are renowned for our transparent pricing. We provide fair and competitive quotes, without
              any hidden fees. Contact us today for a free quote, and let our expert team take care of your HVAC system.
              Don&apos;t compromise your comfort; reach out to us and let Apple AC & Heat provide you with the reliable HVAC
              service you deserve.
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
                Schedule Your Heating Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Choose a convenient time for your service appointment
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