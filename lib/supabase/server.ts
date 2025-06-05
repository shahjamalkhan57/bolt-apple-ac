import { createClient } from '@supabase/supabase-js'
import { type BlogPost, type BlogPostCreate } from '@/types/supabase'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY')
}

// Create a Supabase admin client with the service role key
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

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