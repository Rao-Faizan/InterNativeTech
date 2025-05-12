import Ballpit from "@/components/Ballpit"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Insights & News | InterNative Tech",
  description: "Latest insights, tutorials, and news from our technology experts",
}

export default function BlogPage() {
  const blogPosts = [
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
  ]

  const categories = [
    { name: "Web Development", count: 12 },
    { name: "Mobile Development", count: 8 },
    { name: "Design", count: 15 },
    { name: "Technology", count: 20 },
    { name: "Security", count: 7 },
    { name: "Cloud Services", count: 9 },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black ">
  {/* Background Grid + Gradient */}
  <div className="absolute inset-0 z-10 opacity-20">
    {/* <div className="w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div> */}
  </div>

  {/* Ballpit Layer */}
  <div className="absolute inset-0 z-20 opacity-30">
    <Ballpit 
      className="coding-ballpit"
      count={150}
      colors={[
        0x1C1917, // HTML
        0x01b7c5, // CSS
        0xffffff, // JS
        0x7a7d7d, // TS
        0x01b7c5, // React
      ]}
      ballSize={{ min: 0.6, max: 1.8 }}
      iconUrls={[]}
    />
  </div>

  {/* Content */}
  <div className="relative z-30 flex flex-col justify-center items-center text-center px-6 md:px-12 min-h-[600px]">
    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white transition-all duration-300 hover:text-green-600">
      Our Blog
    </h1>
    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
      Insights, tutorials, and news from our technology experts.
    </p>
  </div>
</section>



      {/* Blog Content */}
      <section className="py-16 md:py-24 dark:bg-gray-900" id="featured-posts">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight dark:text-white md:text-3xl">Latest Articles</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                  <select className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <option>Newest</option>
                    <option>Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>

              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
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
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-500">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold leading-snug tracking-tight dark:text-white md:text-2xl">
                          <Link
                            href={`/blog/${post.id}`}
                            className="transition-colors hover:text-green-600 dark:hover:text-green-500"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
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
                              <p className="text-sm font-medium dark:text-white">{post.author}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-800 dark:text-green-500 dark:hover:text-green-400"
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
                  </div>

                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold dark:text-white">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-transform duration-200 transform hover:scale-105"
                  />

                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                    Search
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold dark:text-white">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-green-500"
                      >
                        <span>{category.name}</span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold dark:text-white">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-white">
                          <Link
                            href={`/blog/${post.id}`}
                            className="transition-colors hover:text-green-600 dark:hover:text-green-500"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold dark:text-white">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes", "UI/UX", "AI", "Machine Learning"].map(
                    (tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10 text-green-600"
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
                  <h3 className="mt-3 text-lg font-semibold dark:text-white">Subscribe to Newsletter</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Get the latest articles and news delivered to your inbox.
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400"
                  />
                  <button className="flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
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
                <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}