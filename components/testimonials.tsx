import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

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
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What Our Clients Say</h3>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                </div>
                <p className="mb-4">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
