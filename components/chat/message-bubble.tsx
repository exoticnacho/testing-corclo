// components/chat/message-bubble.tsx
"use client"

interface MessageBubbleProps {
  content: string
  timestamp: string
  isOwn: boolean
  avatar: string
}

export default function MessageBubble({ content, timestamp, isOwn, avatar }: MessageBubbleProps) {
  return (
    // Menggunakan custom class untuk layout utama
    <div className={`message-bubble-container ${isOwn ? "is-own" : ""}`}>
      <img
        src={avatar || "/placeholder.svg"}
        alt="Avatar"
        className="message-bubble-avatar" // Mengganti w-8 h-8 rounded-full object-cover flex-shrink-0
      />
      {/* Menggunakan custom class untuk konten pesan */}
      <div className={`message-bubble-content ${isOwn ? "is-own" : "is-other"}`}>
        <div
          // Menggunakan custom class untuk bubble
          className={`message-bubble ${isOwn ? "is-own" : "is-other"}`} 
        >
          <p className="break-words">{content}</p>
        </div>
        <span className="message-timestamp">{timestamp}</span>
      </div>
    </div>
  )
}