"use client"

import { Sparkles, Users, Shield, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Connect Authentically",
      description: "Build meaningful relationships with people who share your interests and values",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Express Yourself",
      description: "Share your story, creative work, and thoughts in a space that feels truly yours",
    },
    {
      icon: <Shield size={32} />,
      title: "Privacy Focused",
      description: "You control what you share and with whom. Your data, your choice",
    },
    {
      icon: <Zap size={32} />,
      title: "Discover Communities",
      description: "Join vibrant communities aligned with your passions and interests",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-[var(--color-bg-secondary)]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Circlo Stands Out</h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            We've reimagined social media from the ground up, focusing on what matters most: real connections
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors group"
            >
              <div className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[var(--color-text-tertiary)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
