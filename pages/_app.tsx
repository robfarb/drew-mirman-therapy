import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Alegreya, Montserrat} from 'next/font/google'

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya'
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})


export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${alegreya.variable} ${montserrat.variable} h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
