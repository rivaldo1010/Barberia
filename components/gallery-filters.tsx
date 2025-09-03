"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", label: "Todos", count: 12 },
  { id: "cortes", label: "Cortes", count: 5 },
  { id: "barbas", label: "Barbas", count: 3 },
  { id: "salon", label: "Salón", count: 2 },
  { id: "general", label: "General", count: 2 },
]

interface GalleryFiltersProps {
  onFilterChange?: (filter: string) => void
}

export function GalleryFilters({ onFilterChange }: GalleryFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? "default" : "outline"}
          onClick={() => handleFilterChange(category.id)}
          className={`relative transition-all duration-300 ${
            activeFilter === category.id
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "border-border hover:border-primary/50 hover:bg-primary/10"
          }`}
        >
          {category.label}
          {category.count > 0 && (
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  )
}
