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

import classes from './Login.module.css'

export const Login = () => {
  return (
    <Container fluid>
      <Title ta="center"> Welcome Back </Title>
      <Text ta="center">
        Don't have an account?{' '}
        <Link className={classes.link} to="/login" state={{ register: true }}>
          Create one!
        </Link>
      </Text>
      <Space h="lg" />
      <Center>
        <Paper w={360} p="lg" shadow="md" radius="md" withBorder>
          <Stack>
            <TextInput label="Email" required />
            <PasswordInput label="Password" required />
            <Group gap="sm" justify="space-between">
              <Checkbox label="Remember me" />
              <Link className={classes.link} to="/forgot-password">
                Forgot password?
              </Link>
            </Group>
            <Button type="submit" radius="lg" fullWidth>
              Login
            </Button>
          </Stack>
        </Paper>
      </Center>
    </Container>
  )
}
