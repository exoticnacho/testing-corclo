"use client"

interface ProfileGalleryProps {
  posts: Array<{
    id: string
    image: string
    likes: number
    comments: number
  }>
}

export default function ProfileGallery({ posts }: ProfileGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src={post.image || "/placeholder.svg"}
            alt="Post"
            className="w-full aspect-square object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
            <div className="text-white text-center">
              <p className="text-2xl font-bold">{post.likes}</p>
              <p className="text-sm">Likes</p>
            </div>
            <div className="text-white text-center">
              <p className="text-2xl font-bold">{post.comments}</p>
              <p className="text-sm">Comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
