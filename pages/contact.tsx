import Image from 'next/image'
import {Navbar} from '@/components/Navbar';

export default function Home() {
  return (
    <div
      className='flex flex-col items-center p-12 h-screen'
    >
      <Navbar/>
      <div className="relative flex flex-col justify-center align-center h-screen">
        <div className='flex flex-col items-center justify-center text-center text-xl font-montserrat'>
          <p className='m-4'><span className='font-bold'>Phone Number:</span> (424) 248-9453</p>
          <p className='m-4 whitespace-nowrap'><span className='font-bold'>Email:</span> drewmirmantherapy@gmail.com</p>
          <Image
            className="mt-12"
            src="/logo.png"
            alt="Mirman Therapy Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
    </div>
  )
}
