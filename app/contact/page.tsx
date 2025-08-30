"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Shield,
  Zap,
} from "lucide-react";
import ParallaxSection from "@/components/parallax-section";
import CalendlyWidget from "@/components/calendly-widget";
import ServiceRequestForm from "@/components/service-request-form";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with Matt for immediate assistance",
      contact: "(469) 765-3340",
      href: "tel:4697653340",
      available: "24/7 Emergency Service",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Send us your questions or project details",
      contact: "matt@millerroofs.com",
      href: "mailto:matt@millerroofs.com",
      available: "Response within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      description: "Meet with us in person for detailed consultations",
      contact: "123 Main Street, Fort Worth, TX 76000",
      href: "https://maps.google.com/?q=123+Main+Street,+Fort+Worth,+TX+76000",
      available: "By appointment",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Online",
      description: "Book your service appointment at your convenience",
      contact: "Online Scheduling",
      href: "#schedule-service",
      available: "Available 24/7",
    },
  ];

  const serviceAreas = [
    "Fort Worth",
    "Dallas",
    "Arlington",
    "Plano",
    "Irving",
    "Garland",
    "Mesquite",
    "Grand Prairie",
    "Carrollton",
    "Richardson",
    "Lewisville",
    "Flower Mound",
    "Grapevine",
    "Euless",
    "Bedford",
    "Hurst",
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-red-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#be1d1d]/10 to-transparent"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be1d1d] to-[#0f1724]">
                Matt Miller Contracting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to protect your home? Get in touch with Dallas-Fort
              Worth&apos;s trusted roofing experts for your free estimate and
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:4697653340"
                className="inline-flex items-center justify-center gap-2 bg-[#be1d1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#be1d1d]/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now: (469) 765-3340
              </Link>
              <Link
                href="#schedule-service"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0f1724] text-[#0f1724] px-6 py-3 rounded-full font-semibold hover:bg-[#0f1724] hover:text-white transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Multiple ways to reach us for all your roofing and exterior needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-[#0f1724] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <Link
                  href={method.href}
                  className="text-[#be1d1d] font-semibold hover:underline block mb-2"
                >
                  {method.contact}
                </Link>
                <p className="text-sm text-gray-500">{method.available}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-[#be1d1d] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          >
            <div className="flex items-center gap-4">
              <Zap className="h-8 w-8 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Service</h3>
                <p className="opacity-90">
                  Storm damage or urgent repairs? We&apos;re here when you need
                  us most
                </p>
              </div>
            </div>
            <Link
              href="tel:4697653340"
              className="inline-flex items-center gap-2 bg-white text-[#be1d1d] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Emergency: (469) 765-3340
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <ParallaxSection className="py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Areas We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Proudly serving Dallas-Fort Worth and surrounding communities
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="text-center p-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-[#be1d1d] mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Schedule Service */}
      <section id="schedule-service" className="py-24 bg-white">
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
                Schedule Your Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Choose a convenient time for your free consultation and estimate
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
