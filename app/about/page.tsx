
import { About } from "@/components/about"

export const metadata = {
  title: "About Us | InterNative Tech",
  description: "Learn about our company, mission, values, and the team behind InterNative Tech",

}

export default function AboutPage() {
  // useEffect(() => {
  //   // Initialize animations
  //   if (typeof window !== 'undefined') {
  //     // Hero section animations
  //     gsap.from(".hero-title", {
  //       duration: 1,
  //       y: 50,
  //       opacity: 0,
  //       ease: "power3.out",
  //       delay: 0.3
  //     })
      
  //     gsap.from(".hero-subtitle", {
  //       duration: 0.8,
  //       y: 30,
  //       opacity: 0,
  //       ease: "power3.out",
  //       delay: 0.6
  //     })

  //     // Section heading animations
  //     gsap.utils.toArray(".section-heading").forEach((section: any) => {
  //       gsap.from(section, {
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 80%",
  //         },
  //         y: 40,
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power3.out"
  //       })
  //     })

  //     // Story section animations
  //     gsap.from(".story-image", {
  //       scrollTrigger: {
  //         trigger: ".story-image",
  //         start: "top 85%",
  //       },
  //       x: -50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out"
  //     })

  //     gsap.from(".story-content", {
  //       scrollTrigger: {
  //         trigger: ".story-content",
  //         start: "top 85%",
  //       },
  //       x: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out"
  //     })

  //     // Mission & Values animations
  //     gsap.utils.toArray(".mission-card").forEach((card: any, i) => {
  //       gsap.from(card, {
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //         },
  //         y: 50,
  //         opacity: 0,
  //         duration: 0.6,
  //         ease: "power3.out",
  //         delay: i * 0.15
  //       })
  //     })

  //     // Team member animations
  //     gsap.utils.toArray(".team-member").forEach((member: any, i) => {
  //       gsap.from(member, {
  //         scrollTrigger: {
  //           trigger: member,
  //           start: "top 85%",
  //         },
  //         y: 60,
  //         opacity: 0,
  //         duration: 0.7,
  //         ease: "power3.out",
  //         delay: i * 0.1
  //       })
  //     })

  //     // Client logo animations
  //     gsap.utils.toArray(".client-logo").forEach((logo: any, i) => {
  //       gsap.from(logo, {
  //         scrollTrigger: {
  //           trigger: logo,
  //           start: "top 90%",
  //         },
  //         y: 40,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //         delay: i * 0.1
  //       })
  //     })
  //   }
  // }, [])

  return (
    <div>
      <About />
    </div>
  )
}