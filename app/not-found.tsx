"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
