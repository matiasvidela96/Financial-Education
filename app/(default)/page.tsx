export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import MainPage from '@/components/main-page'

export default function Home() {
  return (
    <>
    <MainPage />
      {/* <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
