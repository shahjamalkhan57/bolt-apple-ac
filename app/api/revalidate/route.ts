import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  try {
    // Verify the request has the correct token
    const authHeader = request.headers.get("authorization")
    if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get the slug from the request body
    const body = await request.json()
    const { slug } = body

    if (!slug) {
      return NextResponse.json(
        { message: "Slug is required" },
        { status: 400 }
      )
    }

    // Revalidate the specific blog post page
    revalidatePath(`/blog/${slug}`)
    
    // Revalidate the blog index page
    revalidatePath("/blog")
    
    // Revalidate the sitemap
    revalidatePath("/sitemap.xml")

    return NextResponse.json(
      { 
        message: "Revalidation successful",
        revalidated: [
          `/blog/${slug}`,
          "/blog",
          "/sitemap.xml"
        ]
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Revalidation error:", error)
    return NextResponse.json(
      { message: "Error revalidating paths" },
      { status: 500 }
    )
  }
}