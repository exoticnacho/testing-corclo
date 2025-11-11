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
    // Menggunakan custom class chat-window-container
    <div className="chat-window-container"> 
      
      {/* Chat Header */}
      <div className="chat-sidebar-header border-b border-[var(--color-border)] flex items-center gap-3">
        <img
          src={contactAvatar || "/placeholder.svg"}
          alt={contactName}
          className="post-avatar w-10 h-10" // Re-use post-avatar dan override size
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
      <div className="chat-input-wrapper">
        <div className="flex gap-2 w-full">
          {/* Menggunakan custom class untuk input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="chat-input-field"
          />
          {/* Menggunakan custom class untuk tombol kirim */}
          <button
            onClick={handleSend}
            className="chat-send-button"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}