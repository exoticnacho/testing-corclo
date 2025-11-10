"use client"

import Link from "next/link"

export default function RightSidebar() {
  const suggestions = [
    { name: "John Designer", username: "johndesigner", avatar: "/diverse-user-avatars.png" },
    { name: "Sarah Tech", username: "sarahtech", avatar: "/diverse-user-avatars.png" },
    { name: "Alex Gamer", username: "alexgamer", avatar: "/diverse-user-avatars.png" },
  ]

  const trends = [
    { hashtag: "#WebDesign", posts: "2.4M" },
    { hashtag: "#ReactJS", posts: "1.8M" },
    { hashtag: "#WebDevelopment", posts: "3.2M" },
    { hashtag: "#TechTrends", posts: "1.5M" },
  ]

  return (
    <aside className="hidden xl:block w-72 space-y-6">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Circlo..."
          className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
        />
      </div>

      {/* Suggestions */}
      <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4">
        <h3 className="font-bold text-lg mb-4">Suggestions For You</h3>
        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion.username} className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <img
                  src={suggestion.avatar || "/placeholder.svg"}
                  alt={suggestion.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">{suggestion.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">@{suggestion.username}</p>
                </div>
              </div>
              <button className="text-xs px-3 py-1 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-dark)] transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4">
        <h3 className="font-bold text-lg mb-4">Trending Today</h3>
        <div className="space-y-3">
          {trends.map((trend) => (
            <Link
              key={trend.hashtag}
              href={`/search?q=${trend.hashtag}`}
              className="block p-3 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors group"
            >
              <p className="font-medium group-hover:text-[var(--color-primary)]">{trend.hashtag}</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">{trend.posts} posts</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
