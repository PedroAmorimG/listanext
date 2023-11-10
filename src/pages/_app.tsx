import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
  )
}
