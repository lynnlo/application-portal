import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { Button, Center, Flex, Image, Overlay, Stack, Text, Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { Parallax } from 'react-scroll-parallax'

import Logo from '../logo/Logo'

const images = [
  {
    image: 'images/image-coffee-share.webp',
    caption: "Let's connect.",
    alt: 'Three coffee cups together.',
  },
  {
    image: 'images/image-meeting-room.webp',
    caption: 'Discover our work culture.',
    alt: 'A group of people in a meeting.',
  },
  {
    image: 'images/image-coffee-pour.webp',
    caption: 'Did we mention free coffee?',
    alt: 'A person holding a coffee cup.',
  },
]
const imageSlides = images.map((image, index) => (
  <Carousel.Slide key={index}>
    <Image src={image.image} fit="cover" alt={image.alt} width="100%" height="100%" />
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
              size="max(4vw, 5vh)"
              style={{
                color: 'white',
                opacity: 0.7,
                userSelect: 'none',
              }}
            >
              Grecco Coffee Careers
            </Title>
          </Parallax>
          <Parallax>
            <Stack align="center" justify="center" mt="md">
              <Text ta="center" size="lg" style={{ color: 'white', opacity: 0.7 }}>
                Join us in creating the best coffee in the world.
              </Text>
              <Center mt="lg">
                <Button
                  component="a"
                  href="/positions"
                  variant="light"
                  color="gray"
                  style={{ color: 'white' }}
                >
                  Explore Open Positions
                </Button>
              </Center>
            </Stack>
          </Parallax>
        </Flex>
      </Overlay>
    </>
  )
}
