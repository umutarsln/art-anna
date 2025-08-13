"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

interface RelatedPost {
  id: number
  title: string
  image: string
  slug: string
}

interface PostSidebarProps {
  likes: number
  comments: number
  relatedPosts: RelatedPost[]
}

export function PostSidebar({ likes, comments, relatedPosts }: PostSidebarProps) {
  const { t } = useLanguageStore()
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Blog Post",
          text: "Check out this blog post",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="sticky top-24 space-y-6">
      {/* Social Actions */}
      <AnimatedCard delay={0.2}>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">{t("blog.sidebar.likeTitle")}</h3>
            <div className="flex items-center gap-4">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={isLiked ? "bg-red-500 text-white" : "bg-white border-gray-200"}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {likesCount}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare} className="bg-white border-gray-200">
                <Share2 className="h-4 w-4 mr-2" />
                {t("blog.sidebar.share")}
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
              <MessageCircle className="h-4 w-4" />
              {comments} {t("blog.sidebar.comments")}
            </div>
          </CardContent>
        </Card>
      </AnimatedCard>

      {/* Related Posts */}
      <AnimatedCard delay={0.4}>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">{t("blog.sidebar.relatedPosts")}</h3>
            <div className="space-y-4">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedCard>
    </div>
  )
} 