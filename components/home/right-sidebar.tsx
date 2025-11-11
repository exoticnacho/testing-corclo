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
    // Menggunakan custom class right-sidebar
    <aside className="right-sidebar space-y-6">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Circlo..."
          // Menggunakan custom class sidebar-search-input
          className="sidebar-search-input"
        />
        {/* Catatan: Icon Search sudah hilang karena input di sidebar asli tidak memilikinya (hanya input field) */}
      </div>

      {/* Suggestions */}
      {/* Menggunakan custom class right-sidebar-box */}
      <div className="right-sidebar-box">
        <h3 className="font-bold text-lg mb-4">Suggestions For You</h3>
        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            // Menggunakan custom class suggestion-item
            <div key={suggestion.username} className="suggestion-item">
              <div className="suggestion-info">
                <img
                  src={suggestion.avatar || "/placeholder.svg"}
                  alt={suggestion.name}
                  className="suggestion-avatar"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">{suggestion.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">@{suggestion.username}</p>
                </div>
              </div>
              {/* Menggunakan custom class follow button */}
              <button className="suggestion-follow-button">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      {/* Menggunakan custom class right-sidebar-box */}
      <div className="right-sidebar-box">
        <h3 className="font-bold text-lg mb-4">Trending Today</h3>
        <div className="space-y-3">
          {trends.map((trend) => (
            <Link
              key={trend.hashtag}
              href={`/search?q=${trend.hashtag}`}
              // Menggunakan custom class trending-item
              className="trending-item group" 
            >
              <p className="font-medium trend-title">{trend.hashtag}</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">{trend.posts} posts</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}