import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity.image'

interface BlogPostCardProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt?: string
    categories?: { title: string }[]
  }
}

const FALLBACK_IMAGE = '/fallback-blog.png' // Place a fallback image in your public folder

export function BlogPostCard({ post }: BlogPostCardProps) {
  let imageUrl = FALLBACK_IMAGE
  if (post.mainImage && typeof post.mainImage === 'object' && post.mainImage.asset) {
    imageUrl = urlForImage(post.mainImage).url()
  }

  return (
    <article className="group relative flex flex-col space-y-2">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          <Link href={`/blog/${post.slug.current}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-gray-500 line-clamp-2">{post.excerpt}</p>
        )}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          {post.categories && post.categories.length > 0 && (
            <div className="flex space-x-2">
              {post.categories.map((category) => (
                <span
                  key={category.title}
                  className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
} 