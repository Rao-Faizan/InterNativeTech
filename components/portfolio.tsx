"use Client"
import Image from "next/image"
import Link from "next/link"
import Ballpit from "./Ballpit";

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "https://media.istockphoto.com/id/1204436253/fi/valokuva/naisl%C3%A4%C3%A4k%C3%A4ri-k%C3%A4ytt%C3%A4%C3%A4-tablettia-r%C3%B6ntgenkuvan-n%C3%A4ytt%C3%A4minen-vanhemmalle-miehelle.jpg?s=612x612&w=0&k=20&c=OWYiUv91Eb94Q1kLzuOZwKQLu4lnx6TpXy8j7bK9um4=",
      description: "A patient-centered mobile application for healthcare providers to improve patient engagement.",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      image: "https://www.shutterstock.com/image-vector/minimal-graph-ui-icons-set-260nw-2488230655.jpg",
      description: "An intuitive financial dashboard providing real-time insights and analytics for investors.",
    },
    {
      id: 4,
      title: "Travel Companion App",
      category: "mobile",
      image: "https://thumbs.dreamstime.com/b/travel-companion-blue-ready-departure-bustling-airport-terminal-328185124.jpg",
      description: "A feature-rich travel app with personalized recommendations and offline capabilities.",
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "design",
      image: "https://www.shutterstock.com/image-vector/letter-m-logo-can-be-600nw-2470164399.jpg",
      description: "A complete redesign of a corporate website focusing on user experience and brand identity.",
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "web",
      image: "https://static.vecteezy.com/system/resources/thumbnails/023/517/430/small_2x/inventory-management-digital-marketing-link-building-and-digital-marketing-banner-photo.jpg",
      description: "A robust inventory management system with real-time tracking and reporting features.",
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg",
      description:
        "A comprehensive fitness tracking application with personalized workout plans and progress monitoring.",
    },
    {
      id: 8,
      title: "Restaurant Ordering System",
      category: "web",
      image: "data:image/jpeg;base64,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",
      description: "An online ordering system for restaurants with table reservations and delivery tracking.",
    },
    {
      id: 9,
      title: "Brand Identity Design",
      category: "design",
      image: "data:image/jpeg;base64,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",
      description: "A complete brand identity package including logo, color scheme, and brand guidelines.",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10  bg-cover bg-center opacity-20"></div>
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
    AMAZING WORKS

    </h1>
    <p className="text-xl text-center text-gray-300 mb-8">
    Creativity involves breaking out of expected & repeatable patterns to look at things differently than ever before.
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

        {/* <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center animate-fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white transition-all duration-300 hover:text-green-600">
              AMAZING WORKS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Creativity involves breaking out of expected & repeatable patterns to look at things differently than ever before.
            </p>
          </div> */}
        {/* </div> */}

      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap gap-2 rounded-md bg-gray-100 dark:bg-gray-800 p-2">
              {["all", "web", "mobile", "design"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${category === "all"
                    ? "bg-green-600 text-white shadow hover:bg-green-700"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
                    }`}
                >
                  {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-600 dark:text-green-400 font-bold uppercase text-sm tracking-widest mb-4">
              Success Stories
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white leading-tight">
              Featured Case Studies
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Explore how we've empowered businesses to surpass their goals with our tailored solutions.
            </p>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "Transforming E-commerce Experience",
                client: "FashionRetail Inc.",
                image: "https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg",
                description: "We boosted online sales by 200% for a leading fashion brand with a complete digital overhaul, optimized UX, and smarter marketing strategies.",
              },
              {
                title: "Healthcare Innovation Through Technology",
                client: "MediCare Solutions",
                image: "https://www.shutterstock.com/image-vector/logo-health-care-phonendoscope-260nw-585581933.jpg",
                description: "A revolutionary mobile solution putting patient care at the forefront, enhancing engagement, and improving treatment outcomes.",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-2 gap-10 items-center rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={`Case Study: ${caseStudy.title}`}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="block text-green-600 dark:text-green-400 text-xs font-bold tracking-wide uppercase mb-3">
                    {caseStudy.client}
                  </span>
                  <h4 className="text-3xl font-bold dark:text-white mb-4">
                    {caseStudy.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>
                  <Link
                    href={`/case-studies/${index + 1}`}
                    className="inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-700 px-6 py-3 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  >
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              Let's connect and bring your vision to life with cutting-edge technology and expert guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-green-600 font-semibold text-base px-8 py-4 hover:bg-green-50 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Start a Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );

}
