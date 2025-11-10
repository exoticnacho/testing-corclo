"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import SearchBar from "@/components/search/search-bar"
import SearchResults from "@/components/search/search-results"

const SAMPLE_RESULTS = [
  {
    id: "1",
    type: "hashtag" as const,
    title: "#WebDesign",
    stats: [{ label: "posts", value: "2.4M posts" }],
  },
  {
    id: "2",
    type: "hashtag" as const,
    title: "#ReactJS",
    stats: [{ label: "posts", value: "1.8M posts" }],
  },
  {
    id: "3",
    type: "user" as const,
    title: "Sarah Tech",
    description: "@sarahtech",
    avatar: "/placeholder.svg?key=stech1",
  },
  {
    id: "4",
    type: "user" as const,
    title: "John Designer",
    description: "@johndesigner",
    avatar: "/placeholder.svg?key=jdes1",
  },
  {
    id: "5",
    type: "post" as const,
    title: "Amazing Web Design Tips",
    description: "sarahtech",
    avatar: "/placeholder.svg?key=stech1",
    stats: [{ label: "engagement", value: "Just shared some awesome design tips!" }],
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState<typeof SAMPLE_RESULTS>([])

  useEffect(() => {
    if (searchQuery.length > 0) {
      // Simulate search filtering
      const filtered = SAMPLE_RESULTS.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (result.description && result.description.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [searchQuery])

  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Search</h1>
            <p className="text-[var(--color-text-secondary)]">Find users, posts, and communities</p>
          </div>

          {/* Search Bar */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {/* Results */}
          <SearchResults results={results} />

          {/* Popular Section (when no search) */}
          {searchQuery.length === 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Popular Right Now</h2>
              <div className="space-y-4">
                {SAMPLE_RESULTS.slice(0, 3).map((result) => (
                  <div
                    key={result.id}
                    className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer"
                  >
                    <h3 className="font-bold text-lg mb-1">{result.title}</h3>
                    {result.stats && (
                      <p className="text-[var(--color-text-tertiary)] text-sm">{result.stats[0].value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
