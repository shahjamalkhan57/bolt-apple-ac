export interface BlogPost {
  id: string
  title: string
  slug: string
  meta_desc: string
  image_url: string
  html_content: string
  created_at: string
  published: boolean
  published_at: string | null
}

export type BlogPostCreate = Omit<BlogPost, 'id' | 'created_at'>