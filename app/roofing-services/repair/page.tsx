"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
} from "lucide-react";
import ServiceRequestForm from "@/components/service-request-form";
import ParallaxSection from "@/components/parallax-section";
import CalendlyWidget from "@/components/calendly-widget";

export default function RoofRepairPage() {
  const repairSigns = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Leaks",
      description:
        "Water stains on ceilings or walls, or actual dripping during rain storms indicate immediate repair needs.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Missing Shingles",
      description:
        "Shingles blown off by wind or damaged by hail create vulnerable spots that need prompt attention.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Cracked or Curling Shingles",
      description:
        "Visible damage to individual shingles can lead to larger problems if not addressed quickly.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Granule Loss",
      description:
        "Excessive granules in gutters or around your home indicate shingle deterioration requiring repair.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Flashing Damage",
      description:
        "Damaged flashing around chimneys, vents, or roof edges can allow water infiltration and needs immediate repair.",
    },
  ];

  const services = [
    {
      title: "Emergency Leak Repair",
      description:
        "Fast response to stop active leaks and prevent further damage to your home's interior.",
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      title: "Shingle Replacement",
      description:
        "Professional replacement of damaged, missing, or worn shingles with matching materials.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Flashing Repair",
      description:
        "Expert repair and replacement of roof flashing to prevent water infiltration.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Storm Damage Repair",
      description:
        "Comprehensive assessment and repair of hail, wind, and storm damage to restore your roof.",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

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
                24/7 Emergency Roof Repair Services
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1724]"
              >
                Expert Roof Repair Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              >
                Don&apos;t let a small roof problem become a major headache.
                Matt Miller Contracting provides fast, reliable roof repair
                services to protect your home and prevent costly damage.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="tel:2147897262"
                  className="rounded-full bg-[#be1d1d] px-6 py-4 text-white shadow-lg transition-all hover:bg-[#be1d1d]/90 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 font-bold">
                    <Phone className="h-5 w-5" />
                    (214) 789-7262
                  </span>
                </Link>
                <Link
                  href="#service-form"
                  className="rounded-full bg-white border-2 border-[#0f1724] px-6 py-4 text-[#0f1724] shadow-lg transition-all hover:bg-[#0f1724] hover:text-white hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 font-bold">
                    Schedule Repair
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
                  src="https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg"
                  alt="Professional Roof Repair"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">
                    Fast & Reliable Roof Repair
                  </p>
                  <p className="text-sm mt-2">
                    Emergency services available 24/7
                  </p>
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
              Comprehensive Roof Repair Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From minor repairs to major storm damage restoration, we handle
              all types of roofing issues
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

      {/* Emergency Repair Process */}
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
                  src="https://images.pexels.com/photos/48895/roof-plate-tiles-brick-black-48895.jpeg"
                  alt="Emergency Roof Repair"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  24/7 Emergency Service
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
              <h2 className="text-3xl md:text-4xl font-bold">
                Fast Emergency Roof Repair
              </h2>
              <div className="w-20 h-1.5 bg-[#be1d1d] rounded-full"></div>
              <p className="text-lg text-gray-700">
                When your roof is damaged, time is critical. Water damage can
                escalate quickly, causing extensive damage to your home&apos;s
                interior, insulation, and structure. That&apos;s why Matt Miller
                Contracting offers 24/7 emergency roof repair services.
              </p>
              <p className="text-lg text-gray-700">
                Our experienced team responds quickly to assess the damage and
                implement immediate solutions to stop leaks and prevent further
                damage. We provide temporary tarping services when needed and
                work efficiently to complete permanent repairs.
              </p>
              <p className="text-lg text-gray-700">
                We work directly with your insurance company to ensure proper
                documentation and maximize your coverage. Our goal is to restore
                your roof&apos;s integrity quickly and effectively, giving you
                peace of mind.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Don&apos;t wait when you have a roof emergency. Call Matt Miller
                Contracting immediately for fast, professional repair services.
              </p>
              <div className="pt-4">
                <Link
                  href="tel:2147897262"
                  className="inline-flex items-center gap-2 bg-[#be1d1d] hover:bg-[#be1d1d]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: (214) 789-7262
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Signs You Need Roof Repair */}
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
              Warning Signs Your Roof Needs Repair
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Early detection of these issues can prevent minor problems from
              becoming major expenses
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
              At Matt Miller Contracting, we recommend addressing roof issues as
              soon as they&apos;re discovered. Small repairs now can prevent
              major problems and expensive replacements later.
            </p>
            <Link
              href="tel:2147897262"
              className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Call Now: (214) 789-7262
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Storm Damage Repair */}
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
              <h2 className="text-3xl md:text-4xl font-bold">
                Storm Damage Repair Specialists
              </h2>
              <div className="w-20 h-1.5 bg-[#be1d1d] rounded-full"></div>

              <p className="text-lg text-gray-700">
                Texas weather can be unpredictable, with severe storms, hail,
                and high winds causing significant roof damage. Our team has
                extensive experience in storm damage assessment and repair,
                helping homeowners restore their roofs quickly and effectively.
              </p>

              <p className="text-lg text-gray-700">
                We provide comprehensive storm damage services including
                emergency tarping, detailed damage assessment, and complete
                repair or replacement services. Our goal is to make the process
                as smooth as possible for you with transparent pricing and
                quality workmanship.
              </p>

              <div className="pt-4">
                <Link
                  href="#service-form"
                  className="inline-flex items-center gap-2 bg-[#0f1724] hover:bg-[#0f1724]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Storm Damage Assessment
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
                  src="https://images.pexels.com/photos/45206/roofing-tile-red-wall-45206.jpeg"
                  alt="Storm Damage Repair"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#be1d1d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  Storm Damage Specialists
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
              <span className="font-semibold">24/7 Emergency Roof Repair</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Don&apos;t Let Roof Damage Get Worse!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              When you notice signs of roof damage, time is critical. What
              starts as a small leak can quickly become major water damage
              affecting your home&apos;s structure, insulation, and belongings.
              Matt Miller Contracting provides fast, professional roof repair
              services to stop problems before they escalate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8"
            >
              Our experienced team is available 24/7 for emergency repairs and
              provides transparent pricing with no hidden fees. We work with
              your insurance company to ensure proper coverage and get your roof
              restored quickly and professionally.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="tel:2147897262"
                className="inline-flex items-center gap-2 bg-white text-[#be1d1d] font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Phone className="h-6 w-6 animate-pulse" />
                <span>Emergency: (214) 789-7262</span>
              </Link>
              <Link
                href="#service-form"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Repair</span>
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
                Schedule Your Roof Repair Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Get fast, professional roof repair services to protect your home
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
  );
}
