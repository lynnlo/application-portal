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
  useMantineColorScheme,
} from '@mantine/core'
import { Link, Form } from 'react-router-dom'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import ImageCoffeePour from '../../data/image-coffee-pour.jpg'
import ImageArizonaLandscape from '../../data/image-arizona-landscape.jpg'
import ImageCoffeeTeam from '../../data/image-coffee-team.jpg'
import ImageJourneyStart from '../../data/image-journey-start.png'
import ImageJourneyMiddle from '../../data/image-journey-middle.png'
import ImageJourneyEnd from '../../data/image-journey-end.png'
import ImageJourneyStartLight from '../../data/image-journey-start-light.png'
import ImageJourneyMiddleLight from '../../data/image-journey-middle-light.png'
import ImageJourneyEndLight from '../../data/image-journey-end-light.png'
import classes from './About.module.css'

export const About = () => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Flex direction="column" align="center">
      <section className={classes.section}>
        <BackgroundImage src={ImageCoffeePour} h="100%" w="100%">
          <Flex w="100%" h="100%" align="center" justify="center" bg="#0005">
            <Container size="xl">
              <Parallax speed={20}>
                <Title
                  ta="left"
                  order={1}
                  size="max(8vh, 10vw)"
                  style={{
                    color: 'white',
                    opacity: 0.7,
                    userSelect: 'none',
                  }}
                >
                  About Us
                </Title>
              </Parallax>
              <Parallax speed={10}>
                <Text
                  ta="left"
                  size="max(2vh, 1.5vw)"
                  style={{
                    color: 'white',
                    opacity: 0.7,
                    userSelect: 'none',
                  }}
                >
                  We make great coffee accessible.
                </Text>
              </Parallax>
            </Container>
          </Flex>
        </BackgroundImage>
      </section>

      {/* Desktop */}
      <Group gap={0} visibleFrom="lg">
        <section className={classes.section}>
          <BackgroundImage
            src={colorScheme === 'dark' ? ImageJourneyStart : ImageJourneyStartLight}
            pb="15em"
            h="100%"
            w="100%"
          >
            <Flex w="100%" h="100%" align="center" justify="space-around">
              <Container size="xl">
                <Title ta="right" order={1} size="4vw" w="40vw">
                  Founding
                </Title>
                <Text ta="right" w="40vw">
                  We started in 2015 with a simple idea: make great coffee accessible. <br />
                  We pitched our idea to a few investors and got the funding we needed to get
                  started.
                </Text>
              </Container>
              <Container size="xl">
                <Parallax speed={-30}>
                  <AspectRatio ratio={1} w="35vw">
                    <img
                      alt="Arizona landscape with cactus and bushes"
                      src={ImageArizonaLandscape}
                    />
                  </AspectRatio>
                </Parallax>
              </Container>
            </Flex>
          </BackgroundImage>
        </section>
        <section className={classes.section}>
          <BackgroundImage
            src={colorScheme === 'dark' ? ImageJourneyMiddle : ImageJourneyMiddleLight}
            pb="15em"
            h="100%"
            w="100%"
          >
            <Flex w="100%" h="100%" align="center" justify="center">
              <Container size="xl">
                <Parallax speed={30}>
                  <AspectRatio ratio={1} w="35vw">
                    <img alt="A busy coffee shop with people working" src={ImageCoffeeTeam} />
                  </AspectRatio>
                </Parallax>
              </Container>
              <Container size="xl">
                <Title ta="left" order={1} size="4vw" w="40vw">
                  Growth
                </Title>
                <Text ta="left" w="40vw">
                  Now, we're selling our coffee in over 100 stores across the country. <br />
                  We're always looking for new ways to make our coffee even better. <br /> <br />
                  <i>And that's where you come in.</i>
                </Text>
              </Container>
            </Flex>
          </BackgroundImage>
        </section>
        <section className={classes.section}>
          <BackgroundImage
            src={colorScheme === 'dark' ? ImageJourneyEnd : ImageJourneyEndLight}
            h="100%"
            w="100%"
          >
            <Flex w="100%" h="100%" align="center" justify="center">
              <Stack align="center" gap="lg">
                <Title ta="center" order={1} size="4vw" w="40vw">
                  Join Us
                </Title>
                <Text ta="center">
                  We're always looking for new team members who are passionate as we are about
                  coffee.
                </Text>
                <Button w="35%" component={Link} to="/positions">
                  View Open Positions
                </Button>
              </Stack>
            </Flex>
          </BackgroundImage>
        </section>
      </Group>

      {/* Mobile */}
      <Group gap={0} hiddenFrom="lg">
        <section className={classes.section}>
          <BackgroundImage src={ImageArizonaLandscape} h="100%" w="100%">
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              style={{ backdropFilter: 'brightness(0.6)' }}
            >
              <Parallax speed={20}>
                <Title ta="left" order={1} size="5vh" w="80vw">
                  Founding
                </Title>
              </Parallax>
              <Parallax speed={15}>
                <Text ta="left" w="80vw">
                  We started in 2015 with a simple idea: make great coffee accessible. <br />
                  We pitched our idea to a few investors and got the funding we needed to get
                  started.
                </Text>
              </Parallax>
            </Flex>
          </BackgroundImage>
        </section>
        <section className={classes.section}>
          <BackgroundImage src={ImageCoffeeTeam} h="100%" w="100%">
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              style={{ backdropFilter: 'brightness(0.6)' }}
            >
              <Parallax speed={20}>
                <Title ta="left" order={1} size="5vh" w="80vw">
                  Growth
                </Title>
              </Parallax>
              <Parallax speed={15}>
                <Text ta="left" w="80vw">
                  Now, we're selling our coffee in over 100 stores across the country. <br />
                  We're always looking for new ways to make our coffee even better. <br /> <br />
                  <i>And that's where you come in.</i>
                </Text>
              </Parallax>
            </Flex>
          </BackgroundImage>
        </section>
        <section className={classes.section}>
          <Flex w="100%" h="100%" align="center" justify="center">
            <Stack align="center" gap="lg">
              <Title ta="center" order={1} size="5vh" w="80vw">
                Join Us
              </Title>
              <Text ta="center" w="85vw">
                We're always looking for new team members who are passionate as we are about coffee.
              </Text>
              <Button w="65%" component={Link} to="/positions">
                View Open Positions
              </Button>s
            </Stack>
          </Flex>
        </section>
      </Group>
    </Flex>
  )
}
