import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='bg-app-blue-200'>
      <div className='container text-white py-2 flex flex-col lg:flex-row lg:items-center justify-between gap-5'>
        <div>
          <Link href='/' className='text-lg font-bold'>
            hyundaijogja.id
          </Link>
          <p>ⓒ Hak Cipta 2024 Hyundai Yogyakarta. Seluruh hak dilindungi undang-undang.</p>
        </div>
        <div className='flex items-center gap-2'>
          <Link href='https://www.facebook.com/profile.php?id=100081005805242' target='_blank'>
            <Facebook size={28} />
          </Link>
          <Link href='https://www.instagram.com/hyundaijogja' target='_blank'>
            <Instagram size={28} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
