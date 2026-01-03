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
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar theme="green" />
      <Hero
        title={t.greenLodge.title}
        subtitle={t.greenLodge.subtitle}
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
              {t.greenLodge.description.title}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto leading-relaxed">
              {t.greenLodge.description.bedsMade}
            </p>
            <div className="bg-gradient-to-r from-green-lodge-50 to-green-lodge-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                {t.greenLodge.description.intro}
              </p>
              <div className="space-y-4 pt-6 border-t border-green-lodge-200">
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <Waves className="text-green-lodge-600" size={24} />
                  <strong>{t.greenLodge.description.seaDistance}</strong>
                </p>
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <UtensilsCrossed className="text-green-lodge-600" size={24} />
                  <strong>{t.greenLodge.description.shopsDistance}</strong>
                </p>
                <p className="text-lg text-gray-800 flex items-center justify-center gap-3">
                  <MapPin className="text-green-lodge-600" size={24} />
                  <strong>{t.greenLodge.description.dinardDistance}</strong>
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
            {t.greenLodge.features.title}
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Wifi}
            title={t.greenLodge.features.wifi.title}
            description={t.greenLodge.features.wifi.desc}
            theme="green"
            delay={0}
          />
          <FeatureCard
            icon={Bed}
            title={t.greenLodge.features.sheets.title}
            description={t.greenLodge.features.sheets.desc}
            theme="green"
            delay={0.1}
          />
          <FeatureCard
            icon={Droplets}
            title={t.greenLodge.features.towel.title}
            description={t.greenLodge.features.towel.desc}
            theme="green"
            delay={0.2}
          />
          <FeatureCard
            icon={Car}
            title={t.greenLodge.features.parking.title}
            description={t.greenLodge.features.parking.desc}
            theme="green"
            delay={0.3}
          />
          <FeatureCard
            icon={Sun}
            title={t.greenLodge.features.garden.title}
            description={t.greenLodge.features.garden.desc}
            theme="green"
            delay={0.4}
          />
          <FeatureCard
            icon={Users}
            title={t.greenLodge.features.capacity.title}
            description={t.greenLodge.features.capacity.desc}
            theme="green"
            delay={0.5}
          />
        </div>
      </Section>

      <Section id="logement" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.greenLodge.accommodation.title}
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
              {t.greenLodge.accommodation.house}
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                {t.greenLodge.accommodation.houseDesc}
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.greenLodge.accommodation.groundFloor}</h3>
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
                    {t.greenLodge.accommodation.livingRoom}
                  </h4>
                  <p className="text-gray-700">{t.greenLodge.accommodation.livingRoomDesc}</p>
                  <p className="text-gray-700 mt-2">{t.greenLodge.accommodation.bathroomItems[1]}</p>
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
                    {t.greenLodge.accommodation.kitchen}
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {t.greenLodge.accommodation.kitchenItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.greenLodge.accommodation.floor}</h3>
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
                    {t.greenLodge.accommodation.bedrooms}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>{t.greenLodge.accommodation.bedroom1.split(':')[0]}:</strong> {t.greenLodge.accommodation.bedroom1.split(':')[1]}</li>
                    <li><strong>{t.greenLodge.accommodation.bedroom2.split(':')[0]}:</strong> {t.greenLodge.accommodation.bedroom2.split(':')[1]}</li>
                    <li><strong>{t.greenLodge.accommodation.bedroom3.split(':')[0]}:</strong> {t.greenLodge.accommodation.bedroom3.split(':')[1]}</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Note :</strong> {t.greenLodge.accommodation.bedroomNote}
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
                    {t.greenLodge.accommodation.bathroom}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {t.greenLodge.accommodation.bathroomItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
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
                {t.greenLodge.accommodation.exterior}
              </h4>
              <ul className="space-y-2 text-gray-700">
                {t.greenLodge.accommodation.exteriorItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="loisirs" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.greenLodge.activities.title}
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
                {t.greenLodge.activities.waterSportsTitle}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Ship className="text-green-lodge-500 mt-1" size={20} />
                  <span>{t.greenLodge.activities.waterSports}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ship className="text-green-lodge-500 mt-1" size={20} />
                  <span>{t.greenLodge.activities.ferry}</span>
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
                {t.greenLodge.activities.nearby}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>{t.greenLodge.activities.saintMalo}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>{t.greenLodge.activities.other}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="text-green-lodge-500 mt-1" size={20} />
                  <span><strong>Cap Fréhel, Fort La Latte, Cancale</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Bike className="text-green-lodge-500 mt-1" size={20} />
                  <span>{t.greenLodge.activities.bike}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="text-green-lodge-500 mt-1" size={20} />
                  <span>{t.greenLodge.activities.golf}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="tarifs" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.greenLodge.pricing.title}
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
                {t.common.included}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t.greenLodge.pricing.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-lodge-600">✓</span>
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
                {t.greenLodge.pricing.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                {t.greenLodge.pricing.notes.map((note, index) => (
                  <p key={index} className={`text-sm text-gray-600 ${index > 0 ? 'mb-2' : ''}`}>
                    {note}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="acces" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t.greenLodge.access.title}
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border-2 border-green-lodge-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.greenLodge.access.howToFind}
            </h3>
            <p className="text-gray-700 mb-4">
              {t.greenLodge.access.directions}
            </p>
            <div className="bg-green-lodge-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700">
                <strong>Parking :</strong> {t.greenLodge.access.parking}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>{t.greenLodge.access.gate}</strong>
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
      />
    </div>
  )
}

export default GreenLodge

