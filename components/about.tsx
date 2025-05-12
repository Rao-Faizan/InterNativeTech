"use Client"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import Ballpit from "@/components/Ballpit"

export function About() {


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
          // gravity={0.8}
          friction={1.0}
          // spin={1}
          // wallBounce={1}

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
 
  
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
            <Image
              src="https://media.istockphoto.com/id/1029035836/photo/ai-robot-thinking.jpg?s=612x612&w=0&k=20&c=Lf-nilserdw8BVnHPKtkkSbw7Pcp5p7KI_V9CAlzqQI="
              alt="Our team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold">From Humble Beginnings to Industry Leaders</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Founded in 2020, InterNative Tech started with a dream in a small office. Passion, innovation, and relentless commitment helped us become trusted technology partners for businesses worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, a talented team of 30+ professionals powers cutting-edge digital experiences, building lasting partnerships along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">Our Mission & Values</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h3>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400">
            Our mission and values are the heart of every project we deliver.
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Empower businesses through innovative software that drives growth, agility, and digital excellence.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-bold mb-6">Our Values</h4>
              <ul className="space-y-4 text-left">
                {[
                  { title: "Excellence", desc: "We uphold the highest standards in everything we do." },
                  { title: "Innovation", desc: "We embrace new technologies to deliver better solutions." },
                  { title: "Integrity", desc: "We operate transparently, ethically, and respectfully." },
                  { title: "Collaboration", desc: "We thrive through teamwork and partnerships." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold">{item.title}:</span> <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Experts</h3>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400">
            A talented, diverse, and passionate team driving innovation.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Abo ul Hassan Babar", role: "CEO & Co-Founder" },
              { name: "Abdul Mateen", role: "CTO & Co-Founder" },
              { name: "Ubaid Qureshi", role: "UX/UI Designer" },
              { name: "Rao Faizan", role: "Lead Developer" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Happy Clients" },
              { value: "400+", label: "Projects Completed" },
              { value: "30+", label: "Team Members" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="transition-transform hover:scale-105 duration-300">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )

}
