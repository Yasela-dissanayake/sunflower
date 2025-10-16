import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, CheckCircle } from "lucide-react"

export default function KarmicNumerologyPage() {
  const insights = [
    "Past life patterns and karmic lessons",
    "Soul contracts and life agreements",
    "Karmic debts and how to resolve them",
    "Soul mission and spiritual purpose",
    "Recurring life patterns explained",
    "Spiritual growth opportunities",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Soul Wisdom</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">Karmic Numerology</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Understand your soul's journey, past life patterns, and karmic lessons through the deeper wisdom of
                karmic numerology.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Karmic Reading</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/karmic-numerology-soul-journey-spiritual-wisdom.jpg"
                  alt="Karmic Numerology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is Karmic Numerology?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Karmic numerology goes beyond traditional numerology to explore the deeper spiritual dimensions of your
              numbers. It reveals the karmic patterns, lessons, and debts you've carried from past lives into this one,
              helping you understand why certain patterns keep repeating in your life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through karmic numerology, we examine your karmic debt numbers, missing numbers in your chart, and the
              spiritual lessons your soul chose to learn in this lifetime. This profound insight helps you break free
              from limiting patterns and align with your soul's true purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A karmic numerology reading provides deep understanding of your soul's journey, helping you make peace
              with your past and create a more conscious, fulfilling future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What You'll Discover</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Understand your soul's deeper journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Understand Your Soul's Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover your karmic patterns and unlock your soul's true purpose.
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
