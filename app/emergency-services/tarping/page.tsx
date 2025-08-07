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
  CloudRain,
} from "lucide-react"
import ParallaxSection from "@/components/parallax-section"
import CalendlyWidget from "@/components/calendly-widget"

export default function TarpingPage() {
  const emergencyScenarios = [
    {
      icon: <CloudRain className="h-6 w-6" />,
      title: "Storm Damage",
      description:
        "Severe weather can damage roofs, leaving your home exposed to rain and further damage without immediate protection.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Missing Shingles",
      description:
        "High winds can blow off shingles, creating vulnerable areas that need immediate temporary protection.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Fallen Trees",
      description:
        "Trees or large branches can puncture roofs, requiring emergency tarping to prevent water infiltration.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hail Damage",
      description:
        "Large hail can create holes or severely damage roofing materials, necessitating immediate temporary repairs.",
    },
  ]

  const services = [
    {
      title: "24/7 Emergency Response",
      description: "Immediate response to roof emergencies with professional tarping services available around the clock.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Professional Tarping",
      description: "High-quality tarps and professional installation techniques to provide maximum protection.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Damage Assessment",
      description: "Complete assessment of damage while providing emergency protection for insurance documentation.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Permanent Repairs",
      description: "Follow-up with permanent repair solutions once emergency protection is in place.",
      icon: <Home className="h-6 w-6" />,
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Prevents Further Damage",
      description:
        "Immediate tarping prevents water damage to your home&apos;s interior and belongings.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Saves Money",
      description:
        "Emergency tarping prevents extensive water damage that would be much more expensive to repair.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Insurance Coverage",
      description:
        "Most insurance policies cover emergency tarping as part of preventing further damage.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Peace of Mind",
      description:
        "Professional emergency protection gives you time to plan permanent repairs without stress.",
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
                24/7 Emergency Tarping Services
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1724]"
              >
                Emergency Roof Tarping
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              >
                When storms damage your roof, every minute counts. Matt Miller Contracting provides immediate emergency tarping services to protect your home from further damage.
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
                    Emergency Tarping
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
                  alt="Emergency Roof Tarping"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">24/7 Emergency Tarping</p>
                  <p className="text-sm mt-2">Immediate protection when you need it most</p>
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
              Complete Emergency Tarping Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From immediate response to permanent repairs, we protect your home every step of the way
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

      {/* Emergency Scenarios */}
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
              When You Need Emergency Tarping
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Common emergency situations that require immediate roof protection
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0f1724] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
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
              Benefits of Professional Emergency Tarping
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Why professional emergency tarping is essential after roof damage
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
              <span className="font-semibold">24/7 Emergency Tarping Available</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Roof Emergency? We&apos;re On Our Way!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              When storm damage leaves your roof exposed, every minute counts. Matt Miller Contracting provides immediate emergency tarping services 24/7 to protect your home from further damage. Don&apos;t wait - call now!
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
                Get Emergency Tarping Now
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Contact us immediately for emergency roof tarping services
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