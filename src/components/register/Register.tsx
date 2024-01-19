import React from 'react'
import {
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
  Button,
  Box,
  Group,
  Checkbox,
  Center,
  Container,
  Space,
} from '@mantine/core'
import { Link } from 'react-router-dom'

import classes from './Register.module.css'

export const Register = () => {
  return (
    <Container fluid>
      <Title ta="center"> Welcome To Grecco </Title>
      <Text ta="center">
        Already have an account?{' '}
        <Link className={classes.link} to="/login" state={{ register: false }}>
          Log in!
        </Link>
      </Text>
      <Space h="lg" />
      <Center>
        <Paper w={360} p="lg" shadow="md" radius="md" withBorder>
          <Stack>
            <TextInput label="Name" required />
            <TextInput label="Email" required />
            <PasswordInput label="Password" required />
            <Group gap="sm" justify="space-between">
              <Checkbox label="Remember me" />
            </Group>
            <Button type="submit" radius="lg" fullWidth>
              Sign Up
            </Button>
          </Stack>
        </Paper>
      </Center>
    </Container>
  )
}
