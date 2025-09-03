export interface Service {
  id: string
  name: string
  description: string | null
  price: number
  duration: number | null
  category?: string
}

const staticServices: Service[] = [
  {
    id: "1",
    name: "Corte Clásico",
    description: "Corte tradicional con tijeras y máquina",
    price: 25.0,
    duration: 30,
    category: "cortes",
  },
  {
    id: "2",
    name: "Corte + Barba",
    description: "Corte completo con arreglo de barba",
    price: 35.0,
    duration: 45,
    category: "cortes",
  },
  {
    id: "3",
    name: "Afeitado Tradicional",
    description: "Afeitado con navaja y toalla caliente",
    price: 20.0,
    duration: 25,
    category: "afeitado",
  },
  {
    id: "4",
    name: "Corte Premium",
    description: "Corte personalizado con styling",
    price: 40.0,
    duration: 60,
    category: "premium",
  },
]

export async function getActiveServices(): Promise<Service[]> {
  return staticServices
}
