"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Reiki", href: "/services/reiki" },
  { name: "Access Bars", href: "/services/access-bars" },
  { name: "Access Energy Facelift", href: "/services/access-energy-facelift" },
  { name: "Sound Healing", href: "/services/sound-healing" },
  { name: "Meditation", href: "/services/meditation" },
  { name: "Numerology", href: "/services/numerology" },
  { name: "Karmic Numerology", href: "/services/karmic-numerology" },
  { name: "Assessment & Alignment", href: "/services/chakra-alignment" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group py-2">
            <img
              src="/healing-logo2.png"
              alt="Logo"
              className="h-20 w-20 object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Me
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Prices & Testimonials
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-muted-foreground">
                  Services
                </span>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="pl-4 text-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/pricing"
                className="text-foreground hover:text-primary transition-colors"
              >
                Prices & Testimonials
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Book a Session</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
