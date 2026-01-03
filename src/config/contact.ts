// Configuration centralisée des informations de contact
export const contactInfo = {
  phone: '+33 6 18 66 70 87',
  email: 'mail@pierrickcaen.fr',
  airbnb: {
    blueLodge: '26058515',
    greenLodge: '1015591108415436590',
  },
} as const

// Helper function pour construire l'URL Airbnb
export const getAirbnbUrl = (lodgeId: string): string => {
  return `https://www.airbnb.fr/rooms/${lodgeId}`
}

