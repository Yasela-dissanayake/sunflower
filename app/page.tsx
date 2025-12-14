import React, { useState } from 'react';
import { Heart, Flower2, Brain, Sparkles, Music, Wind, Star, Zap, Lightbulb, CheckCircle, X } from 'lucide-react';

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);

  const services = [
    {
      icon: Heart,
      title: "Reiki",
      description: "Ancient Japanese healing technique that promotes relaxation and reduces stress through energy transfer.",
    },
    {
      icon: Brain,
      title: "Access Bars",
      description: "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description: "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description: "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
    },
    {
      icon: Wind,
      title: "Meditation",
      description: "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
    },
    {
      icon: Heart,
      title: "Numerology",
      description: "Discover your life path and purpose through the ancient wisdom of numbers.",
    },
    {
      icon: Flower2,
      title: "Chakra Alignment",
      description: "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
    },
  ];

  const certifications = [
    "Certified Reiki Master",
    "Access Bars Practitioner",
    "Access Energy Facelift Facilitator",
    "Sound Healing Therapist",
    "Certified Meditation Guide",
    "Professional Numerologist",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Spiritual Seeker",
      content: "The sessions with Sunflowers completely transformed my perspective. I feel more aligned and peaceful than ever before.",
      rating: 5,
    },
    {
      name: "Michael J.",
      role: "Professional",
      content: "After years of stress, the healing modalities helped me find balance. Highly recommended for anyone seeking wellness.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Creative Artist",
      content: "My creative energy has flourished. The sessions opened doors I didn't know existed within me.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Single Image Modal on Load */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="/Shaista-3.jpg"
              alt="Welcome to Sunflowers"
              className="max-w-4xl max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="absolute bottom-8 text-white text-sm hover:text-gray-300 transition-colors"
          >
            Click anywhere to enter
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-amber-600" />
            <span className="text-xl font-serif font-semibold">Sunflowers</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-amber-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <button className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm hover:bg-amber-700 transition-colors">
            Book Session
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm mb-6">
            <Flower2 className="h-4 w-4" />
            <span>Rooted in energy, Created with love</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Heal. Align. Radiate.
          </h1>
          <p className="text-2xl text-amber-700 font-medium italic mb-8">
            Like sunflowers turning toward the light, we too can rise, heal, and bloom.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            At Sunflowers, we provide a supportive space to help you grow and reconnect with your true self. 
            Inspired by the sunflower's symbolism of renewal, our holistic and energy-based practices guide 
            you toward balance, clarity, and inner harmony.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 transition-all hover:scale-105">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center mb-16">About Me</h2>
          
          {/* About Content with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/Shaista-13.jpg"
                alt="Energy Healer"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="mt-4 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
                20+ Years Experience
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I am a Certified Early Childhood Educator, a Reiki Master Teacher, a Certified Access Bars 
                Practitioner, an Access Energetic Facelift Practitioner, and a Numerologist.
              </p>
              <p>
                Like many, I experienced periods of stress, disconnection, and searching for deeper meaning 
                in life. It was during one of these challenging times that I discovered the transformative 
                power of energy healing.
              </p>
              <p>
                As I explored Reiki, something shifted within me. This sparked a deep curiosity and passion 
                for understanding how energy healing works and how it could help others. With each practice, 
                I felt more connected, grounded, and whole. I realized healing wasn't just about others — 
                it started with me.
              </p>
            </div>
          </div>

          {/* Journey Story - Full Width */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-2xl font-serif italic text-center text-amber-700 py-8">
              Energy is powerful. Energy transforms. Energy connects.
            </p>
            <p>
              I dedicated myself to studying various healing modalities, earning certifications in Reiki, 
              Access Bars, Sound Healing, and Numerology (Loshu & Karmic). Each modality added another 
              dimension to my understanding of healing and the human energy system.
            </p>
            <p>
              Each step brought me closer to my authentic self, awakening a deep desire to help others 
              find the same peace and empowerment.
            </p>
            <p>
              And so, Sunflowers was born. Rooted in energy. Created with love. A space created from love, 
              transformation, and the belief that healing is for everyone. I integrate diverse modalities 
              to provide holistic, personalized support designed to nurture healing, promote growth, and 
              empower individuals on their unique paths of self-discovery and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              At Sunflowers, my mission is to spread awareness about the transformative power of energy 
              healing, showing how it empowers individuals to nurture themselves and their loved ones. 
              We guide people to unlock their full potential, live with balance, vitality, and inner 
              strength, and embrace a life of holistic wellness.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              My vision is to make energy healing accessible to all, creating a safe and supportive space 
              for every individual's healing journey, and fostering a connected, thriving community of 
              wellness and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center mb-4">Our Healing Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover a range of holistic healing modalities designed to support your journey to wellness.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Certifications & Training
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-4 text-lg">
                <span className="text-3xl">🌻</span>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">My Approach</h2>
          <div className="space-y-6">
            {[
              {
                title: "Compassionate Care",
                text: "Every session is approached with deep compassion, creating a safe space for your healing journey."
              },
              {
                title: "Holistic Approach",
                text: "I address the whole person - mind, body, and spirit - for complete transformation."
              },
              {
                title: "Personalized Sessions",
                text: "Each healing session is tailored to your unique needs, goals, and energy."
              },
              {
                title: "Professional Excellence",
                text: "Committed to ongoing learning and maintaining the highest standards of practice."
              }
            ].map((approach) => (
              <div key={approach.title} className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🌻</span>
                <div className="text-lg">
                  <span className="font-semibold text-gray-900">{approach.title}:</span>{' '}
                  <span className="text-gray-700">{approach.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-16">Real transformations from real people</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">Ready to Begin?</h2>
          <p className="text-2xl text-amber-700 italic mb-8">
            Like sunflowers turning toward the light, we too can rise, heal, and bloom.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Book your session. Join a workshop. Or simply connect.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Healing starts with one small step — and you're already on your way.
          </p>
          <button className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg hover:bg-amber-700 transition-all hover:scale-105">
            Begin Your Healing Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-serif font-semibold">Sunflowers</span>
          </div>
          <p className="text-gray-400 mb-6">Rooted in energy, Created with love</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-500 mt-8">© 2024 Sunflowers Healing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}