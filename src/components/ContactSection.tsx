import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

interface ContactSectionProps {
  theme: 'blue' | 'green'
  phone?: string
  email?: string
  address?: string
  airbnbUrl?: string
}

const ContactSection = ({ theme, phone, email, address, airbnbUrl }: ContactSectionProps) => {
  const sectionBg = theme === 'blue' ? 'bg-gradient-to-b from-blue-lodge-50 to-gray-50' : 'bg-gradient-to-b from-green-lodge-50 to-gray-50'

  return (
    <section className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Contactez-nous directement
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Appelez-nous ou envoyez-nous un email pour réserver ou obtenir des informations
          </p>

          <div className="space-y-4">
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Phone size={20} className="text-gray-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-sm text-gray-600">{phone}</div>
                </div>
              </a>
            )}
            
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Mail size={20} className="text-gray-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">{email}</div>
                </div>
              </a>
            )}
            
            {address && (
              <div className="flex items-start gap-3 text-gray-700 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gray-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-sm text-gray-600">{address}</div>
                </div>
              </div>
            )}
            
            {airbnbUrl && (
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <ExternalLink size={18} className="text-gray-400" />
                  </div>
                  <span>Voir aussi sur Airbnb</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

