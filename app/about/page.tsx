"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function AboutPage() {
  const certifications = [
    "Certified Reiki Master",
    "Access Bars Practitioner",
    "Access Energy Facelift Facilitator",
    "Sound Healing Therapist",
    "Certified Meditation Guide",
    "Professional Numerologist",
  ];


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I am a Certified Early Childhood Educator, a Reiki Master
                Teacher, a Certified Access Bars Practitioner, an Access
                Energetic Facelift Practitioner, and a Numerologist.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Like many, I experienced periods of stress, disconnection, and
                searching for deeper meaning in life. It was during one of these
                challenging times that I discovered the transformative power of
                energy healing.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
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
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            My Journey
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As I explored Reiki, something shifted within me. This sparked a
              deep curiosity and passion for understanding how energy healing
              works and how it could help others. With each practice, I felt
              more connected, grounded, and whole. I realized healing wasn't
              just about others — it started with me.
            </p>
            <p>
              I dedicated myself to studying various healing modalities, earning
              certifications in Reiki, Access Bars, Sound Healing, and
              Numerology( Loshu & Karmic). Each modality added another dimension
              to my understanding of healing and the human energy system.
            </p>
            <p className="text-xl font-semibold text-foreground italic text-center py-4">
              Energy is powerful. Energy transforms. Energy connects.
            </p>
            <p>
              Each step brought me closer to my authentic self, awakening a deep
              desire to help others find the same peace and empowerment.
            </p>
            <p>
              And so, Sunflowers was born. Rooted in energy. Created with love.
              A space created from love, transformation, and the belief that
              healing is for everyone. I integrate diverse modalities to provide
              holistic, personalized support designed to nurture healing,
              promote growth, and empower individuals on their unique paths of
              self-discovery and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Mission
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-semibold text-muted-foreground italic text-center py-4">
              At Sunflowers, our mission is to spread awareness about the
              transformative power of energy healing, showing how it empowers
              individuals to nurture themselves and their loved ones. We guide
              people to unlock their full potential, live with balance,
              vitality, and inner strength, and embrace a life of holistic
              wellness.
            </p>
          </div>
        </div>
      </section>

      {/* My Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Vision
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-semibold text-muted-foreground italic text-center py-4">
              My mission and My vision is to make energy healing accessible to all, creating a
              safe and supportive space for every individual’s healing journey,
              and fostering a connected, thriving community of wellness and
              empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Certifications & Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to excellence through continuous learning and
              professional development
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
              {certifications.map((cert, index) => (
          <div 
             key={cert}
             className="flex gap-4 items-center text-lg animate-fade-in-up"
             style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="text-3xl flex-shrink-0">🌻</span>
            <span className="text-foreground">{cert}</span>
          </div>
        ))}
        </div>
      </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my healing practice
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <div className="flex gap-4 items-start">
            <span className="text-3xl flex-shrink-0">🌻</span>
            <div>
              <span className="font-semibold text-foreground">Compassionate Care:</span> Every session is approached with deep compassion, creating a safe space for your healing journey.
            </div>
        </div>
    
        <div className="flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">🌻</span>
            <div>
              <span className="font-semibold text-foreground">Holistic Approach:</span> I address the whole person - mind, body, and spirit - for complete transformation.
            </div>
        </div>
    
        <div className="flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">🌻</span>
          <div>
            <span className="font-semibold text-foreground">Personalized Sessions:</span> Each healing session is tailored to your unique needs, goals, and energy.
          </div>
        </div>
    
        <div className="flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">🌻</span>
          <div>
            <span className="font-semibold text-foreground">Professional Excellence:</span> Committed to ongoing learning and maintaining the highest standards of practice.
          </div>
        </div>
      </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
              Like sunflowers turning toward the light, we too can rise, heal,
              and bloom.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Book your session. Join a workshop. Or simply connect.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Healing starts with one small step — and you're already on your
              way.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Begin Your Healing Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
