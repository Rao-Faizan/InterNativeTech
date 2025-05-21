"use client";

import Ballpit from "@/components/Ballpit";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/lib/sanity.image';
import { useEffect, useState } from 'react';

interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  publishedAt: string;
  excerpt?: string;
  categories?: { title: string }[];
  author?: {
    name: string;
    image?: any;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        "categories": categories[]->title,
        author->{name, image}
      }`;
      const sanityPosts = await client.fetch(query);
      setPosts(sanityPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

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
              </div>
              <div className="space-y-8">
                {loading ? (
                  <div className="text-center py-8 text-lg">Loading...</div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-8 text-lg">No blog posts found.</div>
                ) : (
                  posts.map((post) => (
                    <motion.div
                      key={post._id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="overflow-hidden rounded-lg border border-[#8DA7BE]/30 bg-white dark:bg-[#1C3144] transition-all duration-300 hover:shadow-lg hover:shadow-[#035F5C]/20"
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative aspect-video md:aspect-square">
                          {post.mainImage ? (
                            <Image
                              src={urlForImage(post.mainImage).url()}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
                          )}
                        </div>
                        <div className="p-6 flex flex-col">
                          <div className="mb-3 flex items-center gap-2">
                            {post.categories && post.categories.length > 0 && post.categories.map((cat) => (
                              <span
                                key={cat.title}
                                className="inline-flex items-center rounded-full bg-[#8DA7BE]/20 px-3 py-1 text-xs font-medium text-[#035F5C] dark:bg-[#035F5C]/30 dark:text-[#8DA7BE]"
                              >
                                {cat.title}
                              </span>
                            ))}
                          </div>
                          <h2 className="text-xl font-bold leading-snug tracking-tight text-[#1C3144] dark:text-[#FEEFEE] md:text-2xl">
                            <Link
                              href={`/blog/${post.slug.current}`}
                              className="transition-colors hover:text-[#035F5C] dark:hover:text-[#8DA7BE]"
                            >
                              {post.title}
                            </Link>
                          </h2>
                          {post.excerpt && <p className="mt-2 text-[#1C3144]/80 dark:text-[#8DA7BE]">{post.excerpt}</p>}
                          <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {post.author && (
                                <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                                  {post.author.image ? (
                                    <Image
                                      src={urlForImage(post.author.image).url()}
                                      alt={post.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  ) : (
                                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">No Img</div>
                                  )}
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-medium text-[#1C3144] dark:text-[#FEEFEE]">{post.author?.name}</p>
                                <p className="text-xs text-[#1C3144]/50 dark:text-[#8DA7BE]/50">{new Date(post.publishedAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <Link
                              href={`/blog/${post.slug.current}`}
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
                  ))
                )}
              </div>
            </div>
            {/* Sidebar can be added here if needed */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}