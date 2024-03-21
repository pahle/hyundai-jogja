import { Home, Phone, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export const Navbar = () => {
  return (
    <nav>
      <div className='bg-app-blue-200 hidden lg:block'>
        <div className='container text-white py-2 md:text-sm text-xs font-medium flex lg:flex-row flex-col items-center text-center md:text-left justify-between gap-x-5 gap-y-2'>
          <p className='flex items-center gap-2'>
            <Home size={14} className='shrink-0 hidden md:block' />
            Jln. Laksda Adisucipto, Km. 9, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
          <p className='flex items-center gap-2'>
            <Phone size={14} className='shrink-0 hidden md:block' />
            <a href='#'>+62 877-1808-2511</a>
            <span> | </span>
            <a href='#'>+62 812-2808-0040 (Yoana)</a>
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between container py-2'>
        <Link href='/'>
          <Image src='/logo.webp' alt='Logo' width={148} height={50} />
        </Link>
        <NavbarMobile />
        <ul className='lg:flex hidden items-center gap-4'>
          {navMenu.map(menu => (
            <li key={menu.name}>
              <Link href={menu.link} className='font-semibold text-app-blue-200'>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className='block lg:hidden ml-auto'>
        <Menu className='text-app-blue-200' />
      </SheetTrigger>
      <SheetContent>
        <Link href='/'>
          <Image src='/logo.webp' alt='Logo' width={148} height={50} />
        </Link>
        <ul className='flex items-center gap-4 flex-col mt-10'>
          {navMenu.map(menu => (
            <li key={menu.name}>
              <Link href={menu.link} className='font-semibold text-app-blue-200 text-xl'>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export const navMenu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Mobil',
    link: '/mobil'
  },
  {
    name: 'Harga Promo',
    link: '/promo'
  },
  {
    name: 'Artikel',
    link: '/artikel'
  },
  {
    name: 'Kontak',
    link: '/kontak'
  }
]
