import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-2">OUR WORK</h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Recent Projects</h3>
          <p className="text-muted-foreground">
            Take a look at some of our recent projects that showcase our expertise and capabilities.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Project+${item}`}
                        alt={`Project ${item}`}
                        width={600}
                        height={400}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          View Project
                        </Button>
                      </div>
                    </div>
                    <h4 className="mt-2 text-lg font-semibold">Project Title {item}</h4>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by category */}
          <TabsContent value="web" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 3, 5].map((item) => (
                <Card key={item} className="overflow-hidden border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Web+Project+${item}`}
                        alt={`Project ${item}`}
                        width={600}
                        height={400}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          View Project
                        </Button>
                      </div>
                    </div>
                    <h4 className="mt-2 text-lg font-semibold">Web Project {item}</h4>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Add similar content for mobile and design tabs */}
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
