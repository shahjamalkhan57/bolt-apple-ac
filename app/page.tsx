import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  ThumbsUp,
  Zap,
} from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FloatingCTA from "@/components/floating-cta"
import ParallaxSection from "@/components/parallax-section"
import ScheduleServiceModal from "@/components/schedule-service-modal"
import AIChatbot from "@/components/ai-chatbot"
import CalendlyWidget from "@/components/calendly-widget"
import EnhancedServiceAreaMap from "@/components/enhanced-service-area-map"

const serviceAreas: Array<{
  name: string
  coordinates: [number, number] // Changed from number[] to tuple [number, number]
  isMainOffice?: boolean
  address?: string
}> = [
  {
    name: "Rockwall",
    coordinates: [32.8998, -96.4594],
    isMainOffice: true,
    address: "709 Country Club, Rockwall, TX 75032",
  },
  { name: "Dallas", coordinates: [32.7767, -96.797] },
  { name: "Plano", coordinates: [33.0198, -96.6989] },
  { name: "Garland", coordinates: [32.9126, -96.6389] },
  { name: "Mesquite", coordinates: [32.7668, -96.5992] },
  { name: "Rowlett", coordinates: [32.9029, -96.5638] },
  { name: "Forney", coordinates: [32.7474, -96.4719] },
  { name: "Fate", coordinates: [32.9371, -96.3868] },
  { name: "Sunnyvale", coordinates: [32.7968, -96.5683] },
]

export default function Home() {
  const services = [
    {
      title: "Air Conditioning",
      icon: "snowflake",
      description:
        "Beat the Rockwall heat with Apple AC & Heat! Our skilled technicians promptly handle all your AC repair needs, restoring cool comfort to your home.",
      services: [
        "AC Installation",
        "AC Repair",
        "AC Maintenance",
        "Duct Installation & Repair",
      ],
      color: "from-blue-500 to-cyan-400",
      animation: "cool-breeze",
      href: "/air-conditioning",
    },
    {
      title: "Heating",
      icon: "flame",
      description:
        "The Winter months in Texas can be very volatile. Our certified professionals offer top tier heating repair and maintenance services, ensuring a cozy, warm home.",
      services: [
        "Furnace Installation",
        "Furnace Repair",
        "Furnace Service",
        "Heat Pumps",
      ],
      color: "from-orange-500 to-red-500",
      animation: "warm-glow",
      href: "/heating",
    },
    {
      title: "Emergency Services",
      icon: "alert-circle",
      description:
        "Are you experiencing a sudden AC breakdown in the sweltering Rockwall summer heat? Don't suffer through unbearable temperatures! Apple AC & Heat offers 24/7 Emergency HVAC services.",
      services: [
        "24/7 Emergency Response",
        "Same-Day Service",
        "Weekend & Holiday Service",
      ],
      color: "from-purple-500 to-pink-500",
      animation: "pulse",
      href: "/emergency",
    },
    {
      title: "Maintenance",
      icon: "settings",
      description:
        "Make sure your family stays cool in the Summer and warm in the Winter with our HVAC tune up services. This easy and affordable service can save you money (and time).",
      services: [
        "Seasonal Tune-Ups",
        "Filter Replacement",
        "System Inspection",
        "Performance Optimization",
      ],
      color: "from-green-500 to-emerald-400",
      animation: "rotate",
      href: "/maintenance",
    },
  ]

  const testimonials = [
    {
      name: "Jay McConnell",
      text: "Came out took way more time to figure out the problem than another company did like a week ago… got it fixed and explained to my wife and I how to keep up with the maintenance side as well! Very pleased with this company!!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Roger Weikum",
      text: "Was more that fair with every aspect of his service call. He helped me save money in keeping my system running efficiently. I would highly recommend John.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michelle McZick",
      text: "I have used Apple A/C and Heat Services twice now. Today's occurrence my motor/blower in my unit inside went out. Each and every time Jon came through when I needed him same day and fixed the issue. I will continue to refer people to him.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Andrea Bass",
      text: "Rarely will I take the time to review but. Holy Cow! This service tech and company went out of their way to help me out over the 4th of July. Honest, timely and empathetic going forward I will use them exclusively. Thank you!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Experienced and Certified Technicians",
    },
    { icon: <Clock className="h-8 w-8" />, title: "24/7 Emergency Service" },
    { icon: <Award className="h-8 w-8" />, title: "Honest Pricing" },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Customer Satisfaction Guaranteed",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block animate-bounce-slow bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                #TACLA108385E Licensed & Insured
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 animate-gradient">
                Apple AC <span className="text-red-500">&</span> Heat
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Revolutionizing comfort in Rockwall, TX and surrounding areas
                with cutting-edge HVAC solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="tel:4697653340"
                  className="group relative overflow-hidden rounded-full bg-blue-600 px-6 py-4 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2 font-bold">
                    <Phone className="h-5 w-5" />
                    (469) 765-3340
                  </span>
                </Link>
                <ScheduleServiceModal />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white transform hover:rotate-2 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
                  alt="HVAC technician working on an air conditioning unit"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-xl">
                    Building comfort that lasts a lifetime
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <p className="text-sm">
                      Rockwall, TX and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Value Proposition */}
      <ParallaxSection>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              &quot;At Apple AC & Heat in Rockwall, TX, our goal is to build a
              reputation with customers needing HVAC repair and replacement
              services that lasts a lifetime.&quot;
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive HVAC solutions tailored to your comfort needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Providing top-quality HVAC services across Rockwall and
              surrounding areas
            </p>
          </div>
          <EnhancedServiceAreaMap serviceAreas={serviceAreas} />
        </div>
      </section>

      {/* Emergency Call-Out Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">24/7 Emergency Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              HVAC Emergency? We&apos;ve Got You Covered!
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t suffer through unbearable temperatures! Our skilled
              technicians work swiftly to restore your comfort, ensuring you can
              stay cool even in the hottest Texas summers.
            </p>
            <Link
              href="tel:4697653340"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-white text-red-600 font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Phone className="h-6 w-6 animate-pulse" />
              <span>Call Now: (469) 765-3340</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Ultimate Comfort?
            </h2>
            <p className="text-xl mb-8">
              Experience the Apple AC & Heat difference today. Schedule your
              service appointment below.
            </p>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}