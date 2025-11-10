"use client"

interface MessageBubbleProps {
  content: string
  timestamp: string
  isOwn: boolean
  avatar: string
}

export default function MessageBubble({ content, timestamp, isOwn, avatar }: MessageBubbleProps) {
  return (
    <div className={`flex gap-2 mb-4 ${isOwn ? "flex-row-reverse" : ""}`}>
      <img
        src={avatar || "/placeholder.svg"}
        alt="Avatar"
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className={`flex flex-col ${isOwn ? "items-end" : "items-start"}`}>
        <div
          className={`px-4 py-2 rounded-2xl max-w-xs ${
            isOwn
              ? "bg-[var(--color-primary)] text-white rounded-br-none"
              : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-bl-none"
          }`}
        >
          <p className="break-words">{content}</p>
        </div>
        <span className="text-xs text-[var(--color-text-tertiary)] mt-1">{timestamp}</span>
      </div>
    </div>
  )
}
