// components/community/community-card.tsx

"use client"

import { Users } from "lucide-react"

interface CommunityCardProps {
  name: string
  description: string
  icon: string
  members: number
  isJoined?: boolean
  onToggleJoin?: () => void
}

export default function CommunityCard({
  name,
  description,
  icon,
  members,
  isJoined = false,
  onToggleJoin,
}: CommunityCardProps) {
  return (
    // Menggunakan custom class community-card
    <div className="community-card"> 
      <div className="community-card-header">
        <div className="text-4xl">{icon}</div>
        <button
          onClick={onToggleJoin}
          // Menggunakan custom class community-join-button
          className={`community-join-button ${
            isJoined ? "is-joined" : "is-not-joined"
          }`}
        >
          {isJoined ? "Joined" : "Join"}
        </button>
      </div>

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[var(--color-text-tertiary)] text-sm mb-4">{description}</p>

      {/* Menggunakan custom class community-member-stats */}
      <div className="community-member-stats">
        <Users size={16} />
        <span>{members.toLocaleString()} members</span>
      </div>
    </div>
  )
}