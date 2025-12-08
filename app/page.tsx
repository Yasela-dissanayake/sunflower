import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroCarousel } from "@/components/hero-carousel";
import { EngagementSection } from "@/components/engagement-section";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Flower2,
  Heart,
  Sparkles,
  Wind,
  Brain,
  Music,
  Star,
  CheckCircle,
  Zap,
  Lightbulb,
} from "lucide-react";

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
      description:
        "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
      href: "/services/access-bars",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description:
        "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
      href: "/services/access-energy-facelift",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description:
        "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
      href: "/services/sound-healing",
    },
    {
      icon: Wind,
      title: "Meditation",
      description:
        "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
      href: "/services/meditation",
    },
    {
      icon: Heart,
      title: "Numerology",
      description:
        "Discover your life path and purpose through the ancient wisdom of numbers.",
      href: "/services/numerology",
    },
    {
      icon: Flower2,
      title: "Chakra Alignment",
      description:
        "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
      href: "/services/chakra-alignment",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Stress Relief",
      // description: "Release tension and find deep relaxation",
    },
    {
      icon: Lightbulb,
      title: "Clarity & Purpose",
      // description: "Discover your path forward with confidence",
    },
    {
      icon: CheckCircle,
      title: "Emotional Balance",
      // description: "Heal past patterns and find inner peace",
    },
    {
      icon: Star,
      title: "Energy Renewal",
      // description: "Revitalize your spirit and vitality",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Spiritual Seeker",
      content:
        "The sessions with Sunflowers completely transformed my perspective. I feel more aligned and peaceful than ever before.",
      rating: 5,
    },
    {
      name: "Michael J.",
      role: "Professional",
      content:
        "After years of stress, the healing modalities helped me find balance. Highly recommended for anyone seeking wellness.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Creative Artist",
      content:
        "My creative energy has flourished. The sessions opened doors I didn't know existed within me.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm animate-fade-in hover:animate-glow transition-all cursor-pointer">
                <Flower2 className="h-4 w-4 animate-rotate" />
                <span>Rooted in energy, Created with love </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance animate-slide-in-left">
                Heal, Align. Radiate
              </h1>
              <p className="text-2xl text-primary font-medium italic animate-slide-in-left animate-delay-50">
                Like sunflowers turning toward the light, we too can rise, heal, and bloom.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty animate-slide-in-left animate-delay-100">
                At Sunflowers, we provide a supportive space to help you grow
                and reconnect with your true self. Inspired by the sunflower’s
                symbolism of renewal, our holistic and energy-based practices
                guide you toward balance, clarity, and inner harmony.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/contact">Book Your Session</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:scale-110 transition-all duration-300 bg-transparent hover:shadow-lg"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <HeroCarousel />
              <div
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-3xl font-bold text-primary mb-1 animate-pulse-subtle">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Healing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover a range of holistic healing modalities designed to
              support your journey to wellness.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;
            return (
              <div
                key={service.title}
                className={isLast ? "lg:col-start-2" : ""}
              >
                <ScrollAnimation animation="slide-up" delay={index * 100}>
                  <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-border group cursor-pointer hover:animate-glow h-full flex flex-col items-center text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-125 transition-all duration-300 group-hover:rotate-6">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors group-hover:animate-heartbeat" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1 justify-center transition-all"
                    >
                      Learn More →
                    </Link>
                  </Card>
                </ScrollAnimation>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Sunflowers Healing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the transformative benefits of holistic healing
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollAnimation
                key={benefit.title}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 border border-primary/10 hover:scale-105 hover:shadow-lg group cursor-pointer h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:scale-125 transition-all duration-300 group-hover:animate-rotate">
                    <Icon className="h-8 w-8 text-primary group-hover:animate-pulse-subtle" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  {/* <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                    {benefit.description}
                  </p> */}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
                  <img
                    src="/energy-healer-peaceful-serene-natural-light.jpg"
                    alt="Energy Healer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg animate-wobble hover:animate-heartbeat"
                  style={{ animationDelay: "0.5s" }}
                >
                  20+ Years Experience
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  <Star className="h-4 w-4" />
                  <span>Certified Healer</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Your Journey to Healing
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  As a certified energy healer, I combine ancient wisdom with
                  modern techniques to help you release blockages, restore
                  balance, and reconnect with your inner peace.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Each session is tailored to your unique needs, creating a safe
                  and nurturing space for transformation and healing.
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real transformations from real people
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.name}
              animation="slide-up"
              delay={index * 100}
            >
              <Card className="p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-border bg-gradient-to-br from-card to-card/80 group hover:scale-105 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent group-hover:animate-heartbeat transition-all"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Engagement Stats Section */}
      <EngagementSection />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation animation="scale-in">
          <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-accent/20 rounded-2xl p-12 text-center overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:animate-pulse-subtle" />
            <div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:animate-pulse-subtle"
              style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Take the first step toward transformation. Book your
                personalized healing session today and experience the profound
                shift in your energy and well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:scale-110 transition-all duration-300 bg-transparent hover:shadow-lg"
                >
                  <Link href="/services/meditation">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
