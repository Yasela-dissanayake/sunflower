"use client";

import type React from "react";

import { Cormorant_Garamond, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

function ClientLayoutContent() {
  const searchParams = useSearchParams();

  return (
    <>
      <WhatsAppFloat />
      <Analytics />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <ClientLayoutContent />
      </Suspense>
      {children}
    </>
  );
}
