import Image from 'next/image'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { generateSEO } from '~/lib/generate-seo'
import { ENV } from '~/lib/contants'
import listMobil from '~/data/list-mobil.json'
import currencyFormat  from '~/components/CurrencyFormat'

const title = 'Daftar Harga Promo'
const URL = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/promo`
const description =
  'Daftar harga promo mobil Hyundai terbaru. Dapatkan penawaran terbaik untuk pembelian mobil Hyundai di dealer Jogja, Sleman, Bantul, Kulon Progo, dan sekitarnya.'

export const metadata = generateSEO(title, description, URL)

export default function Promo() {
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Daftar Harga Promo</h1>
      <section className='container'>
        <div className='border rounded-lg overflow-hidden'>
          <Accordion type='single' collapsible>
            {listMobil.map((mobil, index) => (
              <AccordionItem value={mobil.name} key={index}>
                <AccordionTrigger>{mobil.name}</AccordionTrigger>
                <AccordionContent>
                  <div className='relative'>
                    <Image src={mobil.image} alt={mobil.name} width={1254} height={400} className='max-w-[1254px] max-h-[400px] object-cover object-center' />
                    <p className='absolute right-0 bottom-0 lg:text-3xl text-xl font-medium p-4 bg-app-blue-200 text-white rounded-lg'>{currencyFormat(mobil.basePrice)}</p>
                  </div>
                  <ul className='w-full my-4'>
                    {mobil.types.map((type, index) => (
                      <li key={index} className='flex items-center justify-between gap-2.5 py-2 first:border-t-2 last:border-b-2 border-black text-xl text-black'>
                        <p className='px-2'>{type.name}</p>
                        <p className='px-2'>{currencyFormat(type.price)}</p>
                      </li>
                    ))}
                  </ul>
                  <ul className='w-full mt-2'>
                    {!!mobil.addition.length &&
                      mobil.addition.map((add, index) => (
                        <li key={index} className='flex items-center justify-between gap-2.5 py-2'>
                          <p>Add *{add.name}</p>
                          <p>{add.price}</p>
                        </li>
                      ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
