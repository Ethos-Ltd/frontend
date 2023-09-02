"use client"
import Image from 'next/image'
import Link from 'next/link'
import home from '../assets/home.png'
import archive from '../assets/archive.png'
import imageIcon from '../assets/imageIcon.png'
import date from '../assets/date.png'
import demographics from '../assets/demographics.png'
import message from '../assets/message.png'
import compass from '../assets/compass.png'
import bell from '../assets/bell.png'
import statusIcon from '../assets/statusIcon.png'
import ethos from '../assets/ethos.png'
import magnify from '../assets/magnify.png'
import profile from '../assets/profile.jpg'

const icons = [
    home,
    archive,
    imageIcon,
    date,
    demographics,
    message,
    compass,
    bell,
    statusIcon,
]

const Navbar = () => {
  return (
    <div className={`flex flex-row items-center justify-between h-[77px] w-full flex-shrink-0 bg-none nav`}>
        <div className='flex flex-row items-center justify-center'>
            <Image src={ethos} alt='ethos' width={118} height={27.1} className='flex-shrink-0 mx-8'/>
            <div className='h-[31px] w-[71px] active:w-[150px] rounded-full bg-white/60 flex flex-row gap-1 items-center'>
                <Image src={magnify} alt='magnify' width={23} height={23} className='flex-shrink-0 mx-1'/>
                <input type='search' id="site-search" name="q" className={`bg-none empty:hidden w-[120px]`} onChange={() => {}}/>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center mx-8'>
            <div className='h-7 grid grid-cols-9 gap-6 mx-8'>
                {icons.map((icon, i) => (
                    <Link href={``} key={i}>
                        <Image  src={icon} alt={icon} width={30} height={30} className='flex-shrink-0'/>
                    </Link>
                ))}
            </div>
            <Link href={``}>
                <Image src={profile} alt='profile' width={50} height={50} className='flex-shrink-0 rounded-full'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar