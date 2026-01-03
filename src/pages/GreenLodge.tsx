import Hero from '../components/Hero'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import ImageGallery from '../components/ImageGallery'
import { contactInfo, getAirbnbUrl } from '../config/contact'
import {
  Wifi,
  Car,
  Waves,
  UtensilsCrossed,
  Home,
  Sun,
  Bike,
  Bed,
  Droplets,
  MapPin,
  Users,
  Ship,
  Mountain,
  Camera,
} from 'lucide-react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.BASE_URL
const greenLodgeImages = [
  `${baseUrl}images/green-lodge/04133bb1-88e8-4911-bc55-aafd17ee01c9.jpeg`,
  `${baseUrl}images/green-lodge/05335f5c-41ac-4fd3-a5ac-05f0d94b787c.avif`,
  `${baseUrl}images/green-lodge/0c11e9fd-266b-400f-9699-5bd93c9e4ce3.jpeg`,
  `${baseUrl}images/green-lodge/1074e02a-1e90-4ebc-b73e-247480ba5da9.avif`,
  `${baseUrl}images/green-lodge/1d804532-df9d-444b-a536-ee0bdf29001d.avif`,
  `${baseUrl}images/green-lodge/20ce393e-b7eb-49e1-8fda-c8fba5b50b77.avif`,
  `${baseUrl}images/green-lodge/23973d59-f050-432e-ad44-6a9c20fd6b96.avif`,
  `${baseUrl}images/green-lodge/30eb8fa2-462a-4732-a2c4-9ae7f4992665.avif`,
  `${baseUrl}images/green-lodge/34d71683-fd7e-48d1-b05b-8848ff507434.avif`,
  `${baseUrl}images/green-lodge/520a41f5-e82d-498a-865f-1394e366c103.avif`,
  `${baseUrl}images/green-lodge/6d622e8b-e472-47b5-b180-7feba3b071bb.jpeg`,
  `${baseUrl}images/green-lodge/73eede10-9173-4acc-8654-55517db1d136.avif`,
  `${baseUrl}images/green-lodge/7a7f9d38-dd3a-4786-8306-04618ec01e9b.avif`,
  `${baseUrl}images/green-lodge/86d4927a-b695-48d2-9858-2a5d9b46d097.avif`,
  `${baseUrl}images/green-lodge/999b7c5e-7cd4-49d4-af11-91fcde279f4b.avif`,
  `${baseUrl}images/green-lodge/9c48b808-4566-4535-b816-81d1cb9860bf.avif`,
  `${baseUrl}images/green-lodge/c7e60d7c-c115-4594-9db3-da0949a896d5.avif`,
  `${baseUrl}images/green-lodge/c83ea8ed-2c50-480a-8c71-ac070d69a58a.avif`,
  `${baseUrl}images/green-lodge/da562d31-ffb3-42f2-8b1d-619db160b74a.avif`,
  `${baseUrl}images/green-lodge/fb612a86-3a18-4ce8-a9bb-46ac9f244b8f.avif`,
]

const greenLodgeHeroImage = greenLodgeImages[0]

