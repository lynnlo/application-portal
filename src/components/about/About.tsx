import React from 'react'
import { Container, Title, Paper, Stack, Text, Button, Group } from '@mantine/core'
import { Link, Form } from 'react-router-dom'

import classes from './About.module.css'

export const About = () => {
  return (
    <Container fluid>
      <Paper p="lg" withBorder shadow="lg">
        <Title>About</Title>
        <Text>
          We're a small company that's focused on bringing people the best coffee at a fair price.
          <br />
          Join us in our mission to make the world a better place, one cup at a time.
        </Text>

        <Stack>
          <Button h={100} component={Link} to="/contact">
            Contact us
          </Button>
          <Button h={100} component={Link} to="/products">
            View products
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
