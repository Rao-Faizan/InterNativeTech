"use client";

import type React from "react";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Ballpit from "./Ballpit";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black ">
         <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
         
        

        {/* Ballpit Layer */}
        <div className="absolute inset-0 z-20 opacity-30">
          <Ballpit
            className="coding-ballpit"
            count={100}
            followCursor={true}
            friction={1.0}
            colors={[
              0x1C1917, // HTML
              0x01b7c5, // CSS
              0xffffff, // JS
              0x7a7d7d, // TS
              0x01b7c5, // React
              
            ]}
            ballSize={{ min: 0.8, max: 1.8 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col justify-center items-center text-center px-6 md:px-12 min-h-[600px]">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white transition-all duration-300 hover:text-green-600">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Get in touch with our team to discuss your project or inquire about
            our services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Reusable contact info component */}
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Our Location",
                content:
                  "123 Tech Street, Innovation District, City, Country 12345",
              },
              {
                icon: FaPhoneAlt,
                title: "Phone Number",
                content: "+1 (123) 456-7890\n+1 (987) 654-3210",
              },
              {
                icon: FaEnvelope,
                title: "Email Address",
                content:
                  "info@yoursoftwarehouse.com\nsupport@yoursoftwarehouse.com",
              },
              {
                icon: FaClock,
                title: "Working Hours",
                content: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 2pm",
              },
            ].map(({ icon: Icon, title, content }, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <Icon className="h-6 w-6 text-green-600 dark:text-green-500 transition-all duration-300 hover:text-green-700" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold dark:text-white transition-all duration-300 hover:text-green-600">
                    {title}
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500 mb-2 transition-all duration-300 hover:text-green-700">
              GET IN TOUCH
            </h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 dark:text-white">
              Send Us a Message
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Have a question, project idea, or want to learn more about our
              services? Fill out the form below and we'll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="mx-auto max-w-[800px]">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-8">
              <form className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 focus:ring-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 focus:ring-4"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 focus:ring-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 focus:ring-4"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="flex w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 focus:ring-4"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin mr-2">🌀</span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>

              {formStatus && (
                <div className="mt-6 text-center text-green-600 dark:text-green-500">
                  <p>{formStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
