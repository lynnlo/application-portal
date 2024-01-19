/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box, Center, Title, Text, Stack, Paper } from '@mantine/core'

import AppBar from '../components/appbar/AppBar'

import { Filter, data, Position } from '../data/positions'

export function AboutPage() {
  return (
    <>
      <Paper p="lg" withBorder shadow="lg">
        <Title>About</Title>
        <Text>
          We're a small company that's focused on bring people the best coffee at a fair price.
        </Text>
      </Paper>
    </>
  )
}
