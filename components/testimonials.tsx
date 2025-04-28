import Image from "next/image"
import { FaStar } from "react-icons/fa"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Your Software House delivered an exceptional website that perfectly captures our brand identity. Their team was professional, responsive, and went above and beyond to ensure our satisfaction.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GrowthApp",
      content:
        "Working with Your Software House on our mobile app was a fantastic experience. They understood our vision and translated it into a user-friendly application that our customers love.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, EcoSolutions",
      content:
        "The digital marketing strategy developed by Your Software House has significantly increased our online presence and lead generation. Their expertise and data-driven approach have been invaluable.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 transition-all">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-green-500 mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-gray-800 dark:text-white">What Our Clients Say</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <div className="p-6">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-green-500 text-green-500" : "text-gray-400"}`}
                      />
                    ))}
                </div>
                <p className="text-gray-800 dark:text-gray-300 mb-4">{testimonial.content}</p>
              </div>

              <div className="border-t pt-4 px-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={`/placeholder.svg?height=50&width=50&text=${testimonial.name.charAt(0)}`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
