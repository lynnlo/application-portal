/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from '../components/carousel/Carousel'
import AppBar from '../components/appbar/AppBar'
import Benefits from '../components/benefits/Benefits'
import Spacer from '../components/spacer/Spacer'
import Hero from '../components/hero/Hero'

export function HomePage() {
  return (
    <>
      <Hero />
      <Carousel />
      <Benefits />
    </>
  )
}
