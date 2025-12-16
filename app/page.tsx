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
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: "Reiki",
      description:
        "Ancient Japanese healing technique that promotes relaxation and reduces stress through energy transfer.",
      href: "/services/reiki",
      gradient: "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    },
    {
      icon: Brain,
      title: "Access Bars",
      description:
        "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
      href: "/services/access-bars",
      gradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description:
        "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
      href: "/services/access-energy-facelift",
      gradient: "from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description:
        "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
      href: "/services/sound-healing",
      gradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      icon: Wind,
      title: "Meditation",
      description:
        "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
      href: "/services/meditation",
      gradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      icon: Heart,
      title: "Numerology",
      description:
        "Discover your life path and purpose through the ancient wisdom of numbers.",
      href: "/services/numerology",
      gradient: "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20",
    },
    {
      icon: Flower2,
      title: "Chakra Alignment",
      description:
        "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
      href: "/services/chakra-alignment",
      gradient: "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Stress Relief",
      description: "Release tension and find deep relaxation",
    },
    {
      icon: Lightbulb,
      title: "Clarity & Purpose",
      description: "Discover your path forward with confidence",
    },
    {
      icon: CheckCircle,
      title: "Emotional Balance",
      description: "Heal past patterns and find inner peace",
    },
    {
      icon: Star,
      title: "Energy Renewal",
      description: "Revitalize your spirit and vitality",
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

      {/* HERO SECTION - Bold & Dramatic */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle" />
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-lg animate-fade-in backdrop-blur-sm">
                <Flower2 className="h-5 w-5" />
                <span>Rooted in Energy, Created with Love</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-in-left">
                Heal. Align.
                <span className="block text-primary mt-2">Radiate.</span>
              </h1>
              
              <p className="text-2xl text-foreground/80 font-light italic animate-slide-in-left animate-delay-100">
                Like sunflowers turning toward the light, we too can rise, heal, and bloom.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-left animate-delay-200 max-w-xl">
                At Sunflowers, we provide a supportive space to help you grow and reconnect with your true self. Our holistic practices guide you toward balance, clarity, and inner harmony.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg h-14 px-8"
                >
                  <Link href="/contact">
                    Book Your Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-foreground/5 hover:scale-105 transition-all duration-300 text-lg h-14 px-8"
                >
                  <Link href="/about">Discover Our Story</Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-8 animate-fade-in animate-delay-400">
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-4xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Carousel */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <HeroCarousel />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Grid with Gradients */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Holistic Healing Modalities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover transformative practices designed to restore balance, clarity, and vitality to your mind, body, and spirit.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;
            return (
              <div
                key={service.title}
                className={isLast ? "lg:col-start-2" : ""}
              >
                <ScrollAnimation animation="slide-up" delay={index * 50}>
                  <Link href={service.href}>
                    <Card className={`group p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/50 cursor-pointer bg-gradient-to-br ${service.gradient}`}>
                      <div className="bg-primary/90 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </ScrollAnimation>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS SECTION - Bold Cards */}
      <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Benefits</p>
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Transform Your Well-Being
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollAnimation
                  key={benefit.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="group text-center p-10 rounded-2xl bg-card hover:bg-primary/5 border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - Large Image Split */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="relative group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/energy-healer-peaceful-serene-natural-light.jpg"
                    alt="Energy Healer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg shadow-xl z-10">
                  Certified Healer
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/30 rounded-full blur-2xl -z-10" />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <Star className="h-4 w-4" />
                  <span>20+ Years of Healing</span>
                </div>
                
                <h2 className="text-5xl font-bold text-foreground leading-tight">
                  Your Journey to
                  <span className="block text-primary mt-2">Inner Peace</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  As a certified energy healer, I combine ancient wisdom with modern techniques to help you release blockages, restore balance, and reconnect with your inner peace.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each session is tailored to your unique needs, creating a safe and nurturing space for transformation and healing.
                </p>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-foreground/5 hover:scale-105 transition-all text-lg h-14 px-8 mt-4"
                >
                  <Link href="/about">
                    Read My Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Cards with Ratings */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</p>
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Stories of Transformation
              </h2>
              <p className="text-xl text-muted-foreground">
                Hear from those who've experienced profound healing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation
                key={testimonial.name}
                animation="slide-up"
                delay={index * 150}
              >
                <Card className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/30 h-full bg-card">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-6 border-t border-border">
                    <p className="font-bold text-foreground text-lg">
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
        </div>
      </section>

      {/* ENGAGEMENT STATS */}
      <EngagementSection />

      {/* CTA SECTION - Bold & Eye-catching */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="scale-in">
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-16 text-center overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <Flower2 className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-pulse-subtle" />
                
                <h2 className="text-5xl font-bold text-primary-foreground mb-6">
                  Begin Your Healing Journey Today
                </h2>
                
                <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                  Take the first step toward transformation. Book your personalized healing session and experience profound shifts in your energy and well-being.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg h-16 px-10"
                  >
                    <Link href="/contact">
                      Book Your Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg h-16 px-10"
                  >
                    <Link href="/services/meditation">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}