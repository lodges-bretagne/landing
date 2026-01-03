import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface HeroProps {
  title: string
  subtitle: string
  theme: 'blue' | 'green'
  phone?: string
  email?: string
  backgroundImage?: string
  airbnbUrl?: string
}

const Hero = ({ title, subtitle, theme, phone, email, backgroundImage, airbnbUrl }: HeroProps) => {
  const { t } = useLanguage()
  const themeColors = {
    blue: {
      gradient: 'from-blue-lodge-600 via-blue-lodge-500 to-blue-lodge-400',
      button: 'bg-blue-lodge-600 hover:bg-blue-lodge-700',
      text: 'text-blue-lodge-50',
    },
    green: {
      gradient: 'from-green-lodge-600 via-green-lodge-500 to-green-lodge-400',
      button: 'bg-green-lodge-600 hover:bg-green-lodge-700',
      text: 'text-green-lodge-50',
    },
  }

  const colors = themeColors[theme]

  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br ${colors.gradient} overflow-hidden`}>
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {theme === 'blue' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-lodge-900/75 via-blue-lodge-800/65 to-blue-lodge-700/75"></div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-green-lodge-900/75 via-green-lodge-800/65 to-green-lodge-700/75"></div>
          )}
          <div className="absolute inset-0 bg-black/30"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMTAtMTBjMCAyLjIwOS0xLjc5MSA0LTQgNHMtNC0xLjc5MS00LTQgMS43OTEtNCA0LTQgNCAxLjc5MSA0IDR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance opacity-90 drop-shadow-md">
            {subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-balance opacity-85 drop-shadow-sm">
            {t.hero.contactUs}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            {phone && (
              <motion.a
                href={`tel:${phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.button} text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all`}
              >
                <Phone size={20} />
                {t.hero.callUs} {phone}
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-white/30 hover:bg-white/30 transition-all"
              >
                <Mail size={20} />
                {t.hero.emailUs}
              </motion.a>
            )}
          </div>
          
          {airbnbUrl && (
            <div className="mt-6">
              <a
                href={airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-sm underline transition-colors"
              >
                {t.hero.seeOnAirbnb}
              </a>
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

