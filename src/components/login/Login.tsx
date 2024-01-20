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
import { Form, UseFormReturnType } from '@mantine/form'

import classes from './Login.module.css'

export interface LoginProps {
  form: UseFormReturnType<{
    email: string
    password: string
    name: string
  }>
  handleLogin: () => void
  error: string | null
}

export const Login = ({ form, handleLogin, error }: LoginProps) => {
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
      <Form form={form}>
        <Paper w={360} p="lg" shadow="md" radius="md" withBorder>
          <Stack>
            <TextInput {...form.getInputProps('email')} label="Email" required />
            <PasswordInput {...form.getInputProps('password')} label="Password" required />
            <Group gap="sm" justify="space-between">
              <Checkbox label="Remember me" />
              <Link className={classes.link} to="/forgot-password">
                Forgot password?
              </Link>
            </Group>
            <Button type="submit" radius="lg" fullWidth onClick={handleLogin}>
              Login
            </Button>
          </Stack>
          <Text c="red" mt="sm">
            {error}
          </Text>
        </Paper>
      </Form>
    </Container>
  )
}
