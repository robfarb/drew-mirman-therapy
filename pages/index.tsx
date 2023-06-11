import Image from 'next/image'
import {Navbar} from '../components/Navbar'

export default function Home() {
  return (
    <div
      className='flex flex-col items-center justify-between p-12 h-screen font-montserrat'
    >
      <Navbar/>
      <div className="relative flex flex-col items-center justify-center h-full mx-auto">
        <Image
          className="home-logo"
          src="/logo.png"
          alt="Mirman Therapy Logo"
          width={180}
          height={37}
          priority
        />
        <h2 className="tracking-wide center mt-10 text-3xl font-alegreya uppercase text-brown-50">Drew Mirman</h2>
        <p className="tracking-wide uppercase font-montserrat">m.s., amft</p>
      </div>
    </div>
  )
}
