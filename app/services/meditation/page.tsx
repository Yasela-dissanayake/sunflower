import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Wind, Sparkles } from "lucide-react";

export default function MeditationPage() {
  const meditationTypes = [
    "Reiki Healing Meditation",
    "Sound & Energy Healing Meditation",
    "Chakra Balancing",
    "Aura Cleansing",
    "Emotional Cleansing",
    "New Moon Meditation",
    "Full Moon Meditation",
    "Grounding Meditation",
  ];

  const benefits = [
    "Physical body harmony",
    "Emotional state balance",
    "Mental clarity enhancement",
    "Spiritual connection deepening",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Wind className="h-4 w-4" />
                <span>Energy Healing Practice</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Restore. Realign. Reconnect.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Energy Healing Meditations are guided practices that bring
                harmony to your entire being — mind, body, and energy system.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Book a Meditation Session</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/meditation.webp"
                  alt="Meditation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto animate-fade-in-delay-1">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Energy Healing Meditations
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Using a blend of conscious breathing and intentional
              visualization, these meditations help you optimize your energy
              flow and restore balance in your:
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit}
                className="p-6 border-border text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium leading-relaxed">
                  {benefit}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-delay-1">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each session is designed to gently heal the subtle energy bodies,
              bringing you back to your natural state of health, peace, and
              inner power. Perfect for anyone feeling scattered, drained, or
              disconnected from their inner self.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meditation Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of guided meditation practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {meditationTypes.map((type, index) => (
            <Card
              key={type}
              className="p-4 border-border text-center animate-slide-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="text-foreground font-medium">{type}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Group Healing Sessions</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Heal Together, Rise Together
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Group Healing Sessions are a unique opportunity to experience the
              power of collective energy and shared intention. When a group
              gathers to meditate and heal with focused purpose, the energetic
              field strengthens — raising the vibration and accelerating healing
              for all.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're seeking clarity, emotional release, or support for
              a specific challenge, group healing offers a powerful space to
              feel: <strong>Connected, Supported, Energized, Aligned</strong>
            </p>
            <p className="text-xl text-foreground font-semibold mb-8">
              Let the strength of the group elevate your journey.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Book a Group Session</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
