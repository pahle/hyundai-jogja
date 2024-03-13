import Image from 'next/image'

import listMobil from '~/data/list-mobil.json'
import { generateSEO } from '~/lib/generate-seo'

type ParamsProps = {
  id: string
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
  const data = listMobil[Number(params.id)]
  if (!data) return {}

  const title = data.name + ' | Hyundai Jogja'
  const description = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'

  return {
    ...generateSEO(title, description, `/artikel/${params.id}`)
  }
}

export async function generateStaticParams() {
  return listMobil.map((_, index) => ({
    id: String(index)
  }))
}

export default function ArtikelDetail({ params }: { params: ParamsProps }) {
  const mobil = listMobil[Number(params.id)]
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>{mobil.name} Program</h1>
      <Image src={mobil.image} width={648} height={364} alt={mobil.name} className='mx-auto' />
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
        excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit
        irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
        laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
        consectetur et est culpa et culpa duis.
      </p>
    </main>
  )
}
