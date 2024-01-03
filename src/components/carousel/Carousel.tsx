import React from 'react'
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

const images = [image1, image2, image3, image4]
const imageSlides = images.map((image) => (
  <Carousel.Slide>
    <Image src={image} fit="cover" />
  </Carousel.Slide>
))

export default function CarouselComponent() {
  return (
    <Carousel withIndicators withControls={false} align="center" slideSize="95%" height="80vh" loop>
      {imageSlides}
    </Carousel>
  )
}
