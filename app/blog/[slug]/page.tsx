import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts: Record<string, any> = {
  "understanding-reiki-energy-healing": {
    title: "Understanding Reiki: The Ancient Art of Energy Healing",
    category: "Reiki",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/reiki-healing-hands-energy-peaceful.jpg",
    content: `
      <p>Reiki is a Japanese healing technique that has been practiced for over a century. The word "Reiki" comes from two Japanese words: "Rei" meaning universal, and "Ki" meaning life force energy. Together, they represent the universal life force energy that flows through all living things.</p>

      <h2>The Origins of Reiki</h2>
      <p>Reiki was developed in the early 20th century by Mikao Usui, a Japanese Buddhist monk. After years of study and meditation, Usui experienced a profound spiritual awakening on Mount Kurama, where he received the ability to heal through energy transfer.</p>

      <h2>How Reiki Works</h2>
      <p>During a Reiki session, the practitioner channels universal life force energy through their hands to the recipient. This energy flows to where it's needed most, helping to:</p>
      <ul>
        <li>Release energy blockages</li>
        <li>Balance the chakras</li>
        <li>Promote deep relaxation</li>
        <li>Support the body's natural healing processes</li>
        <li>Reduce stress and anxiety</li>
      </ul>

      <h2>What to Expect in a Session</h2>
      <p>A typical Reiki session lasts about 60 minutes. You'll lie fully clothed on a comfortable treatment table while the practitioner places their hands lightly on or just above various parts of your body. Many people experience sensations of warmth, tingling, or deep relaxation during the session.</p>

      <h2>The Benefits of Reiki</h2>
      <p>Regular Reiki sessions can provide numerous benefits, including:</p>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>Improved sleep quality</li>
        <li>Enhanced emotional wellbeing</li>
        <li>Pain relief</li>
        <li>Increased energy levels</li>
        <li>Greater sense of peace and clarity</li>
      </ul>

      <h2>Is Reiki Right for You?</h2>
      <p>Reiki is a gentle, non-invasive practice that's suitable for people of all ages and conditions. It complements conventional medical treatments and can be particularly helpful for those dealing with stress, chronic pain, or emotional challenges.</p>

      <p>If you're curious about experiencing Reiki for yourself, I invite you to book a session. Together, we can explore how this ancient healing art can support your journey to wellness and balance.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="aspect-[21/9] w-full">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">{post.title}</h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-semibold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Share this article:</p>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-secondary/30 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Experience Healing?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Book a session and discover the transformative power of energy healing for yourself
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
        <div className="text-center text-muted-foreground">
          <p>More articles coming soon...</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
