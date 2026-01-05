import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

interface SEOProps {
  title: string
  description: string
  image: string
}

const SEO = ({ title, description, image }: SEOProps) => {
  const { language } = useLanguage()
  const location = useLocation()
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')
  const currentUrl = `${baseUrl}${location.pathname}`
    
  useEffect(() => {
    document.title = title
    document.documentElement.lang = language

    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`
      let link = document.querySelector(selector)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        if (hreflang) link.setAttribute('hreflang', hreflang)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    setMetaTag('description', description)
    setLinkTag('canonical', currentUrl)

    setMetaTag('og:type', "website", true)
    setMetaTag('og:url', currentUrl, true)
    setMetaTag('og:title', title, true)
    setMetaTag('og:description', description, true)
    setMetaTag('og:image', image, true)
    setMetaTag('og:locale', language === 'fr' ? 'fr_FR' : language === 'en' ? 'en_US' : 'es_ES', true)

    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:url', currentUrl)
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', image)

    setLinkTag('alternate', currentUrl, 'fr')
    setLinkTag('alternate', currentUrl, 'en')
    setLinkTag('alternate', currentUrl, 'es')
    setLinkTag('alternate', currentUrl, 'x-default')
  }, [title, description, image, currentUrl, language, "website"])

  return null
}

export default SEO

