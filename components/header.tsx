"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeModeToggle } from "@/components/theme-mode-toggle"
import { useTheme } from "@/app/theme-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setResolvedTheme(isDark ? "dark" : "light")
    } else {
      setResolvedTheme(theme as "light" | "dark")
    }
  }, [theme])

  const getHeaderBackground = () => {
    if (resolvedTheme === "dark") {
      return "bg-gradient-to-r from-accent to-primary"
    } else {
      return "bg-gradient-to-r from-secondary to-primary"
    }
  }




  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md shadow-md ${getHeaderBackground()}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white/30 dark:bg-white/30 p-1 rounded-full backdrop-blur-sm">

            <Image
              src="/logo web.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain "
            />
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold transition-all duration-300 hover:text-white ${isActive(item.href)
                ? "text-white after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-white"
                : "text-gray-300"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-16 left-0 right-0 w-full border-b backdrop-blur-md shadow-lg ${getHeaderBackground()} md:hidden`}>
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-semibold transition-colors hover:text-white ${isActive(item.href) ? "text-white" : "text-gray-300"
                    }`}
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
