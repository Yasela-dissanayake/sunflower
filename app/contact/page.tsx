"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // WhatsApp number - replace with actual number
  const whatsappNumber = "971501234567" // Format: country code + number without + or spaces
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in booking a healing session with Sunflowers. Could you please provide more information?",
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send email notification
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your healing journey? Reach out and let's discuss how I can support your wellbeing
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">Send a Message</h2>
            <Card className="p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="reiki">Reiki Healing</option>
                    <option value="access-bars">Access Bars</option>
                    <option value="energy-facelift">Access Energy Facelift</option>
                    <option value="sound-healing">Sound Healing</option>
                    <option value="meditation">Guided Meditation</option>
                    <option value="numerology">Numerology Reading</option>
                    <option value="karmic-numerology">Karmic Numerology</option>
                    <option value="package">Combination Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're looking for..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-primary/10 text-primary rounded-lg">
                    Thank you for your message! I'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
                    There was an error sending your message. Please try WhatsApp or email directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    content: "Get instant responses to your questions via WhatsApp",
                  },
                  { icon: Mail, title: "Email", content: "hello@sunflowershealing.com" },
                  { icon: Phone, title: "Phone", content: "+971 50 123 4567" },
                  { icon: MapPin, title: "Location", content: "Dubai, United Arab Emirates" },
                ].map((item, index) => (
                  <Card
                    key={item.title}
                    className="p-6 border-border hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.content}</p>
                        {item.title === "WhatsApp" && (
                          <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                            <a
                              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="h-5 w-5 mr-2" />
                              Chat on WhatsApp
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="p-6 border-border bg-secondary/30">
              <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">By Appointment</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I book a session?",
                a: "You can book a session by filling out the contact form, sending a WhatsApp message, or calling directly. I'll respond within 24 hours to confirm your appointment.",
              },
              {
                q: "What should I expect in my first session?",
                a: "Your first session will begin with a consultation to understand your needs and goals. We'll discuss which healing modality is best suited for you, and then proceed with the session in a comfortable, peaceful environment.",
              },
              {
                q: "Do you offer online sessions?",
                a: "Yes! Distance healing sessions are available for Reiki, guided meditation, and numerology readings. Energy healing is not limited by physical distance.",
              },
            ].map((faq, index) => (
              <Card
                key={faq.q}
                className="p-6 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
