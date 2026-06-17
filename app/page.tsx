"use client";

import React, { useEffect, useState } from "react";
import {
  Heart,
  Flower2,
  Brain,
  Sparkles,
  Music,
  Wind,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Heart,
      title: "Reiki",
      description:
        "Ancient Japanese healing technique that promotes relaxation and reduces stress through energy transfer.",
      gradient: "from-[#78632C] to-[#9a813a]",
    },
    {
      icon: Brain,
      title: "Access Bars",
      description:
        "Gentle touch therapy that releases electromagnetic charges of thoughts, feelings, and emotions.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Access Energy Facelift",
      description:
        "Natural, non-invasive facelift that rejuvenates and revitalizes your appearance.",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: Music,
      title: "Sound Healing",
      description:
        "Therapeutic application of sound frequencies to restore harmony and balance in the body.",
      gradient: "from-purple-400 to-fuchsia-500",
    },
    {
      icon: Wind,
      title: "Meditation",
      description:
        "Guided meditation sessions to calm the mind, reduce anxiety, and enhance inner peace.",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Numerology",
      description:
        "Discover your life path and purpose through the ancient wisdom of numbers.",
      gradient: "from-[#78632C] to-[#BFE1D3]",
    },
    {
      icon: Flower2,
      title: "Chakra Alignment",
      description:
        "Balance your energy centers for emotional freedom, clarity, and alignment in all areas of life.",
      gradient: "from-violet-400 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Spiritual Seeker",
      content:
        "The sessions with Sunflowers completely transformed my perspective. I feel more aligned and peaceful than ever before.",
      rating: 5,
    },
    {
      name: "Michael J.",
      role: "Professional",
      content:
        "After years of stress, the healing modalities helped me find balance. Highly recommended for anyone seeking wellness.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Creative Artist",
      content:
        "My creative energy has flourished. The sessions opened doors I didn't know existed within me.",
      rating: 5,
    },
  ];

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#f4f9f7] text-slate-800 font-sans selection:bg-[#BFE1D3] selection:text-[#78632C] overflow-hidden">
      {/* Decorative Fixed Orbs for Energy Feel */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#BFE1D3]/40 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#78632C]/15 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#BFE1D3]/25 blur-[140px]"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20 py-3" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="relative">
              <img
                src="/sun-logo.png"
                alt="logo"
                className="h-40 w-40 object-cover"
              />
            </div>
            {/* <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-700">
              Sunflowers
            </span> */}
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Services", "About", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-slate-700 hover:text-[#78632C] transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#78632C] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(120, 99, 44, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#78632C] text-white px-7 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-[#78632C]/30 transition-all"
          >
            Book Session
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#BFE1D3]/40 via-[#BFE1D3]/20 to-[#BFE1D3]/10 z-10" />
          {/* <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/Shaista-3.jpg"
            alt="Sunflower background"
            className="w-full h-full object-cover object-[15%_25%] opacity-60 mix-blend-multiply"
          /> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-50">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#78632C]/30 shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#78632C]" />
              <span className="text-sm font-medium text-[#78632C]">
                Awaken Your Inner Light
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] text-slate-900 tracking-tight"
            >
              Heal. Align. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78632C] via-[#9a813a] to-[#BFE1D3]">
                Radiate.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-xl md:text-2xl text-slate-700 font-light mb-8 leading-relaxed"
            >
              Like sunflowers turning toward the light, we too can rise, heal,
              and bloom.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl"
            >
              At Sunflowers, we provide a supportive space to help you grow and
              reconnect with your true self. Inspired by the sunflower's
              symbolism of renewal, our holistic and energy-based practices
              guide you toward balance, clarity, and inner harmony.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#78632C] text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl shadow-[#78632C]/25 border border-white/10 group flex items-center gap-2"
              >
                Start Your Journey
                <Wind className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/60 backdrop-blur-md text-slate-800 px-8 py-4 rounded-full text-lg font-medium shadow-sm border border-white/50 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-slate-900">
              Healing Offerings
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Discover a range of holistic modalities designed to clear
              blockages, restore energy flow, and support your well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/50 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-slate-800" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center text-sm font-medium text-[#78632C] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 gap-1">
                    Book this session <Sparkles className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BFE1D3]/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid xl:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#78632C]/60 to-[#BFE1D3] rounded-[2.5rem] blur-2xl opacity-30 animate-pulse" />
              <img
                src="/Shaista-13.jpg"
                alt="Energy Healer"
                className="relative w-full h-[600px] object-cover rounded-[2rem] shadow-2xl z-10 border border-white/50"
              />

              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 z-20"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#78632C] to-[#78632C]/70 mb-1">
                  20+
                </div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BFE1D3]/50 text-[#78632C] text-sm font-medium mb-4">
                  <Flower2 className="w-4 h-4" /> About My Journey
                </motion.div>
                <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Guided by{" "}
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#78632C] to-[#78632C]/70">
                    Love
                  </span>{" "}
                  & Energy
                </h2>
              </div>

              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  As a Certified Early Childhood Educator, Reiki Master Teacher,
                  Access Bars Practitioner, and Numerologist, my path has been a
                  rich tapestry of exploring human potential and authentic
                  connection.
                </p>
                <p>
                  Like many, I experienced periods of stress and sought deeper
                  meaning. When I discovered the transformative power of energy
                  healing, specifically Reiki, a profound shift occurred within
                  me. I felt more connected, grounded, and whole.
                </p>
                <p className="pl-6 border-l-2 border-[#78632C] italic text-xl text-slate-700 py-2">
                  "Healing wasn't just about others — it started with me. Energy
                  is powerful. Energy transforms. Energy connects."
                </p>
                <p>
                  Sunflowers was born from this revelation. A space rooted in
                  energy and created with love, designed to help you unlock your
                  potential, live with vitality, and embrace holistic wellness.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-colors"
              >
                Read Full Story
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-slate-900">
              Voices of Healing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Real transformations from beautiful souls.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/60 backdrop-blur-lg p-10 rounded-[2rem] shadow-xl border border-white/80 relative"
              >
                <div className="absolute top-8 right-8 text-[#BFE1D3]/70">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + j * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-[#78632C] text-[#78632C] drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-700 mb-8 italic text-lg leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFE1D3] to-[#BFE1D3]/60 flex items-center justify-center font-bold text-lg text-[#78632C] shadow-inner">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-medium text-[#78632C]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-[#78632C]/60 via-[#BFE1D3]/60 to-[#78632C]/60 rounded-[3rem] blur-2xl opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-white/50 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#78632C] via-[#BFE1D3] to-[#78632C]" />

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="inline-block p-4 rounded-full bg-[#BFE1D3] mb-8"
            >
              <Flower2 className="w-10 h-10 text-[#78632C]" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-slate-900 leading-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78632C] to-[#78632C]/70">
                Bloom?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Healing starts with one small step — and you're already on your
              way. Book your session, join a workshop, or simply connect.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(120, 99, 44, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#78632C] text-white px-10 py-5 rounded-full text-xl font-medium shadow-xl transition-all hover:bg-[#5c4c21]"
            >
              Begin Your Healing Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16 px-6 relative z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#78632C]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/sunflower-bg-rm.png"
              alt="logo"
              className="h-30 w-30 object-cover"
            />
          </div>
          <p className="text-[#BFE1D3]/90 mb-10 text-lg font-light italic">
            Rooted in energy. Created with love.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-stone-400 mb-12">
            {["About", "Services", "Approach", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#BFE1D3] transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="w-24 h-px bg-stone-800 mx-auto mb-8" />
          <p className="text-sm text-stone-500 font-light">
            © {new Date().getFullYear()} Sunflowers Healing. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
