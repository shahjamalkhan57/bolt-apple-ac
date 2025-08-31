"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
	{
		label: "Roofing",
		href: "/roofing-services",
		children: [
			{ label: "Roof Replacement", href: "/roofing-services/replacement" },
			{ label: "Roof Repair", href: "/roofing-services/repair" },
			{ label: "Shingles (Asphalt, Metal, Slate, Tile)", href: "/roofing-services/shingles" },
			{ label: "Hail Damage Repair", href: "/roofing-services/hail-damage" },
			{ label: "Emergency Tarping (24/7)", href: "/roofing-services/emergency-tarping" },
		],
	},
	{
		label: "Exterior",
		href: "/exterior-services",
		children: [
			{ label: "Gutters", href: "/exterior-services/gutters" },
			{ label: "Siding", href: "/exterior-services/siding" },
			{ label: "Windows", href: "/exterior-services/windows" },
			{ label: "Fences", href: "/exterior-services/fences" },
			{ label: "Re-staining", href: "/exterior-services/re-staining" },
		],
	},
	{
		label: "Restoration",
		href: "/interior-restoration",
		children: [
			{ label: "Water Damage", href: "/interior-restoration/water-damage" },
			{ label: "Drywall & Ceiling Repairs", href: "/interior-restoration/drywall-ceiling" },
			{ label: "Leak-related Damage", href: "/interior-restoration/leak-damage" },
		],
	},
	{
		label: "Emergency Services",
		href: "/emergency-services",
		children: [
			{ label: "24/7 Tarping", href: "/emergency-services/tarping" },
			{ label: "Urgent Leak Repairs", href: "/emergency-services/leak-repairs" },
		],
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	},
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
	const isMobile = useMobile()
	const [emergencyBannerVisible, setEmergencyBannerVisible] = useState(true)

	useEffect(() => {
		const handleBannerClose = () => {
			setEmergencyBannerVisible(false)
		}

		window.addEventListener("emergency-banner-closed", handleBannerClose)

		return () => {
			window.removeEventListener("emergency-banner-closed", handleBannerClose)
		}
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}

	const toggleDropdown = (label: string) => {
		if (activeDropdown === label) {
			setActiveDropdown(null)
		} else {
			setActiveDropdown(label)
		}
	}

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
				emergencyBannerVisible && !scrolled ? "mt-10" : "mt-0",
			)}
			style={{ zIndex: 9999 }}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 relative z-50">
						<Image
							src="https://i.postimg.cc/5y4MCmPd/Ginsoy-CA-1.png"
							alt="Matt Miller Contracting Logo"
							width={60}
							height={60}
							className="w-13 h-13"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-1">
						{navItems.map((item) => (
							<div key={item.label} className="relative group">
								{item.children ? (
									<div className="flex items-center">
										<span
											className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#be1d1d] dark:hover:text-[#be1d1d] font-medium rounded-md flex items-center gap-1 group cursor-pointer"
										>
											{item.label}
										</span>
										<button
											className="p-1 hover:text-[#be1d1d] dark:hover:text-[#be1d1d]"
											onClick={() => toggleDropdown(item.label)}
										>
											<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
										</button>
										<div className="absolute top-full left-0 mt-1 w-60 bg-white dark:bg-[#0f1724] rounded-md shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
											<div className="py-2">
												{item.children.map((child) => (
													<Link
														key={child.label}
														href={child.href}
														className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-[#be1d1d]/10 hover:text-[#be1d1d] dark:hover:text-[#be1d1d]"
													>
														{child.label}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									<Link
										href={item.href}
										className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#be1d1d] dark:hover:text-[#be1d1d] font-medium rounded-md block"
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</nav>

					{/* Right Side Actions */}
					<div className="flex items-center gap-2 md:gap-4">
						<Link
							href="tel:2147897262"
							className={cn(
								"hidden md:flex items-center gap-2 text-white font-medium rounded-full transition-all",
								scrolled
									? "bg-[#be1d1d] hover:bg-[#0f1724] px-4 py-2"
									: "bg-[#be1d1d]/90 hover:bg-[#be1d1d] backdrop-blur-sm px-4 py-2",
							)}
						>
							<Phone className="h-4 w-4" />
							<span>(214) 789-7262</span>
						</Link>

						{/* Mobile Menu Button */}
						<button className="lg:hidden relative z-50 p-2" onClick={toggleMenu} aria-label="Toggle menu">
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={cn(
					"fixed inset-0 bg-white dark:bg-gray-900 lg:hidden transition-transform duration-300 ease-in-out",
					isOpen ? "translate-x-0" : "translate-x-full",
				)}
				style={{ zIndex: 9998 }}
			>
				<div className="h-full flex flex-col">
					{/* Mobile Navigation Header */}
					<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
						<Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
							<Image
								src="https://i.postimg.cc/5y4MCmPd/Ginsoy-CA-1.png"
								alt="Matt Miller Contracting Logo"
								width={40}
								height={40}
								className="w-10 h-10"
							/>
							<span className="font-bold text-lg">Matt Miller Contracting</span>
						</Link>
						<button
							onClick={toggleMenu}
							className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
							aria-label="Close menu"
						>
							<X className="h-6 w-6" />
						</button>
					</div>

					{/* Mobile Navigation Content */}
					<div className="flex-1 overflow-y-auto px-4 py-6">
					<nav className="flex flex-col space-y-4">
						{navItems.map((item) => (
							<div key={item.label} className="border-b border-gray-100 dark:border-gray-800 pb-4">
								{item.children ? (
									<div>
										<button
											className="flex items-center justify-between w-full py-3 text-lg font-medium cursor-pointer text-left hover:text-[#be1d1d] transition-colors"
											onClick={() => toggleDropdown(item.label)}
										>
											{item.label}
											<ChevronDown
												className={cn(
													"h-5 w-5 transition-transform",
													activeDropdown === item.label ? "rotate-180" : "",
												)}
											/>
										</button>
										<div
											className={cn(
												"mt-2 ml-4 space-y-2 transition-all duration-300",
												activeDropdown === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
											)}
										>
											{item.children.map((child) => (
												<Link
													key={child.label}
													href={child.href}
													className="block py-2 pl-2 text-gray-600 dark:text-gray-400 hover:text-[#be1d1d] dark:hover:text-[#be1d1d] transition-colors border-l-2 border-transparent hover:border-[#be1d1d]"
													onClick={toggleMenu}
												>
													{child.label}
												</Link>
											))}
										</div>
									</div>
								) : (
									<Link href={item.href} className="block py-3 text-lg font-medium hover:text-[#be1d1d] dark:hover:text-[#be1d1d] transition-colors" onClick={toggleMenu}>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</nav>
					</div>

					{/* Mobile Navigation Footer */}
					<div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
						<Link
							href="tel:2147897262"
							className="flex items-center justify-center gap-2 bg-[#be1d1d] text-white font-semibold rounded-full px-6 py-4 w-full hover:bg-[#be1d1d]/90 transition-all hover:scale-105 active:scale-95"
							onClick={toggleMenu}
						>
							<Phone className="h-5 w-5" />
							<span>(214) 789-7262</span>
						</Link>
						<Link
							href="/contact"
							className="flex items-center justify-center gap-2 bg-[#0f1724] text-white font-semibold rounded-full px-6 py-4 w-full hover:bg-[#0f1724]/90 transition-all hover:scale-105 active:scale-95"
							onClick={toggleMenu}
						>
							Schedule Service
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}