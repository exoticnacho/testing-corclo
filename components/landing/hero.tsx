"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full">
          <span className="text-sm font-medium text-[var(--color-primary)]">Welcome to Circlo</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-pretty">
          Your Digital Identity,
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            {" "}
            Reimagined
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 text-pretty max-w-2xl mx-auto">
          Connect deeply, share freely, and be part of something real. Circlo is the social platform built for authentic
          connection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/signup"
            className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors flex items-center justify-center gap-2 group"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-primary)]/30 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors"
          >
            Already a member? Login
          </Link>
        </div>

        {/* Hero Image/Graphic */}
        <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--color-primary)]/20 to-[var(--color-bg-secondary)] border border-[var(--color-border)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full opacity-20 mx-auto mb-4"></div>
              <p className="text-[var(--color-text-tertiary)]">Your Social Space Awaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
