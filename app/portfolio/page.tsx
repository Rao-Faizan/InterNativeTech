import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Portfolio | Your Software House",
  description: "Explore our portfolio of successful projects and case studies",
}

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce",
      description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare",
      description: "A patient-centered mobile application for healthcare providers to improve patient engagement.",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=Finance",
      description: "An intuitive financial dashboard providing real-time insights and analytics for investors.",
    },
    {
      id: 4,
      title: "Travel Companion App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=Travel",
      description: "A feature-rich travel app with personalized recommendations and offline capabilities.",
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "design",
      image: "/placeholder.svg?height=400&width=600&text=Corporate",
      description: "A complete redesign of a corporate website focusing on user experience and brand identity.",
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=Inventory",
      description: "A robust inventory management system with real-time tracking and reporting features.",
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=Fitness",
      description:
        "A comprehensive fitness tracking application with personalized workout plans and progress monitoring.",
    },
    {
      id: 8,
      title: "Restaurant Ordering System",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=Restaurant",
      description: "An online ordering system for restaurants with table reservations and delivery tracking.",
    },
    {
      id: 9,
      title: "Brand Identity Design",
      category: "design",
      image: "/placeholder.svg?height=400&width=600&text=Brand",
      description: "A complete brand identity package including logo, color scheme, and brand guidelines.",
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
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">Our Portfolio</h1>
            <p className="text-xl text-gray-300">
              Explore our showcase of successful projects and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md bg-gray-100 dark:bg-gray-800 p-1">
              {["all", "web", "mobile", "design"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    category === "all"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
                  }`}
                >
                  {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="overflow-hidden bg-transparent shadow-none">
                <div className="p-0">
                  <div className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold dark:text-white">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              SUCCESS STORIES
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
              Featured Case Studies
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dive deeper into some of our most impactful projects and learn how we helped our clients achieve their
              goals.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Transforming E-commerce Experience",
                client: "FashionRetail Inc.",
                image: "/placeholder.svg?height=400&width=800&text=Case+Study+1",
                description:
                  "How we helped a leading fashion retailer increase online sales by 200% through a complete digital transformation.",
              },
              {
                title: "Healthcare Innovation Through Technology",
                client: "MediCare Solutions",
                image: "/placeholder.svg?height=400&width=800&text=Case+Study+2",
                description:
                  "Developing a patient-centered mobile application that revolutionized healthcare delivery and improved patient outcomes.",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-2 text-sm font-medium text-green-600 dark:text-green-500">
                      {caseStudy.client}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 dark:text-white">{caseStudy.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{caseStudy.description}</p>
                    <Link
                      href={`/case-studies/${index + 1}`}
                      className="inline-flex w-fit h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Read Case Study
                    </Link>
                  </div>
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Build Your Next Project?</h2>
            <p className="mb-8 text-green-50/90 md:text-lg">
              Let's discuss how we can help bring your ideas to life with our expertise and experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
