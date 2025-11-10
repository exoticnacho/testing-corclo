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
    <div className="w-full md:w-80 bg-[var(--color-bg-secondary)] border-r border-[var(--color-border)] flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Messages</h2>
          <button className="p-2 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.length === 0 ? (
          <div className="flex items-center justify-center h-full text-[var(--color-text-tertiary)]">
            <p>No conversations found</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => onSelectContact(contact.id)}
              className={`w-full p-4 border-b border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] transition-colors text-left ${
                selectedId === contact.id
                  ? "bg-[var(--color-primary)]/10 border-l-2 border-l-[var(--color-primary)]"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={contact.avatar || "/placeholder.svg"}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {contact.unread && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
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
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
