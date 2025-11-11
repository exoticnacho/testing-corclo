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
    <div className="app-container pb-20 lg:pb-0"> {/* Menggunakan app-container */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 chat-layout"> {/* Menggunakan chat-layout */}
        <ChatSidebar contacts={CHAT_CONTACTS} selectedId={selectedContactId} onSelectContact={setSelectedContactId} />

        {selectedContact && <ChatWindow contactName={selectedContact.name} contactAvatar={selectedContact.avatar} />}

        {/* Empty State for Mobile */}
        <div className="md:hidden flex-1 flex items-center justify-center text-[var(--color-text-tertiary)]">
          <p>Select a conversation to chat</p>
        </div>
        
        {/* Empty State for Desktop jika tidak ada kontak dipilih (perbaikan opsional yang saya sarankan) */}
        {!selectedContact && (
            <div className="hidden md:flex flex-1 items-center justify-center text-[var(--color-text-tertiary)]">
                <p>Select a conversation to start chatting</p>
            </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}