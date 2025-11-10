"use client"

export default function CommunityPreview() {
  const communities = [
    {
      name: "AI & Tech",
      description: "Explore the latest in AI, Machine Learning, and tech trends",
      icon: "🤖",
    },
    {
      name: "Design & Creativity",
      description: "Connect with creative minds and share your artistic work",
      icon: "🎨",
    },
    {
      name: "Startups & Business",
      description: "Discuss entrepreneurship and share startup journeys",
      icon: "💼",
    },
    {
      name: "Gaming",
      description: "Meet fellow gamers and discuss your favorite games",
      icon: "🎮",
    },
  ]

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Join Our Communities</h2>
        <p className="text-center text-[var(--color-text-secondary)] text-lg mb-16 max-w-2xl mx-auto">
          Find your people. Connect with communities that match your passions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{community.icon}</div>
              <h3 className="text-lg font-bold mb-2">{community.name}</h3>
              <p className="text-[var(--color-text-tertiary)] text-sm mb-4">{community.description}</p>
              <button className="w-full py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/20 transition-colors text-sm font-medium">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
