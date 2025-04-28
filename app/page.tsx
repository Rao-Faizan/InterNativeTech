import Image from "next/image";
import Link from "next/link";
import { FaDesktop, FaMobileAlt, FaChartBar, FaArrowRight } from "react-icons/fa"

import { Testimonials } from "@/components/testimonials";

export default function Home() {
  // useEffect(() => {
  //   // Initialize animations
  //   if (typeof window !== 'undefined') {
  //     // Animate hero section
  //     gsap.from(".hero-title", {
  //       duration: 1.2,
  //       y: 50,
  //       opacity: 0,
  //       ease: "power3.out",
  //       delay: 0.3
  //     });
      
  //     gsap.from(".hero-subtitle", {
  //       duration: 1,
  //       y: 30,
  //       opacity: 0,
  //       ease: "power3.out",
  //       delay: 0.6
  //     });
      
  //     gsap.from(".hero-button", {
  //       duration: 0.8,
  //       y: 20,
  //       opacity: 0,
  //       ease: "power3.out",
  //       delay: 0.9
  //     });

  //     // Animate section headings
  //     gsap.utils.toArray(".section-heading").forEach((section: any) => {
  //       gsap.from(section, {
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 80%",
  //         },
  //         y: 40,
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power3.out"
  //       });
  //     });

  //     // Animate service cards
  //     gsap.utils.toArray(".service-card").forEach((card: any, i) => {
  //       gsap.from(card, {
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //         },
  //         y: 50,
  //         opacity: 0,
  //         duration: 0.6,
  //         ease: "power3.out",
  //         delay: i * 0.1
  //       });
  //     });

  //     // Animate project cards
  //     gsap.utils.toArray(".project-card").forEach((card: any, i) => {
  //       gsap.from(card, {
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //         },
  //         y: 60,
  //         opacity: 0,
  //         duration: 0.7,
  //         ease: "power3.out",
  //         delay: i * 0.15
  //       });
  //     });

  //     // Animate CTA section
  //     gsap.from(".cta-section", {
  //       scrollTrigger: {
  //         trigger: ".cta-section",
  //         start: "top 80%",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out"
  //     });
  //   }
  // }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/Home_banner.png')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>

        {/* Centered Content */}
        <div className="relative z-30 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-green-300 dark:text-green-400">
              WELCOME TO INTERNATIVE TECH
            </h1>

            <p className="mt-4 text-gray-300 md:text-lg">
              A solution oriented workforce management service provider
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row justify-center">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">
              OUR EXPERTISE
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-gray-900 dark:text-white">
              Premium Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We deliver comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Web Development",
                icon: <FaDesktop className="h-6 w-6 text-green-600 dark:text-green-400" />,
                desc: "Custom websites and web applications with cutting-edge technologies for exceptional user experiences.",
              },
              {
                title: "Mobile Development",
                icon: <FaMobileAlt className="h-6 w-6 text-green-600 dark:text-green-400" />,
                desc: "Native and cross-platform mobile apps ensuring seamless experiences across iOS and Android.",
              },
              {
                title: "Digital Marketing",
                icon: <FaChartBar className="h-6 w-6 text-green-600 dark:text-green-400" />,
                desc: "Strategic campaigns to drive online visibility, traffic, and customer loyalty.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-4 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
                  >
                    Learn more
                    <FaArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">
              FEATURED WORK
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-gray-900 dark:text-white">
              Recent Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our latest projects showcasing our expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all">
                <div className="relative group">
                  <Image
                    src="/logo.png" // Correct your image path
                    alt={`Project ${item}`}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[4/3] transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={`/portfolio/project-${item}`}
                      className="inline-flex items-center justify-center rounded-xl border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project Title {item}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Development</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#035F57] text-white transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-green-50/90 md:text-lg">
              Let's discuss how we can transform your business with custom solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#035F57] focus:ring-2 focus:ring-white"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}