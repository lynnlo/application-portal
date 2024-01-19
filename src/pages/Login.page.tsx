/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Center, Container } from '@mantine/core'

import AppBar from '../components/appbar/AppBar'
import { Register } from '../components/register/Register'
import { Login } from '../components/login/Login'

export function LoginPage() {
  const location = useLocation()
  const [register, setRegister] = React.useState(false)

  React.useEffect(() => {
    if (location.state) {
      setRegister(location.state.register)
    }
  }, [location])

  return (
    <>
      <Center h="100%">{register ? <Register /> : <Login />}</Center>
    </>
  )
}
