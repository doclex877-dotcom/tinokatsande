import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Footer, CookieBanner } from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main id="main-content"><Component {...pageProps} /></main>
      <Footer />
      <CookieBanner />
    </>
  )
}
