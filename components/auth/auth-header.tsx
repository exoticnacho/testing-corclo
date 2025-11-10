"use client"

import Link from "next/link"

export default function AuthHeader() {
  return (
    <div className="flex justify-between items-center mb-12">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl">Circlo</span>
      </Link>
    </div>
  )
}
