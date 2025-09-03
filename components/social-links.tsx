"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, MessageCircle, Share2 } from "lucide-react"
import type { ContactInfo } from "@/lib/contact"

interface SocialLinksProps {
  contactInfo: ContactInfo | null
}

export function SocialLinks({ contactInfo }: SocialLinksProps) {
  const handleInstagram = () => {
    if (contactInfo?.instagram) {
      const username = contactInfo.instagram ? contactInfo.instagram.replace("@", "") : ""
      if (username) {
        window.open(`https://www.instagram.com/rival_200418?igsh=MWt6aW8yc3YzcTJlbQ==`, "_blank")
      }
    }
  }

  const handleFacebook = () => {
    if (contactInfo?.facebook) {
      const username = contactInfo.facebook ? contactInfo.facebook.replace("facebook.com/", "") : ""
      if (username) {
        window.open(`https://www.facebook.com/sj.rivaldo`, "_blank")
      }
    }
  }

  const handleWhatsApp = () => {
    if (contactInfo?.whatsapp) {
      const phone = contactInfo.whatsapp ? contactInfo.whatsapp.replace(/\s+/g, "") : ""
      if (phone) {
        const message = encodeURIComponent("Hola, me gustaría reservar una cita en la barbería.")
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
      }
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactInfo?.business_name || "Barbería Moderna",
          text: "Descubre la mejor barbería de la ciudad",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Enlace copiado al portapapeles")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-heading text-primary flex items-center">
          <Share2 className="h-5 w-5 mr-2" />
          Síguenos y Comparte
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {contactInfo?.whatsapp && (
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-green-50 hover:border-green-200 hover:text-green-700 bg-transparent"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5 mr-3 text-green-600" />
              <div className="text-left">
                <div className="font-medium">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Reserva por mensaje directo</div>
              </div>
            </Button>
          )}

          {contactInfo?.instagram && (
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-pink-50 hover:border-pink-200 hover:text-pink-700 bg-transparent"
              onClick={handleInstagram}
            >
              <Instagram className="h-5 w-5 mr-3 text-pink-600" />
              <div className="text-left">
                <div className="font-medium">Instagram</div>
                <div className="text-xs text-muted-foreground">{contactInfo.instagram}</div>
              </div>
            </Button>
          )}

          {contactInfo?.facebook && (
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 bg-transparent"
              onClick={handleFacebook}
            >
              <Facebook className="h-5 w-5 mr-3 text-blue-600" />
              <div className="text-left">
                <div className="font-medium">Facebook</div>
                <div className="text-xs text-muted-foreground">Síguenos para novedades</div>
              </div>
            </Button>
          )}
        </div>

        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full bg-transparent" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Compartir Barbería
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¡Síguenos en redes sociales para ver nuestros últimos trabajos y ofertas especiales!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
