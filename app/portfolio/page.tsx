// import Image from "next/image"
// import Link from "next/link"

// export const metadata = {
//   title: "Portfolio | Your Software House",
//   description: "Explore our portfolio of successful projects and case studies",
// }

// export default function PortfolioPage() {
//   const projects = [
//     {
//       id: 1,
//       title: "E-commerce Platform",
//       category: "web",
//       image: "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
//     },
//     {
//       id: 2,
//       title: "Healthcare Mobile App",
//       category: "mobile",
//       image: "https://media.istockphoto.com/id/1204436253/fi/valokuva/naisl%C3%A4%C3%A4k%C3%A4ri-k%C3%A4ytt%C3%A4%C3%A4-tablettia-r%C3%B6ntgenkuvan-n%C3%A4ytt%C3%A4minen-vanhemmalle-miehelle.jpg?s=612x612&w=0&k=20&c=OWYiUv91Eb94Q1kLzuOZwKQLu4lnx6TpXy8j7bK9um4=",
//       description: "A patient-centered mobile application for healthcare providers to improve patient engagement.",
//     },
//     {
//       id: 3,
//       title: "Financial Dashboard",
//       category: "web",
//       image: "https://www.shutterstock.com/image-vector/minimal-graph-ui-icons-set-260nw-2488230655.jpg",
//       description: "An intuitive financial dashboard providing real-time insights and analytics for investors.",
//     },
//     {
//       id: 4,
//       title: "Travel Companion App",
//       category: "mobile",
//       image: "https://thumbs.dreamstime.com/b/travel-companion-blue-ready-departure-bustling-airport-terminal-328185124.jpg",
//       description: "A feature-rich travel app with personalized recommendations and offline capabilities.",
//     },
//     {
//       id: 5,
//       title: "Corporate Website Redesign",
//       category: "design",
//       image: "https://www.shutterstock.com/image-vector/letter-m-logo-can-be-600nw-2470164399.jpg",
//       description: "A complete redesign of a corporate website focusing on user experience and brand identity.",
//     },
//     {
//       id: 6,
//       title: "Inventory Management System",
//       category: "web",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/023/517/430/small_2x/inventory-management-digital-marketing-link-building-and-digital-marketing-banner-photo.jpg",
//       description: "A robust inventory management system with real-time tracking and reporting features.",
//     },
//     {
//       id: 7,
//       title: "Fitness Tracking App",
//       category: "mobile",
//       image: "https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg",
//       description:
//         "A comprehensive fitness tracking application with personalized workout plans and progress monitoring.",
//     },
//     {
//       id: 8,
//       title: "Restaurant Ordering System",
//       category: "web",
//        description: "An online ordering system for restaurants with table reservations and delivery tracking.",
//     },
//     {
//       id: 9,
//       title: "Brand Identity Design",
//       category: "design",
//        description: "A complete brand identity package including logo, color scheme, and brand guidelines.",
//     },
//   ]

//   return (
//     <div className="bg-white dark:bg-gray-900">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-black py-20">
//         <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
//         <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
//         <div className="container relative z-30 mx-auto px-4">
//           <div className="mx-auto max-w-[800px] text-center">
//             <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">AMAZING WORKS</h1>
//             <p className="text-xl text-gray-300">
//             Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.

//             </p>
            
          
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-16 md:py-24 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="mb-8 flex justify-center">
//             <div className="inline-flex rounded-md bg-gray-100 dark:bg-gray-800 p-1">
//               {["all", "web", "mobile", "design"].map((category) => (
//                 <button
//                   key={category}
//                   className={`px-4 py-2 text-sm font-medium rounded-md ${
//                     category === "all"
//                       ? "bg-green-600 text-white"
//                       : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
//                   }`}
//                 >
//                   {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <div key={project.id} className="overflow-hidden bg-transparent shadow-none">
//                 <div className="p-0">
//                   <div className="group relative overflow-hidden rounded-lg">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       width={600}
//                       height={400}
//                       className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
//                       <Link
//                         href={`/portfolio/${project.id}`}
//                         className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                   <h4 className="mt-2 text-lg font-semibold dark:text-white">{project.title}</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies Section */}
//       <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto mb-12 max-w-[800px] text-center">
//             <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
//               SUCCESS STORIES
//             </h2>
//             <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
//               Featured Case Studies
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Dive deeper into some of our most impactful projects and learn how we helped our clients achieve their
//               goals.
//             </p>
//           </div>

