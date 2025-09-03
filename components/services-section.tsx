"use client"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Euro, Scissors } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

export function ServicesSection() {
  const t = useTranslations()

  return (
    <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cinematic text-balance">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </ScrollAnimation>

        <ServicesGrid />

        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 text-primary text-balance">
                {t.services.title === "Nuestros Servicios" ? "¿Necesitas algo especial?" : "Need something special?"}
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                {t.services.title === "Nuestros Servicios"
                  ? "Ofrecemos servicios personalizados según tus necesidades. Contáctanos para consultar disponibilidad y precios."
                  : "We offer personalized services according to your needs. Contact us to check availability and prices."}
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                {t.services.title === "Nuestros Servicios"
                  ? "Consultar Servicio Personalizado"
                  : "Consult Custom Service"}
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

function ServicesGrid() {
  const t = useTranslations()
  const services = [
    {
      id: 1,
      name: t.services.title === "Nuestros Servicios" ? "Corte Clásico" : "Classic Cut",
      description:
        t.services.title === "Nuestros Servicios"
          ? "Corte tradicional con técnicas modernas"
          : "Traditional cut with modern techniques",
      price: 25,
      duration: 45,
      image_url: "/modern-haircut-barbershop.png",
      popular: true,
    },
    {
      id: 2,
      name: t.services.title === "Nuestros Servicios" ? "Afeitado Premium" : "Premium Shave",
      description:
        t.services.title === "Nuestros Servicios"
          ? "Afeitado con navaja y tratamiento facial"
          : "Razor shave with facial treatment",
      price: 35,
      duration: 60,
      image_url: "/classic-shave-barbershop.png",
      premium: true,
    },
    {
      id: 3,
      name: t.services.title === "Nuestros Servicios" ? "Corte + Barba" : "Cut + Beard",
      description:
        t.services.title === "Nuestros Servicios"
          ? "Servicio completo de corte y arreglo de barba"
          : "Complete cut and beard grooming service",
      price: 40,
      duration: 75,
      image_url: "/vintage-haircut-style.png",
      popular: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <ScrollAnimation key={service.id} animation="fade-up" delay={index * 200}>
          <Card className="group bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden h-full">
            <div className="relative">
              {service.image_url ? (
                <img
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-colors duration-300">
                  <Scissors className="h-12 w-12 text-primary/60" />
                </div>
              )}

              {service.popular && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  {t.services.popular}
                </div>
              )}
              {service.premium && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {t.services.premium}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors duration-200 text-balance">
                  {service.name}
                </h3>
                <div className="flex items-center text-primary font-bold text-lg shrink-0 ml-2">
                  <Euro className="h-4 w-4 mr-1" />
                  {service.price}
                </div>
              </div>

              {service.description && (
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{service.description}</p>
              )}

              <div className="flex items-center justify-between mt-auto">
                {service.duration && (
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration} {t.services.duration.toLowerCase()}
                  </div>
                )}

                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 ml-auto">
                  {t.services.title === "Nuestros Servicios" ? "Reservar" : "Book"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      ))}
    </div>
  )
}
