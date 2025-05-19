"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import Ballpit from "@/components/Ballpit"
import { motion, AnimatePresence } from "framer-motion"

// Color theme from Coolors
// 32322C (Dark Charcoal)
// 1C3144 (Prussian Blue)
// 035F5C (Deep Jungle Green)
// 8DA7BE (Pewter Blue)
// FEEFEE (Snow)

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }

    const hash = window.location.hash.substring(1);
    if (hash && categories.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && categories.some(cat => cat.id === hash)) {
        setActiveCategory(hash);
      } else {
        setActiveCategory("all");
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const categories = [
    { id: "all", name: "ALL" },
    { id: "realtor", name: "Realtor" },
    { id: "beauty", name: "Beauty" },
    { id: "medical", name: "Medical" },
    { id: "food", name: "Food" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "finance", name: "Finance" },
    { id: "services", name: "Services" },
    { id: "toys", name: "Toys" },
    { id: "travel", name: "Travel" }
  ];

  // Projects array remains the same as your original
  const projects = [
  
    // Realtor/Construction
  {
    id: 1,
    title: "Sharkey Family Realtor",
    category: "realtor",
    image: "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224",
    description: "Professional real estate services website",
    link: "http://sharkeyfamilyrealtor.com/",
    featured: true
  },
  {
    id: 9,
    title: "E-commerce Platform",
    category: "realtor",
    image: "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224",
    description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
    link: "http://sharkeyfamilyrealtor.com/"
  },
  // Beauty/Salon/Hair
  {
    id: 14,
    title: "Raw Rio Hair",
    category: "beauty",
    image: "/heair look 1.png",
    description: "Premium hair extensions and wigs e-commerce site",
    link: "https://rawriohair.com/"
  },
  {
    id: 10,
    title: "Miami Invest Realty",
    category: "beauty",
    image: "/miyami.png",
    description: "Miami Invest Realty specializes in luxury real estate across South Florida"
  },
  // Medical/Nursing
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "medical",
    image: "https://media.istockphoto.com/id/1204436253/fi/valokuva/naislääkäri-käyttää-tablettia-röntgenkuvan-näyttäminen-vanhemmalle-miehelle.jpg",
    description: "Patient management mobile application"
  },
  {
    id: 8,
    title: "Medical Clinic",
    category: "medical",
    image: "/medical-clinic.jpg",
    description: "Patient portal and appointment management",
    link: "#"
  },
  // Food/Restaurant
  {
    id: 13,
    title: "Canarias Downtown",
    category: "food",
    image: "/canarias13.png",
    description: "Restaurant website with online ordering",
    link: "https://canariasdowntowndoral.com/"
  },
  // E-commerce
  {
    id: 11,
    title: "ToyWiz",
    category: "ecommerce",
    image: "/website9.png",
    description: "Online toy store with thousands of products",
    link: "https://toywiz.com/"
  },
  {
    id: 15,
    title: "Glory Gold",
    category: "ecommerce",
    image: "/gold.hear .png",
    description: "Designer shoes e-commerce website",
    link: "https://glorygoldlabel.com/"
  },
  // Finance/Investment
  {
    id: 3,
    title: "Financial Dashboard",
    category: "finance",
    image: "https://www.shutterstock.com/image-vector/minimal-graph-ui-icons-set-260nw-2488230655.jpg",
    description: "Investment tracking dashboard"
  },
  {
    id: 12,
    title: "American Powers Safety Consultants",
    category: "finance",
    image: "/American Powers Safety Consultants12.png",
    description: "Safety training and certification website",
    link: "https://americanpsc.com/"
  },
  // Home Services
  {
    id: 5,
    title: "Corporate Website Redesign",
    category: "services",
    image: "https://www.shutterstock.com/image-vector/letter-m-logo-can-be-600nw-2470164399.jpg",
    description: "Complete redesign of a corporate website"
  },
  // Toys
  {
    id: 7,
    title: "Fitness Tracking App",
    category: "toys",
    image: "/download.png",
    description: "Interactive fitness application for kids"
  },
  // Travel
  {
    id: 4,
    title: "Travel Companion App",
    category: "travel",
    image: "https://thumbs.dreamstime.com/b/travel-companion-blue-ready-departure-bustling-airport-terminal-328185124.jpg",
    description: "Travel planning mobile application"
  },
  {
    id: 6,
    title: "Inventory Management System",
    category: "travel",
    image: "https://static.vecteezy.com/system/resources/thumbnails/023/517/430/small_2x/inventory-management-digital-marketing-link-building-and-digital-marketing-banner-photo.jpg",
    description: "Inventory system for travel companies"
  }

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const filteredProjects = activeCategory === "all" 
    ? projects.filter(project => !project.featured)
    : projects.filter(project => 
        project.category === activeCategory && !project.featured
      );

  return (
    <div className={`flex flex-col min-h-screen bg-[#FEEFEE] dark:bg-[#32322C] transition-colors duration-500`}>
      {/* Animated Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed z-50 bottom-6 right-6 bg-[#8DA7BE] dark:bg-[#035F5C] p-3 rounded-full shadow-lg"
        aria-label="Toggle dark mode"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-[#1C3144]" />
        ) : (
          <Sun className="w-5 h-5 text-[#FEEFEE]" />
        )}
      </motion.button>

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
              Exceptional Digital Experiences
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 text-[#8DA7BE]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We craft stunning, high-performance websites that drive results for businesses worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-[#035F5C] hover:bg-[#024a48] text-[#FEEFEE] font-semibold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Work
              <ChevronRight className="w-5 h-5" />
            </Link>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#FEEFEE] dark:bg-[#32322C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-[#035F5C] dark:text-[#8DA7BE] mb-4 inline-block">
              OUR PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-[#FEEFEE]">
              <span className="relative inline-block">
                <span className="relative z-10">Selected Works</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#8DA7BE] dark:bg-[#035F5C] opacity-30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-lg text-[#1C3144] dark:text-[#8DA7BE] max-w-2xl mx-auto">
              Discover our diverse range of projects crafted with precision and passion.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  window.location.hash = category.id;
                  setActiveCategory(category.id);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#035F5C] text-[#FEEFEE] shadow-lg"
                    : "bg-[#8DA7BE] bg-opacity-20 text-[#1C3144] dark:text-[#FEEFEE] hover:bg-opacity-40"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={categories.find(c => c.id === project.category)?.name || project.category}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#1C3144] dark:text-[#FEEFEE] mb-4">
                No projects found in this category
              </h3>
              <p className="text-[#1C3144] dark:text-[#8DA7BE]">
                We're constantly adding new work. Check back soon or browse our other categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-[#8DA7BE] bg-opacity-10 dark:bg-[#1C3144] dark:bg-opacity-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold tracking-widest text-[#035F5C] dark:text-[#8DA7BE] mb-4 inline-block">
              SHOWCASE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-[#FEEFEE]">
              Featured <span className="text-[#035F5C] dark:text-[#8DA7BE]">Case Studies</span>
            </h2>
            <p className="text-lg text-[#1C3144] dark:text-[#8DA7BE] max-w-2xl mx-auto">
              Deep dives into our most impactful projects and the results we delivered.
            </p>
          </motion.div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-[#32322C] ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <div className="md:w-1/2 h-96 md:h-auto relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={`Case Study: ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="block text-[#035F5C] dark:text-[#8DA7BE] text-xs font-bold tracking-wide uppercase mb-3">
                    {categories.find(c => c.id === project.category)?.name || project.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 text-[#1C3144] dark:text-[#FEEFEE]">
                    {project.title}
                  </h3>
                  <p className="text-[#1C3144] dark:text-[#8DA7BE] text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#035F5C] hover:bg-[#024a48] px-6 py-3 text-sm font-semibold text-[#FEEFEE] transition-all duration-300 transform hover:scale-105 w-max"
                  >
                    View Project
                    <motion.span
                      animate={{ x: isHovering ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-r from-[#1C3144] to-[#035F5C] text-[#FEEFEE]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Elevate Your Digital Presence?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create something extraordinary for your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEEFEE] hover:bg-[#e0e0e0] text-[#1C3144] font-bold text-lg px-8 py-4 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <motion.span
                animate={{ rotate: isHovering ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[#8DA7BE] opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-[#FEEFEE] opacity-10"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>
    </div>
  )
}

function ProjectCard({ 
  title, 
  image, 
  category, 
  description,
  link
}: { 
  title: string; 
  image: string; 
  category: string;
  description?: string;
  link?: string;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-[#32322C]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {link && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#035F5C] hover:bg-[#024a48] text-[#FEEFEE] font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View Live
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-[#1C3144] dark:text-[#FEEFEE] mb-2"
          whileHover={{ color: "#035F5C" }}
        >
          {title}
        </motion.h3>
        <p className="text-sm text-[#035F5C] dark:text-[#8DA7BE] font-medium mb-3">{category}</p>
        {description && (
          <p className="text-[#1C3144] dark:text-[#8DA7BE]">{description}</p>
        )}
      </div>
    </motion.div>
  )
}