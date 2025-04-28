"use client"
import Image from "next/image";
import Link from "next/link";
import { Monitor, Smartphone, BarChart4, ArrowRight, ShoppingCart, BookOpen, Heart } from "lucide-react";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Realtor/Construction Websites",
    category: "web",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Professional websites for real estate and construction businesses.",
    clientLinks: [
      { name: "Sharkey Family Realtor", url: "http://sharkeyfamilyrealtor.com/" },
    ]
  },
  {
    id: 2,
    title: "Beauty/Salon Websites",
    category: "web",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "Elegant websites for beauty, salon, and cosmetic businesses.",
    clientLinks: [
      { name: "LUX131", url: "https://lux131.com/" },
    ]
  },
  {
    id: 3,
    title: "Medical/Nursing Websites",
    category: "web",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Professional websites for medical and healthcare providers.",
    clientLinks: [
      { name: "Quality Nurse Travellers", url: "https://qualitynursetravellers.com/" },
    ]
  },
];

export default function Home() {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined') {
      // Animate hero section
      gsap.from(".hero-title", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
      });
      
      gsap.from(".hero-subtitle", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        delay: 0.6
      });
      
      gsap.from(".hero-button", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power3.out",
        delay: 0.9
      });

      // Animate section headings
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
        });
      });

      // Animate service cards
      gsap.utils.toArray(".service-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1
        });
      });

      // Animate project cards
      gsap.utils.toArray(".project-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.15
        });
      });

      // Animate CTA section
      gsap.from(".cta-section", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-200 overflow-hidden">
      {/* HERO SECTION */}
      <header className="relative h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/Home_banner.png')" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 z-15 overflow-hidden">
          {[...Array(6)].map((_, i) => (
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

        {/* Centered Content */}
        <div className="relative z-30 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-2xl">
            <h1
              className="hero-title text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4"
              style={{ color: '#88a19b' }}
            >
              WELCOME TO INTERNATIVE TECH
            </h1>
            <p className="hero-subtitle mt-4 text-gray-300 md:text-lg">
              A solution oriented workforce management service provider.
            </p>
            <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="/services"
                className="hero-button inline-flex h-12 items-center justify-center rounded-md border-2 border-[#88a19b] bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#88a19b] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#88a19b] focus:ring-offset-2 transform hover:scale-105"
              >
                Call now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* FEATURED SERVICES */}
        <section className="py-16 md:py-24 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="section-heading text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
                OUR EXPERTISE
              </h2>
              <h3 className="section-heading text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
                Premium Services
              </h3>
              <p className="section-heading text-gray-600 dark:text-gray-400">
                We deliver comprehensive digital solutions tailored to your business needs and goals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="service-card rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Monitor className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">Web Development</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences and drive business growth.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline group"
                    >
                      Learn more 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-card rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Smartphone className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">Mobile Development</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices, helping you reach your customers wherever they are.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline group"
                    >
                      Learn more 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-card rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <BarChart4 className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">Digital Marketing</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    Strategic digital marketing campaigns that increase your online visibility, drive qualified traffic, and convert visitors into loyal customers.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline group"
                    >
                      Learn more 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:shadow-lg transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="section-heading text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
                FEATURED WORK
              </h2>
              <h3 className="section-heading text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Recent Projects</h3>
              <p className="section-heading text-gray-600 dark:text-gray-400">
                Explore our latest projects showcasing our expertise in creating innovative digital solutions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="project-card overflow-hidden bg-transparent shadow-none transform transition-all hover:scale-[1.02]">
                  <div className="p-0">
                    <div className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                        <div className="translate-y-4 md:translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                          <h3 className="text-xl font-bold text-white mb-2">Client Websites:</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {project.clientLinks.map((clientLink, index) => (
                              <a
                                key={index}
                                href={clientLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-white hover:text-green-400 transition-colors"
                              >
                                {clientLink.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-4 text-xl font-bold dark:text-white">{project.title}</h4>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:shadow-lg transform hover:scale-105"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta-section py-16 md:py-24 bg-[#035F57] text-white relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
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
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Start Your Project?</h2>
              <p className="mb-8 text-green-50/90 md:text-lg">
                Let's discuss how we can help transform your business with our custom software solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#035F57] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 hover:shadow-lg transform hover:scale-105"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>

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
  );
}