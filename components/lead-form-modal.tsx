"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, Calendar, Phone, MapPin, Clock } from "lucide-react";

interface LeadFormModalProps {
  triggerText?: string;
  serviceType?: string;
  className?: string;
}

export default function LeadFormModal({ 
  triggerText = "Get Free Estimate", 
  serviceType = "General Service Request",
  className = ""
}: LeadFormModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://orangepeeldust.app.n8n.cloud/webhook/e6e4157c-ccb7-4315-a043-bdb2a3acb907",
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
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success(
        "Service request submitted successfully! We'll contact you shortly."
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        date: "",
        time: "",
        description: "",
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={className}>
          <span className="flex items-center justify-center gap-2 font-bold">
            {triggerText}
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Get A FREE Roof Inspection!
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="(214) 789-7262"
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
                  placeholder="123 Main St, Dallas, TX"
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
            className="w-full bg-gradient-to-r from-[#be1d1d] to-[#0f1724] hover:from-[#be1d1d]/90 hover:to-[#0f1724]/90"
          >
            {isLoading ? "Submitting..." : "Submit Service Request"}
          </Button>

          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}