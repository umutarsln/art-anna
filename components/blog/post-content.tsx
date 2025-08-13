"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <AnimatedCard>
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="prose prose-lg max-w-none">
            {content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="font-serif text-3xl font-bold text-gray-900 mb-6">
                    {paragraph.replace("# ", "")}
                  </h1>
                )
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="font-serif text-xl font-bold text-gray-900 mb-3 mt-6">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="text-gray-600 mb-2">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-gray-600 mb-2">
                    {paragraph.replace(/^\d+\.\s*/, "")}
                  </li>
                )
              }
              if (paragraph.trim() === "") {
                return <br key={index} />
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 