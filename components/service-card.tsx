"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Euro, Scissors, Star } from "lucide-react"
import type { Service } from "@/lib/services"

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
        featured ? "ring-2 ring-primary/50 scale-105" : "hover:scale-105"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          <Star className="h-3 w-3 mr-1" />
          Popular
        </Badge>
      )}

      <div className="relative">
        {service.image_url ? (
          <img
            src={service.image_url || "/placeholder.svg"}
            alt={service.name}
            className={`w-full h-56 object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <div
            className={`w-full h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center transition-colors duration-300 ${
              isHovered ? "from-primary/20 to-primary/10" : ""
            }`}
          >
            <Scissors className="h-16 w-16 text-primary/60" />
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              Ver Detalles
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {service.name}
          </h3>
          <div className="flex items-center text-primary font-bold text-xl">
            <Euro className="h-5 w-5 mr-1" />
            {service.price.toFixed(2)}
          </div>
        </div>

        {service.description && (
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">{service.description}</p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          {service.duration && (
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="h-4 w-4 mr-2" />
              {service.duration} minutos
            </div>
          )}

          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Reservar Ahora
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
