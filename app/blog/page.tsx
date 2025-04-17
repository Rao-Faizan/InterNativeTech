import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Blog | Your Software House",
  description: "Latest insights, tutorials, and news from our technology experts",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Web Development Trends to Watch in 2023",
      excerpt:
        "Explore the latest web development trends that are shaping the digital landscape and how they can benefit your business.",
      image: "/placeholder.svg?height=400&width=600&text=Web+Trends",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "Web Development",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Mobile App Development",
      excerpt:
        "Everything you need to know about creating successful mobile applications, from planning to deployment and beyond.",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Guide",
      date: "May 28, 2023",
      author: "Sarah Williams",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "How AI is Transforming Software Development",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the software development process and creating new opportunities.",
      image: "/placeholder.svg?height=400&width=600&text=AI+Development",
      date: "May 10, 2023",
      author: "Michael Chen",
      category: "Technology",
    },
    {
      id: 4,
      title: "The Importance of UX Design in Digital Products",
      excerpt:
        "Why user experience design is critical for the success of your digital products and how to implement UX best practices.",
      image: "/placeholder.svg?height=400&width=600&text=UX+Design",
      date: "April 22, 2023",
      author: "Emily Rodriguez",
      category: "Design",
    },
    {
      id: 5,
      title: "Securing Your Web Applications: Best Practices",
      excerpt:
        "Essential security measures and best practices to protect your web applications from common vulnerabilities and threats.",
      image: "/placeholder.svg?height=400&width=600&text=Web+Security",
      date: "April 5, 2023",
      author: "David Kim",
      category: "Security",
    },
    {
      id: 6,
      title: "The Future of Cloud Computing for Businesses",
      excerpt:
        "How cloud computing is evolving and what businesses should know to stay ahead in the rapidly changing technological landscape.",
      image: "/placeholder.svg?height=400&width=600&text=Cloud+Computing",
      date: "March 18, 2023",
      author: "Lisa Patel",
      category: "Cloud Services",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">Our Blog</h1>
            <p className="text-xl text-gray-300">Insights, tutorials, and news from our technology experts.</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-video md:aspect-square">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="p-6 flex flex-col">
                        <div className="mb-2">
                          <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 text-xs font-medium px-2.5 py-0.5 rounded">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {post.date} • By {post.author}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-green-600 dark:text-green-500 hover:underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Search</h3>
                <div className="flex gap-2">
                  <input
                    placeholder="Search articles..."
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  />
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                    Search
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Categories</h3>
                <ul className="space-y-2">
                  {["Web Development", "Mobile Development", "Design", "Technology", "Security", "Cloud Services"].map(
                    (category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                        >
                          {category}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 dark:text-white">
                          <Link href={`/blog/${post.id}`} className="hover:text-green-600 dark:hover:text-green-500">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Stay updated with our latest articles, news, and insights.
                </p>
                <div className="space-y-2">
                  <input
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  />
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
