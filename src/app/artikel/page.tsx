import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '~/components/ui/button'

import { generateSEO } from '~/lib/generate-seo'
import { ENV } from '~/lib/contants'
import listArticle from '~/data/list-article.json'

const title = 'Artikel'
const URL = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/artikel`
const description = 'Artikel terbaru seputar mobil Hyundai. Dapatkan informasi terkini seputar mobil Hyundai, tips dan trik, serta berita terbaru seputar mobil Hyundai.'

export const metadata = generateSEO(title, description, URL)

export default function Artikel() {
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Artikel</h1>
      <section className='container grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 gap-2'>
        {listArticle.map((article, index) => (
          <div key={index} className='border rounded-lg'>
            <Image src={article.image} alt={article.title} width={406} height={250} className='object-cover object-center aspect-video' />
            <div className='space-y-2 p-4'>
              <p className='text-xl font-semibold'>{article.title}</p>
              <p className='line-clamp-2'>
                {article.description}
              </p>
              <Link
                href={`/artikel/${article.slug}`}
                className={`bg-app-black ${buttonVariants({
                  variant: 'default'
                })}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
