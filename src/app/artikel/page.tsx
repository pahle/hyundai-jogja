import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '~/components/ui/button'

import { generateSEO } from '~/lib/generate-seo'
import { ENV } from '~/lib/contants'
import listMobil from '~/data/list-mobil.json'

const title = 'Artikel'
const URL = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/artikel`
const description = 'Artikel terbaru seputar mobil Hyundai. Dapatkan informasi terkini seputar mobil Honda, tips dan trik, serta berita terbaru seputar mobil Hyundai.'

export const metadata = generateSEO(title, description, URL)

export default function Artikel() {
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Artikel</h1>
      <section className='container grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 gap-2'>
        {listMobil.map((mobil, index) => (
          <div key={index} className='border rounded-lg'>
            <Image src={mobil.image} alt={mobil.name} width={406} height={250} className='object-cover object-center aspect-video' />
            <div className='space-y-2 p-4'>
              <p className='text-xl font-semibold'>{mobil.name} Program</p>
              <p className='line-clamp-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cum modi, vitae temporibus totam provident recusandae deserunt ea, vel enim earum labore illum
                vero corrupti saepe, soluta id corporis at?
              </p>
              <Link
                href={`/artikel/${index}`}
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
