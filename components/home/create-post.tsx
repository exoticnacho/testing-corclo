"use client"

import type React from "react"

import { ImageIcon, Smile, Send } from "lucide-react"
import { useState } from "react"

export default function CreatePost() {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Post:", content)
    setContent("")
  }

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6 mb-6">
      <div className="flex gap-4">
        <img src="/diverse-user-avatars.png" alt="Your avatar" className="w-12 h-12 rounded-full object-cover" />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
            rows={3}
          />

          {/* Toolbar */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button
                type="button"
                className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 rounded-lg transition-colors"
              >
                <ImageIcon size={20} />
              </button>
              <button
                type="button"
                className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 rounded-lg transition-colors"
              >
                <Smile size={20} />
              </button>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors font-medium"
            >
              <Send size={18} />
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
