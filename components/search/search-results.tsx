"use client"

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
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer"
        >
          {result.type === "user" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={result.avatar || "/placeholder.svg"}
                  alt={result.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{result.title}</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{result.description}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-sm font-medium">
                Follow
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
      ))}
    </div>
  )
}
