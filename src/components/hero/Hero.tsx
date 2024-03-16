import React from 'react'
import { Container, Image } from '@mantine/core'

import image1 from './image-1.jpg'
import classes from './Hero.module.css'

export const Hero = () => {
  return (
    <>
      <Container className={classes.hero}>
        <Image src={image1} fit="cover" />
      </Container>
    </>
  )
}
