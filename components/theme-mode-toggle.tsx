"use client"

import { useTheme } from "@/app/theme-provider"
import { Moon, Sun, Monitor } from "lucide-react"
import { useState } from "react"

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Toggle theme"
      >
        {theme === "light" && <Sun className="h-4 w-4" />}
        {theme === "dark" && <Moon className="h-4 w-4" />}
        {theme === "system" && <Monitor className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-1 shadow-lg">
          <button
            onClick={() => {
              setTheme("light")
              setIsOpen(false)
            }}
            className="flex w-full items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Sun className="mr-2 h-4 w-4" />
            Light
          </button>
          <button
            onClick={() => {
              setTheme("dark")
              setIsOpen(false)
            }}
            className="flex w-full items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-black dark:hover:bg-gray-800"
          >
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </button>
          <button
            onClick={() => {
              setTheme("system")
              setIsOpen(false)
            }}
            className="flex w-full items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Monitor className="mr-2 h-4 w-4" />
            System
          </button>
        </div>
      )}
    </div>
  )
}
