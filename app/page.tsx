import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import Features from "@/components/landing/features"
import WhyJoin from "@/components/landing/why-join"
import HowItWorks from "@/components/landing/how-it-works"
import CommunityPreview from "@/components/landing/community-preview"
import Footer from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Features />
      <WhyJoin />
      <HowItWorks />
      <CommunityPreview />
      <Footer />
    </div>
  )
}
