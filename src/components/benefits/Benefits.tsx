import { Box, Text, Title, Container, Image, Center, Flex } from '@mantine/core'
import { IconMoneybag } from '@tabler/icons-react'
import React from 'react'

import { Parallax } from 'react-scroll-parallax'

import galaxy from './orange.svg'
import classes from './Benefits.module.css'
import Logo from '../logo/Logo'

export default function Benefits() {
  return (
    <Flex direction="column" align="center">
      <section className={classes.section}>
        <Container size="xl">
          <Parallax speed={20} scale={[0.8, 1]}>
            <Title ta="left" order={1} size="max(8vh, 10vw)">
              About Us
            </Title>
          </Parallax>
          <Parallax speed={20}>
            <Text ta="left" size="max(2vh, 1.5vw)">
              We make great coffee accessible.
            </Text>
          </Parallax>
        </Container>
      </section>
    </Flex>
  )
}
