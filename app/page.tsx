import { HeroSection } from "@/components/hero-section"
import { FeaturedWorks } from "@/components/featured-works"
import { AboutPreview } from "@/components/about-preview"
import { LatestPosts } from "@/components/latest-posts"

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedWorks />
      <AboutPreview />
      <LatestPosts />
    </div>
  )
}
