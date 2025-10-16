import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

const cormorant = {
  variable: "--font-cormorant",
}

const lora = {
  variable: "--font-lora",
}

export const metadata: Metadata = {
  title: "Sunflowers - The Healing Bliss | Energy Healing in UAE",
  description:
    "Experience transformative energy healing with Reiki, Access Bars, Sound Healing, Meditation, and Numerology services in UAE.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${cormorant.variable} ${lora.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
