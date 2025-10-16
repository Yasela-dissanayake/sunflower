import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "understanding-reiki-energy-healing",
      title: "Understanding Reiki: The Ancient Art of Energy Healing",
      excerpt:
        "Discover the fundamentals of Reiki healing, its origins, and how this gentle yet powerful practice can transform your wellbeing.",
      category: "Reiki",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/reiki-healing-hands-energy-peaceful.jpg",
    },
    {
      slug: "access-bars-mental-clarity",
      title: "Access Bars: Unlocking Mental Clarity and Peace",
      excerpt:
        "Learn how Access Bars can help release limiting beliefs, reduce stress, and create space for new possibilities in your life.",
      category: "Access Bars",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/access-bars-head-points-healing-therapy.jpg",
    },
    {
      slug: "sound-healing-vibrational-therapy",
      title: "The Science and Spirit of Sound Healing",
      excerpt:
        "Explore how sound vibrations can harmonize your energy, reduce stress, and promote deep healing on physical and emotional levels.",
      category: "Sound Healing",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/sound-healing-singing-bowls-peaceful-therapy.jpg",
    },
    {
      slug: "numerology-life-path-guide",
      title: "Your Life Path Number: A Guide to Self-Discovery",
      excerpt:
        "Uncover the secrets hidden in your birth date and learn how numerology can provide insights into your life's purpose and journey.",
      category: "Numerology",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "/numerology-numbers-mystical-sacred-geometry.jpg",
    },
    {
      slug: "meditation-beginners-guide",
      title: "Meditation for Beginners: Starting Your Practice",
      excerpt:
        "A practical guide to beginning your meditation journey, including simple techniques you can start using today for inner peace.",
      category: "Meditation",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "/meditation-peaceful-serene-mindfulness.jpg",
    },
    {
      slug: "energy-facelift-natural-beauty",
      title: "Natural Beauty from Within: The Energy Facelift Approach",
      excerpt:
        "Discover how Access Energy Facelift offers a non-invasive alternative to traditional cosmetic procedures through energy work.",
      category: "Energy Facelift",
      date: "February 15, 2024",
      readTime: "6 min read",
      image: "/energy-facelift-natural-beauty-glowing-skin.jpg",
    },
  ]

  const categories = ["All", "Reiki", "Access Bars", "Sound Healing", "Numerology", "Meditation", "Energy Facelift"]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Healing Insights Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore articles on energy healing, spiritual growth, and holistic wellness
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden border-border group hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      {/*
      <section className="bg-secondary/30 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Subscribe to receive healing insights, wellness tips, and updates on new blog posts directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
*/}
      <Footer />
    </div>
  )
}
