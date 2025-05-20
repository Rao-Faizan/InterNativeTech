
"use client";

import Ballpit from "@/components/Ballpit";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Moon, Sun } from "lucide-react"

import { motion } from "framer-motion";
// Define interfaces
interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  author: string;
  authorImage?: string;
  date: string;
}

interface Category {
  name: string;
  count: number;
}
export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and how to build modern web applications.",
      category: "Next.js",
      readTime: "5 min read",
      image: "/images/nextjs.jpg",
      author: "John Doe",
      authorImage: "/images/john.jpg",
      date: "May 10, 2025",
    },
     {
      id: 1,
      title: "10 Web Development Trends to Watch in 2023",
      excerpt: "Explore the latest web development trends that are shaping the digital landscape and how they can benefit your business.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/27/web-593242_1280.jpg",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Mobile App Development",
      excerpt: "Everything you need to know about creating successful mobile applications, from planning to deployment and beyond.",
      image: "https://cdn.pixabay.com/photo/2017/02/23/13/05/app-2092022_1280.jpg",
      date: "May 28, 2023",
      author: "Sarah Williams",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      category: "Mobile Development",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "How AI is Transforming Software Development",
      excerpt: "Discover how artificial intelligence is revolutionizing the software development process and creating new opportunities.",
      image: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg",
      date: "May 10, 2023",
      author: "Michael Chen",
      authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Importance of UX Design in Digital Products",
      excerpt: "Why user experience design is critical for the success of your digital products and how to implement UX best practices.",
      image: "https://cdn.pixabay.com/photo/2021/01/08/17/33/ui-5899786_1280.jpg",
      date: "April 22, 2023",
      author: "Emily Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/women/63.jpg",
      category: "Design",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Securing Your Web Applications: Best Practices",
      excerpt: "Essential security measures and best practices to protect your web applications from common vulnerabilities and threats.",
      image: "https://cdn.pixabay.com/photo/2021/03/23/12/48/cybersecurity-6118470_1280.jpg",
      date: "April 5, 2023",
      author: "David Kim",
      authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
      category: "Security",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "The Future of Cloud Computing for Businesses",
      excerpt: "How cloud computing is evolving and what businesses should know to stay ahead in the rapidly changing technological landscape.",
      image: "https://cdn.pixabay.com/photo/2017/06/10/06/31/cloud-computing-2389226_1280.jpg",
      date: "March 18, 2023",
      author: "Lisa Patel",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      category: "Cloud Services",
      readTime: "5 min read",
    },
    // Add more blog posts as needed
  ];

  const categories: Category[] = [
    { name: "Next.js", count: 10 },
    { name: "React", count: 15 },
    { name: "TypeScript", count: 8 },
    // Add more categories as needed
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Hero Section with Particles */}
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
            Our Blog
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 text-[#8DA7BE]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We craft stunning, high-performance websites that drive results for businesses worldwide.
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

      {/* Blog Content */}
      <section className="py-16 md:py-24 dark:bg-gray-950 id=featured-posts">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-3"
          >
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-[#1C3144] dark:text-[#FEEFEE] md:text-3xl">
                  Latest Articles
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-[#1C3144]/80 dark:text-[#8DA7BE]">Sort by:</span>
                  <select
                    className={`rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] px-3 py-1 text-sm text-[#1C3144] dark:text-[#FEEFEE] shadow-sm focus:border-[#035F5C] focus:outline-none focus:ring-1 focus:ring-[#035F5C]`}
                  >
                    <option>Newest</option>
                    <option>Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>

              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="overflow-hidden rounded-lg border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] transition-all duration-300 hover:shadow-lg hover:shadow-[#035F5C]/20"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-video md:aspect-square">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      </div>
                      <div className="p-6 flex flex-col">
                        <div className="mb-3 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full bg-[#8DA7BE]/20 px-3 py-1 text-xs font-medium text-[#035F5C] dark:bg-[#035F5C]/30 dark:text-[#8DA7BE]`}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">•</span>
                          <span className="text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold leading-snug tracking-tight text-[#1C3144] dark:text-[#FEEFEE] md:text-2xl">
                          <Link
                            href={`/blog/${post.id}`}
                            className="transition-colors hover:text-[#035F5C] dark:hover:text-[#8DA7BE]"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-2 text-[#1C3144]/80 dark:text-[#8DA7BE]">{post.excerpt}</p>
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                              <Image
                                src={post.authorImage || "/placeholder.svg"}
                                alt={post.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#1C3144] dark:text-[#FEEFEE]">{post.author}</p>
                              <p className="text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">{post.date}</p>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-sm font-medium text-[#035F5C] transition-colors hover:text-[#1C3144] dark:text-[#8DA7BE] dark:hover:text-[#FEEFEE]"
                          >
                            Read more
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1 h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  className={`inline-flex h-12 items-center justify-center rounded-md border border-[#8DA7BE]/30 bg-white px-6 py-3 text-sm font-medium text-[#1C3144] shadow-sm transition-all hover:bg-[#8DA7BE]/10 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:border-[#8DA7BE]/30 dark:bg-[#1C3144] dark:text-[#FEEFEE] dark:hover:bg-[#035F5C]/20`}
                >
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[#8DA7BE]/30 bg-white p-6 shadow-sm dark:border-[#8DA7BE]/30 dark:bg-[#1C3144]"
              >
                <h3 className="mb-4 text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">Search Articles</h3>
                <div className="relative flex gap-2">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className={`flex h-10 w-full rounded-md border border-[#8DA7BE]/30 bg-white dark:bg-[#32322C] px-3 py-2 text-sm text-[#1C3144] dark:text-[#FEEFEE] placeholder:text-[#1C3144]/50 dark:placeholder:text-[#8DA7BE]/50 focus:outline-none focus:ring-2 focus:ring-[#035F5C] focus:ring-offset-2 dark:focus:ring-offset-[#32322C] transition-all duration-300`}
                  />
                  <button
                    className={`inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#035F5C] to-[#1C3144] px-4 py-2 text-sm font-medium text-[#FEEFEE] transition-colors hover:from-[#1C3144] hover:to-[#035F5C] focus:outline-none focus:ring-2 focus:ring-[#8DA7BE] focus:ring-offset-2 dark:focus:ring-offset-[#32322C]`}
                  >
                    Search
                  </button>
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[#8DA7BE]/30 bg-white p-6 shadow-sm dark:border-[#8DA7BE]/30 dark:bg-[#1C3144]"
              >
                <h3 className="mb-4 text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                        className={`flex items-center justify-between rounded-md px-3 py-2 text-sm text-[#1C3144] transition-colors hover:bg-[#8DA7BE]/10 hover:text-[#035F5C] dark:text-[#8DA7BE] dark:hover:bg-[#035F5C]/20 dark:hover:text-[#FEEFEE]`}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`inline-flex items-center rounded-full bg-[#8DA7BE]/20 px-2.5 py-0.5 text-xs font-medium text-[#035F5C] dark:bg-[#035F5C]/30 dark:text-[#8DA7BE]`}
                        >
                          {category.count}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[#8DA7BE]/30 bg-white p-6 shadow-sm dark:border-[#8DA7BE]/30 dark:bg-[#1C3144]"
              >
                <h3 className="mb-4 text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <motion.article
                      key={post.id}
                      whileHover={{ scale: 1.02 }}
                      className="group flex gap-3"
                    >
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-snug text-[#1C3144] dark:text-[#FEEFEE]">
                          <Link
                            href={`/blog/${post.id}`}
                            className="transition-colors hover:text-[#035F5C] dark:hover:text-[#8DA7BE]"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <p className="mt-1 text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">{post.date}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[#8DA7BE]/30 bg-white p-6 shadow-sm dark:border-[#8DA7BE]/30 dark:bg-[#1C3144]"
              >
                <h3 className="mb-4 text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes", "UI/UX", "AI", "Machine Learning"].map(
                    (tag, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.05 }}>
                        <Link
                          href={`/blog/tag/${tag.toLowerCase()}`}
                          className={`inline-flex items-center rounded-full bg-[#8DA7BE]/20 px-3 py-1 text-xs font-medium text-[#035F5C] transition-colors hover:bg-[#035F5C] hover:text-[#FEEFEE] dark:bg-[#035F5C]/30 dark:text-[#8DA7BE] dark:hover:bg-[#8DA7BE] dark:hover:text-[#1C3144]`}
                        >
                          {tag}
                        </Link>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                variants={itemVariants}
                className={`rounded-xl border border-[#8DA7BE]/30 bg-gradient-to-br from-[#FEEFEE] to-white p-6 shadow-sm dark:border-[#035F5C]/30 dark:from-[#1C3144] dark:to-[#32322C]`}
              >
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10 text-[#035F5C] dark:text-[#8DA7BE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="mt-3 text-lg font-semibold text-[#1C3144] dark:text-[#FEEFEE]">Subscribe to Newsletter</h3>
                  <p className="mt-2 text-sm text-[#1C3144]/80 dark:text-[#8DA7BE]">
                    Get the latest articles and news delivered to your inbox.
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={`block w-full rounded-md border border-[#8DA7BE]/30 bg-white px-4 py-2.5 text-sm text-[#1C3144] shadow-sm focus:border-[#035F5C] focus:outline-none focus:ring-1 focus:ring-[#035F5C] dark:border-[#8DA7BE]/30 dark:bg-[#32322C] dark:text-[#FEEFEE] dark:placeholder:text-[#8DA7BE]/50`}
                  />
                  <button
                    className={`flex w-full items-center justify-center rounded-md bg-gradient-to-r from-[#035F5C] to-[#1C3144] px-4 py-2.5 text-sm font-medium text-[#FEEFEE] shadow-sm transition-colors hover:from-[#1C3144] hover:to-[#035F5C] focus:outline-none focus:ring-2 focus:ring-[#8DA7BE] focus:ring-offset-2`}
                  >
                    Subscribe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <p className="mt-3 text-center text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}