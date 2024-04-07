/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Center, Container } from '@mantine/core'
import { Apply } from '../components/apply/Apply'

export function ApplyPage() {
  const location = useLocation()

  return (
    <>
      <Center h="94vh">
        <Apply />
      </Center>
    </>
  )
}
