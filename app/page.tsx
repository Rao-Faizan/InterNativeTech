import Image from "next/image";
import Link from "next/link";
import { FaDesktop, FaMobileAlt, FaChartBar, FaArrowRight } from "react-icons/fa"
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  
  return (
    <div className="bg-[#FEEFEE] dark:bg-[#32322C] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/home page banner.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Centered Content */}
        <div className="relative z-30 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#8DA7BE]">
              Welcome to InterNative Tech
            </h1>

            <p className="mt-4 text-[#8DA7BE] md:text-lg">
              A solution oriented workforce management service provider
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row justify-center">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[#8DA7BE] bg-transparent px-6 py-3 text-sm font-semibold text-[#FEEFEE] transition-all hover:bg-[#035F5C] hover:text-[#FEEFEE] focus:outline-none focus:ring-2 focus:ring-[#8DA7BE]"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-[#8DA7BE]/10 dark:bg-[#1C3144]/20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-[#035F5C] dark:text-[#8DA7BE] mb-2">
              OUR EXPERTISE
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-[#1C3144] dark:text-[#FEEFEE]">
              Premium Services
            </h3>
            <p className="text-[#1C3144]/80 dark:text-[#8DA7BE]">
              We deliver comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Web Development",
                icon: <FaDesktop className="h-6 w-6 text-[#035F5C] dark:text-[#8DA7BE]" />,
                desc: "Custom websites and web applications with cutting-edge technologies for exceptional user experiences.",
              },
              {
                title: "Mobile Development",
                icon: <FaMobileAlt className="h-6 w-6 text-[#035F5C] dark:text-[#8DA7BE]" />,
                desc: "Native and cross-platform mobile apps ensuring seamless experiences across iOS and Android.",
              },
              {
                title: "Digital Marketing",
                icon: <FaChartBar className="h-6 w-6 text-[#035F5C] dark:text-[#8DA7BE]" />,
                desc: "Strategic campaigns to drive online visibility, traffic, and customer loyalty.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#8DA7BE]/30 bg-[#FEEFEE] dark:bg-[#1C3144] p-6 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-4 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8DA7BE]/20 dark:bg-[#035F5C]/30">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1C3144] dark:text-[#FEEFEE]">{service.title}</h4>
                </div>
                <p className="text-[#1C3144]/80 dark:text-[#8DA7BE]">{service.desc}</p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[#035F5C] dark:text-[#8DA7BE] hover:underline"
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
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#035F5C] px-6 py-3 text-sm font-semibold text-[#FEEFEE] transition-all hover:bg-[#024a48]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-[#8DA7BE]/20 dark:bg-[#1C3144]/30 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-[#035F5C] dark:text-[#8DA7BE] mb-2">
              FEATURED WORK
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-[#1C3144] dark:text-[#FEEFEE]">
              Recent Projects
            </h3>
            <p className="text-[#1C3144]/80 dark:text-[#8DA7BE]">
              Explore our latest projects showcasing our expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                id: 1,
                img: '/prepdummy1.jpg',
                title: 'Preparation Project',
                description: 'PrepDummy offers high-yield MCQs, live tests, insightful analytics, and expert-led courses to help students excel in exams.',
                link: 'https://prepdummy.com/',
              },
              {
                id: 2,
                img: '/Ait2.jpg',
                title: 'AIT Solutions',
                description: 'AIT empowers students with industry-relevant courses in IT, engineering, and emerging technologies.',
                link: 'https://ait.iak.ngo/',
              },
              {
                id: 3,
                img: '/constraction.jpge.jpeg',
                title: 'Engineered Solutions Canada',
                description: 'Engineered Solutions Canada specializes in innovative Boiler House, Domestic Hot Water, Rainwater Harvesting, and Steam Control systems.',
                link: 'https://rainwaterharvesting.services',
              },
            ].map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all bg-[#FEEFEE] dark:bg-[#1C3144]">
                <div className="relative group">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[4/3] transition-transform group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-[#1C3144]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={item.link}
                      className="inline-flex items-center justify-center rounded-xl border border-[#FEEFEE] bg-transparent px-4 py-2 text-sm font-medium text-[#FEEFEE] hover:bg-[#FEEFEE] hover:text-[#1C3144]"
                      target="_blank"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">{item.title}</h4>
                  <p className="text-sm text-[#1C3144]/80 dark:text-[#8DA7BE]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#035F5C] px-6 py-3 text-sm font-semibold text-[#FEEFEE] transition-all hover:bg-[#024a48]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#035F5C] to-[#1C3144] text-[#FEEFEE] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-[#8DA7BE] md:text-lg">
              Let's discuss how we can transform your business with custom solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[#FEEFEE] bg-transparent px-6 py-3 text-sm font-medium text-[#FEEFEE] hover:bg-[#FEEFEE] hover:text-[#035F5C] focus:ring-2 focus:ring-[#FEEFEE]"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}