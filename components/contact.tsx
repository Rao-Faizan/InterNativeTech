"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { ChevronRight, Link, Moon, Sun } from "lucide-react"
 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setFormStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Send failed:", error);
      setFormStatus("Sending failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: FaMapMarkerAlt, title: "Our Location", content: "InterNative Tech .LLC 1500 HORNELL LOOP 9C BROOKLYN,NY 11239" },
    { icon: FaPhoneAlt, title: "Phone Number", content: `+1 212 3461647 \n +44 757 7326014` },
    { icon: FaEnvelope, title: "Email Address", content: "info@internativetech.com\nsupport@internativetech.com" },
    { icon: FaClock, title: "Working Hours", content: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 2pm" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Color theme variables
  const colors = {
    dark: "#32322C",   // Dark background
    primary: "#1C3144", // Primary dark blue
    accent: "#035F5C",  // Teal accent
    secondary: "#8DA7BE", // Light blue
    light: "#FEEFEE",    // Off-white
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden  text-[#FEEFEE]">
        <div className="absolute inset-0 z-0 opacity-2">
          <Ballpit 
            count={100}
            followCursor={true}
            friction={0.95}
            colors={[
              0x1C3144, // Prussian Blue
              0x035F5C, // Deep Jungle Green
              0x8DA7BE, // Pewter Blue
              0xFEEFEE, // Snow
            ]}
            ballSize={{ min: 1, max: 3 }}
          />
        </div>

        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8DA7BE] to-[#035F5C]">
              Contact Us
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 text-[#8DA7BE]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
              Get in touch with our team to discuss your project or inquire about our services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronRight className="w-8 h-8 text-[#8DA7BE] rotate-90" />
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-[#FEEFEE] dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {contactItems.map(({ icon: Icon, title, content }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`rounded-lg border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#035F5C]/20`}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8DA7BE]/20 dark:bg-[#035F5C]/30"
                  >
                    <Icon className="h-6 w-6 text-[#035F5C] dark:text-[#8DA7BE]" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1C3144] dark:text-[#FEEFEE]">
                    {title}
                  </h3>
                  <p className="text-center text-[#1C3144]/80 dark:text-[#8DA7BE] whitespace-pre-line">
                    {content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-[#8DA7BE]/10 dark:bg-[#1C3144]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-[800px] text-center"
          >
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium uppercase tracking-widest text-[#035F5C] dark:text-[#8DA7BE] mb-2"
            >
              GET IN TOUCH
            </motion.h2>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-[#1C3144] dark:text-[#FEEFEE]">
              Send Us a Message
            </h3>
            <p className="text-[#1C3144]/80 dark:text-[#8DA7BE]">
              Have a question, project idea, or want to learn more about our
              services? Fill out the form below and we'll get back to you as
              soon as possible.
            </p>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[800px]"
          >
            <div className={`rounded-lg border border-[#8DA7BE]/30 bg-white dark:bg-[#32322C] p-6 md:p-8 shadow-lg shadow-[#8DA7BE]/10 dark:shadow-[#035F5C]/10`}>
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <motion.div 
                  className="grid gap-4 md:grid-cols-2"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1C3144] dark:text-[#8DA7BE]"
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
                      className={`flex h-10 w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                    />
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1C3144] dark:text-[#8DA7BE]"
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
                      className={`flex h-10 w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="grid gap-4 md:grid-cols-2"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#1C3144] dark:text-[#8DA7BE]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex h-10 w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                    />
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#1C3144] dark:text-[#8DA7BE]"
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
                      className={`flex h-10 w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1C3144] dark:text-[#8DA7BE]"
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
                    className={`flex w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                  />
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="mt-6"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-[#035F5C] to-[#1C3144] px-6 py-3 text-base font-medium text-[#FEEFEE] hover:from-[#1C3144] hover:to-[#035F5C] focus:outline-none focus:ring-2 focus:ring-[#8DA7BE] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] disabled:opacity-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#035F5C]/20`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <motion.span 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block mr-2"
                        >
                          ↻
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <motion.span 
                          whileHover={{ x: [0, 5, 0] }}
                          transition={{ duration: 0.5 }}
                          className="inline-block mr-2"
                        >
                          ✉️
                        </motion.span>
                        Send Message
                      </span>
                    )}
                  </button>
                </motion.div>
              </form>

              <AnimatePresence>
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 text-center text-sm font-medium ${formStatus.includes("Thanks") ? "text-[#035F5C]" : "text-[#8DA7BE]"}`}
                  >
                    {formStatus}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}