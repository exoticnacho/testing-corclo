"use client"

import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import { Plus } from "lucide-react"

const SAMPLE_STORIES = [
  { id: "1", name: "Your Story", avatar: "/placeholder.svg?key=ystory", username: "your_story" },
  { id: "2", name: "Sarah Tech", avatar: "/placeholder.svg?key=st1", username: "sarahtech" },
  { id: "3", name: "John Designer", avatar: "/placeholder.svg?key=jd1", username: "johndesigner" },
  { id: "4", name: "Alex Gamer", avatar: "/placeholder.svg?key=ag1", username: "alexgamer" },
  { id: "5", name: "Emma Photo", avatar: "/placeholder.svg?key=ep1", username: "emmaphoto" },
]

export default function StoriesPage() {
  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Stories</h1>
            <p className="text-[var(--color-text-secondary)]">Share moments that disappear after 24 hours</p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SAMPLE_STORIES.map((story) => (
              <div key={story.id} className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 group-hover:from-[var(--color-primary)]/40 group-hover:to-[var(--color-accent)]/40 transition-colors"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <img
                    src={story.avatar || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-[var(--color-primary)]"
                  />
                  <p className="text-sm font-medium px-2">{story.name}</p>
                </div>

                {/* Add Story Button */}
                {story.id === "1" && (
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <Plus size={16} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
