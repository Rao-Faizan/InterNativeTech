"use client"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import { ChevronRight, Link, Moon, Sun } from "lucide-react"

import Ballpit from "@/components/Ballpit"
import { motion } from "framer-motion"

// Color theme variables
const colors = {
  dark: "#32322C",   // Dark background
  primary: "#1C3144", // Primary dark blue
  accent: "#035F5C",  // Teal accent
  secondary: "#8DA7BE", // Light blue
  light: "#FEEFEE",    // Off-white
}

export function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className={`bg-[${colors.light}] dark:bg-[${colors.dark}] text-[${colors.primary}] dark:text-[${colors.light}] transition-colors duration-300`}>
      {/* Hero Section
      <section className="relative overflow-hidden bg-[${colors.primary}] w-full min-h-[600px] flex flex-col justify-center items-center text-center">
        Text Content
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 px-2 md:px-8"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-[${colors.light}] transition-all duration-300 hover:text-[${colors.secondary}]">
            About Us
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-[${colors.secondary}] mb-8"
          >
            We're a team of passionate developers, designers, and strategists building exceptional software solutions.
          </motion.p>
        </motion.div>
     */}
        {/* Ballpit Background */}
        {/* <div className="absolute inset-0 z-10 ">
          <Ballpit 
            count={150}
            friction={1.0}
            followCursor={true}
            colors={[
              0x1C3144, // Primary dark blue
              0x035F5C, // Teal accent
              0x8DA7BE, // Light blue
              0xFEEFEE, // Off-white
            ]}
            ballSize={{ min: 0.8, max: 1.8 }}
          />
        </div>
      </section> */}
      {/* Hero Section with Particles */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden  text-[#FEEFEE]">
        <div className="absolute inset-0 z-0 opacity-2">
          <Ballpit 
            count={100}
            followCursor={true}
            friction={0.95}
            colors={[
              0x1C3144, // Prussian Blue
              0x035F5C, // Deep Jungle Green
              0x8DA7BE, // Pewter Blue
              0xFEEFEE, // Snow
            ]}
            ballSize={{ min: 1, max: 3 }}
          />
        </div>

        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8DA7BE] to-[#035F5C]">
            About Us
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 text-[#8DA7BE]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We're a team of passionate developers, designers, and strategists building exceptional software solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronRight className="w-8 h-8 text-[#8DA7BE] rotate-90" />
        </motion.div>
      </section>


      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-video md:aspect-square overflow-hidden rounded-xl border border-[${colors.secondary}]/30 shadow-lg"
          >
            <Image
              src="/Designer.jpeg"
              alt="Our team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[${colors.accent}] dark:text-[${colors.secondary}]">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold">From Humble Beginnings to Industry Leaders</h3>
            </div>
            <p className="text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">
              Founded in 2020, InterNative Tech started with a dream in a small office. Passion, innovation, and relentless commitment helped us become trusted technology partners for businesses worldwide.
            </p>
            <p className="text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">
              Today, a talented team of 30+ professionals powers cutting-edge digital experiences, building lasting partnerships along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={`py-16 md:py-24 bg-[${colors.secondary}]/10 dark:bg-[${colors.primary}]/50`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[${colors.accent}] dark:text-[${colors.secondary}] mb-3">Our Mission & Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h3>
            <p className="max-w-2xl mx-auto mb-12 text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">
              Our mission and values are the heart of every project we deliver.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-[${colors.secondary}]/30 bg-[${colors.light}] dark:bg-[${colors.primary}] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">
                Empower businesses through innovative software that drives growth, agility, and digital excellence.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-[${colors.secondary}]/30 bg-[${colors.light}] dark:bg-[${colors.primary}] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-6">Our Values</h4>
              <ul className="space-y-4 text-left">
                {[
                  { title: "Excellence", desc: "We uphold the highest standards in everything we do." },
                  { title: "Innovation", desc: "We embrace new technologies to deliver better solutions." },
                  { title: "Integrity", desc: "We operate transparently, ethically, and respectfully." },
                  { title: "Collaboration", desc: "We thrive through teamwork and partnerships." },
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-[${colors.accent}] dark:text-[${colors.secondary}] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold">{item.title}:</span> <span className="text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[${colors.accent}] dark:text-[${colors.secondary}] mb-3">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Experts</h3>
            <p className="max-w-2xl mx-auto mb-12 text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">
              A talented, diverse, and passionate team driving innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { name: "Abo ul Hassan Babar", role: "CEO & Co-Founder" },
              { name: "Abdul Mateen", role: "CTO & Co-Founder" },
              { name: "Ubaid Qureshi", role: "UX/UI Designer" },
              { name: "Rao Faizan", role: "Lead Developer" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="overflow-hidden rounded-xl border border-[${colors.secondary}]/30 bg-[${colors.light}] dark:bg-[${colors.primary}] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${member.name.charAt(0)}`}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-sm text-[${colors.primary}]/80 dark:text-[${colors.secondary}]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 bg-gradient-to-r from-[${colors.accent}] to-[${colors.primary}] text-[${colors.light}]`}>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "350+", label: "Happy Clients" },
              { value: "400+", label: "Projects Completed" },
              { value: "30+", label: "Team Members" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="transition-transform duration-300"
              >
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}