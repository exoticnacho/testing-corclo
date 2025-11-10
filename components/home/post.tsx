"use client"

import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"

interface PostProps {
  author: {
    name: string
    username: string
    avatar: string
  }
  timestamp: string
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
}

export default function Post({ author, timestamp, content, image, likes, comments, shares }: PostProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6 mb-4">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div>
            <h3 className="font-bold text-[var(--color-text-primary)]">{author.name}</h3>
            <p className="text-sm text-[var(--color-text-tertiary)]">@{author.username}</p>
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{content}</p>

      {/* Image */}
      {image && (
        <img
          src={image || "/placeholder.svg"}
          alt="Post content"
          className="w-full rounded-lg mb-4 object-cover max-h-96"
        />
      )}

      {/* Actions */}
      <div className="flex items-center justify-between text-[var(--color-text-tertiary)] border-t border-[var(--color-border)] pt-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors group ${
            isLiked ? "text-red-500" : "hover:bg-[var(--color-primary)]/10"
          }`}
        >
          <Heart
            size={20}
            fill={isLiked ? "currentColor" : "none"}
            className={isLiked ? "text-red-500" : "group-hover:text-[var(--color-text-primary)]"}
          />
          <span className="text-sm">{likeCount}</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors group">
          <MessageCircle size={20} className="group-hover:text-[var(--color-text-primary)]" />
          <span className="text-sm">{comments}</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors group">
          <Share2 size={20} className="group-hover:text-[var(--color-text-primary)]" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </div>
  )
}
