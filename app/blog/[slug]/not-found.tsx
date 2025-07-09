"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function BlogNotFound() {
  useEffect(() => {
    // Log the 404 error to your analytics service
    console.error("Blog post not found");
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );
}
