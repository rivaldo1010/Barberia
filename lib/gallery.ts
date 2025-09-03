export interface GalleryImage {
  id: string
  title: string | null
  image_url: string
  category: string
  is_featured: boolean
}

const staticImages: GalleryImage[] = [
  {
    id: "1",
    title: "Corte Moderno",
    image_url: "/modern-haircut-barbershop.png",
    category: "cortes",
    is_featured: true,
  },
  {
    id: "2",
    title: "Afeitado Clásico",
    image_url: "/classic-shave-barbershop.png",
    category: "afeitado",
    is_featured: true,
  },
  {
    id: "3",
    title: "Interior Barbería",
    image_url: "/modern-barbershop.png",
    category: "local",
    is_featured: false,
  },
  {
    id: "4",
    title: "Estilo Vintage",
    image_url: "/vintage-haircut-style.png",
    category: "cortes",
    is_featured: false,
  },
]

export async function getGalleryImages(category?: string): Promise<GalleryImage[]> {
  if (category && category !== "all") {
    return staticImages.filter((img) => img.category === category)
  }
  return staticImages
}

export async function getFeaturedImages(): Promise<GalleryImage[]> {
  return staticImages.filter((img) => img.is_featured)
}
