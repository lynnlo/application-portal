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
  Container,
  Space,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { UseFormReturnType, Form } from '@mantine/form'

import classes from './Register.module.css'

export interface RegisterProps {
  form: UseFormReturnType<{
    email: string
    password: string
    name: string
  }>
  handleRegister: () => void
  error: string | null
}

export const Register = ({ form, handleRegister, error }: RegisterProps) => {
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
      <Form form={form}>
        <Paper w={360} p="lg" shadow="md" radius="md" withBorder>
          <Stack>
            <TextInput {...form.getInputProps('email')} label="Email" type="email" required />
            <PasswordInput {...form.getInputProps('password')} label="Password" required />
            <Group gap="sm" justify="space-between">
              <Checkbox label="Remember me" />
            </Group>
            <Button type="submit" radius="lg" fullWidth onClick={handleRegister}>
              Sign Up
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
