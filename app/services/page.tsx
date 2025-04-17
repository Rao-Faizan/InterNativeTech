import Image from "next/image"
import Link from "next/link"
import { Monitor, Smartphone, BarChart4, Code, Database, Cloud, Palette, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Services | Your Software House",
  description: "Explore our comprehensive range of software development and digital services",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Monitor className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences and drive business growth.",
      details: [
        "Responsive website design",
        "Progressive Web Apps (PWAs)",
        "E-commerce solutions",
        "Content Management Systems",
        "Custom web applications",
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices, helping you reach your customers wherever they are.",
      details: [
        "iOS app development",
        "Android app development",
        "Cross-platform solutions",
        "Mobile app UI/UX design",
        "App maintenance and support",
      ],
    },
    {
      icon: <Code className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Custom Software",
      description:
        "Tailor-made software solutions designed to address your specific business challenges and streamline your operations for maximum efficiency.",
      details: [
        "Business process automation",
        "Enterprise software development",
        "Legacy system modernization",
        "Software integration services",
        "Quality assurance and testing",
      ],
    },
    {
      icon: <Database className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Database Solutions",
      description:
        "Robust database design, development, and optimization services to ensure your data is secure, accessible, and efficiently managed.",
      details: [
        "Database design and modeling",
        "Data migration and integration",
        "Performance optimization",
        "Database administration",
        "Big data solutions",
      ],
    },
    {
      icon: <Cloud className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Cloud Services",
      description:
        "Leverage the power of cloud computing to scale your business, reduce costs, and enhance flexibility with our comprehensive cloud solutions.",
      details: [
        "Cloud migration strategies",
        "AWS, Azure, and Google Cloud",
        "Serverless architecture",
        "DevOps implementation",
        "Cloud security and compliance",
      ],
    },
    {
      icon: <Palette className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "UI/UX Design",
      description:
        "User-centered design services that create intuitive, engaging, and visually appealing interfaces to enhance user satisfaction and drive conversion.",
      details: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
      ],
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that increase your online visibility, drive qualified traffic, and convert visitors into loyal customers.",
      details: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Content marketing",
        "Email marketing campaigns",
      ],
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "IT Consulting",
      description:
        "Expert guidance and strategic advice to help you make informed technology decisions that align with your business goals and drive innovation.",
      details: [
        "Technology assessment",
        "Digital transformation strategy",
        "IT roadmap development",
        "Technology stack selection",
        "Project management",
      ],
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive software development and digital solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              WHAT WE OFFER
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Our Expertise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide a wide range of services to help businesses thrive in the digital landscape. Our team of
              experts is dedicated to delivering high-quality solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all hover:border-green-200 dark:hover:border-green-700"
              >
                <div className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{service.title}</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-500"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              OUR APPROACH
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
              Our Development Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We follow a structured and transparent development process to ensure the successful delivery of your
              project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth consultations.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Our team creates a detailed project plan, including timelines, milestones, and resource allocation.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using agile methodologies, ensuring regular updates and feedback integration.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "After thorough testing, we deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6"
              >
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-green-100 dark:text-green-900/30">
                  {process.step}
                </div>
                <div className="relative">
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{process.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              OUR TECH STACK
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Technologies We Use</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Flutter",
              "AWS",
              "Azure",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Docker",
              "Kubernetes",
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <div className="p-0">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center mx-auto">
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=${tech.charAt(0)}`}
                      alt={tech}
                      width={48}
                      height={48}
                    />
                  </div>
                  <p className="font-medium dark:text-white">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8 text-green-50/90 md:text-lg">
              Contact us today to discuss how we can help bring your ideas to life with our expert services.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
