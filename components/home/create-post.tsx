// components/home/create-post.tsx

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
    // Menggunakan custom class create-post-card
    <div className="create-post-card">
      <div className="create-post-content">
        <img src="/diverse-user-avatars.png" alt="Your avatar" className="create-post-avatar" />
        <form onSubmit={handleSubmit} className="create-post-form">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            // Menggunakan custom class post-textarea
            className="post-textarea"
            rows={3}
          />

          {/* Toolbar */}
          <div className="post-toolbar">
            <div className="toolbar-actions">
              <button
                type="button"
                className="toolbar-icon-button"
              >
                <ImageIcon size={20} />
              </button>
              <button
                type="button"
                className="toolbar-icon-button"
              >
                <Smile size={20} />
              </button>
            </div>
            <button
              type="submit"
              className="post-submit-button"
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