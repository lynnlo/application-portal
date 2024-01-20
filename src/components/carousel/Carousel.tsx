import React from 'react'
import { Carousel } from '@mantine/carousel'
import { Center, Flex, Image, Overlay, Text, Title } from '@mantine/core'

import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import image3 from './image-3.jpg'
import Logo from '../logo/Logo'

const images = [
  {
    image: image1,
    caption: 'Friendly work culture.',
    credits: 'Campaign Creators'
  },
  {
    image: image2,
    caption: 'Free coffee, everyday!',
    credits: 'Alexender Grey'
  },
  {
    image: image3,
    caption: 'Competitive salary and benefits.',
    credits: 'Fahmi Fakhrudin'
  },
]
const imageSlides = images.map((image, index) => (
  <Carousel.Slide key={index}>
    <Image src={image.image} fit="cover" width="100%" height="100%" />

    <Overlay backgroundOpacity={0.5}>
      <Flex direction="column" mih="100%" align="center" justify="center">
        <Title size="5vw" style={{ color: 'white', opacity: 0.5 }}>
          {image.caption}
        </Title>
      </Flex>
    </Overlay>

    <Overlay backgroundOpacity={0}>
      <Flex direction="column" mih="100%" align="center" justify="end">
        <Text m="sm" size="sm" style={{ color: 'gray' }} visibleFrom="sm">
          © 2024 Greco Co. All rights reserved.
        </Text>
        <Text m="sm" size="sm" style={{ color: 'gray' }}>
          {image.credits}
        </Text>
      </Flex>
    </Overlay>
  </Carousel.Slide>
))

export default function CarouselComponent() {
  return (
    <Carousel withControls={false} align="center" height="92vh" loop>
      {imageSlides}
    </Carousel>
  )
}
