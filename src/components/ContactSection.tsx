import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, ExternalLink } from 'lucide-react'

interface ContactSectionProps {
  theme: 'blue' | 'green'
  phone?: string
  email?: string
  address?: string
  airbnbUrl?: string
}

const ContactSection = ({ theme, phone, email, address, airbnbUrl }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const themeColors = {
    blue: {
      button: 'bg-blue-lodge-600 hover:bg-blue-lodge-700',
      input: 'border-blue-lodge-300 focus:border-blue-lodge-500 focus:ring-blue-lodge-500',
    },
    green: {
      button: 'bg-green-lodge-600 hover:bg-green-lodge-700',
      input: 'border-green-lodge-300 focus:border-green-lodge-500 focus:ring-green-lodge-500',
    },
  }

  const colors = themeColors[theme]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const sectionBg = theme === 'blue' ? 'bg-gradient-to-b from-blue-lodge-50 to-gray-50' : 'bg-gradient-to-b from-green-lodge-50 to-gray-50'

  return (
    <section className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Contactez-nous directement
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Appelez-nous ou envoyez-nous un email pour réserver ou obtenir des informations
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
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
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
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
                  <div className="flex items-start gap-3 text-gray-700">
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
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${colors.input} focus:outline-none focus:ring-2 transition-all`}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${colors.input} focus:outline-none focus:ring-2 transition-all`}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${colors.input} focus:outline-none focus:ring-2 transition-all resize-none`}
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className={`w-full ${colors.button} text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50`}
              >
                {submitted ? (
                  <>
                    <span>Message envoyé !</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

