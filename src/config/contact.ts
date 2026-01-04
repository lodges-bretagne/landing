import type { Language } from '../i18n/translations'

export const contactInfo = {
  email: 'galerieflorence.guillot@hotmail.fr',
  airbnb: {
    blueLodge: '26058515',
    greenLodge: '1015591108415436590',
  },
} as const

// Get phone number formatted according to language
// French: 06 18 66 70 87 (local format)
// Other languages: +33 6 18 66 70 87 (international format)
export const getPhoneNumber = (language: Language): string => {
  return language === 'fr' ? '06 18 66 70 87' : '+33 6 18 66 70 87'
}

// Get phone number for tel: link (always use international format without spaces)
export const getPhoneNumberForLink = (): string => {
  return '+33618667087'
}

export const getAirbnbUrl = (lodgeId: string): string => {
  return `https://www.airbnb.fr/rooms/${lodgeId}`
}

