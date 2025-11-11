"use client"

import { useState } from "react"
import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import CommunityCard from "@/components/community/community-card"

const COMMUNITIES = [
  {
    id: "1",
    name: "AI & Technology",
    description: "Explore the latest in AI, machine learning, and emerging tech trends",
    icon: "🤖",
    members: 45230,
    isJoined: true,
  },
  {
    id: "2",
    name: "Design & Creativity",
    description: "Connect with creative minds, share art, and get feedback on your work",
    icon: "🎨",
    members: 32150,
    isJoined: true,
  },
  {
    id: "3",
    name: "Startups & Business",
    description: "Discuss entrepreneurship and share your startup journey",
    icon: "💼",
    members: 28640,
    isJoined: false,
  },
  {
    id: "4",
    name: "Gaming & Esports",
    description: "Meet fellow gamers, discuss games, and join tournaments",
    icon: "🎮",
    members: 67890,
    isJoined: false,
  },
  {
    id: "5",
    name: "Photography",
    description: "Share your photos, learn photography techniques, and get inspired",
    icon: "📸",
    members: 34560,
    isJoined: false,
  },
  {
    id: "6",
    name: "Music & Podcasts",
    description: "Discuss music, discover new artists, and share podcast recommendations",
    icon: "🎵",
    members: 41230,
    isJoined: false,
  },
  {
    id: "7",
    name: "Travel & Adventure",
    description: "Share travel stories, destination tips, and find travel buddies",
    icon: "✈️",
    members: 25890,
    isJoined: false,
  },
  {
    id: "8",
    name: "Books & Reading",
    description: "Discuss books, share recommendations, and join reading clubs",
    icon: "📚",
    members: 19650,
    isJoined: true,
  },
]

export default function CommunityPage() {
  const [communities, setCommunities] = useState(COMMUNITIES)

  const handleToggleJoin = (id: string) => {
    setCommunities(communities.map((c) => (c.id === id ? { ...c, isJoined: !c.isJoined } : c)))
  }

  const joinedCommunities = communities.filter((c) => c.isJoined)
  const availableCommunities = communities.filter((c) => !c.isJoined)

  return (
    <div className="app-container pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        {/* Menggunakan custom class community-page-inner */}
        <div className="community-page-inner"> 
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Communities</h1>
            <p className="text-[var(--color-text-secondary)]">
              Join communities and connect with people who share your interests
            </p>
          </div>

          {/* Your Communities Section */}
          {joinedCommunities.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Your Communities ({joinedCommunities.length})</h2>
              {/* Menggunakan custom class community-grid */}
              <div className="community-grid"> 
                {joinedCommunities.map((community) => (
                  <CommunityCard
                    key={community.id}
                    {...community}
                    onToggleJoin={() => handleToggleJoin(community.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Available Communities Section */}
          {availableCommunities.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Discover Communities ({availableCommunities.length})</h2>
              {/* Menggunakan custom class community-grid */}
              <div className="community-grid"> 
                {availableCommunities.map((community) => (
                  <CommunityCard
                    key={community.id}
                    {...community}
                    onToggleJoin={() => handleToggleJoin(community.id)}
                  />
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