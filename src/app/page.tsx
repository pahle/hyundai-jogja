import Image from 'next/image'
import Link from 'next/link'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel'
import listMobil from '~/data/list-mobil.json'
import listDelivery from '~/data/list-delivery.json'

function DeliveryOrder() {
  return (
    <div className="bg-white">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listDelivery.map((delivery, index) => (
            <div key={index} className="group relative">
              <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <Image
                  src={delivery.imageSrc}
                  alt={delivery.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Carousel>
        <CarouselContent className='max-h-[60dvh]'>
          {[...Array(4)].map((_, index) => (
            <CarouselItem key={index} className='relative aspect-video'>
              <Image src={`/carousel-${index + 1}.webp`} alt='' fill className='object-cover object-center max-h-[60dvh]' />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <section className='lg:py-12 py-6 container lg:space-y-12 space-y-6'>
        <h1 className='lg:text-5xl text-3xl font-bold text-center'>Model</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
          {listMobil.map((mobil, index) => (
            <div key={index} className='flex flex-col items-center'>
              <Image src={mobil.image} alt={mobil.name} width={408} height={200} className='h-[200px] object-cover object-center' />
              <Link className='my-4 text-2xl font-medium' href={`/mobil#${mobil.image.replaceAll('.webp', '').slice(1)}`}>
                {mobil.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='lg:py-12 py-6 bg-app-light-brown'>
        <div className='bg-white lg:py-12 py-6'>
          <div className='container space-y-5'>
            <h1 className='lg:text-5xl text-3xl font-bold text-center'>Berita</h1>
            <Carousel className='bg-app-blue-200 text-white lg:py-24 py-12 lg:px-12 px-6 flex items-center lg:gap-5 gap-2.5'>
              <CarouselPrevious className='static shrink-0 bg-transparent border-none' />
              <CarouselContent>
                {newsCarousel.map((news, index) => (
                  <CarouselItem key={index} className='relative text-center space-y-2.5'>
                    <h2 className='uppercase lg:text-3xl text-xl font-semibold'>{news.title}</h2>
                    <p className='line-clamp-2'>{news.desc}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className='static shrink-0 bg-transparent border-none' />
            </Carousel>
          </div>
        </div>
      </section>

      <section className='lg:pb-12 pb-6 bg-app-light-brown'>
        <div className='bg-white lg:py-12 py-6'>
          <div className='container space-y-5'>
            <h1 className='lg:text-5xl text-3xl font-bold text-center'>Delivery Order</h1>
                <DeliveryOrder />
          </div>
        </div>
      </section>

      <section className='grid lg:grid-cols-2 h-[30dvh]'>
        <div className='relative'>
          <div className='absolute bg-black/50 w-full h-full top-0 left-0 z-10 grid place-items-center'>
            <Link href='/about' className='text-white text-4xl font-medium'>
              Tentang Hyundai
            </Link>
          </div>
          <Image src='/carousel-5.webp' alt='' fill className='object-cover object-center' />
        </div>
        <div className='relative'>
          <div className='absolute bg-black/50 w-full h-full top-0 left-0 z-10 grid place-items-center'>
            <Link href='/promo' className='text-white text-4xl font-medium'>
              Promo
            </Link>
          </div>
          <Image src='/carousel-3.webp' alt='' fill className='object-cover object-center' />
        </div>
      </section>
    </main>
  )
}

const newsCarousel = [
  {
    title: 'Standar baru perawatan mobil yang terbaik – hyundai before service',
    desc: 'Hyundai Jogja Adisucipto menghadirkan layanan purna jual yang unggul dengan Hyundai Before Service. Pada tanggal 25-26 November dan 9-10 Desember 2023, program khusus ini memberikan standar perawatan...'
  },
]
