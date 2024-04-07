/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Center, Container } from '@mantine/core'
import { useForm } from '@mantine/form'

import { Register } from '../components/register/Register'
import { Login } from '../components/login/Login'
import { ForgotPassword } from '../components/forgot/Forgot'

import supabase from '../supabase'

export function ForgotPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => value.includes('@'),
    },
  })

  const handleForgot = () => {
    navigate('/')
  }

  return (
    <>
      <Center h="94vh">
        <ForgotPassword form={form} handleForgot={handleForgot} />
      </Center>
    </>
  )
}
