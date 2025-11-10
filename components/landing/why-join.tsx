"use client"

export default function WhyJoin() {
  return (
    <section id="why-join" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Quality Over Quantity</h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-6">
              Stop chasing likes and start building real connections. On Circlo, we measure success by meaningful
              interactions, not empty engagement metrics.
            </p>
            <p className="text-[var(--color-text-tertiary)]">
              Every feature is designed with authenticity in mind. Whether you're a creator, a thinker, or someone who
              simply wants to be heard.
            </p>
          </div>
          <div className="h-80 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-2xl border border-[var(--color-border)] flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">🤝</div>
              <p className="text-[var(--color-text-tertiary)]">Real Connections</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 rounded-2xl border border-[var(--color-border)] flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">🎨</div>
              <p className="text-[var(--color-text-tertiary)]">Creative Freedom</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Build Your Space</h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-6">
              Personalize your profile to reflect your unique style and identity. Your space should feel like home, not
              like everyone else's.
            </p>
            <p className="text-[var(--color-text-tertiary)]">
              From profile customization to community discovery, every tool is crafted to support your individual
              expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
