import { Metadata } from 'next'

export const generateSEO = (title: string, description: string, url: string): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image'
    }
  }
}
