import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="relative aspect-video overflow-hidden rounded-lg border md:aspect-square">
          <Image src="/placeholder.svg?height=600&width=600" alt="Team working" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary">ABOUT US</h2>
            
          </div>
          <p className="text-muted-foreground">
            Founded in 2020, Your Software House has quickly established itself as a leader in digital transformation.
            Our team of experienced developers, designers, and digital marketers work together to deliver exceptional
            results for our clients.
          </p>
          <p className="text-muted-foreground">
            We believe in a collaborative approach, working closely with our clients to understand their unique
            challenges and goals. This enables us to create tailored solutions that drive real business growth.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
          </div>
          <Button className="w-fit mt-2">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
