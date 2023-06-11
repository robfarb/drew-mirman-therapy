import Image from 'next/image'
import {Navbar} from '@/components/Navbar';

export default function Home() {
  return (
    <div
      className='flex flex-col items-center p-12 h-screen'
    >
      <Navbar/>
      <div className="relative flex flex-col justify-center align-center h-screen">
        <h2 className="center mb-10 text-xl text-center">Coming Soon!</h2>
        <Image
          className="home-logo"
          src="/logo.png"
          alt="Mirman Therapy Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  )
}
