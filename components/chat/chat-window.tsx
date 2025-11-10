"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import MessageBubble from "./message-bubble"

interface ChatWindowProps {
  contactName: string
  contactAvatar: string
}

const SAMPLE_MESSAGES = [
  {
    id: 1,
    content: "Hey! How are you doing?",
    timestamp: "10:30 AM",
    isOwn: false,
    avatar: "/placeholder.svg?key=3kdj1",
  },
  {
    id: 2,
    content: "I'm doing great! Just finished a project",
    timestamp: "10:32 AM",
    isOwn: true,
    avatar: "/placeholder.svg?key=5m2jx",
  },
  {
    id: 3,
    content: "That's awesome! Tell me more about it",
    timestamp: "10:35 AM",
    isOwn: false,
    avatar: "/placeholder.svg?key=3kdj1",
  },
  {
    id: 4,
    content: "It's a new social media feature that's been pretty challenging but fun to work on",
    timestamp: "10:37 AM",
    isOwn: true,
    avatar: "/placeholder.svg?key=5m2jx",
  },
]

export default function ChatWindow({ contactName, contactAvatar }: ChatWindowProps) {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES)
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
        avatar: "/placeholder.svg?key=5m2jx",
      }
      setMessages([...messages, newMessage])
      setInputValue("")
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-[var(--color-bg-primary)] hidden md:flex">
      {/* Chat Header */}
      <div className="p-4 border-b border-[var(--color-border)] flex items-center gap-3">
        <img
          src={contactAvatar || "/placeholder.svg"}
          alt={contactName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="font-bold text-lg">{contactName}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isOwn={message.isOwn}
            avatar={message.avatar}
          />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[var(--color-border)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
