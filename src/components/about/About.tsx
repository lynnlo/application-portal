import React from 'react'
import {
  Container,
  Title,
  Paper,
  Stack,
  Text,
  Button,
  Group,
  Flex,
  AspectRatio,
  BackgroundImage,
  ScrollArea,
} from '@mantine/core'
import { Link, Form } from 'react-router-dom'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import classes from './About.module.css'

export const About = () => {
  return (
    <Flex direction="column" align="center">
      <section className={classes.section}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1705651460817-ebfa8c213979?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          h="100%"
          w="100%"
        >
          <Flex w="100%" h="100%" align="center" justify="center" bg="#0005">
            <Container size="xl">
              <Parallax speed={20}>
                <Title ta="left" order={1} size="max(8vh, 10vw)">
                  About Us
                </Title>
              </Parallax>
              <Parallax speed={10}>
                <Text ta="left" size="max(2vh, 1.5vw)">
                  We make great coffee accessible.
                </Text>
              </Parallax>
            </Container>
          </Flex>
        </BackgroundImage>
      </section>

      {/* Desktop */}
      <section className={classes.section}>
        <Flex w="100%" h="100%" align="center" justify="center">
          <Container size="xl">
            <Title ta="right" order={1} size="4vw">
              Founding
            </Title>
            <Text ta="right" w="30vw">
              We started in 2015 with a simple idea: make great coffee accessible. <br />
              We pitched our idea to a few investors and got the funding we needed to get started.
            </Text>
          </Container>
          <Container size="xl">
            <Parallax speed={-30}>
              <AspectRatio ratio={4 / 5} w="30vw">
                <img
                  alt="Arizona landscape with cactus and bushes"
                  src="https://images.unsplash.com/photo-1588737101811-258f9d4653ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </AspectRatio>
            </Parallax>
          </Container>
        </Flex>
      </section>
      <section className={classes.section}>
        <Flex w="100%" h="100%" align="center" justify="center">
          <Container size="xl">
            <Parallax speed={30}>
              <AspectRatio ratio={4 / 5} w="30vw">
                <img
                  alt="Arizona landscape with cactus and bushes"
                  src="https://images.unsplash.com/photo-1588737101811-258f9d4653ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </AspectRatio>
            </Parallax>
          </Container>
          <Container size="xl">
            <Title ta="left" order={1} size="4vw">
              Growth
            </Title>
            <Text ta="left" w="30vw">
              Now, we're selling our coffee in over 100 stores across the country. <br />
              We're always looking for new ways to make our coffee even better. <br /> <br />
              <i>And that's where you come in.</i>
            </Text>
          </Container>
        </Flex>
      </section>
    </Flex>
  )
}
