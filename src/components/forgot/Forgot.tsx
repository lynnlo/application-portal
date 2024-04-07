import React from 'react'
import {
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
  Button,
  Group,
  Checkbox,
  Container,
  Space,
} from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import classes from './Forgot.module.css'

export interface ForgotProps {
  form: UseFormReturnType<{
    email: string
  }>
  handleForgot: () => void
}
export const ForgotPassword = ({ form, handleForgot }: ForgotProps) => {
  return (
    <Container fluid>
      <Paper w={360} p="lg" shadow="md" radius="md" withBorder>
        <Stack>
          <Title order={3}>Forgot Password</Title>
          <Text size="sm"> Send a password reset link to your email. </Text>
          <TextInput label="Email" type="email" required />
          <Button
            name="send reset email"
            type="submit"
            radius="lg"
            fullWidth
            onClick={handleForgot}
          >
            Send Reset Email
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
