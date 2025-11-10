"use client"
import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import ProfileHeader from "@/components/profile/profile-header"
import ProfileTabs from "@/components/profile/profile-tabs"
import Post from "@/components/home/post"
import ProfileGallery from "@/components/profile/profile-gallery"

const USER_DATA = {
  name: "Kelompok 6",
  username: "kelompok.6",
  bio: "Mountain enthusiast 🏔️ | Photography lover | Sharing my journey",
  avatar: "/placeholder.svg?key=uimdl",
  coverImage: "/placeholder.svg?key=7xb7g",
  followers: 5201,
  following: 1401,
  posts: 283,
}

const USER_POSTS = [
  {
    author: {
      name: "Kelompok 6",
      username: "kelompok.6",
      avatar: "/placeholder.svg?key=uimdl",
    },
    timestamp: "27 Jun at 3:13 PM",
    content: "Semeru memang selalu bikin mata gabisa berkedip",
    image: "/placeholder.svg?key=bgx5d",
    likes: 7200,
    comments: 450,
    shares: 380,
  },
  {
    author: {
      name: "Kelompok 6",
      username: "kelompok.6",
      avatar: "/placeholder.svg?key=uimdl",
    },
    timestamp: "12 Oct 2024 at 10:12 PM",
    content: "Gunung Merbabu - one of my favorite hikes. The views are incredible!",
    image: "/placeholder.svg?key=2x8lm",
    likes: 3450,
    comments: 234,
    shares: 156,
  },
]

const GALLERY_POSTS = [
  { id: "1", image: "/placeholder.svg?key=gal1", likes: 1200, comments: 89 },
  { id: "2", image: "/placeholder.svg?key=gal2", likes: 2340, comments: 156 },
  { id: "3", image: "/placeholder.svg?key=gal3", likes: 890, comments: 67 },
  { id: "4", image: "/placeholder.svg?key=gal4", likes: 3450, comments: 234 },
  { id: "5", image: "/placeholder.svg?key=gal5", likes: 1560, comments: 103 },
  { id: "6", image: "/placeholder.svg?key=gal6", likes: 2100, comments: 145 },
]

export default function ProfilePage() {
  const isOwnProfile = true

  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          {/* Profile Header */}
          <ProfileHeader {...USER_DATA} isOwnProfile={isOwnProfile} />

          {/* Profile Tabs */}
          <ProfileTabs>
            {/* Posts Tab */}
            <div>
              {USER_POSTS.map((post, idx) => (
                <Post key={idx} {...post} />
              ))}
            </div>

            {/* Gallery Tab */}
            <ProfileGallery posts={GALLERY_POSTS} />

            {/* Likes Tab */}
            <div className="text-center text-[var(--color-text-tertiary)] py-12">
              <p>Your liked posts will appear here</p>
            </div>

            {/* Following Tab */}
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <img src={`/ceholder-svg-key-fol.jpg?key=fol${i}`} alt="User" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">Following User {i + 1}</p>
                      <p className="text-sm text-[var(--color-text-tertiary)]">@user{i + 1}</p>
                    </div>
                  </div>
                  <button className="text-sm px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                    Unfollow
                  </button>
                </div>
              ))}
            </div>
          </ProfileTabs>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
