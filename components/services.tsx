"use client";
import { FaMobileAlt, FaChartBar, FaCode, FaDatabase, FaCloud, FaPalette, FaShieldAlt, FaBook, FaGlobe, FaMagic, FaPencilRuler, FaSearch } from "react-icons/fa"
import Ballpit from "@/components/Ballpit";

import { ChevronRight, Link, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";


export function Services() {
  const services = [
    {
      icon: <FaMobileAlt className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Mobile Development",
      description: "Build powerful native & cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: <FaCode className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Custom Software",
      description: "Tailor-made software solutions optimized for your business needs.",
    },
    {
      icon: <FaDatabase className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Database Solutions",
      description: "Reliable and scalable databases built for performance and security.",
    },
    {
      icon: <FaCloud className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Cloud Services",
      description: "Cloud migration, serverless architecture, and DevOps solutions.",
    },
    {
      icon: <FaPalette className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "UI/UX Design",
      description: "Elegant and intuitive interfaces for mobile and web applications.",
    },
    {
      icon: <FaChartBar className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Digital Marketing",
      description: "Drive engagement with strategic SEO, social media, and content marketing.",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "IT Consulting",
      description: "Expert advice to align technology with your business goals.",
    },
    {
      icon: <FaPencilRuler className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Logo Design",
      description: "Unique and memorable logos that reflect your brand identity.",
    },
    {
      icon: <FaGlobe className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Website Development",
      description: "Responsive and modern websites tailored to your business objectives.",
    },
    {
      icon: <FaBook className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "eBook Publishing",
      description: "Professional formatting and publishing services for digital books.",
    },
    {
      icon: <FaMagic className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "Logo Animation",
      description: "Animated logo intros that bring your brand to life.",
    },
    {
      icon: <FaSearch className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
      title: "SEO Services",
      description: "Improve your visibility with keyword optimization and analytics-driven SEO.",
    },
  ];

  return (

    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden  dark:bg-gray-950 text-[#FEEFEE]">
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
              Our Services
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
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-xl transition duration-300"
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold dark:text-white">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
