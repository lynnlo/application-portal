import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { Button, Center, Flex, Image, Overlay, Stack, Text, Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { Parallax } from 'react-scroll-parallax'

import image1 from '../../data/image-meeting-room.jpg'
import image2 from '../../data/image-coffee-pour.jpg'
import image3 from '../../data/image-cash.jpg'
import image4 from '../../data/image-coffee-share.jpg'
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
    <Image
      src={image.image}
      loading="lazy"
      fit="cover"
      alt={image.alt}
      width="100%"
      height="100%"
    />
    <Overlay backgroundOpacity={0.4} />
  </Carousel.Slide>
))

export default function CarouselComponent() {
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <>
      <Carousel
        withControls={false}
        draggable={false}
        plugins={[autoplay.current]}
        align="center"
        height="94vh"
        loop
        slideSize="100%"
      >
        {imageSlides}
      </Carousel>
      <Overlay backgroundOpacity={0} mt="8vh" h="94vh" zIndex={0}>
        <Flex align="center" justify="center" direction="column" h="100%">
          <Parallax speed={-10}>
            <Title
              ta="center"
              size="5vw"
              style={{
                color: 'white',
                opacity: 0.7,
                userSelect: 'none',
              }}
            >
              Careers at Grecco Coffee
            </Title>
          </Parallax>
        </Flex>
      </Overlay>
    </>
  )
}
