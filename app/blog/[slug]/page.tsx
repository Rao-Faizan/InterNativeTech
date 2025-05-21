"use client";

import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/lib/sanity.image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        body,
        "author": author->{
          name,
          image,
          bio
        },
        "categories": categories[]->title
      }`
      const data = await client.fetch(query, { slug: params.slug });
      setPost(data);
      setLoading(false);
    }
    if (params.slug) fetchPost();
  }, [params.slug]);

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (!post) return <div className="container mx-auto px-4 py-8">Post not found.</div>;

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            {post.categories && post.categories.length > 0 && (
              <div className="flex space-x-2">
                {post.categories.map((category: string) => (
                  <span
                    key={category}
                    className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        {post.mainImage && (
          <div className="relative aspect-[16/9] mb-8">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {post.excerpt && (
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        )}
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
        {post.author && (
          <div className="mt-12 border-t pt-8">
            <div className="flex items-center space-x-4">
              {post.author.image && (
                <div className="relative h-16 w-16">
                  <Image
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{post.author.name}</h3>
                {post.author.bio && (
                  <p className="text-gray-600">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 