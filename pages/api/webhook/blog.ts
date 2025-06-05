import { NextApiRequest, NextApiResponse } from "next"

// Webhook secret should match the one configured in Supabase
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

interface BlogPostPayload {
  type: "INSERT" | "UPDATE"
  table: string
  record: {
    id: string
    slug: string
    published: boolean
    published_at: string | null
  }
  old_record?: {
    published: boolean
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" })
    }

    // Verify webhook secret
    const webhookSecret = req.headers["x-webhook-secret"]
    if (!webhookSecret || webhookSecret !== WEBHOOK_SECRET) {
      console.error("Invalid webhook secret")
      return res.status(401).json({ message: "Unauthorized" })
    }

    const payload = req.body as BlogPostPayload

    // Verify this is for the blog_posts table
    if (payload.table !== "blog_posts") {
      return res.status(400).json({ message: "Invalid table" })
    }

    // Check if the post is published
    const isPublished = payload.record.published
    const wasPublished = payload.old_record?.published

    // Only proceed if the post is published or was just unpublished
    if (!isPublished && !wasPublished) {
      return res.status(200).json({ message: "Post not published, skipping revalidation" })
    }

    // Call the revalidation API
    const revalidateResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REVALIDATION_TOKEN}`,
      },
      body: JSON.stringify({
        slug: payload.record.slug,
      }),
    })

    if (!revalidateResponse.ok) {
      throw new Error(`Failed to revalidate: ${revalidateResponse.statusText}`)
    }

    const result = await revalidateResponse.json()

    return res.status(200).json({
      message: "Revalidation triggered successfully",
      revalidated: result.revalidated,
    })
  } catch (error) {
    console.error("Webhook error:", error)
    return res.status(500).json({ message: "Error processing webhook" })
  }
}