import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { Center, Flex, Image, Overlay, Text, Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'

import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import image3 from './image-3.jpg'
import image4 from './image-4.jpg'
import Logo from '../logo/Logo'

const images = [
  {
    image: image4,
    caption: "Let's connect.",
    alt: 'Three coffee cups together.',
  },
  {
    image: image1,
    caption: 'Discover our work culture.',
    alt: 'A group of people in a meeting.',
  },
  {
    image: image2,
    caption: 'Did we mention free coffee?',
    alt: 'A person holding a coffee cup.',
  },
]
const imageSlides = images.map((image, index) => (
  <Carousel.Slide key={index}>
    <Image src={image.image} fit="cover" alt={image.alt} width="100%" height="100%" />

    <Overlay backgroundOpacity={0.25}>
      <Flex direction="column" mih="100%" align="center" justify="center">
        <Title size="10vw" style={{ color: 'white', opacity: 0.8 }}>
          {}
        </Title>
      </Flex>
    </Overlay>
  </Carousel.Slide>
))

export default function CarouselComponent() {
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <Carousel
      withControls={false}
      draggable={false}
      plugins={[autoplay.current]}
      align="center"
      height="50vh"
      loop
      slideGap="2%"
      slideSize="60%"
    >
      {imageSlides}
    </Carousel>
  )
}
