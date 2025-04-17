// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import { ThemeModeToggle } from "@/components/theme-mode-toggle"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/portfolio", label: "Portfolio" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact" },
//   ]

//   const isActive = (path: string) => {
//     return pathname === path
//   }

//   // Add scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-200 ${
//         scrolled
//           ? "border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60"
//           : "bg-transparent dark:bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="h-10 w-10" />
//             <span className="text-xl font-bold text-green-600 dark:text-green-500">YourSoftware</span>
//           </Link>
//         </div>

//         {/* Desktop navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
//                 isActive(item.href) ? "text-green-600 dark:text-green-500" : "text-gray-600 dark:text-gray-300"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="flex items-center gap-2">
//             <ThemeModeToggle />
//             <Link
//               href="/contact"
//               className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//             >
//               Get a Quote
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile menu button and theme toggle */}
//         <div className="flex items-center gap-2 md:hidden">
//           <ThemeModeToggle />
//           <button
//             className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             <span className="sr-only">Toggle menu</span>
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         {isMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
//             <nav className="container mx-auto px-4 flex flex-col py-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`py-2 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
//                     isActive(item.href) ? "text-green-600 dark:text-green-500" : "text-gray-600 dark:text-gray-300"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Link
//                 href="/contact"
//                 className="mt-2 w-full inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get a Quote
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* ✅ Logo on Left Side */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://th.bing.com/th/id/OIP.S-4GdHtXaCOg--YbpDaLHgAAAA?rs=1&pid=ImgDetMain"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
                isActive(item.href) ? "text-green-600 dark:text-green-500" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <ThemeModeToggle />
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeModeToggle />
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
            <nav className="container mx-auto px-4 flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
                    isActive(item.href) ? "text-green-600 dark:text-green-500" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 w-full inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
