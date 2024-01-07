import React from 'react'
import { Carousel } from '@mantine/carousel'
import { Center, Flex, Image, Overlay, Text, Title } from '@mantine/core'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import Logo from '../logo/Logo'
import { theme } from '../../theme'

const images = [image1, image2, image3, image4]
const imageSlides = images.map((image, index) => (
  <Carousel.Slide key={index}>
    <Image src={image} fit="cover" />

    <Overlay backgroundOpacity={0.1}>
      <Flex mih="100%" align="end" justify="start">
        <Flex bg="var(--mantine-color-body)" miw="100%" justify="space-between">
          <Center miw="15%">
            <Logo />
          </Center>
          <Center miw="15%">
            <Text> {image} </Text>
          </Center>
        </Flex>
      </Flex>
    </Overlay>
  </Carousel.Slide>
))

export default function CarouselComponent() {
  return (
    <Carousel withControls={false} align="center" height="80vh" loop>
      {imageSlides}
    </Carousel>
  )
}
