"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Home,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
            >
              Thank You for Choosing Us!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Your service request has been successfully submitted. We&apos;re
              excited to help protect your home and will be in touch shortly to
              discuss your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="tel:2147897262"
                className="inline-flex items-center justify-center gap-2 bg-[#be1d1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#be1d1d]/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Us: (214) 789-7262
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0f1724] text-[#0f1724] px-6 py-3 rounded-full font-semibold hover:bg-[#0f1724] hover:text-white transition-colors"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
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
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                <p className="opacity-90">
                  We&apos;re available 24/7 for emergency roofing situations
                </p>
              </div>
            </div>
            <Link
              href="tel:2147897262"
              className="inline-flex items-center gap-2 bg-white text-[#be1d1d] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Emergency: (214) 789-7262
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
