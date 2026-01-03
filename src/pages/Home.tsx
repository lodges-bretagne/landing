import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const baseUrl = import.meta.env.BASE_URL

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Bienvenue dans nos lodges
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos hébergements de charme à Saint-Malo et Dinard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Link to="/blue-lodge">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-blue-lodge-100">
                <div 
                  className="h-64 bg-cover bg-center flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundImage: `url('${baseUrl}images/blue-lodge/6c294cc8-0672-4fd1-b71f-346f18617562.avif')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-lodge-900/70 via-blue-lodge-800/60 to-blue-lodge-700/70"></div>
                  <div className="text-white text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      Blue Lodge
                    </h2>
                    <p className="text-blue-lodge-100 text-lg">Saint-Malo</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Charmant 2 pièces bord de mer
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Appartement de 42m² avec jardin privé de 110m², proche de la plage du Sillon
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <Link to="/green-lodge">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-green-lodge-100">
                <div 
                  className="h-64 bg-cover bg-center flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundImage: `url('${baseUrl}images/green-lodge/04133bb1-88e8-4911-bc55-aafd17ee01c9.jpeg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-lodge-900/70 via-green-lodge-800/60 to-green-lodge-700/70"></div>
                  <div className="text-white text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      Green Lodge
                    </h2>
                    <p className="text-green-lodge-100 text-lg">Dinard</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Maison de charme bord de mer
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maison authentique de 85m² avec jardin, classée 2 étoiles, côté Dinard
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home

