import { get } from 'http'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import listArticle from '~/data/list-article.json'
import { generateSEO } from '~/lib/generate-seo'

type ParamsProps = {
  slug: string
}

const getData = (slug: string) => {
  const article = listArticle.find((item) => item.slug === slug)

  return article;
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
  const data = getData(params.slug)
  if (!data) return {}

  const title = data.title + ' | Hyundai Jogja'
  const description = data.description.slice(0, 160)

  return {
    ...generateSEO(title, description, `/artikel/${params.slug}`)
  }
}

export async function generateStaticParams() {
  return listArticle.map((item) => ({
    slug: item.slug
  }))
}

export default function ArtikelDetail({ params }: { params: ParamsProps }) {
  const article = getData(params.slug)

  if (!article) {
    return notFound()
  }
  
  return (
    <main className='container lg:my-12 my-6 lg:space-y-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>{article.title}</h1>
      <Image src={article.image} width={648} height={364} alt={article.title} className='mx-auto' />
      <p>
        {article.description}
      </p>
    </main>
  )
}
