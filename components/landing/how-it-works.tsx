"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in seconds and set up your digital presence",
    },
    {
      number: "02",
      title: "Build Your Profile",
      description: "Customize your profile to showcase who you really are",
    },
    {
      number: "03",
      title: "Discover & Connect",
      description: "Find communities and people that resonate with you",
    },
    {
      number: "04",
      title: "Share & Engage",
      description: "Share your thoughts and engage with meaningful conversations",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-[var(--color-bg-secondary)]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent"></div>
              )}

              <div className="p-6 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[var(--color-text-tertiary)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
