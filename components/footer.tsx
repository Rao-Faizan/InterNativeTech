"use client"

import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo web.png"
                alt="Logo"
                width={200}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm">
              InterNative Tech is a full-service digital agency helping businesses thrive in the online world.
            </p>
            <div className="flex gap-3 mt-4">
              <SocialIcon href="#" Icon={FaFacebookF}  />
              <SocialIcon href="#" Icon={FaTwitter} />
              <SocialIcon href="#" Icon={FaInstagram} />
              <SocialIcon href="#" Icon={FaLinkedinIn} />
              <SocialIcon href="#" Icon={FaGithub} />
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Services">
            <FooterLink href="/services">Web Development</FooterLink>
            <FooterLink href="/services">Mobile App Development</FooterLink>
            <FooterLink href="/services">UI/UX Design</FooterLink>
            <FooterLink href="/services">Digital Marketing</FooterLink>
            <FooterLink href="/services">E-commerce Solutions</FooterLink>
            <FooterLink href="/services">Cloud Services</FooterLink>
          </FooterSection>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and offers.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 focus:ring-2 focus:ring-green-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} InterNative Tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

/* Helper Components */
function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ href, Icon }: { href: string; Icon: React.ElementType }) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
    >
      <Icon className="h-5 w-5" />
      {/* <span className="sr-only">{Icon.displayName}</span> */}
    </Link>
  )
}
