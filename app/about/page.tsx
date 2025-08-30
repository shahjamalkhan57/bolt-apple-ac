"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Home,
  Award,
  Clock,
  MapPin,
  Shield,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import ParallaxSection from "@/components/parallax-section";
import CalendlyWidget from "@/components/calendly-widget";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Workmanship",
      description:
        "Every project is completed with meticulous attention to detail and the highest standards of craftsmanship.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reliable Service",
      description:
        "We show up when we say we will and complete projects on time, every time.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Local Expertise",
      description:
        "Deep knowledge of Dallas-Fort Worth weather patterns and building requirements ensures optimal results.",
    },
  ];

  const milestones = [
    {
      year: "2006",
      title: "Started in Roofing",
      description: "Matt began his roofing career, learning the trade from experienced professionals.",
    },
    {
      year: "2015",
      title: "Lead Contractor",
      description: "Advanced to lead contractor role, managing complex projects and training new team members.",
    },
    {
      year: "2020",
      title: "Storm Damage Specialist",
      description: "Specialized in storm damage restoration, helping hundreds of families after severe weather.",
    },
    {
      year: "2024",
      title: "Founded Matt Miller Contracting",
      description: "Established his own company to provide personalized, high-quality roofing services.",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-red-50 to-white">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be1d1d] to-[#0f1724]">
                  Matt Miller Contracting
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                With 18+ years of roofing experience and deep local knowledge of
                the Dallas-Fort Worth area, Matt Miller is committed to
                providing exceptional roofing and exterior services to protect
                your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:4697653340"
                  className="inline-flex items-center justify-center gap-2 bg-[#be1d1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#be1d1d]/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  (469) 765-3340
                </Link>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0f1724] text-[#0f1724] px-6 py-3 rounded-full font-semibold hover:bg-[#0f1724] hover:text-white transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="h-5 w-5" />
                </Link>
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
                  src="https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg"
                  alt="Matt Miller - Professional Roofer"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">Matt Miller</p>
                    <p className="text-sm opacity-90">
                      18+ Years of Roofing Excellence
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matt's Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Matt's Story
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-full mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Matt Miller's journey in roofing began 18 years ago with a
                  simple goal: to master the craft of protecting homes. Over
                  nearly two decades, he has worked with multiple roofing
                  companies throughout the Dallas-Fort Worth area, gaining
                  invaluable experience and building a reputation for quality
                  workmanship.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After years of working for others, Matt decided to start his
                  own company to provide the personalized, high-quality service
                  he knew homeowners deserved. His deep understanding of the
                  local climate, building codes, and community needs makes him
                  uniquely qualified to serve this area.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, Matt Miller Contracting represents his commitment to
                  excellence and his dedication to protecting the homes and
                  families of Dallas-Fort Worth. He knows this area like the
                  back of his hand and is passionate about providing the best
                  roofing and exterior services available.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#0f1724] p-3 rounded-full">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0f1724]">18+</h3>
                      <p className="text-gray-600">Years of Experience</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Local DFW Expert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Storm Damage Specialist</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">24/7 Emergency Service</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              The principles that guide everything we do at Matt Miller Contracting
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0f1724] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline */}
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
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From apprentice to business owner - Matt's path to excellence
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#be1d1d] to-[#0f1724] rounded-full"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-[#be1d1d] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#0f1724] rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 bg-[#0f1724] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the Matt Miller Contracting difference. Let's discuss
                your roofing and exterior needs today.
              </p>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <CalendlyWidget />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}