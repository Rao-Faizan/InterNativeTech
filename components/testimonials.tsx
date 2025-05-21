import Image from "next/image"
import { FaStar } from "react-icons/fa"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Arsalan",
      role: "Founder, prepdummy",
      content: "Working with the team was an outstanding experience! They understood my vision for PrepDummy.com perfectly and brought it to life with a clean, responsive, and user-friendly design. Their attention to detail, creativity, and professionalism made the entire process smooth and stress-free. Highly recommended!",
      rating: 5,
      image: 'p1.png'
    },
    {
      id: 2,
      name: "Saad Sheikh",
      role: "COO, Idara Al-Khair",
      content: "I'm extremely impressed with the AIT website developed for us! The design is modern, clean, and very easy to navigate. Every detail was handled professionally, and the project was completed exactly as we envisioned. It has truly elevated our IT center's online presence. Highly recommended!",
      rating: 5,
      image: 'p2.png'
    },
    {
      id: 3,
      name: "William Hugh Jefferson",
      role: "Co-Founder, Engineered Solutions",
      content: "Working with Engineered Solutions was a fantastic experience. Their team delivered an exceptional Rainwater Harvesting website that perfectly showcases our services. The design is clean, user-friendly, and highly professional.",
      rating: 5,
      image: 'p3.png'
    },
  ]

  const FALLBACK_IMAGE = '/fallback-avatar.png' // Place a fallback image in your public folder

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-all">
      <div className="container px-5 mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-600 uppercase bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
            Client Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients say about their experience working with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            let imageUrl = FALLBACK_IMAGE
            if (testimonial.image && (testimonial.image.startsWith('http') || testimonial.image.startsWith('/'))) {
              imageUrl = testimonial.image
            } else if (testimonial.image) {
              imageUrl = '/' + testimonial.image
            }
            return (
              <div
                key={testimonial.id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        />
                      ))}
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-14 w-14 overflow-hidden rounded-full bg-gradient-to-r from-green-400 to-green-600 p-0.5">
                      <div className="h-full w-full rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-green-600 dark:text-green-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}