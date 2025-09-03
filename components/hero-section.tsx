"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToServices = () => {
    const element = document.getElementById("servicios")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleReservarCita = () => {
    const whatsappNumber = "+5930963735413" // Número de WhatsApp de la barbería
    const message =
      t.hero.bookAppointment === "Book Appointment"
        ? "Hello! I would like to book an appointment at the barbershop."
        : "Hola! Me gustaría reservar una cita en la barbería."
    const cleanNumber = whatsappNumber ? whatsappNumber.replace("+", "") : ""
    if (cleanNumber) {
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con efecto parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            <span className="text-cinematic block">{t.hero.title.split(" ")[0]}</span>
            <span className="text-foreground block">{t.hero.title.split(" ")[1]}</span>
          </h1>

          <p className="text-lg xs:text-xl sm:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 sm:mb-10 max-w-xl mx-auto text-pretty">
            {t.hero.description}
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
            <Button
              size="lg"
              className="w-full xs:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
              onClick={scrollToServices}
            >
              {t.hero.viewServices}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full xs:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105"
              onClick={handleReservarCita}
            >
              {t.hero.bookAppointment}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden xs:block">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
      </div>

      {/* Efecto de degradado en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
