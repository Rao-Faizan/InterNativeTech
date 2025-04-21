import Image from "next/image"
import Link from "next/link"
import { Monitor, Smartphone, BarChart4, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-200">
    


    <section className="relative h-screen overflow-hidden bg-black">
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
    <h1
  className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
  style={{ color: '#88a19b' }} // greenish-gray
>
  Think Digital With InterNative Tech
</h1>

     <p className="mt-4 text-gray-300 md:text-lg">
      We are a company helping people understand their audience and sell ideas quickly, efficiently, and effectively.


      </p>
      <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
       
        <Link
          href="/services"
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 w-full min-[400px]:w-auto"
        >
          Call now
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Featured Services */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              OUR EXPERTISE
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Premium Services</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We deliver comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900">
              <div className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Monitor className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">Web Development</h3>
              </div>              <div>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Custom websites and web applications built with cutting-edge technologies to deliver exceptional user
                  experiences and drive business growth.
                </p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900">
              <div className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Smartphone className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">Mobile Development</h3>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Native and cross-platform mobile applications that provide seamless experiences across iOS and Android
                  devices, helping you reach your customers wherever they are.
                </p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 transition-all hover:border-green-200 dark:hover:border-green-900">
              <div className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <BarChart4 className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">Digital Marketing</h3>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Strategic digital marketing campaigns that increase your online visibility, drive qualified traffic,
                  and convert visitors into loyal customers.
                </p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">
              FEATURED WORK
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">Recent Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our latest projects showcasing our expertise in creating innovative digital solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden bg-transparent shadow-none">
                <div className="p-0">
                  <div className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${item}`}
                      alt={`Project ${item}`}
                      width={600}
                      height={400}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <Link
                        href={`/portfolio/project-${item}`}
                        className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold dark:text-white">Project Title {item}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Development</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#035F57] text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8 text-green-50/90 md:text-lg">
              Let's discuss how we can help transform your business with our custom software solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#035F57] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
