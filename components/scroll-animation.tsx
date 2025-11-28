"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale-in" | "rotate-in"
  duration?: number
  delay?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-in",
  duration = 600,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
    "rotate-in": "animate-rotate",
  }

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClasses[animation] : "opacity-0"} ${className}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  )
}
