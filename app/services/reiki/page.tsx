import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Clock, Users, CheckCircle, Sparkles, HelpCircle } from "lucide-react"

export default function ReikiPage() {
  const benefits = [
    "Reduces stress and promotes deep relaxation",
    "Accelerates natural healing processes",
    "Balances energy flow throughout the body",
    "Releases emotional blockages and trauma",
    "Enhances mental clarity and focus",
    "Strengthens immune system function",
    "More grounded",
    "Become emotionally balanced",
    "Gets mentally clear, and spiritually connected",
    "Restores harmony where your energy has been disrupted",
    "Supports deep healing, clarity, and transformation from within",
    "Raises your energetic vibration",
    "Relieves pain, anxiety, and fatigue",
    "Treats depression and boosts mood",
    "Enhances quality of life and well-being",
    "Improves clarity of thinking and emotions",
    "Improves focus and control",
    "Helps you sleep better",
    "Heals inflammation and infection",
    "Side effects of cancer",
    "Relieves pain from migraine, arthritis, sciatica",
    "Helps with symptoms of asthma, chronic fatigue, menopausal symptoms and insomnia",
  ]

  const journeySteps = [
    { step: 1, title: "Intention Setting", desc: "We begin by setting your healing intention" },
    { step: 2, title: "Energy Scan", desc: "I assess your energy field and chakras" },
    { step: 3, title: "Reiki Flow", desc: "Universal energy flows through specific areas" },
    { step: 4, title: "Release & Balance", desc: "Blockages release and harmony restores" },
    { step: 5, title: "Integration", desc: "Your body integrates the healing energy" },
  ]

  const reikiForEveryone = [
    { title: "Reiki and Children", desc: "Gentle healing for young souls" },
    { title: "Reiki and ADHD", desc: "Calming focus and mental clarity" },
    { title: "Reiki and Menopause", desc: "Balance during life transitions" },
    { title: "Reiki and Past Trauma", desc: "Release and heal old wounds" },
    { title: "Reiki and Future Events", desc: "Prepare with positive energy" },
    { title: "Reiki and Inner Child Healing", desc: "Nurture your inner self" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
                <Heart className="h-4 w-4" />
                <span>Embracing balance</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">Reiki Healing</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find harmony within yourself, fostering a life of tranquility and purpose.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Reiki Session</Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/reiki-healing-hands-energy-peaceful.jpg"
                  alt="Reiki Healing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Reiki */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is Reiki?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reiki is a Japanese healing technique that channels universal life force energy through the practitioner's
              hands to the recipient. The word "Reiki" comes from two Japanese words: "Rei" meaning universal, and "Ki"
              meaning life force energy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During a Reiki session, you remain fully clothed while lying comfortably on a treatment table. I gently
              place my hands on or just above specific areas of your body, allowing healing energy to flow where it's
              needed most.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Reiki works on physical, emotional, mental, and spiritual levels, promoting overall wellness and helping
              your body's natural ability to heal itself.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Reiki Session Brings Joy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how Reiki can transform your wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit}
                className="p-6 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
          <div className="animate-fade-in-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/laptop-on-wooden-table-with-candles-and-peaceful-h.jpg"
                alt="Distance Reiki"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <h2 className="text-4xl font-bold text-foreground mb-6">Distance Reiki</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Distance Reiki operates on the principle that energy is not constrained by time or space.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Just as we can extend love or intention across great distances, Reiki energy can be transmitted remotely
                through focused intention, visualisation and sacred Reiki symbols.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Distance Reiki is considered just as effective as in-person sessions, facilitating balance, release, and
                alignment across all levels of one's being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience Your Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each session is unique, and the healing unfolds in perfect accordance with the recipient's needs and
              intentions. Reiki sessions are available for children, adults, and elders.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-5 gap-6">
              {journeySteps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="p-6 text-center border-border hover:scale-105 transition-transform duration-300">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Card>
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Reiki is for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healing energy that adapts to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reikiForEveryone.map((item, index) => (
            <Card
              key={item.title}
              className="p-8 border-border animate-slide-in-left hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Session Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">What to Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Session Duration", desc: "60-90 minutes of deep healing and relaxation" },
            { icon: Users, title: "Personalized Care", desc: "Each session is tailored to your unique needs" },
            { icon: Heart, title: "Gentle & Safe", desc: "Non-invasive healing suitable for everyone" },
          ].map((item, index) => (
            <Card
              key={item.title}
              className="p-8 text-center border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8">Prepare for Your Session</h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bring your open mind and heart, just relax and allow yourself to receive the energy
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed font-semibold">Trust the process</p>
          </div>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Experience Reiki Journey Now</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Five Reiki Principles</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Just for today I will not worry",
              "Just for today I will not angry",
              "Just for today I will work honestly",
              "Just for today I will give thanks for my many blessings",
              "Just for today I will be kind to my neighbour and every living thing",
            ].map((principle, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4" />
                </div>
                <p className="text-xl text-foreground leading-relaxed italic">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Experience Reiki?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your Reiki healing session and begin your journey to balance and wellness.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Schedule Your Session</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about your Reiki session
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* FAQ 1 */}
          <Card className="p-8 border-border animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">What Should I Do Before a Reiki Session?</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Avoid alcohol for at least 48 hours prior to your session.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Consume light meals and stay well-hydrated.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  Approach your healing journey with an open mind—true transformation happens when you welcome it
                  wholeheartedly.
                </span>
              </li>
            </ul>
          </Card>

          {/* FAQ 2 */}
          <Card className="p-8 border-border animate-fade-in-up animation-delay-100">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              What Can I Expect During and After a Session?
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>During the session, you may experience profound relaxation or even feel sleepy.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>In the days and weeks following, you may notice increased emotional and mental clarity.</span>
              </p>
            </div>
          </Card>

          {/* FAQ 3 */}
          <Card className="p-8 border-border animate-fade-in-up animation-delay-200">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Post-Session Care</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Rest or take a brief nap to allow your body to integrate the healing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Avoid alcohol to maintain the benefits of the session.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Stay well-hydrated to support the healing process.</span>
              </li>
            </ul>
          </Card>

          {/* FAQ 4 */}
          <Card className="p-8 border-border animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Is Reiki a massage?</h3>
            <p className="text-muted-foreground leading-relaxed">
              No, Reiki is not a massage! It's an energetic practice focused on channeling universal energy.
            </p>
          </Card>

          {/* FAQ 5 */}
          <Card className="p-8 border-border animate-fade-in-up animation-delay-400 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Follow Up</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We are always connected via WhatsApp for any follow-up questions or aftercare advice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For any other specific questions, feel free to contact me.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
