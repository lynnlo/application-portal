import React from 'react'
import {
  Box,
  Text,
  Title,
  Container,
  Image,
  Center,
  Flex,
  Group,
  Stack,
  Space,
  Button,
} from '@mantine/core'
import { IconCoffee, IconMoneybag, IconUsers } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

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
            <Title ta="left" order={1} size="max(4vh, 5vw)">
              Why Grecco?
            </Title>
          </Parallax>
          <Parallax speed={15}>
            <Text ta="left" size="max(2vh, 1.5vw)">
              Our mission is to revolutionize how we drink coffee. <br />
            </Text>
          </Parallax>
        </Container>
      </section>
      <section className={classes.section} style={{ backdropFilter: 'brightness(1.1)' }}>
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
      <Space h="10vh" />
      <section className={classes.section}>
        <Parallax speed={20} scale={[0.5, 1.5]}>
          <Title ta="left" order={1} size="max(4vh, 5vw)">
            Join us today!
          </Title>
        </Parallax>
        <Parallax speed={15}>
          <Center>
            <Button
              p="sm"
              px="xl"
              size="lg"
              variant="gradient"
              component={Link}
              to="/positions"
              style={{ boxSizing: 'content-box' }}
            >
              View Open Positions
            </Button>
          </Center>
        </Parallax>
      </section>
      <Space h="15vh" />
    </Flex>
  )
}
