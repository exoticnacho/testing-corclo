"use client"

import { Edit2, Share2 } from "lucide-react"

interface ProfileHeaderProps {
  name: string
  username: string
  bio: string
  avatar: string
  coverImage: string
  followers: number
  following: number
  posts: number
  isOwnProfile?: boolean
}

export default function ProfileHeader({
  name,
  username,
  bio,
  avatar,
  coverImage,
  followers,
  following,
  posts,
  isOwnProfile = false,
}: ProfileHeaderProps) {
  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl overflow-hidden mb-6">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-accent)]/30 relative">
        <img src={coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
        {isOwnProfile && (
          <button className="absolute top-4 right-4 p-2 bg-[var(--color-bg-secondary)] rounded-lg hover:bg-[var(--color-bg-primary)] transition-colors">
            <Edit2 size={18} />
          </button>
        )}
      </div>

      {/* Profile Info */}
      <div className="px-4 sm:px-6 py-6 relative">
        {/* Avatar */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 -mt-24 relative z-10 mb-4">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-[var(--color-bg-secondary)] object-cover"
          />
          <div className="flex-1 pt-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-[var(--color-text-secondary)]">@{username}</p>
              </div>
              {isOwnProfile ? (
                <button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors font-medium">
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors font-medium">
                    Follow
                  </button>
                  <button className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-primary)] transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[var(--color-text-secondary)] mb-6">{bio}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-[var(--color-border)]">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-primary)]">{posts}</p>
            <p className="text-sm text-[var(--color-text-tertiary)]">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-primary)]">{followers}</p>
            <p className="text-sm text-[var(--color-text-tertiary)]">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-primary)]">{following}</p>
            <p className="text-sm text-[var(--color-text-tertiary)]">Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}
