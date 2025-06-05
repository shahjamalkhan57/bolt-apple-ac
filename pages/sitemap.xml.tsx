import { GetServerSideProps } from "next"
import { getPublishedBlogPosts } from "@/lib/supabase/client"

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL

// Static pages with their update frequency and priority
const staticPages = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "/air-conditioning",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/heating",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/emergency",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/blog",
    changefreq: "daily",
    priority: 0.9,
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.6,
  },
]

function generateSiteMap(blogPosts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${SITE_URL}${page.url}</loc>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
        )
        .join("")}
      ${blogPosts
        .map(
          (post) => `
        <url>
          <loc>${SITE_URL}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.published_at || post.created_at).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
  // This component will never be rendered
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // Fetch all published blog posts
    const posts = await getPublishedBlogPosts()

    // Generate the XML sitemap
    const sitemap = generateSiteMap(posts)

    // Set the appropriate headers
    res.setHeader("Content-Type", "text/xml")
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=59")
    
    // Send the XML to the browser
    res.write(sitemap)
    res.end()

    return {
      props: {},
    }
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return {
      notFound: true,
    }
  }
}

export default SiteMap