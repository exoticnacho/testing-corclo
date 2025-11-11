"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"

interface ChatContact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

interface ChatSidebarProps {
  contacts: ChatContact[]
  selectedId?: string
  onSelectContact: (id: string) => void
}

export default function ChatSidebar({ contacts, selectedId, onSelectContact }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    // Menggunakan custom class untuk sidebar container
    <div className="chat-sidebar-container"> 
      
      {/* Header */}
      <div className="chat-sidebar-header">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Messages</h2>
          <button className="p-2 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          {/* Menggunakan custom class untuk icon */}
          <Search size={18} className="contact-search-icon" /> 
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // Menggunakan custom class untuk input field
            className="contact-search-input" 
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="contact-list">
        {filteredContacts.length === 0 ? (
          <div className="flex items-center justify-center h-full text-[var(--color-text-tertiary)]">
            <p>No conversations found</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => onSelectContact(contact.id)}
              // Menggunakan custom class untuk item kontak
              className={`contact-item ${selectedId === contact.id ? "selected" : ""}`}
            >
              <div className="relative">
                {/* Menggunakan custom class untuk avatar */}
                <img
                  src={contact.avatar || "/placeholder.svg"}
                  alt={contact.name}
                  className="post-avatar w-12 h-12" // Re-use post-avatar dan override size
                />
                {contact.unread && (
                  <div className="contact-unread-dot"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium truncate">{contact.name}</h3>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{contact.timestamp}</span>
                </div>
                <p
                  className={`text-sm truncate ${contact.unread ? "text-[var(--color-text-primary)] font-medium" : "text-[var(--color-text-tertiary)]"}`}
                >
                  {contact.lastMessage}
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}