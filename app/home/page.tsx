"use client"

import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import CreatePost from "@/components/home/create-post"
import Post from "@/components/home/post"
import RightSidebar from "@/components/home/right-sidebar"

const SAMPLE_POSTS = [
  {
    author: {
      name: "Kelompok 6",
      username: "kelompok.6",
      avatar: "/diverse-group-avatars.png",
    },
    timestamp: "Just now",
    content:
      "Life is about choosing what matters most. Success isn't about being the best, it's about being better than yesterday. 🌟",
    image: "/majestic-mountain-vista.png",
    likes: 7200,
    comments: 450,
    shares: 380,
  },
  {
    author: {
      name: "Livy Renata",
      username: "livyrenata",
      avatar: "/diverse-woman-avatar.png",
    },
    timestamp: "44 minutes ago",
    content: "Just tried this trending thing! Can't wait to show you all. Who's next? 🎥",
    image: "/video-thumbnail.png",
    likes: 3450,
    comments: 234,
    shares: 156,
  },
  {
    author: {
      name: "Muhammad Jannah",
      username: "bigmoskyy",
      avatar: "/man-avatar.png",
    },
    timestamp: "29 minutes ago",
    content: "Live now on YouTube! Join me for an exciting stream! 🎮✨",
    likes: 5600,
    comments: 892,
    shares: 1240,
  },
  {
    author: {
      name: "Netflix Indonesia",
      username: "NetflixID",
      avatar: "/netflix-logo.png",
    },
    timestamp: "1 hour ago",
    content: "Now playing! Sing along to your favorite songs. 🎤🎶 Available on Netflix now!",
    image: "/abstract-movie-poster.png",
    likes: 12450,
    comments: 3020,
    shares: 4560,
  },
]

export default function HomePage() {
  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          {/* Create Post */}
          <CreatePost />

          {/* Posts Feed */}
          <div>
            {SAMPLE_POSTS.map((post, idx) => (
              <Post key={idx} {...post} />
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <RightSidebar />

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
