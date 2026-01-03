import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Globe } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  theme?: 'blue' | 'green'
}

const Navbar = ({ theme }: NavbarProps) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const themeColors = {
    blue: {
      bg: 'bg-blue-lodge-600',
      hover: 'hover:bg-blue-lodge-700',
    },
    green: {
      bg: 'bg-green-lodge-600',
      hover: 'hover:bg-green-lodge-700',
    },
  }

  const colors = theme ? themeColors[theme] : { bg: 'bg-gray-800', hover: 'hover:bg-gray-900' }

  const languages = [
    { code: 'fr' as const, label: 'FR', name: 'Français' },
    { code: 'en' as const, label: 'EN', name: 'English' },
    { code: 'es' as const, label: 'ES', name: 'Español' },
  ]

  return (
    <nav className={`${colors.bg} text-white shadow-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-bold text-lg">
          </div>
          
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                {t.nav.home}
              </Link>
            )}
            <Link
              to="/blue-lodge"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/blue-lodge'
                  ? 'bg-white/30'
                  : 'hover:bg-white/20'
              }`}
            >
              {t.nav.blueLodge}
            </Link>
            <Link
              to="/green-lodge"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/green-lodge'
                  ? 'bg-white/30'
                  : 'hover:bg-white/20'
              }`}
            >
              {t.nav.greenLodge}
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="px-3 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                aria-label="Select language"
              >
                <Globe size={18} />
                <span className="font-medium">{languages.find(l => l.code === language)?.label}</span>
              </button>
              
              {showLanguageMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowLanguageMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20 min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLanguageMenu(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                          language === lang.code ? 'bg-gray-50 font-semibold' : ''
                        }`}
                      >
                        <div className="text-gray-900">{lang.name}</div>
                        <div className="text-xs text-gray-500">{lang.label}</div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

