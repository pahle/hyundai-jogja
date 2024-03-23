import Image from 'next/image'

import { generateSEO } from '~/lib/generate-seo'
import { ENV } from '~/lib/contants'
import listMobil from '~/data/list-mobil.json'
import currencyFormat  from '~/components/CurrencyFormat'

const title = 'Daftar Mobil'
const URL = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/mobil`
const description = 'Daftar mobil Hyundai Jogja terbaru. Dapatkan penawaran terbaik untuk pembelian mobil Hyundai di Jogja, Sleman, Bantul, Kulon Progo, dan sekitarnya.'

export const metadata = generateSEO(title, description, URL)

export default function Mobil() {
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Daftar Mobil</h1>
      <section className='container lg:space-y-12 space-y-6'>
        <div className='grid lg:grid-cols-2 lg:gap-6 gap-3'>
          {listMobil.map((mobil, index) => (
            <div key={index} id={mobil.image.replaceAll('.webp', '').slice(1)} className='flex flex-col items-center'>
              <Image src={mobil.image} alt={mobil.name} width={636} height={400} className='lg:h-[400px] h-[150px] object-cover object-center' />
              <ul className='w-full'>
                <li className='flex items-center justify-between gap-2.5 text-black py-2 border-b-2 border-black'>
                  <p className='font-bold'>{mobil.name}</p>
                  <p className='font-bold'>{currencyFormat(mobil.basePrice)}</p>
                </li>
                {mobil.types.map((type, index) => (
                  <li key={index} className='flex items-center justify-between gap-2.5 py-2 last:border-b-2 border-black'>
                    <p>{type.name}</p>
                    <p>{currencyFormat(type.price)}</p>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
