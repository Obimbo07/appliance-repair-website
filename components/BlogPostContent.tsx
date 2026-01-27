'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowLeft, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useBooking } from '@/components/BookingProvider'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  content: string
}

interface BlogPostContentProps {
  post: BlogPost | null
  relatedPosts: BlogPost[]
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const { openBooking } = useBooking()

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-purple-600 prose-ul:text-gray-600 prose-li:marker:text-purple-600"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share this article:</span>
              </div>
              <div className="flex gap-3">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Professional Help?</h3>
            <p className="text-purple-200 mb-6">
              Our expert technicians are ready to help with all your appliance repair and maintenance needs.
            </p>
            <button 
              onClick={openBooking}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Book a Service
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-purple-600 text-sm font-medium">{relatedPost.category}</span>
                    <h3 className="font-bold text-gray-800 mt-1 group-hover:text-purple-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  )
}
