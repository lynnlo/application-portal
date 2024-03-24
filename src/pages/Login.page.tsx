/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Center, Container } from '@mantine/core'
import { useForm } from '@mantine/form'

import { Register } from '../components/register/Register'
import { Login } from '../components/login/Login'

import supabase from '../supabase'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [register, setRegister] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    validate: {
      email: (value) => value.includes('@'),
      password: (value) => value.length >= 6,
    },
  })

  React.useEffect(() => {
    if (location.state) {
      setRegister(location.state.register)
    }
  }, [location])

  React.useEffect(() => {
    setError(null)
    form.reset()
  }, [register])

  const handleRegister = () => {
    supabase.auth
      .signUp({
        email: form.values.email,
        password: form.values.password,
      })
      .then((res) => {
        if (res.error) {
          setError(res.error.message)
        } else {
          navigate('/')
        }
      })
  }

  const handleLogin = () => {
    supabase.auth
      .signInWithPassword({
        email: form.values.email,
        password: form.values.password,
      })
      .then((res) => {
        if (res.error) {
          setError(res.error.message)
        } else {
          navigate('/')
        }
      })
  }

  return (
    <>
      <Center h="92vh">
        {register ? (
          <Register form={form} handleRegister={handleRegister} error={error} />
        ) : (
          <Login form={form} handleLogin={handleLogin} error={error} />
        )}
      </Center>
    </>
  )
}
