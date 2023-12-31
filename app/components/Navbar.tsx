"use client"
import { FC } from 'react'
import { ModeToggle } from './ThemeButton'
import { Button } from '@/components/ui/button'
import { DropDown, DropThree, DropTwo } from './DropDown'
import { useRouter } from 'next/navigation'
import { Bonheur_Royale, Caveat, Kalam } from 'next/font/google'
import Link from 'next/link'
import SideBar from './SideBar'
import ContactButton from './ContactModal'
interface NavbarProps {
  
}
const bon = Bonheur_Royale({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const bons = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const Navbar: FC<NavbarProps> = ({
  
}) => {

  const router = useRouter()
  return (

    <header className='flex justify-between px-8 lg:px-20 py-10 w-full z-20'>
      <Link href="/" style={bons.style} className='text-4xl text-blue-700 dark:text-slate-30 cursor-pointer'>
        E<span>.</span>T
        <div className='my-auto pb-2'>
        </div>
      
      </Link>
      <div className=''>
        <ul className='hidden lg:flex gap-14 my-2 text-xl'>
          <li className=''>
            <DropDown />
          </li>
          <li>
            <DropTwo />
          </li>
          <li>
            <DropThree />
          </li>
        </ul>
      </div>
      <div className=' flex gap-3'>
        <ContactButton />
        <SideBar />
      </div>
    </header>
  )
}

export default Navbar