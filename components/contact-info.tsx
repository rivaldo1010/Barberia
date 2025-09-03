"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { ContactInfo as ContactInfoType } from "@/lib/contact"

interface ContactInfoProps {
  contactInfo: ContactInfoType | null
}

export function ContactInfo({ contactInfo }: ContactInfoProps) {
  const handleEmail = () => {
    if (contactInfo?.email) {
      window.open(`mailto:${contactInfo.email}`, "_self")
    }
  }

  const handleDirections = () => {
    if (contactInfo?.address) {
      const encodedAddress = encodeURIComponent(contactInfo.address)
      window.open(`https://maps.google.com/?q=${encodedAddress}`, "_blank")
    }
  }

  const handleWhatsApp = () => {
    if (contactInfo?.whatsapp) {
      window.open(`https://wa.me/${contactInfo.whatsapp}`, "_blank")
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-primary">
          {contactInfo?.business_name || "Información de Contacto"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactInfo?.address && (
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-foreground font-medium">Dirección</p>
              <p className="text-muted-foreground">{contactInfo.address}</p>
              <Button variant="link" className="p-0 h-auto text-primary" onClick={handleDirections}>
                Ver en Google Maps
              </Button>
            </div>
          </div>
        )}

        {contactInfo?.phone && (
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-foreground font-medium">WhatsApp</p>
              <p className="text-muted-foreground">{contactInfo.phone}</p>
              <Button variant="link" className="p-0 h-auto text-primary" onClick={handleWhatsApp}>
                Chatear por WhatsApp
              </Button>
            </div>
          </div>
        )}

        {contactInfo?.email && (
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-foreground font-medium">Email</p>
              <p className="text-muted-foreground">{contactInfo.email}</p>
              <Button variant="link" className="p-0 h-auto text-primary" onClick={handleEmail}>
                Enviar email
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-foreground font-medium">Horarios</p>
            <p className="text-muted-foreground">Consulta nuestros horarios de atención</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" onClick={handleWhatsApp}>
            Reservar Cita Ahora
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}