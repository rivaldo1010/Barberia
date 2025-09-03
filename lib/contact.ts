import { ReactNode } from "react"

export interface ContactInfo {
  about_text: ReactNode
  id: string
  business_name: string
  address: string | null
  phone: string | null
  email: string | null
  instagram: string | null
  facebook: string | null
  whatsapp: string | null
  opening_hours: any
}

const staticContactInfo: ContactInfo = {
  id: "1",
  business_name: "Barbería Moderna",
  phone: "+5930963735413",
  email: "mirandasanty1989@gmail.com",
  address: "Calle Principal 123, Madrid",
  whatsapp: "+5930963735413",
  instagram: "@rival_200418",
  facebook: "sj.rivaldo",
  opening_hours: {
    lunes: { open: "09:00", close: "20:00", closed: false },
    martes: { open: "09:00", close: "20:00", closed: false },
    miercoles: { open: "09:00", close: "20:00", closed: false },
    jueves: { open: "09:00", close: "20:00", closed: false },
    viernes: { open: "09:00", close: "21:00", closed: false },
    sabado: { open: "09:00", close: "19:00", closed: false },
    domingo: { closed: true },
  },
  about_text: undefined
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  return staticContactInfo
}
