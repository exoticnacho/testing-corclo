"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">Circlo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#features"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Features
          </a>
          <a
            href="#why-join"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Why Join
          </a>
          <a
            href="#how-it-works"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#community"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Community
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="px-6 py-2 text-[var(--color-text-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[var(--color-text-primary)]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-4 py-4 space-y-2">
          <a
            href="#features"
            className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Features
          </a>
          <a
            href="#why-join"
            className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Why Join
          </a>
          <a
            href="#how-it-works"
            className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            How It Works
          </a>
          <a
            href="#community"
            className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Community
          </a>
          <div className="pt-4 space-y-2 border-t border-[var(--color-border)]">
            <Link
              href="/login"
              className="block text-center py-2 text-[var(--color-text-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/10"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block text-center py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
