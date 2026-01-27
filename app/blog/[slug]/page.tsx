import { getBlogPost, getRelatedPosts, getAllBlogSlugs } from '@/lib/blog-data'
import BlogPostContent from '@/components/BlogPostContent'

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Force static generation
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const relatedPosts = post ? getRelatedPosts(post.category, post.id) : []

  return <BlogPostContent post={post || null} relatedPosts={relatedPosts} />
}
