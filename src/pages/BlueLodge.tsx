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
  Waves as Beach,
  MapPin,
  Camera,
} from 'lucide-react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.BASE_URL
const blueLodgeImages = [
  `${baseUrl}images/blue-lodge/6c294cc8-0672-4fd1-b71f-346f18617562.avif`,
  `${baseUrl}images/blue-lodge/731956d4-a661-411b-943c-75e9036dd389.jpg`,
  `${baseUrl}images/blue-lodge/84e3bb21-339a-4fc7-9cb0-e7cf260b882e.jpg`,
  `${baseUrl}images/blue-lodge/a06c7762-3e4c-43c7-8ffa-1f88e3851ebb.avif`,
  `${baseUrl}images/blue-lodge/ce1fc7ae-dff3-4360-9a4c-9184ad18ac53.avif`,
  `${baseUrl}images/blue-lodge/dea4c6e0-e4f2-4c5c-a0a2-15c73d882dca.avif`,
  `${baseUrl}images/blue-lodge/f2607d51-f29c-4ee8-96c6-89e3e57a46fc.avif`,
  `${baseUrl}images/blue-lodge/fd196e17-a52d-4d0d-8f02-2212a6fb3547.avif`,
]

const blueLodgeHeroImage = blueLodgeImages[0]

const BlueLodge = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar theme="blue" />
      <Hero
        title="Blue Lodge"
        subtitle="Charmant 2 pièces à Saint-Malo, bord de mer"
        theme="blue"
        phone={contactInfo.phone}
        email={contactInfo.email}
        backgroundImage={blueLodgeHeroImage}
        airbnbUrl={getAirbnbUrl(contactInfo.airbnb.blueLodge)}
      />

      <Section id="photos" className="bg-gradient-to-b from-blue-lodge-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-lodge-100 mb-4">
              <Camera className="text-blue-lodge-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Découvrez Blue Lodge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un havre de paix au cœur de Saint-Malo
            </p>
          </motion.div>
          <ImageGallery images={blueLodgeImages} theme="blue" />
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
              Confort et calme assurés
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Le "BLUE LODGE" est idéal pour des vacances sereines au cœur de Saint Malo.
              Proche plage, commerces, restaurants et intra muros.
            </p>
            <div className="bg-gradient-to-r from-blue-lodge-50 to-blue-lodge-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 leading-relaxed">
                Vous serez séduits par ce beau 2 pièces de 42m² tout confort et très ensoleillé.
                Décoré avec passion, il est situé au 2ème et dernier étage et possède son jardin privé de 110m² en bas de la résidence.
                Sans vis à vis, grandes fenêtres, très lumineux, vue dégagée sur coucher de soleil.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="bg-gradient-to-b from-white to-blue-lodge-50/30">
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
            theme="blue"
            delay={0}
          />
          <FeatureCard
            icon={Bed}
            title="Draps inclus"
            description="Le lit sera fait à votre arrivée"
            theme="blue"
            delay={0.1}
          />
          <FeatureCard
            icon={Droplets}
            title="Serviette de douche"
            description="Serviette fournie pour votre confort"
            theme="blue"
            delay={0.2}
          />
          <FeatureCard
            icon={Car}
            title="Parking privé"
            description="Place de parking gratuite devant votre jardin"
            theme="blue"
            delay={0.3}
          />
          <FeatureCard
            icon={Bike}
            title="Box vélo/moto"
            description="Box fermé pour 2 vélos ou 1 moto"
            theme="blue"
            delay={0.4}
          />
          <FeatureCard
            icon={Sun}
            title="Jardin privé"
            description="Jardin de 110m² avec chaises, table et barbecue"
            theme="blue"
            delay={0.5}
          />
        </div>
      </Section>

      <Section id="logement" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Le logement
          </h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-lodge-50 rounded-xl p-8 border-2 border-blue-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Home className="text-blue-lodge-600" size={28} />
                Appartement de 42m²
              </h3>
              <p className="text-gray-700 mb-4">
                Deux pièces situé au cœur de Saint Malo et sa jolie PLAGE du sillon accessible à pieds en 20mn.
                Commerces et restaurant à 10MN à pieds.
              </p>
              <p className="text-gray-700">
                Exposition sud ouest, pièces baignées de soleil (grande fenêtre).
                Son jardin ensoleillé de 110m² est situé au pied de cette petite résidence Familiale (exclusivement réservé pour vous avec sa place parking PRIVÉE).
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Bed className="text-blue-lodge-600" size={24} />
                  Chambre
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chambre cocooning, bonne literie</li>
                  <li>• Matelas GRAND HOTEL</li>
                  <li>• Couette et oreillers "LENORMAND" de qualité</li>
                  <li>• Petit bureau</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Home className="text-blue-lodge-600" size={24} />
                  Salon / Salle à manger
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Télé écran plat</li>
                  <li>• Table à manger</li>
                  <li>• Canapé, fauteuil</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <UtensilsCrossed className="text-blue-lodge-600" size={24} />
                  Cuisine
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cuisine neuve, toute équipée</li>
                  <li>• Cafetière à piston BODUM</li>
                  <li>• Grille pain, four, micro ondes</li>
                  <li>• Table et chaises</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Droplets className="text-blue-lodge-600" size={24} />
                  Salle de bain
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Salle de bain 6m²</li>
                  <li>• Grande douche à l'italienne de 1m60</li>
                  <li>• Meuble vasque, WC</li>
                  <li>• Machine à laver + étendoir</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="localisation" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Localisation & Commodités
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 border-2 border-blue-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-lodge-600" size={28} />
                À proximité
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Beach className="text-blue-lodge-500 mt-1" size={20} />
                  <span><strong>Plage du Sillon</strong> "Plus belle plage de France" à 1300m</span>
                </li>
                <li className="flex items-start gap-2">
                  <UtensilsCrossed className="text-blue-lodge-500 mt-1" size={20} />
                  <span><strong>Boulangerie artisanale</strong>, commerces et restaurants à 600m</span>
                </li>
                <li className="flex items-start gap-2">
                  <Home className="text-blue-lodge-500 mt-1" size={20} />
                  <span><strong>Intra-Muros</strong>: 7mn en voiture / 14mn en vélo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bike className="text-blue-lodge-500 mt-1" size={20} />
                  <span><strong>Gare</strong>: 5mn en bus (arrêt bus au 50m de la résidence)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 border-2 border-blue-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Waves className="text-blue-lodge-600" size={28} />
                Accès
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>BOX fermé</strong> pour 2 vélos ou 1 moto.
                </p>
                <p>
                  <strong>JARDIN privé</strong> (uniquement pour vous) de 110m² au pied de la copropriété.
                </p>
                <p>
                  <strong>PARKING PRIVÉ GRATUIT</strong> (devant votre jardin).
                </p>
              </div>
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
              className="bg-blue-lodge-50 rounded-xl p-8 border-2 border-blue-lodge-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Inclus dans le prix
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>WiFi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Draps de lit (le lit sera fait à votre arrivée)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Serviette de douche</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Produits d'entretien + torchon</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Lave linge</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Parking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Petit garage moto ou vélos (fermé et privé)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-lodge-600">✓</span>
                  <span>Jardin (chaises et table), barbecue</span>
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
                  <span><strong>Ménage 30€</strong> (l'appartement doit être laissé propre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span><strong>Ménage complet 60€</strong> si vous ne souhaitez pas faire le ménage du tout (merci de prévenir)</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <strong>Note :</strong> Location du samedi au samedi pendant les vacances d'été
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Appartement non fumeur. Animaux non acceptés.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Maximum un couple. Bébé possible sur demande avec supplément.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <ContactSection
        theme="blue"
        phone={contactInfo.phone}
        email={contactInfo.email}
        address="Saint-Malo, Bretagne"
        airbnbUrl={getAirbnbUrl(contactInfo.airbnb.blueLodge)}
      />
    </div>
  )
}

export default BlueLodge

