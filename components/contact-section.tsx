import { getContactInfo } from "@/lib/contact"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { OpeningHours } from "@/components/opening-hours"
import { SocialLinks } from "@/components/social-links"

export async function ContactSection() {
  const contactInfo = await getContactInfo()

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-cinematic">Contacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Visítanos o contáctanos para reservar tu cita. Estamos aquí para brindarte el mejor servicio
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ScrollAnimation animation="fade-left">
            <ContactInfo contactInfo={contactInfo} />
          </ScrollAnimation>

          <ScrollAnimation animation="fade-right">
            <ContactForm />
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <OpeningHours openingHours={contactInfo?.opening_hours} />
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <SocialLinks contactInfo={contactInfo} />
          </ScrollAnimation>
        </div>

        {contactInfo?.about_text && (
          <ScrollAnimation animation="fade-up" delay={600}>
            <div className="mt-12 text-center">
              <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-primary">Sobre Nosotros</h3>
                <p className="text-muted-foreground leading-relaxed">{contactInfo?.about_text}</p>
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  )
}
