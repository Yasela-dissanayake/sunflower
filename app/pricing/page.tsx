import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function PricingPage() {
  const services = [
    {
      name: "Reiki Healing Session",
      duration: "60 minutes",
      price: "AED 410",
      description: "Experience deep relaxation and energy balance through traditional Reiki healing.",
      features: ["Full body energy scan", "Chakra balancing", "Energy blockage release", "Post-session guidance"],
    },
    {
      name: "Access Bars Session",
      duration: "90 minutes",
      price: "AED 500",
      description: "Release limiting beliefs and mental clutter by activating 32 points on your head.",
      features: [
        "32-point head activation",
        "Stress and anxiety relief",
        "Mental clarity enhancement",
        "Deep relaxation",
      ],
    },
    {
      name: "Access Energy Facelift",
      duration: "60 minutes",
      price: "AED 500",
      description: "Natural, non-invasive facial rejuvenation through energy work.",
      features: ["Face and neck energy work", "Natural lifting effect", "Skin rejuvenation", "Relaxation and glow"],
    },
    {
      name: "Sound Healing Session",
      duration: "75 minutes",
      price: "AED 399",
      description: "Harmonize your energy through therapeutic sound vibrations.",
      features: ["Singing bowls therapy", "Vibrational healing", "Deep meditation state", "Energy alignment"],
    },
    {
      name: "Guided Meditation",
      duration: "45 minutes",
      price: "AED 250",
      description: "Personalized meditation guidance for inner peace and clarity.",
      features: ["Customized meditation", "Breathing techniques", "Mindfulness training", "Stress management"],
    },
    {
      name: "Numerology Reading",
      duration: "60 minutes",
      price: "AED 550",
      description: "Discover your life path and purpose through the wisdom of numbers.",
      features: ["Life path analysis", "Personal year forecast", "Name numerology", "Detailed report"],
    },
    {
      name: "Karmic Numerology",
      duration: "90 minutes",
      price: "AED 550",
      description: "Deep dive into your karmic patterns and soul's journey.",
      features: ["Karmic debt analysis", "Soul purpose revelation", "Past life insights", "Comprehensive report"],
    },
    {
      name: "Combination Package",
      duration: "2 hours",
      price: "AED 650",
      description: "Combine multiple modalities for a comprehensive healing experience.",
      features: ["Choose 2-3 modalities", "Customized session", "Holistic approach", "Extended healing time"],
      featured: true,
    },
  ]

  const testimonials = [
    {
      name: "Monisha Nauman",
      location: "Dubai, UAE",
      service: "Online Reiki Session",
      rating: 5,
      text: "I recently attended my first online Reiki session with Shaista Lalani, and I am beyond impressed with the experience. Shaista's guidance was clear, compassionate, and deeply insightful, making the session both relaxing and transformative. I felt a genuine connection to the instructions given, which helped me fully embrace the process. I highly recommend Shaista Lalani's sessions to anyone seeking a meaningful and rejuvenating experience.",
    },
     {
      name: "NL",
      location: "Dubai, UAE",
      service: "Reiki Full Moon Meditation",
      rating: 5,
      text: "My first session at Sunflowers was very relaxing. I wasn't sure what to expect as this was my first ever Reiki Full Moon group meditation session.",
    },
    {
      name: "Parveen Rehman",
      location: "Dubai, UAE",
      service: "Reiki Full Moon Meditation",
      rating: 5,
      text: "My first session at Sunflowers was very relaxing. I wasn't sure what to expect as this was my first ever Reiki Full Moon group meditation session. Shaista warmly welcomed me to the tranquil setting where the session was being held and made me feel at ease. She explained the benefits of Full Moon meditation and what to expect during and after the session. The overall experience of the session was comforting, and I felt relaxed after the session. As this was my first Reiki experience, I had a lot of questions about it. Shaista answered them in detail and explained how Reiki works. I am glad that I attended this session.",
    },
    {
      name: "Kiran Sajwani",
      location: "Dubai, UAE",
      service: "Full Moon Meditation",
      rating: 5,
      text: "Thank you so much it was a great enlightening time with you😊. The guided meditation for the strawberry full moon was helpful in reminding us to disconnect, reflect and release, and it was a lovely experience that invited a sense of peace and connection.",
    },
    {
      name: "Bhavna Sharma",
      location: "Dubai, UAE",
      service: "Full Moon Meditation",
      rating: 5,
      text: "The full moon meditation session was very good. It was very relaxing. After that session I felt light and full of energy. It is difficult to meditate in every day's busy schedule, but sessions like this are the perfect solution.",
    },
    {
      name: "Hamida",
      location: "Dubai, UAE",
      service: "Meditation Session",
      rating: 5,
      text: "Thank you dear Shaista for the nice session. Please book me from now for the next one.",
    },
    {
      name: "Serena",
      location: "Dubai, UAE",
      service: "Meditation Session",
      rating: 5,
      text: "Shaista, thank you for the lovely session. I'm seeing some small but positive after-effects already. Definitely helped with mindset.",
    },
    {
      name: "Salima Ladhani",
      location: "Dubai, UAE",
      service: "Meditation Sessions",
      rating: 5,
      text: "I've been fortunate enough to attend a few of the meditation sessions run by Shaista. They leave me feeling rejuvenated, calm and peaceful. She has a nice way of both explaining the reasons behind the meditation and preparing us for the session so we can maximise our benefit from it. Wonderful to see what amazing work you are doing, especially for beginners like me that find meditation hard unless it's guided. All the best!",
    },
    {
      name: "Monica Anand",
      location: "Dubai, UAE",
      service: "Full Moon Meditation & Reiki",
      rating: 5,
      text: "Thank you so much for such a beautiful experience I had during the full moon meditation session. I felt so calm, relaxed and grateful for what the universe has given us. Also, the Reiki energy you were sending made me feel that my pain on my knee vanished😊❤️. Thank you for all the energy you share and heal us🙏🤗.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Pricing & Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Invest in your wellbeing with transparent pricing and hear from those who've experienced transformation
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Service Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All sessions are conducted in a peaceful, private setting in Dubai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`p-8 border-border relative animate-fade-in-up hover:scale-105 transition-transform duration-300 ${service.featured ? "ring-2 ring-primary shadow-lg" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Popular Choice
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.duration}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  {/* <span className="text-4xl font-bold text-primary">{service.price}</span> */}
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  service.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="/contact">Book Session</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in animation-delay-400">
          <Card className="p-8 max-w-2xl mx-auto border-border bg-secondary/30">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Package Deals Available</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Book multiple sessions and save! Contact me to discuss customized packages tailored to your healing
              journey. Special rates available for monthly commitments.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Inquire About Packages</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real people on their healing journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-8 border-border animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-primary mt-1">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Take the first step towards balance, peace, and transformation. Book your session today and experience the
            power of energy healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
