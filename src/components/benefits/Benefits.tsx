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

import classes from './Benefits.module.css'

export default function Benefits() {
  return (
    <Flex direction="column" align="center">
      <section className={classes.section}>
        <Container size="xl">
          <Parallax speed={15}>
            <Title ta="left" order={1} size="max(4vh, 5vw)">
              Why Grecco?
            </Title>
          </Parallax>
          <Parallax speed={10}>
            <Text ta="left" size="max(3vh, 1.5vw)">
              Our mission is to revolutionize how we drink coffee. <br />
              And we are looking for passionate individuals to join us in our journey. <br />
              We offer great benefits with a bustling and developing work culture.
            </Text>
          </Parallax>
        </Container>
      </section>
      <section className={classes.section} style={{ backdropFilter: 'brightness(1.1)' }}>
        <Container size="xl">
          <Parallax speed={10}>
            <Title ta="center" order={1} size="max(8vh, 10vw)">
              Benefits
            </Title>
          </Parallax>
          <Parallax speed={5}>
            <Group justify="space-between" gap="lg" visibleFrom="md">
              <Stack align="center" w="30%">
                <IconMoneybag size={100} />
                <Title order={2} size="1.5vw">
                  Competitive Pay
                </Title>
                <Text size="sm" ta="center">
                  We believe in fair compensation for hard work. <br />
                  Our pay is at or above median for the given location.
                </Text>
              </Stack>
              <Stack align="center" w="30%">
                <IconUsers size={100} />
                <Title ta="left" order={2} size="1.5vw">
                  Rich Culture
                </Title>
                <Text size="sm" ta="center">
                  We are a growing but passionate team. <br />
                  We believe that our workspace should cater to our employees.
                </Text>
              </Stack>
              <Stack align="center" w="30%">
                <IconCoffee size={100} />
                <Title ta="left" order={2} size="1.5vw">
                  Free Coffee
                </Title>
                <Text size="sm" ta="center">
                  We offer free coffee to all employees. <br />
                  Who doesn't love free coffee?
                </Text>
              </Stack>
            </Group>

            <Stack justify="space-between" gap="lg" hiddenFrom="md">
              <Flex align="center" justify="center">
                <Group align="center" w="50%">
                  <IconMoneybag size={100} />
                  <Title order={2} size="2vh">
                    Competitive Pay
                  </Title>
                </Group>
                <Text size="sm" ta="left" w="50%">
                  We are a growing but passionate team. <br />
                  We believe that our workspace should cater to our employees.
                </Text>
              </Flex>
              <Flex align="center" justify="center">
                <Group align="center" w="50%">
                  <IconUsers size={100} />
                  <Title ta="left" order={2} size="2vh">
                    Rich Culture
                  </Title>
                </Group>
                <Text size="sm" ta="left" w="50%">
                  We believe in fair compensation for hard work. Our pay is at or above median for
                  the given location.
                </Text>
              </Flex>
              <Flex align="center" justify="center">
                <Group align="center" w="50%">
                  <IconCoffee size={100} />
                  <Title ta="left" order={2} size="2vh">
                    Free Coffee
                  </Title>
                </Group>
                <Text size="sm" ta="left" w="50%">
                  We offer free coffee to all employees. <br />
                  Who doesn't love free coffee?
                </Text>
              </Flex>
            </Stack>
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
