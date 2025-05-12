"use client";

import {
  FaDesktop,
  FaMobileAlt,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaCloud,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import Ballpit from "@/components/Ballpit";

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
  ];

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black w-full min-h-[600px] flex flex-col justify-center items-center text-center">
        {/* Text Content */}
        <div className="relative z-20 px-2 md:px-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white transition-all duration-300 hover:text-green-600">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're a team of passionate developers, designers, and strategists building exceptional software solutions.
          </p>
        </div>

        {/* Ballpit Background */}
        <div className="absolute inset-0 z-10 opacity-30">
          <Ballpit
            className="coding-ballpit"
            count={150}
            friction={1.0}
            followCursor={true}
            colors={[
              0x1C1917, // HTML
              0x01b7c5, // CSS
              0xffffff, // JS
              0x7a7d7d, // TS
              0x01b7c5, // React
            ]}
            ballSize={{ min: 0.8, max: 1.8 }}
          />
        </div>
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
