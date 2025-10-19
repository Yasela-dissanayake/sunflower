import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Heart, CheckCircle } from "lucide-react"

export default function NumerologyPage() {
  const insights = [
    "Personality",
    "Career",
    "Family",
    "Relationship",
    "Health",
    "Future trends",
    "Compatibility",
    "Karmic patterns",
  ]

  const benefits = ["Marriage & Relationships", "Career Opportunities", "Success", "Finance", "Life Path"]

  const signs = [
    "You feel you deserve a better life.",
    "You sense you have lost your way and are seeking the right path.",
    "You observe the same patterns, often generational",
    "You are searching for your true destiny.",
    "You wish to unlock your potential and uncover hidden talent",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Heart className="h-4 w-4" />
                <span>Ancient Wisdom</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">Numerology</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover your life path, purpose, and potential through the ancient wisdom of numbers and their mystical
                significance.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Numerology Reading</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/numerology-numbers-mystical-ancient-wisdom.jpg"
                  alt="Numerology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is Numerology?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Numerology is the study of numbers and their energetic influence on our lives. Each number carries a
              unique vibrational energy that reveals different aspects of your life journey. Whether you seek clarity in
              relationships, career, or personal growth, numerology provides a valuable lens to better understand
              yourself and the world around you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By exploring the connections between numbers, you gain meaningful insights into the energies shaping your
              path and the patterns you encounter along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Areas Covered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numerology provides insights into various aspects of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight) => (
              <Card key={insight} className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{insight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Chaldean and Loshu Numerology</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              It is an ancient, traditional methodology that interprets numbers and energy through the Lo Shu Grid. Each
              number is linked to a specific planet, color, and element. This approach provides insights into personal
              success numbers, compatible and friendly numbers, as well as missing, repeated, and karmic debt numbers.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 flex items-center justify-center">
              <img src="/loshu-grid-numerology-chart.jpg" alt="Lo Shu Grid" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Numerology Helps In</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how numerology can guide you in key areas of life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit} className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 flex items-center justify-center">
              <img
                src="/matrix-of-destiny-chart-numerology-star.jpg"
                alt="Matrix of Destiny Chart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-foreground mb-6">The Karmic Numerology / Matrix of Destiny</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Karmic Numerology/Matrix of Destiny chart is a Numerology system based on numbers derived from your
              birth date, serving as a map of your life's journey. Through this system, you can uncover repeating
              patterns, blocks, and limiting beliefs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every code helps identify the karmic lessons you need to learn in order to unlock your true potential,
              break free from generational patterns, and prevent these patterns from being passed onto future
              generations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Is Numerology Right for You?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You may benefit from numerology if any of these resonate with you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {signs.map((sign) => (
              <Card key={sign} className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{sign}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Discover Your Numbers?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlock the wisdom of numerology and gain clarity on your life's path and purpose.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Book Your Reading</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
