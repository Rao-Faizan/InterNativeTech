// app/api/posts/route.ts (example API route in Next.js 13/14/15)
import { NextResponse } from 'next/server'
import { client } from '@/sanity/client'

export async function GET() {
  try {
    const posts = await client.fetch(`*[_type == "post"]{_id, title, slug}`)
    return NextResponse.json({ posts })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
