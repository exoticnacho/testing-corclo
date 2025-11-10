"use client"

import Link from "next/link"
import { Home, Search, Heart, MessageCircle, Users, Settings, LogOut } from "lucide-react"

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Heart, label: "Stories", href: "/stories" },
    { icon: MessageCircle, label: "Messages", href: "/chat" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-[var(--color-bg-secondary)] border-r border-[var(--color-border)] p-6 overflow-y-auto hidden lg:flex flex-col">
      {/* Logo */}
      <Link href="/home" className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl">Circlo</span>
      </Link>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 rounded-lg transition-colors group"
          >
            <item.icon size={20} className="group-hover:text-[var(--color-primary)]" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button className="w-full flex items-center gap-3 px-4 py-3 text-[var(--color-text-secondary)] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors group">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  )
}
