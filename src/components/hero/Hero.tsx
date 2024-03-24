import React from 'react'
import { Center, Container, Image, Title } from '@mantine/core'

import image1 from './image-1.jpg'
import classes from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <Center h="30vh">
        <Title order={1} size="5vw">
          Grecco.
        </Title>
      </Center>
    </>
  )
}
