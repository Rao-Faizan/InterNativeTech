"use client"

import { FaDesktop, FaMobileAlt, FaChartBar, FaCode, FaDatabase, FaCloud, FaPalette, FaShieldAlt } from "react-icons/fa"
import Ballpit from "./Ballpit"

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
  ]

  return (
    <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-900">
      <div className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div
  style={{
    position: 'relative',
    overflow: 'hidden',
    height: '600px', // 👈 Fixed height taake ballpit poora dikh sake
    width: '100%',
    paddingTop: '50px', // Text ko neeche se start karaya
    paddingLeft: '20px',
    paddingRight: '20px',
  }}
>
  <div style={{ position: 'relative', zIndex: 2 }}>
    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white text-center transition-all duration-300 hover:text-green-600">
      Our Services
    </h1>
    <p className="text-xl text-center text-gray-300 mb-8">
      We're a team of passionate developers, designers, and strategists building exceptional software solutions.
    </p>
  </div>

  {/* Ballpit background mein chalega */}
  <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
    <Ballpit
      count={100}
      gravity={1.7}
      friction={1.8}
      wallBounce={1}
      followCursor={true}
    />
  </div>
</div>

      </div>

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
    </section >
  )
}
