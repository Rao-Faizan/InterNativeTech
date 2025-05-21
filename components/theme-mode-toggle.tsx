"use client"

import { useState } from "react"
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa"
import { useTheme } from "@/app/theme-provider" // assuming you are using a context

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme() // Using theme context
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeToggle = () => {
    // Cycle through themes on click: light -> dark -> system
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleThemeToggle} // Direct toggle on button click
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="Toggle theme"
      >
        {theme === "light" && <FaSun className="h-5 w-5" />}
        {theme === "dark" && <FaMoon className="h-5 w-5" />}
        {theme === "system" && <FaDesktop className="h-5 w-5" />}
      </button>
    </div>
  )
}
