import Image from 'next/image'

import { generateSEO } from '~/lib/generate-seo'
import { ENV } from '~/lib/contants'

const title = 'Kontak Kami'
const URL = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/kontak`
const description = 'Kontak kami untuk mendapatkan penawaran terbaik untuk pembelian mobil Hyundai di dealer resmi Hyundai Jogja Adisucipto dan sekitarnya.'

export const metadata = generateSEO(title, description, URL)

export default function Kontak() {
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Kontak Kami</h1>
      <section className='container lg:space-y-12 space-y-6'>
        <div className='flex'>
          <div>
            <h2 className='text-2xl font-bold'>Hyundai Jogja Adisucipto</h2>
            <h3 className='text-xl font-bold'>Alamat</h3>
            <p>Jl. Laksda Adisucipto Jl. Kembang Raya No.KM, RW.9, Karangploso, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
            <h3 className='text-xl font-bold'>No. Telp</h3>
            <p>
              Whatsapp: <a href=''>+62 877-1808-2511</a> (Yoana)
            </p>
          </div>
          <iframe
            className='w-full h-96'
            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Laksda%20Adisucipto%20Jl.%20Kembang%20Raya%20No.KM,%20RW.9,%20Karangploso,%20Maguwoharjo,%20Kec.%20Depok,%20Kabupaten%20Sleman,%20Daerah%20Istimewa%20Yogyakarta%2055281+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-6 gap-3'></div>
      </section>
    </main>
  )
}
