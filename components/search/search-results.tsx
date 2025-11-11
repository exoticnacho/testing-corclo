"use client"

import { useState } from "react"

interface SearchResult {
  id: string
  type: "user" | "post" | "hashtag"
  title: string
  description?: string
  avatar?: string
  stats?: {
    label: string
    value: string
  }
}

interface SearchResultsProps {
  results: SearchResult[]
  isLoading?: boolean
}

export default function SearchResults({ results, isLoading }: SearchResultsProps) {
    // State untuk melacak ID pengguna yang diikuti
    const [followedUsers, setFollowedUsers] = useState<Record<string, boolean>>({}) 

    const handleFollowToggle = (id: string) => {
        setFollowedUsers(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-4 animate-pulse"
          >
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-[var(--color-bg-primary)] rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-[var(--color-bg-primary)] rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-[var(--color-bg-primary)] rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-tertiary)] text-lg">No results found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {results.map((result) => {
        const isFollowed = result.type === "user" ? !!followedUsers[result.id] : false;
        
        return (
          <div
            key={result.id}
            // Menggunakan custom class search-result-card
            className="search-result-card"
          >
            {result.type === "user" && (
              // Mengganti flex items-center justify-between
              <div className="flex justify-between" style={{ alignItems: 'center' }}>
                {/* Menggunakan custom class search-user-info */}
                <div className="search-user-info"> 
                  <img
                    src={result.avatar || "/placeholder.svg"}
                    alt={result.title}
                    // Menggunakan custom class search-user-avatar
                    className="search-user-avatar" 
                  />
                  <div>
                    <h3 className="font-bold">{result.title}</h3>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{result.description}</p>
                  </div>
                </div>
                {/* IMPLEMENTASI LOGIC FOLLOW */}
                <button 
                    onClick={(e) => { 
                        e.stopPropagation(); // Mencegah klik menyebar ke card
                        handleFollowToggle(result.id);
                    }}
                    // Menggunakan custom class dan conditional styling
                    className={`follow-button ${isFollowed ? 'is-following' : ''}`}
                >
                    {isFollowed ? 'Following' : 'Follow'}
                </button>
              </div>
            )}

          {result.type === "post" && (
            <div>
              <div className="flex items-start gap-3 mb-3">
                <img src={result.avatar || "/placeholder.svg"} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold">{result.title}</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">@{result.description}</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)]">{result.stats?.[0]?.value}</p>
            </div>
          )}

          {result.type === "hashtag" && (
            <div>
              <h3 className="font-bold text-lg mb-2">{result.title}</h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">{result.stats?.[0]?.value} posts</p>
            </div>
          )}
        </div>
        );
      })}
    </div>
  )
}