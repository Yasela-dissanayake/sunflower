import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Brain, CheckCircle } from "lucide-react";

export default function AccessBarsPage() {
  const benefits = [
    "Reduces stress and anxiety significantly",
    "Improves sleep quality and patterns",
    "Enhances mental clarity and focus",
    "Releases limiting beliefs and patterns",
    "Increases feelings of peace and calm",
    "Supports emotional healing and balance",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Brain className="h-4 w-4" />
                <span>Consciousness Healing</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Access Bars
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Release electromagnetic charges of thoughts, feelings, and
                emotions through gentle touch therapy on 32 points on your head.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Book an Access Bars Session</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/access-bars-head-points-healing-therapy.jpg"
                  alt="Access Bars"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Access Consciousness
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Access Consciousness is a set of tools designed to increase
              awareness in your life. Consciousness means being fully aware of
              everything around you, and understanding that you have the power
              to make different choices that can create meaningful change in
              your life.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-foreground mb-6">
            What are the Access Bars?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Access Bars consist of 32 specific points on the head, each
              corresponding to a different area of life. These points, or
              "Bars," store accumulated energy from various experiences. When
              these points are gently touched, the Bars activate—much like
              starting a car engine—and begin to release this stored energy.
              This process creates more space within you, allowing for greater
              consciousness and heightened awareness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During a session, I gently touch these points to release the
              electromagnetic charge, allowing you to let go of limitations and
              create more space for new possibilities. It's like deleting old
              files from your computer's hard drive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most people report feeling deeply relaxed, as if they've had a
              massage or a great meditation. At worst, you'll feel like you had
              a great massage. At best, your whole life can change.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 animate-fade-in">
          {/* <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Five Reiki Principles</h2> */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl text-foreground leading-relaxed italic  text-center">
              All of life comes to me with ease, joy and glory
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Benefits of Access Bars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience profound shifts in your consciousness
            </p>
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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Clear Your Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the transformative power of Access Bars and unlock new
            possibilities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-primary/20 bg-primary/5">
            <p className="text-center text-lg font-semibold text-foreground mb-4">
              All of Life Comes to Us with Ease and Joy and Glory®
            </p>
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">PLEASE NOTE:</strong> The
                Access Bars class is a hands on, in-person class. Long-distance
                sessions do not work, as Bars is a hands-on process that only
                works with the energy created by touching. It simply does NOT
                work long distance!
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
