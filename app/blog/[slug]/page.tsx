import { getBlogPost, getRelatedPosts, getAllBlogSlugs } from '@/lib/blog-data'
import BlogPostContent from '@/components/BlogPostContent'
import { Metadata } from 'next'

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
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