//           <div className="space-y-12">
//             {[
//             {
//               title: "Transforming E-commerce Experience",
//               client: "FashionRetail Inc.",
//               image: "https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg",
//               description:
//                 "How we helped a leading fashion retailer increase online sales by 200% through a complete digital transformation.",
//             },
//               {
//                 title: "Healthcare Innovation Through Technology",
//                 client: "MediCare Solutions",
//                 image: "https://www.shutterstock.com/image-vector/logo-health-care-phonendoscope-260nw-585581933.jpg",
//                 description:
//                   "Developing a patient-centered mobile application that revolutionized healthcare delivery and improved patient outcomes.",
//               },
//             ].map((caseStudy, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   <div className="relative aspect-video md:aspect-auto">
//                     <Image
//                       src={caseStudy.image || "/placeholder.svg"}
//                       alt={caseStudy.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-6 md:p-8 flex flex-col justify-center">
//                     <div className="mb-2 text-sm font-medium text-green-600 dark:text-green-500">
//                       {caseStudy.client}
//                     </div>
//                     <h4 className="text-2xl font-bold mb-4 dark:text-white">{caseStudy.title}</h4>
//                     <p className="text-gray-600 dark:text-gray-400 mb-6">{caseStudy.description}</p>
//                     <Link
//                       href={`/case-studies/${index + 1}`}
//                       className="inline-flex w-fit h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                     >
//                       Read Case Study
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-green-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-[800px] text-center">
//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Build Your Next Project?</h2>
//             <p className="mb-8 text-green-50/90 md:text-lg">
//               Let's discuss how we can help bring your ideas to life with our expertise and experience.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
//             >
//               Start a Project
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
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
    {
      id: 4,
      title: "Food/Restaurant Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Delicious websites for food and restaurant businesses.",
      clientLinks: [
        { name: "Le Mugs", url: "https://le-mugs.com/" },
        
      ]
    },
    {
      id: 5,
      title: "Fashion Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Stylish websites for fashion brands and boutiques.",
      clientLinks: [
        { name: "Toms", url: "https://www.toms.com/" },
        
      ]
    },
    {
      id: 6,
      title: "E-commerce Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Powerful e-commerce solutions for product selling businesses.",
      clientLinks: [
        { name: "Joco Cups", url: "https://jococups.com/usa/" },
         
      ]
    },
    {
      id: 7,
      title: "Books & Toys Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      description: "Engaging websites for books, toys and games businesses.",
      clientLinks: [
        { name: "Biblio", url: "https://www.biblio.com/" },
        
      ]
    },
    {
      id: 8,
      title: "Finance & Services Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Professional websites for finance and service providers.",
      clientLinks: [
        { name: "Kennedy Wilson", url: "https://www.kennedywilson.com/" },
         
      ]
    },
    {
      id: 9,
      title: "Pets & Lifestyle Websites",
      category: "web",
      image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80",
      description: "Beautiful websites for pets, music and lifestyle businesses.",
      clientLinks: [
      { name: "Pawgers Pet Love", url: "https://pawgerspetlove.com/" },
      ]
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">OUR PORTFOLIO</h1>
            <p className="text-xl text-gray-300">
              Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.
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
                    <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-4">
                      <div className="text-white text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">Client Websites:</h3>
                        <div className="grid grid-cols-1 gap-2">
                             
                        </div>
                      
                      </div>
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        View All Client Sites
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
              Dive deeper into some of our most impactful projects and learn how we helped our clients achieve their goals.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "E-commerce Platform Development",
                client: "Joco Cups",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                description: "How we helped Joco Cups increase online sales by 200% through a complete e-commerce solution.",
                link: "https://jococups.com/usa/"
              },
              {
                title: "Healthcare Website Redesign",
                client: "Quality Nurse Travellers",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "Developing a professional website that improved patient engagement and nurse recruitment.",
                link: "https://qualitynursetravellers.com/"
              }
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={caseStudy.image}
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
                    <a
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Visit Client Website
                    </a>
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