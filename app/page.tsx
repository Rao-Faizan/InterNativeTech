import Image from "next/image";
import Link from "next/link";
import { FaDesktop, FaMobileAlt, FaChartBar, FaArrowRight } from "react-icons/fa"

import { Testimonials } from "@/components/testimonials";

export default function Home() {
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center  "
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
  {[
    {
      id: 1,
      img: '/prepdummy1.jpg',
      title: 'Preparation Project',
      description: 'PrepDummy offers high-yield MCQs, live tests, insightful analytics, and expert-led courses to help students excel in exams.Join our supportive community with free classes, guidance sessions, and 24/7 assistance for complete exam preparation.Prepare smarter, achieve better, and build confidence with trusted resources tailored for your success...',
      link: 'https://prepdummy.com/',
    },
    {
      id: 2,
      img: '/Ait2.jpg',
      title: 'AIT Solutions',
      description: 'AIT empowers students with industry-relevant courses in IT, engineering, and emerging technologies.We offer expert training, hands-on projects, and career support to help you excel in a competitive world.Build your future with AIT — where innovation meets opportunity.',
      link: 'https://ait.iak.ngo/',
    },
    {
      id: 3,
      img: '/constraction.jpge.jpeg',
      title: 'Engineered Solutions Canada',
      description: 'Engineered Solutions Canada specializes in innovative Boiler House, Domestic Hot Water, Rainwater Harvesting, and Steam Control systems.We deliver top-quality, energy-efficient solutions customized for commercial, industrial, and residential needs.Trusted across Canada, we combine engineering excellence with outstanding customer support.',
      link: 'https://rainwaterharvesting.services',
    },
  ].map((item) => (
    <div key={item.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all">
      <div className="relative group">
        <Image
          src={item.img}
          alt={item.title}
          width={600}
          height={400}
          className="w-full object-cover aspect-[4/3] transition-transform group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            href={item.link}
            className="inline-flex items-center justify-center rounded-xl border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
            target="_blank"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
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