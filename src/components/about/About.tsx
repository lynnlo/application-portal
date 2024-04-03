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

import image1 from '../../data/image-coffee-pour.jpg'
import image2 from '../../data/image-arizona-landscape.jpg'
import image3 from '../../data/image-coffee-team.jpg'
import image4 from '../../data/image-journey-start.png'
import image5 from '../../data/image-journey-end.png'
import classes from './About.module.css'

export const About = () => {
  return (
    <Flex direction="column" align="center">
      <section className={classes.section}>
        <BackgroundImage src={image1} h="100%" w="100%">
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
        <BackgroundImage src={image4} pb="15em" h="100%" w="100%">
          <Flex w="100%" h="100%" align="center" justify="space-around">
            <Container size="xl">
              <Title ta="right" order={1} size="4vw" w="40vw">
                Founding
              </Title>
              <Text ta="right">
                We started in 2015 with a simple idea: make great coffee accessible. <br />
                We pitched our idea to a few investors and got the funding we needed to get started.
              </Text>
            </Container>
            <Container size="xl">
              <Parallax speed={-30}>
                <AspectRatio ratio={1} w="35vw">
                  <img alt="Arizona landscape with cactus and bushes" src={image2} />
                </AspectRatio>
              </Parallax>
            </Container>
          </Flex>
        </BackgroundImage>
      </section>
      <section className={classes.section}>
        <BackgroundImage src={image5} pb="10em" h="100%" w="100%">
          <Flex w="100%" h="100%" align="center" justify="center">
            <Container size="xl">
              <Parallax speed={30}>
                <AspectRatio ratio={1} w="35vw">
                  <img alt="A busy coffee shop with people working" src={image3} />
                </AspectRatio>
              </Parallax>
            </Container>
            <Container size="xl">
              <Title ta="left" order={1} size="4vw" w="40vw">
                Growth
              </Title>
              <Text ta="left">
                Now, we're selling our coffee in over 100 stores across the country. <br />
                We're always looking for new ways to make our coffee even better. <br /> <br />
                <i>And that's where you come in.</i>
              </Text>
            </Container>
          </Flex>
        </BackgroundImage>
      </section>
    </Flex>
  )
}
