"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scissors, User, Settings } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/i18n"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const handleReservation = () => {
    scrollToSection("contacto")
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold text-primary">{t.hero.title}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleReservation}>
              {t.hero.bookAppointment}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {t.nav.contact}
            </button>
            <div className="border-t border-border pt-2">
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleReservation}
                >
                  {t.hero.bookAppointment}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
