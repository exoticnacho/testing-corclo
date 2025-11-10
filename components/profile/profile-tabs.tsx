"use client"

import type React from "react"

import { useState } from "react"

interface ProfileTabsProps {
  children: React.ReactNode[]
}

const TABS = ["Posts", "Gallery", "Likes", "Following"]

export default function ProfileTabs({ children }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-0 border-b border-[var(--color-border)] mb-6">
        {TABS.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === idx
                ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{children[activeTab]}</div>
    </div>
  )
}
