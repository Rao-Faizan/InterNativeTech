import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-32">
      <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
      <div className="container relative z-30 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary">WHO WE ARE</h2>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">WHAT WE DO</h1>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            Your Software House is a full-service digital agency that helps businesses thrive in the online world. We
            provide our services that help to grow your business sustainability, we create and execute brand strategies
            through dynamic digital marketing with our team of experts.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="w-full min-[400px]:w-auto">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
              Our Services
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border md:aspect-square">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Office space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-background/80 backdrop-blur-sm p-4">
            <div className="text-center">
              <p className="text-3xl font-bold">350+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">400+</p>
              <p className="text-sm text-muted-foreground">Success Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
