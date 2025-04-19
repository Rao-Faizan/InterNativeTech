


// // "use client"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import Image from "next/image"
// // import { usePathname } from "next/navigation"
// // import { Menu, X } from "lucide-react"
// // import { ThemeModeToggle } from "@/components/theme-mode-toggle"

// // export function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)
// //   const pathname = usePathname()

// //   const navItems = [
// //     { href: "/", label: "Home" },
// //     { href: "/about", label: "About Us" },
// //     { href: "/services", label: "Services" },
// //     { href: "/portfolio", label: "Portfolio" },
// //     { href: "/blog", label: "Blog" },
// //     { href: "/contact", label: "Contact" },
// //   ]

// //   const isActive = (path: string) => pathname === path

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <header
// //       className={`sticky top-0 z-50 w-full transition-all duration-200 ${
// //         scrolled
// //           ? "border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-[#FEEFEE] via-[#8DA7BE] via-[#035F5C] via-[#1C3144] to-[#32322C] backdrop-blur supports-[backdrop-filter]:bg-opacity-90"
// //           : "bg-transparent dark:bg-transparent"
// //       }`}
// //     >
// //       <div className="container mx-auto px-4 flex h-16 items-center justify-between">
// //         <div className="flex items-center gap-2">
// //           <Link href="/" className="flex items-center gap-2">
// //             <Image
// //               src="/logo web.png"
// //               alt="Logo"
// //               width={40}
// //               height={40}
// //               className="h-300 w-40 object-contain"
// //             />
// //           </Link>
// //         </div>

// //         <nav className="hidden md:flex items-center gap-6">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.href}
// //               href={item.href}
// //               className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
// //                 isActive(item.href)
// //                   ? "text-green-600 dark:text-green-500"
// //                   : "text-gray-600 dark:text-gray-300"
// //               }`}
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //           <div className="flex items-center gap-2">
// //             <ThemeModeToggle />
// //             {/* <Link
// //               href="/contact"
// //               className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
// //             >
// //               Get a Quote
// //             </Link> */}
// //           </div>
// //         </nav>

// //         <div className="flex items-center gap-2 md:hidden">
// //           <ThemeModeToggle />
// //           <button
// //             className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             <span className="sr-only">Toggle menu</span>
// //           </button>
// //         </div>

// //         {isMenuOpen && (
// //           <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
// //             <nav className="container mx-auto px-4 flex flex-col py-4">
// //               {navItems.map((item) => (
// //                 <Link
// //                   key={item.href}
// //                   href={item.href}
// //                   className={`py-2 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
// //                     isActive(item.href)
// //                       ? "text-green-600 dark:text-green-500"
// //                       : "text-gray-600 dark:text-gray-300"
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   {item.label}
// //                 </Link>
// //               ))}
// //               {/* <Link
// //                 href="/contact"
// //                 className="mt-2 w-full inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 Get a Quote
// //               </Link> */}
// //             </nav>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   )
// // }







// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import { ThemeModeToggle } from "@/components/theme-mode-toggle"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/portfolio", label: "Portfolio" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact" },
//   ]

//   const isActive = (path: string) => pathname === path

//   return (
//     <header
//       className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 
//         bg-gradient-to-r from-[#FEEFEE] via-[#8DA7BE] via-[#035F5C] via-[#1C3144] to-[#32322C] 
//         backdrop-blur supports-[backdrop-filter]:bg-opacity-90 transition-all duration-200"
//     >
//       <div className="container mx-auto px-4 flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/logo web.png"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="h-300 w-40 object-contain"
//             />
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
//                 isActive(item.href)
//                   ? "text-green-600 dark:text-green-500"
//                   : "text-gray-600 dark:text-gray-300"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="flex items-center gap-2">
//             <ThemeModeToggle />
//           </div>
//         </nav>

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

//         {isMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
//             <nav className="container mx-auto px-4 flex flex-col py-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`py-2 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
//                     isActive(item.href)
//                       ? "text-green-600 dark:text-green-500"
//                       : "text-gray-600 dark:text-gray-300"
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

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  return (
    <header
      className="sticky top-0 z-50 w-full 
      bg-gradient-to-r from-[#FEEFEE] via-[#8DA7BE] via-[#035F5C] via-[#1C3144] to-[#32322C] 
      bg-opacity-70 backdrop-blur 
      border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo web.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-300 w-40 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
                isActive(item.href)
                  ? "text-green-600 dark:text-green-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <ThemeModeToggle />
          </div>
        </nav>

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

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
            <nav className="container mx-auto px-4 flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-500 ${
                    isActive(item.href)
                      ? "text-green-600 dark:text-green-500"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
