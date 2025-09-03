"use client"

import { useState, useEffect } from "react"
import { getGalleryImages } from "@/lib/gallery"
import { ScrollAnimation } from "@/components/scroll-animations"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryFilters } from "@/components/gallery-filters"
import type { GalleryImage } from "@/lib/gallery"

export function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([])
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const loadImages = async () => {
      const galleryImages = await getGalleryImages()
      setImages(galleryImages)
      setFilteredImages(galleryImages)
    }
    loadImages()
  }, [])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    if (filter === "all") {
      setFilteredImages(images)
    } else {
      const filtered = images.filter((image) => image.category === filter)
      setFilteredImages(filtered)
    }
  }

  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-cinematic">Galería</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nuestros mejores trabajos y el ambiente único de nuestro salón
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <GalleryFilters onFilterChange={handleFilterChange} />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400}>
          <GalleryGrid images={filteredImages} />
        </ScrollAnimation>
      </div>
    </section>
  )
}
