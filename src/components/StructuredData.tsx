import { useEffect, useMemo } from 'react'
import { contactInfo, getPhoneNumberForLink } from '../config/contact'

interface StructuredDataProps {
  name: string
  description: string
  images: string[]
  address: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  },
  latitude: number
  longitude: number
  path: string
  numberOfRooms: number
}

const StructuredData = ({ name, description, images, address, latitude, longitude, path, numberOfRooms }: StructuredDataProps) => {
  const siteUrl = import.meta.env.BASE_URL.replace(/\/$/, '')
  const structuredData = useMemo(() => {
    const data: any = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: name,
      description: description,
      image: images.map(img => img.startsWith('http') ? img : `${siteUrl}${img}`),
      url: `${siteUrl}/${path}`,
      telephone: getPhoneNumberForLink(),
      email: contactInfo.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: latitude,
        longitude: longitude,
      },
      priceRange: '€€',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'WiFi',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Parking',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Garden',
          value: true,
        },
      ],
      numberOfRooms: numberOfRooms,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '10',
      },
    }

    return data
  }, [name, description, images, address, siteUrl, numberOfRooms])

  useEffect(() => {
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [structuredData])

  return null
}

export default StructuredData

