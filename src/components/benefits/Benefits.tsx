import { Box, Text, Title, Container, Image, Center, Flex, Group, Stack } from '@mantine/core'
import { IconCoffee, IconMoneybag, IconUsers } from '@tabler/icons-react'
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
          <Parallax speed={20}>
            <Title ta="left" order={1} size="max(8vh, 10vw)">
              Benefits
            </Title>
          </Parallax>
          <Parallax speed={20}>
            <Group justify="space-between">
              <Stack align="center">
                <IconMoneybag size={100} />
                <Title order={2} size="1.5vw">
                  Competitive Pay
                </Title>
              </Stack>
              <Stack align="center">
                <IconUsers size={100} />
                <Title ta="left" order={2} size="1.5vw">
                  Rich Culture
                </Title>
              </Stack>
              <Stack align="center">
                <IconCoffee size={100} />
                <Title ta="left" order={2} size="1.5vw">
                  Free Coffee
                </Title>
              </Stack>
            </Group>
          </Parallax>
        </Container>
      </section>
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
