"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  {
    src: "/old/antalya-sunset.jpg",
    alt: "Antalya Sunset",
    title: "Antalya Sunset",
    description: "Beautiful sunset over the Mediterranean",
    size: "large"
  },
  {
    src: "/old/art-soft.jpg",
    alt: "Soft Art",
    title: "Soft Art",
    description: "Gentle artistic expression",
    size: "medium"
  },
  {
    src: "/old/children.jpg",
    alt: "Children",
    title: "Children",
    description: "Innocence and joy",
    size: "medium"
  },
  {
    src: "/old/horse-soft.jpg",
    alt: "Soft Horse",
    title: "Soft Horse",
    description: "Gentle equine beauty",
    size: "small"
  },
  {
    src: "/old/butterflies.webp",
    alt: "Butterflies",
    title: "Butterflies",
    description: "Freedom and transformation",
    size: "small"
  },
  {
    src: "/old/shining.jpg",
    alt: "Shining",
    title: "Shining",
    description: "Light and brilliance",
    size: "large"
  }
]

export function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Visual Gallery
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore a curated collection of artistic moments and visual stories
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                image.size === "large" ? "md:col-span-2 md:row-span-2" :
                image.size === "medium" ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  )
}
