"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ServiceRequestFormProps {
  serviceType: string
}

export default function ServiceRequestForm({ serviceType }: ServiceRequestFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(
        "https://hvacagencymin.app.n8n.cloud/webhook/0c0a311e-c3f7-406f-8530-44be6d4d08c6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            service_type: serviceType,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast.success("Service request submitted successfully! We'll contact you shortly.")
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        date: "",
        time: "",
        description: "",
      })
    } catch (error) {
      toast.error("Failed to submit request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Service Address</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="pl-10"
              placeholder="123 Main St, Rockwall, TX"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Service Details</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Please describe your service needs..."
            className="min-h-[100px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
      >
        {isLoading ? "Submitting..." : "Submit Service Request"}
      </Button>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
        By submitting this form, you agree to our terms of service and privacy policy.
      </p>
    </motion.form>
  )
}