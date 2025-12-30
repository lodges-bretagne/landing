import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  theme?: 'blue' | 'green'
}

const Navbar = ({ theme }: NavbarProps) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

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
                Accueil
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
              Blue Lodge
            </Link>
            <Link
              to="/green-lodge"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/green-lodge'
                  ? 'bg-white/30'
                  : 'hover:bg-white/20'
              }`}
            >
              Green Lodge
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

