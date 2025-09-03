import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface OpeningHoursProps {
  openingHours: any
}

const defaultHours = {
  lunes: { open: "09:00", close: "20:00", closed: false },
  martes: { open: "09:00", close: "20:00", closed: false },
  miercoles: { open: "09:00", close: "20:00", closed: false },
  jueves: { open: "09:00", close: "20:00", closed: false },
  viernes: { open: "09:00", close: "21:00", closed: false },
  sabado: { open: "09:00", close: "19:00", closed: false },
  domingo: { open: "10:00", close: "18:00", closed: false },
}

const dayNames = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
  domingo: "Domingo",
}

export function OpeningHours({ openingHours }: OpeningHoursProps) {
  const hours = openingHours || defaultHours
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long" }).toLowerCase()

  const isToday = (day: string) => {
    return day === today
  }

  const isOpen = () => {
    const now = new Date()
    const currentTime = now.getHours() * 100 + now.getMinutes()
    const todayHours = hours[today]

    if (!todayHours || todayHours.closed) return false

    const openTime = todayHours.open ? Number.parseInt(todayHours.open.replace(":", "")) : 0
    const closeTime = todayHours.close ? Number.parseInt(todayHours.close.replace(":", "")) : 0

    return currentTime >= openTime && currentTime <= closeTime
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-heading text-primary flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Horarios de Atención
          </CardTitle>
          <Badge variant={isOpen() ? "default" : "secondary"} className="text-xs">
            {isOpen() ? "Abierto Ahora" : "Cerrado"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {Object.entries(hours).map(([day, schedule]: [string, any]) => (
            <div
              key={day}
              className={`flex justify-between items-center py-2 px-3 rounded-md transition-colors ${
                isToday(day) ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
              }`}
            >
              <span className={`font-medium ${isToday(day) ? "text-primary" : "text-foreground"}`}>
                {dayNames[day as keyof typeof dayNames]}
                {isToday(day) && <span className="text-xs ml-2 text-primary">(Hoy)</span>}
              </span>
              <span className="text-muted-foreground">
                {schedule.closed ? "Cerrado" : `${schedule.open} - ${schedule.close}`}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Nota:</strong> Los horarios pueden variar en días festivos. Te recomendamos llamar antes de tu
            visita.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
