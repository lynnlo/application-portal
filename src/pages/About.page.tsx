/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Center, Flex } from '@mantine/core'
import { About } from '../components/about/About'
import { Hero } from '../components/hero/Hero'

export function AboutPage() {
  return (
    <>
      <Center h="100%">
        <Flex direction="row" align="center" justify="center">
          <Hero />
          <About />
        </Flex>
      </Center>
    </>
  )
}
