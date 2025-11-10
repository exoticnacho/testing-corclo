"use client"

import Link from "next/link"
import { Home, Search, Heart, MessageCircle, Users, Settings } from "lucide-react"

export default function MobileNav() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Heart, label: "Stories", href: "/stories" },
    { icon: MessageCircle, label: "Messages", href: "/chat" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] lg:hidden">
      <div className="flex justify-around items-center">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex-1 flex justify-center items-center py-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 transition-colors"
          >
            <item.icon size={24} />
          </Link>
        ))}
      </div>
    </nav>
  )
}
