import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Award, Heart, Sparkles, Users } from "lucide-react"

export default function AboutPage() {
  const certifications = [
    "Certified Reiki Master",
    "Access Bars Practitioner",
    "Access Energy Facelift Facilitator",
    "Sound Healing Therapist",
    "Certified Meditation Guide",
    "Professional Numerologist",
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every session is approached with deep compassion, creating a safe space for your healing journey.",
    },
    {
      icon: Sparkles,
      title: "Holistic Approach",
      description: "I address the whole person - mind, body, and spirit - for complete transformation.",
    },
    {
      icon: Users,
      title: "Personalized Sessions",
      description: "Each healing session is tailored to your unique needs, goals, and energy.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Committed to ongoing learning and maintaining the highest standards of practice.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <h1 className="text-5xl font-bold text-foreground mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                I am a Certified Early Childhood Educator, a Reiki Master Teacher, a Certified Access Bars Practitioner,
                an Access Energetic Facelift Practitioner, and a Numerologist.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Like many, I experienced periods of stress, disconnection, and searching for deeper meaning in life. It
                was during one of these challenging times that I discovered the transformative power of energy healing.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Work With Me</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative animate-fade-in-up animation-delay-200">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/energy-healer-portrait-warm-welcoming-professional.jpg"
                  alt="Energy Healer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">My Journey</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As I explored Reiki, something shifted within me. This sparked a deep curiosity and passion for
              understanding how energy healing works and how it could help others. With each practice, I felt more
              connected, grounded, and whole. I realized healing wasn't just about others — it started with me.
            </p>
            <p>
              I dedicated myself to studying various healing modalities, earning certifications in Reiki, Access Bars,
              Sound Healing, and Numerology. Each modality added another dimension to my understanding of healing and
              the human energy system.
            </p>
            <p className="text-xl font-semibold text-foreground italic text-center py-4">
              Energy is powerful. Energy transforms. Energy connects.
            </p>
            <p>
              Each step brought me closer to my authentic self, awakening a deep desire to help others find the same
              peace and empowerment.
            </p>
            <p>
              And so, Sunflowers was born. Rooted in energy. Created with love. A space created from love,
              transformation, and the belief that healing is for everyone. I integrate diverse modalities to provide
              holistic, personalized support designed to nurture healing, promote growth, and empower individuals on
              their unique paths of self-discovery and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Training</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to excellence through continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert}
                className="p-6 text-center border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my healing practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="p-8 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Begin?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
              Like sunflowers turning toward the light, we too can rise, heal, and bloom.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Book your session. Join a workshop. Or simply connect.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Healing starts with one small step — and you're already on your way.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Begin Your Healing Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
