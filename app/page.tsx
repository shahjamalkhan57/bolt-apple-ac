import { Metadata } from "next"
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
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FloatingCTA from "@/components/floating-cta"
import ParallaxSection from "@/components/parallax-section"
import ScheduleServiceModal from "@/components/schedule-service-modal"
import CalendlyWidget from "@/components/calendly-widget"
import EnhancedServiceAreaMap from "@/components/enhanced-service-area-map"
import ServiceRequestForm from "@/components/service-request-form"

export const metadata: Metadata = {
  title: "Matt Miller Contracting | Expert Roofing & Storm Restoration in Dallas-Fort Worth",
  description: "Professional roofing, exterior, and storm restoration services in Dallas-Fort Worth area. 24/7 emergency services, licensed contractors, and comprehensive warranties. Call (469) 765-3340.",
  keywords: "roofing contractors, storm restoration, emergency roofing, Dallas Fort Worth, roof repair, roof replacement, exterior services, Matt Miller Contracting",
  openGraph: {
    title: "Matt Miller Contracting | Expert Roofing & Storm Restoration",
    description: "Protecting homes in Dallas-Fort Worth with expert roofing and storm restoration services. Licensed contractors with 24/7 emergency response.",
    images: [
      {
        url: "https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional roofing contractor inspecting roof damage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Miller Contracting | Expert Roofing & Storm Restoration",
    description: "Professional roofing and storm restoration services in Dallas-Fort Worth. 24/7 emergency response available.",
    images: ["https://images.pexels.com/photos/28812508/pexels-photo-28812508.jpeg"],
  },
}

const serviceAreas: Array<{
  name: string
  coordinates: [number, number] // Changed from number[] to tuple [number, number]
  isMainOffice?: boolean
  address?: string
}> = [
  {
    name: "Fort Worth",
    coordinates: [32.7555, -97.3308],
    isMainOffice: true,
    address: "123 Main Street, Fort Worth, TX 76000",
  },
  { name: "Dallas", coordinates: [32.7767, -96.7970] },
  { name: "Arlington", coordinates: [32.7357, -97.1081] },
  { name: "Plano", coordinates: [33.0198, -96.6989] },
  { name: "Irving", coordinates: [32.8140, -96.9489] },
  { name: "Garland", coordinates: [32.9126, -96.6389] },
  { name: "Mesquite", coordinates: [32.7668, -96.5992] },
  { name: "Grand Prairie", coordinates: [32.7460, -96.9978] },
]

export default function Home() {
  const services = [
    {
      title: "Roofing Services",
      icon: "home",
      description:
        "From minor leaks to full roof replacements, we deliver lasting protection with premium materials and professional installation.",
      services: [
        "Roof Replacement",
        "Roof Repair",
        "Shingles (Asphalt, Metal, Tile, Slate)",
        "Hail Damage Repair",
        "Emergency Tarping",
      ],
      color: "from-red-500 to-orange-500",
      animation: "warm-glow",
      href: "/roofing-services",
    },
    {
      title: "Exterior Services",
      icon: "building",
      description:
        "Protect your property's structure and curb appeal with quality exterior upgrades.",
      services: [
        "Gutters",
        "Siding",
        "Windows",
        "Fence Repair & Re-staining",
      ],
      color: "from-blue-500 to-cyan-500",
      animation: "warm-glow",
      href: "/exterior-services",
    },
    {
      title: "Interior Restoration",
      icon: "droplet",
      description:
        "Fix storm-related interior damage quickly and correctly with professional restoration.",
      services: [
        "Water Damage",
        "Drywall & Ceiling Repair",
        "Leak-Related Damage",
      ],
      color: "from-green-500 to-emerald-500",
      animation: "cool-breeze",
      href: "/interior-restoration",
    },
    {
      title: "Emergency Services",
      icon: "zap",
      description:
        "Storm damage or sudden leaks? Don't wait. We provide 24/7 emergency tarping and repairs to secure your home fast.",
      services: [
        "24/7 Emergency Response",
        "Same-Day Tarping",
        "Storm Damage Repairs",
      ],
      color: "from-purple-500 to-pink-500",
      animation: "pulse",
      href: "/emergency-services",
    },
  ]

  const testimonials = [
    {
      name: "Jay McConnell",
      text: "Matt showed up right away after a storm, took the time to diagnose everything thoroughly, and helped us prevent further damage. We really appreciated his honesty and attention to detail!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Roger Weikum",
      text: "Very fair pricing and great workmanship. Matt helped us figure out an affordable solution and made sure everything was up to code. Highly recommend!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michelle McZick",
      text: "Had a roof leak after a hailstorm — Matt came the same day and tarped everything before the next rain hit. He's been my go-to roofer ever since.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Andrea Bass",
      text: "Matt went above and beyond, even over a holiday weekend. Super honest and incredibly reliable. I'll never use anyone else!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Personally Managed by Matt Miller",
    },
    { icon: <Clock className="h-8 w-8" />, title: "24/7 Emergency Roofing Response" },
    { icon: <Award className="h-8 w-8" />, title: "Transparent Estimates" },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Workmanship Guaranteed",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source
              src="https://yqpamwianchyuzleabfb.supabase.co/storage/v1/object/public/Assets/0820(1).mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block animate-bounce-slow bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                #RC123456 Licensed & Insured
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f1724]">
                Matt Miller Contracting
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Protecting homes in the Dallas–Fort Worth area with expert roofing and storm restoration services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="tel:2147897262"
                  className="rounded-full bg-[#be1d1d] px-6 py-4 text-white shadow-lg transition-all hover:bg-[#be1d1d]/90 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 font-bold">
                    <Phone className="h-5 w-5" />
                    (214) 789-7262
                  </span>
                </Link>
                <ScheduleServiceModal />
              </div>
            </div>
            <div className="relative lg:max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#be1d1d] to-[#0f1724] rounded-3xl blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-2">
                <div className="mb-6 text-center px-4 pt-4">
                  <h2 className="text-xl md:text-2xl font-bold text-[#0f1724] mb-4">
                    Get A FREE Roof Inspection!
                  </h2>
                </div>
                <ServiceRequestForm serviceType="Homepage Service Request" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Value Proposition */}
      <ParallaxSection>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              At Matt Miller Contracting, our mission is to build trust through honest, high-quality roofing and restoration services that last a lifetime.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-[#0f1724] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                </div>
              ))}
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-[#be1d1d] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Serving All of DFW & Surrounding Areas</h3>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-300">
              Trusted roofing and exterior solutions to safeguard your home
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
              Delivering professional roofing across Dallas–Fort Worth and nearby communities
            </p>
          </div>
          <EnhancedServiceAreaMap serviceAreas={serviceAreas} />
        </div>
      </section>

      {/* Emergency Call-Out Section */}
      <section className="py-20 bg-[#be1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">24/7 Emergency Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Emergency? We&apos;ve Got You Covered.
            </h2>
            <p className="text-xl mb-8">
              Storm damage? Major leaks? Call Matt anytime — we&apos;ll secure your roof fast and prevent further damage.
            </p>
            <Link
              href="tel:2147897262"
              className="inline-flex items-center gap-2 bg-white text-[#be1d1d] font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Phone className="h-6 w-6 animate-pulse" />
              Call Now: (214) 789-7262
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
              Don&apos;t just take our word for it — hear from homeowners we&apos;ve helped
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f1724] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl mb-8">
              Experience the Matt Miller Contracting difference. Schedule your service appointment today.
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