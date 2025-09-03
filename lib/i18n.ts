"use client"

export interface Translations {
  nav: {
    home: string
    services: string
    gallery: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    viewServices: string
    bookAppointment: string
  }
  services: {
    title: string
    subtitle: string
    duration: string
    price: string
    popular: string
    premium: string
  }
  gallery: {
    title: string
    subtitle: string
    all: string
    haircuts: string
    beards: string
    salon: string
    general: string
  }
  contact: {
    title: string
    subtitle: string
    phone: string
    email: string
    address: string
    hours: string
    open: string
    closed: string
    sendMessage: string
    name: string
    message: string
    send: string
    whatsapp: string
    instagram: string
    facebook: string
  },
  days: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
}

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      contact: "Contacto",
    },
    hero: {
      title: "Barbería Moderna",
      subtitle: "Donde la tradición se encuentra con el estilo moderno.",
      description: "Experimenta el arte del cuidado masculino en su máxima expresión.",
      viewServices: "Ver Servicios",
      bookAppointment: "Reservar Cita",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Servicios profesionales de barbería con técnicas modernas y tradicionales",
      duration: "Duración",
      price: "Precio",
      popular: "Popular",
      premium: "Premium",
    },
    gallery: {
      title: "Nuestra Galería",
      subtitle: "Descubre nuestros trabajos y el ambiente de nuestra barbería",
      all: "Todos",
      haircuts: "Cortes",
      beards: "Barbas",
      salon: "Salón",
      general: "General",
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para atenderte. Reserva tu cita hoy mismo.",
      phone: "Teléfono",
      email: "Email",
      address: "Dirección",
      hours: "Horarios",
      open: "Abierto",
      closed: "Cerrado",
      sendMessage: "Enviar Mensaje",
      name: "Nombre",
      message: "Mensaje",
      send: "Enviar",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
    },

    days: {
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      title: "Modern Barbershop",
      subtitle: "Where tradition meets modern style.",
      description: "Experience the art of masculine grooming at its finest.",
      viewServices: "View Services",
      bookAppointment: "Book Appointment",
    },
    services: {
      title: "Our Services",
      subtitle: "Professional barbershop services with modern and traditional techniques",
      duration: "Duration",
      price: "Price",
      popular: "Popular",
      premium: "Premium",
    },
    gallery: {
      title: "Our Gallery",
      subtitle: "Discover our work and the atmosphere of our barbershop",
      all: "All",
      haircuts: "Haircuts",
      beards: "Beards",
      salon: "Salon",
      general: "General",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to serve you. Book your appointment today.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Hours",
      open: "Open",
      closed: "Closed",
      sendMessage: "Send Message",
      name: "Name",
      message: "Message",
      send: "Send",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
    },

    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
  },
}

export function detectLanguage(): string {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.split("-")[0]
    return translations[browserLang] ? browserLang : "es"
  }
  return "es"
}

export function useTranslations() {
  const lang = detectLanguage()
  return translations[lang]
}
