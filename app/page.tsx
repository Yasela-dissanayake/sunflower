"use client"

import { useEffect, useState, useCallback } from "react"
import {
  Heart,
  Flower2,
  Brain,
  Sparkles,
  Music,
  Wind,
  Star,
  ArrowRight,
  Sun,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Heart,
      title: "Reiki",
      description: 
        "Ancient Japanese healing technique that promotes relaxation and reduces stress through energy transfer.",
      details: "Sessions include chakra balancing, aura cleansing, and deep relaxation techniques.",
      color: "from-red-400/20 to-pink-400/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Access Bars",
      description:  "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
      details: "32 points on the head are gently touched to release stored limitations.",
      color: "from-purple-400/20 to-indigo-400/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description: "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
      details: "Uses energy frequencies to reverse signs of aging and restore radiance.",
      color: "from-amber-400/20 to-yellow-400/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description: "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
      details: "Includes singing bowls, tuning forks, and frequency therapy.",
      color: "from-blue-400/20 to-cyan-400/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Wind,
      title: "Meditation",
      description: "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
      details: "Personalized techniques including breathwork and visualization.",
      color: "from-green-400/20 to-emerald-400/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Numerology",
      description: "Discover your life path and purpose through the ancient wisdom of numbers.",
      details: "Includes Loshu Grid analysis and Karmic number readings.",
      color: "from-orange-400/20 to-amber-400/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    {
      icon:  Flower2,
      title: "Chakra Alignment",
      description: "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
      details: "Full 7-chakra assessment and targeted energy balancing.",
      color: "from-violet-400/20 to-purple-400/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
  ]

  const certifications = [
    "Certified Reiki Master Teacher",
    "Access Bars Practitioner",
    "Access Energy Facelift Facilitator",
    "Sound Healing Therapist",
    "Certified Meditation Guide",
    "Professional Numerologist (Loshu & Karmic)",
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Spiritual Seeker",
      content: 
        "The sessions with Sunflowers completely transformed my perspective.  I feel more aligned and peaceful than ever before.",
      rating: 5,
    },
    {
      name: "Michael J.",
      role: "Professional",
      content:
        "After years of stress, the healing modalities helped me find balance.  Highly recommended for anyone seeking wellness.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Creative Artist",
      content:  "My creative energy has flourished. The sessions opened doors I didn't know existed within me.",
      rating: 5,
    },
    {
      name: "David R.",
      role: "Entrepreneur",
      content: "The Access Bars session was life-changing. I've never felt such mental clarity and peace.",
      rating: 5,
    },
    {
      name: "Lisa K.",
      role: "Healthcare Worker",
      content: 
        "As someone in healthcare, I was skeptical.  But the Reiki sessions have become essential to my self-care routine.",
      rating: 5,
    },
  ]

  const approaches = [
    {
      icon: Heart,
      title: "Compassionate Care",
      text: "Every session is approached with deep compassion, creating a safe space for your healing journey.",
    },
    {
      icon: Sparkles,
      title: "Holistic Approach",
      text: "I address the whole person - mind, body, and spirit - for complete transformation.",
    },
    {
      icon: Star,
      title: "Personalized Sessions",
      text: "Each healing session is tailored to your unique needs, goals, and energy.",
    },
    {
      icon: CheckCircle2,
      title:  "Professional Excellence",
      text: "Committed to ongoing learning and maintaining the highest standards of practice.",
    },
  ]

  // Auto-play testimonial carousel
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials. length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextTestimonial])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30 relative">
      {/* Enhanced Navigation with Mobile Menu */}
      <nav
        className="fixed top-0 w-full glass z-50 transition-all duration-300"
        style={{ backdropFilter: scrollY > 50 ? "blur(20px)" : "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Flower2 className="w-8 h-8 text-amber-600 animate-pulse-gentle" />
              <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full animate-pulse-gentle" />
            </div>
            <span className="text-3xl font-serif font-bold text-gradient-sunflower">Sunflowers</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative hover:text-amber-600 transition-colors group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block gradient-sunflower text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Book Session
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-amber-600" onClick={() => setMobileMenuOpen(! mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-80" : "max-h-0"}`}
        >
          <div className="px-6 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full gradient-sunflower text-white px-6 py-3 rounded-full text-sm font-semibold">
              Book Session
            </button>
          </div>
        </div>
      </nav>

      {/* HERO - with Breathing CTA */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl animate-pulse-gentle" />
        </div>

        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/Shaista-3.jpg')",
            backgroundPosition: "70% center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-400/15 to-yellow-300/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2. 5 rounded-full text-sm font-semibold text-amber-700 shadow-lg mb-8 animate-fade-in border border-amber-200">
              <Sun className="w-4 h-4 animate-pulse-gentle" />
              <span>Rooted in Energy, Created with Love</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[0.95] animate-slide-in-left">
              <span className="text-white drop-shadow-2xl">Heal.  Align. </span>
              <span className="block text-gradient-sunflower drop-shadow-lg mt-2">Radiate. </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-2xl md:text-3xl text-gray-900 font-light italic mb-6 animate-slide-in-left drop-shadow-lg"
              style={{ animationDelay: "100ms" }}
            >
              Like sunflowers turning toward the light, we too can rise, heal, and bloom. 
            </p>

            {/* Description */}
            <p
              className="text-xl text-gray-800 leading-relaxed mb-10 max-w-2xl animate-slide-in-left drop-shadow-md"
              style={{ animationDelay: "200ms" }}
            >
              At Sunflowers, we provide a supportive space to help you grow and reconnect with your true self.  Our
              holistic practices guide you toward balance, clarity, and inner harmony.
            </p>

            {/* CTA Buttons - Breathing Animation on Primary */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <button className="gradient-sunflower text-white px-10 py-4 rounded-full text-lg font-semibold animate-breathe flex items-center justify-center gap-2 group">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-amber-100">
                <p className="text-4xl font-bold text-amber-600 mb-1">500+</p>
                <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-amber-100">
                <p className="text-4xl font-bold text-amber-600 mb-1">20+</p>
                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-amber-100">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">5-Star Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-amber-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">About Me</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Your Guide to Healing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          {/* About Content with Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <img
                  src="/Shaista-13.jpg"
                  alt="Energy Healer"
                  className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-all duration-300"
                />
                <div className="absolute -bottom-6 -right-6 gradient-sunset text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl z-10 animate-float">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-white" />
                    <span>20+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl font-serif text-amber-700 italic">
                Certified healer, guide, and compassionate companion on your journey to wellness.
              </p>
              <p>
                I am a <strong>Certified Early Childhood Educator</strong>, a <strong>Reiki Master Teacher</strong>, a{" "}
                <strong>Certified Access Bars Practitioner</strong>, an{" "}
                <strong>Access Energetic Facelift Practitioner</strong>, and a <strong>Numerologist</strong>.
              </p>
              <p>
                Like many, I experienced periods of stress, disconnection, and searching for deeper meaning in life.  It
                was during one of these challenging times that I discovered the transformative power of energy healing.
              </p>
              <p>
                As I explored Reiki, something shifted within me. This sparked a deep curiosity and passion for
                understanding how energy healing works and how it could help others. With each practice, I felt more
                connected, grounded, and whole.
              </p>
            </div>
          </div>

          {/* Journey Story - Full Width */}
          <div className="max-w-5xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed mb-20">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-12 rounded-3xl shadow-lg border-2 border-amber-200">
              <p className="text-3xl font-serif italic text-center text-amber-700 mb-0">
                "Energy is powerful.  Energy transforms. Energy connects."
              </p>
            </div>

            <p>
              I dedicated myself to studying various healing modalities, earning certifications in{" "}
              <strong>Reiki</strong>,<strong> Access Bars</strong>, <strong>Sound Healing</strong>, and{" "}
              <strong>Numerology</strong> (Loshu & Karmic). Each modality added another dimension to my understanding of
              healing and the human energy system.
            </p>
            <p>
              Each step brought me closer to my authentic self, awakening a deep desire to help others find the same
              peace and empowerment. 
            </p>
            <p className="text-xl font-medium text-amber-700">
              And so, Sunflowers was born — a space created from love, transformation, and the belief that healing is
              for everyone.  I integrate diverse modalities to provide holistic, personalized support designed to nurture
              healing, promote growth, and empower individuals on their unique paths of self-discovery and well-being.
            </p>
          </div>

          {/* Mission & Vision - Side by Side */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-amber-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 gradient-sunflower rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-serif font-bold mb-6 text-gray-900">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sunflowers, my mission is to spread awareness about the transformative power of energy healing,
                showing how it empowers individuals to nurture themselves and their loved ones.  We guide people to
                unlock their full potential, live with balance, vitality, and inner strength, and embrace a life of
                holistic wellness.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-amber-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 gradient-sunset rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-serif font-bold mb-6 text-gray-900">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                My vision is to make energy healing accessible to all, creating a safe and supportive space for every
                individual's healing journey, and fostering a connected, thriving community of wellness and empowerment.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">Credentials</p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Certifications & Training</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-amber-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gradient-sunflower rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Approach */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">Philosophy</p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">My Approach</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => {
                const Icon = approach.icon
                return (
                  <div
                    key={index}
                    className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-amber-100"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 gradient-sunflower rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{approach.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{approach.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Interactive Cards with Hover Reveal */}
      <section className="py-32 px-6 bg-gradient-to-b from-amber-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Holistic Healing Modalities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover transformative practices designed to restore balance, clarity, and vitality. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isLast = index === services.length - 1
              return (
                <div key={service.title} className={`group ${isLast ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`relative bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-white hover:border-amber-200 cursor-pointer hover:-translate-y-2 h-full overflow-hidden`}
                  >
                    {/* Icon */}
                    <div
                      className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                    {/* Hover Reveal Details */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                      <p className="text-sm text-amber-700 font-medium bg-amber-100/50 p-3 rounded-xl mt-2">
                        {service.details}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-4 transition-all mt-4">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Hover Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute inset-0 ${service.iconBg} opacity-10 rounded-3xl`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-16">
            <a
              href="/services"
              className="inline-flex items-center gap-2 gradient-sunflower text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Auto-Play Carousel */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-amber-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">Testimonials</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Stories of Transformation</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>

          {/* Carousel */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Testimonial */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-amber-100 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-6 left-6 text-8xl text-amber-200 font-serif leading-none">"</div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-8 justify-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 mb-10 italic leading-relaxed text-center">
                  "{testimonials[currentTestimonial]. content}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-xl">{testimonials[currentTestimonial].name}</p>
                  <p className="text-amber-600 font-medium">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors border border-amber-200"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md: translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover: bg-amber-50 transition-colors border border-amber-200"
            >
              <ChevronRight className="w-6 h-6 text-amber-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-amber-500 w-8" : "bg-amber-200 hover:bg-amber-300"
                  }`}
                />
              ))}
            </div>

            {/* Secondary Testimonials */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(1, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 italic leading-relaxed mb-6 line-clamp-4">
                    "{item.content}"
                  </p>

                  <div className="border-t border-amber-100 pt-4">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-amber-600">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pause indicator */}
            {isPaused && <p className="text-center text-sm text-gray-400 mt-4">Paused - move mouse away to resume</p>}
          </div>

          {/* View All Testimonials Link */}
          <div className="text-center mt-16">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-white text-amber-600 border-2 border-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 group"
            >
              Read More Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-white to-amber-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">Get In Touch</p>
            <h2 className="text-5xl md: text-6xl font-serif font-bold mb-6">Start Your Healing Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the first step?  Reach out today for a free consultation. 
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-amber-100">
              <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-all duration-300 bg-amber-50/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email. com"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-all duration-300 bg-amber-50/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-all duration-300 bg-amber-50/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What brings you here?</label>
                  <textarea
                    placeholder="Tell me about your healing journey or what you're looking for..."
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-all duration-300 bg-amber-50/30 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full gradient-sunflower text-white px-8 py-5 rounded-full text-lg font-bold hover:scale-105 hover: shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-10 rounded-3xl shadow-xl border-2 border-amber-200">
                <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900">Let's Connect</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-sunflower rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-sunflower rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <p className="text-gray-700">hello@sunflowershealing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-sunflower rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-700">Negombo, Western Province, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-sunflower rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Hours</p>
                      <p className="text-gray-700">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-700 text-sm">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-amber-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Free 15-minute consultation call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Personalized session recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Safe, confidential environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 gradient-sunflower relative overflow-hidden z-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Flower2 className="w-20 h-20 text-white mx-auto animate-float drop-shadow-xl" />
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg">
            Ready to Begin Your Journey? 
          </h2>

          <p className="text-2xl md:text-3xl text-white/95 italic mb-8 drop-shadow-md">
            Like sunflowers turning toward the light, we too can rise, heal, and bloom. 
          </p>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your session.  Join a workshop. Or simply connect.  Healing starts with one small step — and you're
            already on your way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-600 px-12 py-5 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Begin Your Healing Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Flower2 className="w-8 h-8 text-amber-500" />
              <span className="text-3xl font-serif font-bold">Sunflowers</span>
            </div>
            <p className="text-gray-400 text-lg mb-8 italic">Rooted in energy, Created with love</p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-8">
              <a href="/" className="hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="/services" className="hover:text-white transition-colors font-medium">
                Services
              </a>
              <a href="/testimonials" className="hover:text-white transition-colors font-medium">
                Testimonials
              </a>
              <a href="/contact" className="hover:text-white transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">© 2025 Sunflowers Healing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}