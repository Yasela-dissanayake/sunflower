import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, CheckCircle } from "lucide-react"

export default function AccessEnergyFaceliftPage() {
  const benefits = [
    "Light and luminosity of the face",
    "Elasticity of the skin",
    "Clarity of the eyes",
    "Glow in the hair",
    "Lifting of breasts and buttocks",
    "Improved energy",
    "Increased relaxation",
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
                <span>Natural Beauty</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">Access Energy Facelift</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A natural, non-invasive alternative to cosmetic procedures that rejuvenates and revitalizes your
                appearance from within.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Facelift Session</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/energy-facelift-natural-beauty-glowing-skin.jpg"
                  alt="Access Energy Facelift"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What Is The Access Energetic Facelift?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Access Energetic Facelift is a powerful method to rejuvenate the face and help reverse the visible
              signs of aging throughout the entire body. Through gentle, soothing touches to the face and neck, this
              technique works with your body's cells to restore vitality, refresh, and revitalize.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every time we judge our reflection, those judgments are imprinted in our cellular memory, locking in
              negative energy. The Access Energetic Facelift clears these cellular memories of judgment, promoting deep
              rejuvenation of both the body and the self.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Changes Observed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Natural rejuvenation from the inside out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Rejuvenate Naturally?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the natural facelift that works with your body's own healing abilities.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
