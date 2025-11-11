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
    // Mengganti semua kelas box styling
    <div className="post-card"> 
      
      {/* Header */}
      <div className="post-header">
        <img
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          className="post-avatar" // Mengganti w-12 h-12 rounded-full object-cover
        />
        <div className="post-info-container">
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
          // Kelas untuk image
          className="w-full rounded-lg mb-4 object-cover"
          style={{ maxHeight: '24rem' }} // Mengganti max-h-96
        />
      )}

      {/* Actions */}
      <div className="post-actions">
        
        {/* Like Button */}
        <button
          onClick={handleLike}
          // Menggunakan kelas dasar dan kelas liked kondisional
          className={`action-button group ${isLiked ? "liked" : ""}`}
        >
          <Heart
            size={20}
            fill={isLiked ? "currentColor" : "none"}
            // Menggunakan kelas untuk mengontrol warna hover icon
            className={isLiked ? "text-red-500" : "icon-hover"}
          />
          <span className="text-sm">{likeCount}</span>
        </button>

        {/* Comment Button */}
        <button className="action-button group">
          <MessageCircle size={20} className="icon-hover" />
          <span className="text-sm">{comments}</span>
        </button>

        {/* Share Button */}
        <button className="action-button group">
          <Share2 size={20} className="icon-hover" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </div>
  )
}