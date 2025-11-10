"use client"

import { useState } from "react"
import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"
import ChatSidebar from "@/components/chat/chat-sidebar"
import ChatWindow from "@/components/chat/chat-window"

const CHAT_CONTACTS = [
  {
    id: "1",
    name: "Daniel Patar",
    avatar: "/placeholder.svg?key=3kdj1",
    lastMessage: "That sounds great!",
    timestamp: "5d",
    unread: false,
  },
  {
    id: "2",
    name: "Andrew Reinhardt",
    avatar: "/placeholder.svg?key=2jksd",
    lastMessage: "See you tomorrow",
    timestamp: "5w",
    unread: true,
  },
  {
    id: "3",
    name: "Marco Sumarco",
    avatar: "/placeholder.svg?key=lkms9",
    lastMessage: "Thanks for the help",
    timestamp: "6d",
    unread: false,
  },
  {
    id: "4",
    name: "Carlos Alverdo",
    avatar: "/placeholder.svg?key=92jxk",
    lastMessage: "On my way!",
    timestamp: "1h",
    unread: false,
  },
  {
    id: "5",
    name: "Putra Cyber",
    avatar: "/placeholder.svg?key=xjjdl",
    lastMessage: "Perfect!",
    timestamp: "2d",
    unread: true,
  },
]

export default function ChatPage() {
  const [selectedContactId, setSelectedContactId] = useState("1")
  const selectedContact = CHAT_CONTACTS.find((c) => c.id === selectedContactId)

  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 h-screen flex flex-col md:flex-row">
        <ChatSidebar contacts={CHAT_CONTACTS} selectedId={selectedContactId} onSelectContact={setSelectedContactId} />

        {selectedContact && <ChatWindow contactName={selectedContact.name} contactAvatar={selectedContact.avatar} />}

        {/* Empty State for Mobile */}
        <div className="md:hidden flex-1 flex items-center justify-center text-[var(--color-text-tertiary)]">
          <p>Select a conversation to chat</p>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
