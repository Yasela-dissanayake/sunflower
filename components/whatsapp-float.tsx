"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)

  // WhatsApp number - replace with actual number
  const whatsappNumber = "+94776337406"
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in learning more about your healing services.")

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  )
}
