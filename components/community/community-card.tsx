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
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <button
          onClick={onToggleJoin}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isJoined
              ? "bg-[var(--color-bg-primary)] text-[var(--color-primary)] border border-[var(--color-primary)]"
              : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
          }`}
        >
          {isJoined ? "Joined" : "Join"}
        </button>
      </div>

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[var(--color-text-tertiary)] text-sm mb-4">{description}</p>

      <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
        <Users size={16} />
        <span>{members.toLocaleString()} members</span>
      </div>
    </div>
  )
}
