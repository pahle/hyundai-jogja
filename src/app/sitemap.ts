import { MetadataRoute } from 'next'

import { ENV } from '~/lib/contants'
import { navMenu } from '~/components/layout/navbar'
import listArticle from '~/data/list-article.json'

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

  const articles = listArticle.map(article => ({
    url: `${WEBSITE_URL}/artikel/${article.slug}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...articles]
}
