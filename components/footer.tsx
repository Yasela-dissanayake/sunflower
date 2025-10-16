import Link from "next/link";
import { Flower2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/healing-logo2.png"
                alt="Logo"
                className="h-20 w-20 object-cover"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformative energy healing services to restore balance and
              harmony in your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/prices"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/reiki"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Reiki
                </Link>
              </li>
              <li>
                <Link
                  href="/services/access-bars"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Access Bars
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sound-healing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sound Healing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/meditation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meditation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/numerology"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Numerology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">UAE</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sunflowershealing.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@sunflowershealing.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+971XXXXXXXXX"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +971 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Sunflowers - The Healing Bliss.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
