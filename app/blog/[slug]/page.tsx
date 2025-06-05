import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getPublishedBlogSlugs } from "@/lib/supabase/client"

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const ogImage = post.image_url || "https://yourdomain.com/default-og-image.jpg"

  return {
    title: post.title,
    description: post.meta_desc,
    openGraph: {
      title: post.title,
      description: post.meta_desc,
      images: [{ url: ogImage }],
      type: "article",
      publishedTime: post.published_at || post.created_at,
      modifiedTime: post.published_at || post.created_at,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_desc,
      images: [ogImage],
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{post.meta_desc}</p>
        <time
          dateTime={post.published_at || post.created_at}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      {post.image_url && (
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html_content }}
      />
    </article>
  )
}