import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us | Your Software House",
  description: "Learn about our company, mission, values, and the team behind Your Software House",
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">About Us</h1>
            <p className="text-xl text-gray-300">
              We're a team of passionate developers, designers, and digital strategists dedicated to creating
              exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 md:aspect-square">
              <Image
                src="https://media.istockphoto.com/id/1029035836/photo/ai-robot-thinking.jpg?s=612x612&w=0&k=20&c=Lf-nilserdw8BVnHPKtkkSbw7Pcp5p7KI_V9CAlzqQI="
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500">
                  OUR STORY
                </h2>
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl dark:text-white">
                  From Humble Beginnings to Industry Leaders
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Founded in 2020, Your Software House began with a small team of three developers working from a tiny
                office. Our passion for creating innovative software solutions quickly earned us a reputation for
                excellence and reliability.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                As our client base grew, so did our team. Today, we're proud to have over 30 talented professionals
                working together to deliver cutting-edge digital solutions for businesses across various industries.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our commitment to quality, innovation, and client satisfaction remains at the core of everything we do.
                We believe in building long-term relationships with our clients, becoming true partners in their digital
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              OUR MISSION & VALUES
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
              What Drives Us Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our mission and values guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
              <h4 className="text-xl font-bold mb-4 dark:text-white">Our Mission</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                To empower businesses through innovative software solutions that drive growth, efficiency, and
                competitive advantage in the digital landscape.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We strive to be more than just a service provider – we aim to be a trusted partner in our clients'
                digital transformation journey, helping them navigate challenges and seize opportunities in an
                ever-evolving technological environment.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
              <h4 className="text-xl font-bold mb-4 dark:text-white">Our Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium dark:text-gray-300">Excellence:</span> We pursue the highest standards
                    in everything we do, from code quality to client communication.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium dark:text-gray-300">Innovation:</span> We embrace new technologies and
                    approaches to solve complex problems creatively.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium dark:text-gray-300">Integrity:</span> We operate with honesty,
                    transparency, and ethical practices in all our business dealings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium dark:text-gray-300">Collaboration:</span> We believe in the power of
                    teamwork, both internally and with our clients.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              OUR TEAM
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Meet Our Experts</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our diverse team of talented professionals is the backbone of our success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Abdul Mateen", role: "CEO & Founder" },
              { name: "Faizan Rao", role: "CTO" },
              { name: "Syed Mudassir Ali", role: "Lead Developer" },
              { name: "Ubaid Qureshi", role: "UX/UI Designer" },
            ].map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${member.name.charAt(0)}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold dark:text-white">{member.name}</h4>
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold">350+</p>
              <p className="text-sm opacity-80">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">400+</p>
              <p className="text-sm opacity-80">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">30+</p>
              <p className="text-sm opacity-80">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm opacity-80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
