import { createClient } from '@supabase/supabase-js'
import { type BlogPost } from '@/types/supabase'

// Create a Supabase client with the public anon key
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Create a Supabase admin client with the service role key
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Helper function to get all published blog post slugs
export async function getPublishedBlogSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }

  return data.map(post => post.slug)
}

// Helper function to get a specific blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data
}

// Helper function to get all published blog posts
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data
}

// Admin helper function to create a new blog post
export async function createBlogPost(post: BlogPostCreate) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .insert([post])
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Admin helper function to update a blog post
export async function updateBlogPost(slug: string, updates: Partial<BlogPost>) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .update(updates)
    .eq('slug', slug)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}