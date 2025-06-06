"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { ArrowRight } from "lucide-react"

const serviceTypes = [
  "AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Heating Repair",
  "Heating Installation",
  "Heating Maintenance",
  "Emergency Service",
  "General Maintenance",
]

export function ScheduleServiceModal() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    service_details: "",
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
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast.success("Service scheduled successfully! We'll contact you shortly.")
      setFormData({
        name: "",
        phone: "",
        email: "",
        service_type: "",
        service_details: "",
      })
    } catch (error) {
      toast.error("Failed to schedule service. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service_type: value }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative overflow-hidden rounded-full bg-white border-2 border-blue-600 px-6 py-4 text-blue-600 shadow-lg transition-transform hover:scale-105 active:scale-95">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center gap-2 font-bold">
            Schedule Service
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule Your Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service_type">Service Type</Label>
            <Select required value={formData.service_type} onValueChange={handleServiceTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="service_details">Service Details</Label>
            <Textarea
              id="service_details"
              name="service_details"
              required
              value={formData.service_details}
              onChange={handleChange}
              placeholder="Please describe your service needs..."
              className="min-h-[100px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Scheduling..." : "Schedule Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleServiceModal