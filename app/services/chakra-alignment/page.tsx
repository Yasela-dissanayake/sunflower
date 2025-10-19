"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function ChakraAlignmentPage() {
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  const benefits = [
    "Improves overall health and well-being",
    "Helps reduce stress and promotes relaxation",
    "A powerful tool for emotional release",
    "Brings a sense of security and stability",
    "Helps realize heightened self-awareness",
    "Enhances relationships, intimacy and emotional well being",
    "Boosts will power, confidence, self esteem",
    "Increased openness, memory, concentration and awareness",
    "Heightened creativity and better resourcefulness because of better perception",
    "Improved and deeper sleep",
    "Better control over your emotions and improved patience",
    "Helps improve clarity of thinking and clarity of emotions",
    "Helps treat depression and anxiety",
    "Improves focus and control",
    "Nurtures strong body mind connection",
    "Experience emotional freedom, renewed lightness, and deeper joy",
    "Experiencing greater clarity, vitality, and alignment in all areas of life — including our health, relationships, career, and self-expression",
  ];

  const visibleBenefits = showAllBenefits ? benefits : benefits.slice(0, 6);

  const blockages = [
    "Childhood Trauma",
    "Cultural conditioning",
    "Limited beliefs systems",
    "Restrictive or exhausting habits",
    "Physical and emotional injuries",
    "Lack of attention and perspective",
    "Digestive problems",
    "Physical issues in leg, feet or lower back",
    "Infertility",
    "Depression",
    "Migraines",
    "fatigue, tension, or emotional overwhelm",
    "Unprocessed emotions, stress, and energetic blocks",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Energy Healing</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                It's all about Chakras
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover your inner harmony through chakra balancing. Experience
                emotional freedom, renewed lightness, and deeper joy as you
                align your energy centers.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Book Complimentary Assessment</Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/chakra-energy-centers-glowing-colorful-meditation.jpg"
                  alt="Chakra Alignment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Chakras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Embracing Balance
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              What are Chakras?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The term "Chakra" originates from Sanskrit, meaning "wheel" or
              "disk." Chakras are energy centers in the body, each one spinning
              and linked to specific emotions, organs, and aspects of life.
              There are seven primary chakras, each playing a vital role in
              supplying energy to different parts of the body.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When in balance, chakras support overall physical, emotional, and
              spiritual well-being. However, imbalances may manifest as
              emotional turmoil, physical ailments, or a feeling of stagnation
              in life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Balancing these energy centers through practices such as
              meditation, yoga, energy work, crystal healing, color
              visualization, mantras, Reiki, sound healing, affirmations, and
              focused meditation can restore harmony. This process enhances your
              ability to manifest goals and live with greater intention and
              purpose.
            </p>
          </div>
        </div>
      </section>

      {/* What Blocks Your Energy */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Blocks Your Energy?
            </h2>
            <p className="text-xl text-primary font-semibold italic mb-6">
              "Physical pain is the alarm of emotional suppression"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockages.map((blockage, index) => (
              <Card
                key={blockage}
                className="p-6 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{blockage}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Chakra Balancing Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience transformation across all areas of your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBenefits.map((benefit, index) => (
            <Card
              key={benefit}
              className="p-6 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAllBenefits(!showAllBenefits)}
            className="flex items-center gap-2"
          >
            {showAllBenefits ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                View More Benefits <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Session Details */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
            Curious About Your Chakras?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Discover Your Inner Harmony",
                desc: "Chakra Assessment goes beyond providing insight — it builds true awareness",
              },
              {
                icon: Users,
                title: "Personalized Healing",
                desc: "Our intention is to empower you to heal, grow, and transform your life",
              },
              {
                icon: Clock,
                title: "Complimentary Assessment",
                desc: "Book your free Chakra Assessment and begin your journey to balance",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="p-8 text-center border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-4">
            <img
              src="/chakra-energy-centers-glowing-colorful-meditation.jpg"
              alt="Chakra Alignment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Book your Complimentary Chakra Assessment Now!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience greater clarity, vitality, and alignment in all areas of
            life — including your health, relationships, career, and
            self-expression.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Book Your Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
