import { ENV } from '~/lib/contants'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml`,
    host: ENV.NEXT_PUBLIC_WEBSITE_URL
  }
}
