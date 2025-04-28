"use client";
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// export const metadata = {
//   title: "About Us | Your Software House",
//   description: "Learn about our company, mission, values, and the team behind Your Software House",
// }

export default function AboutPage() {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined') {
      // Hero section animations
      gsap.from(".hero-title", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
      })
      
      gsap.from(".hero-subtitle", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        delay: 0.6
      })

      // Section heading animations
      gsap.utils.toArray(".section-heading").forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        })
      })

      // Story section animations
      gsap.from(".story-image", {
        scrollTrigger: {
          trigger: ".story-image",
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

      gsap.from(".story-content", {
        scrollTrigger: {
          trigger: ".story-content",
          start: "top 85%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

      // Mission & Values animations
      gsap.utils.toArray(".mission-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.15
        })
      })

      // Team member animations
      gsap.utils.toArray(".team-member").forEach((member: any, i) => {
        gsap.from(member, {
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.1
        })
      })

      // Client logo animations
      gsap.utils.toArray(".client-logo").forEach((logo: any, i) => {
        gsap.from(logo, {
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: i * 0.1
        })
      })
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1677442135136-760c813a743e?q=80&w=3870&auto=format&fit=crop"
            alt="AI generated tech background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 z-15 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container relative z-30 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="text-green-500">Internative</span> Tech
            </h1>
            <p className="hero-subtitle text-xl text-gray-300">
              We're a team of passionate developers, designers, and digital strategists dedicated to creating
              exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="story-image relative aspect-video md:aspect-square rounded-lg overflow-hidden border dark:border-gray-700 border-gray-200 shadow-lg transform transition-transform hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3865&auto=format&fit=crop"
                alt="Our team working together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="story-content">
              <h2 className="section-heading text-green-600 dark:text-green-500 text-sm uppercase font-medium mb-2 tracking-widest">Our Story</h2>
              <h3 className="section-heading text-3xl md:text-4xl font-bold tracking-tight dark:text-white mb-4">
                From Humble Beginnings to Industry Leaders
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded in 2020, Your Software House began with a small team of three developers working from a tiny
                office. Our passion for creating innovative software solutions quickly earned us a reputation for
                excellence and reliability.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Today, we're over 30 professionals strong—delivering cutting-edge digital experiences to clients
                globally.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our commitment to quality, innovation, and client satisfaction is what drives us forward.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transform transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-500">30+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transform transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-500">50+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3870&auto=format&fit=crop"
            alt="Abstract tech background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-heading text-green-600 dark:text-green-500 text-sm uppercase font-medium mb-2 tracking-widest">
              Our Mission & Values
            </h2>
            <h3 className="section-heading text-3xl md:text-4xl font-bold dark:text-white mb-4">What Drives Us Forward</h3>
            <p className="section-heading text-gray-600 dark:text-gray-400">
              Our mission and values guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="mission-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-500">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    <path d="M8.5 8.5v.01"></path>
                    <path d="M16 15.5v.01"></path>
                    <path d="M12 12v.01"></path>
                    <path d="M11 17v.01"></path>
                    <path d="M7 14v.01"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold dark:text-white">Our Mission</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                To empower businesses through innovative software solutions that drive growth, efficiency, and
                competitive advantage.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We aim to be trusted partners in digital transformation, helping clients seize opportunities in a
                fast-evolving tech world.
              </p>
            </div>

            {/* Values */}
            <div className="mission-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold dark:text-white">Our Values</h4>
              </div>
              <ul className="space-y-3">
                {[
                  ["Excellence", "We pursue the highest standards in everything we do."],
                  ["Innovation", "We embrace new technologies to solve challenges creatively."],
                  ["Integrity", "We work with transparency, honesty, and ethics."],
                  ["Collaboration", "We believe in teamwork within and beyond our team."],
                  ["Customer Focus", "We put our clients' success at the heart of our work."]
                ].map(([title, desc], idx) => (
                  <li key={idx} className="flex gap-3 items-start group">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                      <span className="font-medium dark:text-gray-300">{title}:</span> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-heading text-green-600 dark:text-green-500 text-sm uppercase font-medium mb-2 tracking-widest">Our Team</h2>
            <h3 className="section-heading text-3xl md:text-4xl font-bold dark:text-white mb-4">Meet Our Experts</h3>
            <p className="section-heading text-gray-600 dark:text-gray-400">
              Our diverse team of talented professionals is the backbone of our success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Abdul Mateen", 
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop"
              },
              { 
                name: "Faizan Rao", 
                role: "CTO",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3540&auto=format&fit=crop"
              },
              { 
                name: "Ayesha Khan", 
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop"
              },
              { 
                name: "Ali Raza", 
                role: "Head of Development",
                image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=3542&auto=format&fit=crop"
              }
            ].map((member, idx) => (
              <div key={idx} className="team-member bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-2">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-500 group-hover:border-green-600 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors duration-300">{member.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                <div className="mt-3 flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-heading text-green-600 dark:text-green-500 text-sm uppercase font-medium mb-2 tracking-widest">Our Partners</h2>
            <h3 className="section-heading text-3xl md:text-4xl font-bold dark:text-white mb-4">Trusted By Industry Leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="client-logo flex justify-center">
                <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110">
                  <Image
                    src={`https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${i}00&q=80`}
                    alt={`Client logo ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}