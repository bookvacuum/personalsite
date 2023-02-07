import '@/styles/globals.css'
import Layout from 'components/layout'
import localFont from '@next/font/local'
import Footer from 'components/footer'

const myFont = localFont({ src: './Quantico-Regular.ttf' })





export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
     <Layout>
  <Component {...pageProps} />
  <Footer />
  </Layout>

  </main>
  )
}
