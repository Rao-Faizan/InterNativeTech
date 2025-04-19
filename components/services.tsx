// import { Monitor, Smartphone, BarChart4 } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export function Services() {
//   return (
//     <section id="services" className="py-16 md:py-24">
//       <div className="container">
//         <div className="mx-auto mb-12 max-w-[800px] text-center">
//           <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-2">OUR SERVICES</h2>
//           <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What We Offer</h3>
//           <p className="text-muted-foreground">
//             We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.
//           </p>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
//                 <Monitor className="h-6 w-6 text-primary" />
//               </div>
//               <CardTitle>Web Development</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="text-base">
//                 Your Software House offers website development services to help businesses establish a strong online
//                 presence. Our team of experts creates responsive, user-friendly websites that are optimized for
//                 performance and search engines.
//               </CardDescription>
//             </CardContent>
//           </Card>
//           <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
//                 <Smartphone className="h-6 w-6 text-primary" />
//               </div>
//               <CardTitle>Mobile App Development</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="text-base">
//                 Looking to bring your business to the fingertips of your customers? Your Software House has got you
//                 covered with custom mobile application development for iOS and Android platforms.
//               </CardDescription>
//             </CardContent>
//           </Card>
//           <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
//                 <BarChart4 className="h-6 w-6 text-primary" />
//               </div>
//               <CardTitle>Digital Marketing</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="text-base">
//                 Unlock the power of social media with Your Software House's digital marketing services. Our experts help
//                 businesses reach their target audience and drive engagement through strategic marketing campaigns.
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"
import { Monitor, Smartphone, BarChart4 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-2">OUR </h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What We Offer</h3>
          <p className="text-muted-foreground">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Web Development */}
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/29/09/32/technology-1869236_1280.jpg"
              alt="Web Development"
              width={500}
              height={200}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your Software House offers website development services to help businesses establish a strong online
                presence. Our team of experts creates responsive, user-friendly websites that are optimized for
                performance and search engines.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Mobile App Development */}
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/10/01/37/smartphone-1967612_1280.jpg"
              alt="Mobile App Development"
              width={500}
              height={200}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Mobile App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Looking to bring your business to the fingertips of your customers? Your Software House has got you
                covered with custom mobile application development for iOS and Android platforms.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Digital Marketing */}
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <Image
              src="https://cdn.pixabay.com/photo/2017/03/02/09/04/analysis-2111346_1280.jpg"
              alt="Digital Marketing"
              width={500}
              height={200}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Digital Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Unlock the power of social media with Your Software House's digital marketing services. Our experts help
                businesses reach their target audience and drive engagement through strategic marketing campaigns.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
