import Hero from '../components/Hero'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import ImageGallery from '../components/ImageGallery'
import { contactInfo, getAirbnbUrl } from '../config/contact'
import { useLanguage } from '../i18n/LanguageContext'
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
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar theme="blue" />
      <Hero
        title={t.blueLodge.title}
        subtitle={t.blueLodge.subtitle}
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
              {t.blueLodge.photos.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.blueLodge.photos.subtitle}
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
              {t.blueLodge.description.title}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.blueLodge.description.intro}
            </p>
            <div className="bg-gradient-to-r from-blue-lodge-50 to-blue-lodge-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 leading-relaxed">
                {t.blueLodge.description.details}
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
            {t.blueLodge.features.title}
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Wifi}
            title={t.blueLodge.features.wifi.title}
            description={t.blueLodge.features.wifi.desc}
            theme="blue"
            delay={0}
          />
          <FeatureCard
            icon={Bed}
            title={t.blueLodge.features.sheets.title}
            description={t.blueLodge.features.sheets.desc}
            theme="blue"
            delay={0.1}
          />
          <FeatureCard
            icon={Droplets}
            title={t.blueLodge.features.towel.title}
            description={t.blueLodge.features.towel.desc}
            theme="blue"
            delay={0.2}
          />
          <FeatureCard
            icon={Car}
            title={t.blueLodge.features.parking.title}
            description={t.blueLodge.features.parking.desc}
            theme="blue"
            delay={0.3}
          />
          <FeatureCard
            icon={Bike}
            title={t.blueLodge.features.bikeBox.title}
            description={t.blueLodge.features.bikeBox.desc}
            theme="blue"
            delay={0.4}
          />
          <FeatureCard
            icon={Sun}
            title={t.blueLodge.features.garden.title}
            description={t.blueLodge.features.garden.desc}
            theme="blue"
            delay={0.5}
          />
        </div>
      </Section>

      <Section id="logement" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.blueLodge.accommodation.title}
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
                {t.blueLodge.accommodation.apartment}
              </h3>
              <p className="text-gray-700 mb-4">
                {t.blueLodge.accommodation.apartmentDesc1}
              </p>
              <p className="text-gray-700">
                {t.blueLodge.accommodation.apartmentDesc2}
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
                  {t.blueLodge.accommodation.bedroom}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.blueLodge.accommodation.bedroomItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
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
                  {t.blueLodge.accommodation.livingRoom}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.blueLodge.accommodation.livingRoomItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
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
                  {t.blueLodge.accommodation.kitchen}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.blueLodge.accommodation.kitchenItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
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
                  {t.blueLodge.accommodation.bathroom}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.blueLodge.accommodation.bathroomItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="localisation" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.blueLodge.location.title}
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
                {t.blueLodge.location.nearby}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Beach className="text-blue-lodge-500 mt-1" size={20} />
                  <span>{t.blueLodge.location.beach}</span>
                </li>
                <li className="flex items-start gap-2">
                  <UtensilsCrossed className="text-blue-lodge-500 mt-1" size={20} />
                  <span>{t.blueLodge.location.shops}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Home className="text-blue-lodge-500 mt-1" size={20} />
                  <span>{t.blueLodge.location.intramuros}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bike className="text-blue-lodge-500 mt-1" size={20} />
                  <span>{t.blueLodge.location.station}</span>
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
                {t.blueLodge.location.access}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  {t.blueLodge.location.accessBox}
                </p>
                <p>
                  {t.blueLodge.location.accessGarden}
                </p>
                <p>
                  {t.blueLodge.location.accessParking}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="tarifs" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.blueLodge.pricing.title}
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
                {t.common.included}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t.blueLodge.pricing.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-lodge-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
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
                {t.common.notIncluded}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t.blueLodge.pricing.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                {t.blueLodge.pricing.notes.map((note, index) => (
                  <p key={index} className={`text-sm text-gray-600 ${index > 0 ? 'mt-2' : ''}`}>
                    {index === 0 ? <><strong>Note :</strong> {note}</> : note}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <ContactSection
        theme="blue"
        phone={contactInfo.phone}
        email={contactInfo.email}
        airbnbUrl={getAirbnbUrl(contactInfo.airbnb.blueLodge)}
      />
    </div>
  )
}

export default BlueLodge

