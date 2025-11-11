// components/home/mobile-nav.tsx

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
    // Menggunakan custom class mobile-nav-bar
    <nav className="mobile-nav-bar"> 
      {/* Menggunakan custom class mobile-nav-list */}
      <div className="mobile-nav-list"> 
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            // Menggunakan custom class mobile-nav-link
            className="mobile-nav-link" 
          >
            <item.icon size={24} />
          </Link>
        ))}
      </div>
    </nav>
  )
}