const GreenLodge = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar theme="green" />
      <Hero
        title="Green Lodge"
        subtitle="Maison de charme bord de mer côté Dinard"
        theme="green"
        phone={contactInfo.phone}
        email={contactInfo.email}
        backgroundImage={greenLodgeHeroImage}
        airbnbUrl={getAirbnbUrl(contactInfo.airbnb.greenLodge)}
      />

      <Section id="photos" className="bg-gradient-to-b from-green-lodge-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-lodge-100 mb-4">
              <Camera className="text-green-lodge-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Découvrez Green Lodge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une maison authentique au charme breton
            </p>
          </motion.div>
          <ImageGallery images={greenLodgeImages} theme="green" />
        </div>
      </Section>

      <Section id="description" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Posez vos valises et profitez
            </h2>
            <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto leading-relaxed">
              Les lits seront faits à votre arrivée.
            </p>
            <div className="bg-gradient-to-r from-green-lodge-50 to-green-lodge-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Maison en pierre <strong>CLASSÉE 2 étoiles</strong>. Entièrement rénovée, elle est équipée de toutes les commodités, 
                de la WIFI et d'un joli petit jardin plein SUD pour vos repas au calme en famille ou entre amis.
              </p>
              <div className="space-y-4 pt-6 border-t border-green-lodge-200">
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <Waves className="text-green-lodge-600" size={24} />
                  <strong>Mer et GR34 à 950m à pied</strong>
                </p>
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <UtensilsCrossed className="text-green-lodge-600" size={24} />
                  <strong>Commerces et restaurants à 4mn</strong>
                </p>
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <MapPin className="text-green-lodge-600" size={24} />
                  <strong>Situé côté DINARD (5km)</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="bg-gradient-to-b from-white to-green-lodge-50/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Équipements & Prestations
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Wifi}
            title="WiFi gratuit"
            description="Connexion internet haut débit incluse"
            theme="green"
            delay={0}
          />
          <FeatureCard
            icon={Bed}
            title="Draps de lits inclus"
            description="Les lits seront faits à votre arrivée"
            theme="green"
            delay={0.1}
          />
          <FeatureCard
            icon={Droplets}
            title="Serviette douche"
            description="Serviette fournie pour votre confort"
            theme="green"
            delay={0.2}
          />
          <FeatureCard
            icon={Car}
            title="Parking privé"
            description="Place parking gravillonnée pour une voiture ou deux motos"
            theme="green"
            delay={0.3}
          />
          <FeatureCard
            icon={Sun}
            title="Jardin 100m²"
            description="Jardin plein SUD avec terrasse meublée et barbecue Weber"
            theme="green"
            delay={0.4}
          />
          <FeatureCard
            icon={Users}
            title="Jusqu'à 5 personnes"
            description="Maison de 85m² avec 3 chambres"
            theme="green"
            delay={0.5}
          />
        </div>
      </Section>

      <Section id="logement" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Le logement
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-lodge-50 rounded-xl p-8 border-2 border-green-lodge-200 mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <Home className="text-green-lodge-600" size={28} />
              Maison authentique de pêcheur de 85m²
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Cette charmante maison en pierre, classée 2 étoiles, vous accueille dans un cadre authentique et chaleureux. 
                Entièrement rénovée avec soin, elle conserve tout le charme de son histoire de maison de pêcheur tout en offrant 
                tout le confort moderne nécessaire à un séjour agréable.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">REZ-DE-CHAUSSÉE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Home className="text-green-lodge-600" size={24} />
                    Grand salon / Salle à manger
                  </h4>
                  <p className="text-gray-700">46m² avec cuisine toute équipée</p>
                  <p className="text-gray-700 mt-2">WC séparé</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <UtensilsCrossed className="text-green-lodge-600" size={24} />
                    Cuisine équipée
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Lave vaisselle, lave linge</li>
                    <li>• Micro onde, four</li>
                    <li>• Frigo-congélateur neuf</li>
                    <li>• Cafetière Nespresso</li>
                    <li>• Bouilloire, appareil à raclette</li>
                    <li>• Sel/Poivre, Huile/Vinaigre inclus</li>
                    <li>• Produits d'entretien inclus</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ÉTAGE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Bed className="text-green-lodge-600" size={24} />
                    3 Chambres
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>1ère chambre :</strong> Lit 140 / 2 personnes + grand placard</li>
                    <li><strong>2ème chambre :</strong> Lit 140 / 2 personnes + grand placard</li>
                    <li><strong>3ème chambre :</strong> Lit 90 / 1 personne + grand placard</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Note :</strong> En dessous de 5 voyageurs, la troisième chambre restera fermée.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Droplets className="text-green-lodge-600" size={24} />
                    Salle de bain
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Salle de bain avec douche neuve</li>
                    <li>• WC séparé</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 border-2 border-green-lodge-200"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Sun className="text-green-lodge-600" size={24} />
                EXTÉRIEUR
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Jardin de 100m² avec terrasse meublée</li>
                <li>• Barbecue Weber</li>
                <li>• Place parking gravillonnée pour UNE voiture ou DEUX motos</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="loisirs" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Loisirs & Activités
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 border-2 border-green-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Waves className="text-green-lodge-600" size={28} />
                Activités nautiques
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Ship className="text-green-lodge-500 mt-1" size={20} />
                  <span>Voile, kayak, paddle - Cale de mise à l'eau et École de Voile à la Richardais (2km)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ship className="text-green-lodge-500 mt-1" size={20} />
                  <span>Traversée Dinard/Saint Malo en BATEAU-NAVETTE (10mn)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 border-2 border-green-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-green-lodge-600" size={28} />
                À proximité
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>Saint Malo</strong> à 10mn (barrage de la Rance à 5mn)</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>Saint Briac, Lancieux</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>Cap Fréhel, Fort La Latte, Cancale</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Bike className="text-green-lodge-500 mt-1" size={20} />
                  <span>Location vélo possible à Dinard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="text-green-lodge-500 mt-1" size={20} />
                  <span>Superbe Golf de SAINT BRIAC (vue mer 10km)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="tarifs" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Tarifs & Conditions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-lodge-50 rounded-xl p-8 border-2 border-green-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Inclus dans le prix
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>Draps de lits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>Serviette douche</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>WiFi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>Parking privé</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>Produits entretien, torchons</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-lodge-600">✓</span>
                  <span>Chauffage automne et hiver uniquement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Non inclus (payable à l'arrivée)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span><strong>Ménage 60€</strong> (la maison doit être laissée propre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span><strong>Ménage complet 120€</strong> si vous ne souhaitez pas faire le ménage du tout (merci de prévenir et de régler à votre arrivée)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span><strong>Chauffage printemps/été</strong>: 0,20€ du Kilowatt/heure (relevé de compteur à votre arrivée)</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Nombre de voyageurs :</strong> Maximum 5 personnes
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Pour les réservations de 3 ou 4 voyageurs, seules 2 chambres seront ouvertes. 
                  La troisième chambre est réservée pour les réservations de 5 voyageurs.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location :</strong> Du samedi au samedi en juillet/août
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Maison avec cheminée. Pare-feu obligatoire, bûches non fournies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="acces" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Accès & Itinéraire
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border-2 border-green-lodge-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment nous trouver
            </h3>
            <p className="text-gray-700 mb-4">
              Si vous arrivez de Saint Malo, traversez le barrage de la Rance et prenez de suite à droite 
              direction la RICHARDAIS, juste avant le MINIHIC SUR RANCE tourner à droite vers le lieu dit 
              "SAINT ANTOINE", vous êtes arrivés.
            </p>
            <div className="bg-green-lodge-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700">
                <strong>Parking :</strong> Un parking gravillonné a été aménagé pour UNE voiture dans le jardin, 
                une deuxième voiture peut stationner dans la rue le long de la haie.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Grand portail coulissant</strong>, merci de le fermer avec douceur.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <ContactSection
        theme="green"
        phone={contactInfo.phone}
        email={contactInfo.email}
        airbnbUrl={getAirbnbUrl(contactInfo.airbnb.greenLodge)}
        address="Dinard, Bretagne"
      />
    </div>
  )
}

export default GreenLodge

