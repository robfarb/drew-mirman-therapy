import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Navbar} from '../components/Navbar'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar/>
      <div className="relative flex flex-col place-items-center">
        <Image
          className="home-logo"
          src="/logo.png"
          alt="Mirman Therapy Logo"
          width={180}
          height={37}
          priority
        />
        <h2 className="center mt-10 text-xl">Drew Mirman Therapy, AMFT</h2>
        <h2 className="center mt-10 text-lg">Coming soon</h2>
      </div>
    </main>
  )
}
