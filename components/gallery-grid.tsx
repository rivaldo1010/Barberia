"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Star } from "lucide-react"
import type { GalleryImage } from "@/lib/gallery"

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Eye className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">No hay imágenes disponibles</h3>
        <p className="text-muted-foreground">
          Las imágenes de la galería se mostrarán aquí una vez que estén configuradas.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <ScrollAnimation key={image.id} animation="fade-up" delay={index * 100}>
            <Card className="group relative overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              {image.is_featured && (
                <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Destacado
                </Badge>
              )}

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.image_url || "/placeholder.svg?height=400&width=400"}
                  alt={image.alt_text || image.title || "Imagen de galería"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onClick={() => openLightbox(image, index)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-primary-foreground rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>

                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    {image.description && <p className="text-xs text-white/80 line-clamp-2">{image.description}</p>}
                  </div>
                )}
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      {selectedImage && (
        <GalleryLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}
