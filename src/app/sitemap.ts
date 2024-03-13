import { MetadataRoute } from 'next'

import { ENV } from '~/lib/contants'
import { navMenu } from '~/components/layout/navbar'

export default function sitemap(): MetadataRoute.Sitemap {
  const WEBSITE_URL = ENV.NEXT_PUBLIC_WEBSITE_URL

  const newNavMenu = [
    ...navMenu,
    {
      link: '/about',
      lastModified: new Date().toISOString().split('T')[0]
    }
  ]

  const routes = newNavMenu.map(route => ({
    url: `${WEBSITE_URL}${route.link}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
