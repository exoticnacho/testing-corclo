// components/home/sidebar.tsx

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
    // Menggunakan custom class app-sidebar
    <aside className="app-sidebar">
      {/* Logo */}
      <Link href="/home" className="sidebar-logo-container">
        {/* Kelas di dalam div ini terlalu kompleks untuk dipindahkan. Biarkan sebagai inline styling dengan CSS variables */}
        <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl">Circlo</span>
      </Link>

      {/* Menu Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            // Menggunakan custom class sidebar-menu-item
            className="sidebar-menu-item group" 
          >
            {/* Menggunakan custom class sidebar-icon */}
            <item.icon size={20} className="sidebar-icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      {/* Menggunakan custom class sidebar-logout-button */}
      <button className="sidebar-logout-button">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  )
}