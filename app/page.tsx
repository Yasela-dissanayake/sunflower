import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Flower2, Heart, Sparkles, Wind, Brain, Music, Calculator } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: "Reiki",
      description:
        "Ancient Japanese healing technique that promotes relaxation and reduces stress through energy transfer.",
      href: "/services/reiki",
    },
    {
      icon: Brain,
      title: "Access Bars",
      description: "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
      href: "/services/access-bars",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description: "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
      href: "/services/access-energy-facelift",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description: "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
      href: "/services/sound-healing",
    },
    {
      icon: Wind,
      title: "Meditation",
      description: "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
      href: "/services/meditation",
    },
    {
      icon: Calculator,
      title: "Numerology",
      description: "Discover your life path and purpose through the ancient wisdom of numbers.",
      href: "/services/numerology",
    },
    {
      icon: Flower2,
      title: "Chakra Alignment",
      description: "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
      href: "/services/chakra-alignment",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm animate-fade-in">
                <Flower2 className="h-4 w-4" />
                <span>Rooted in energy, Created with love </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance animate-slide-in-left">
                The Healing Bliss
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty animate-slide-in-left animate-delay-100">
               At Sunflowers, we offer a caring and supportive space to help you grow, realign, and reconnect with your true self. Inspired by the sunflower’s symbolism of growth and renewal, our healing philosophy focuses on balance, clarity, and transformation through holistic and energy-based practices, guiding you toward inner light and harmony.
                   </p>


              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Book Your Session</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <HeroCarousel />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg animate-scale-in animate-delay-300">
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Healing Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover a range of holistic healing modalities designed to support your journey to wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More →
                </Link>
              </Card>
            )
          })}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/energy-healer-peaceful-serene-natural-light.jpg"
                  alt="Energy Healer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">Your Journey to Healing</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a certified energy healer, I combine ancient wisdom with modern techniques to help you release
                blockages, restore balance, and reconnect with your inner peace.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each session is tailored to your unique needs, creating a safe and nurturing space for transformation
                and healing.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <Link href="/about">Read My Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center animate-scale-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Book your personalized healing session today and experience the transformative power of energy healing.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
