import React from 'react'
import { Box, Group, Button, useMantineColorScheme, ActionIcon, Text } from '@mantine/core'

import { Link, useNavigate } from 'react-router-dom'

import { IconBrightnessDown, IconMenu2, IconStack } from '@tabler/icons-react'

import classes from './AppBar.module.css'
import Logo from '../logo/Logo'

export default function AppBarComponent() {
  const navigate = useNavigate()
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Box mih="8vh">
      <header className={classes.header}>
        <Group justify="space-between">
          <Logo />

          {/* Desktop */}
          <Group justify="space-evenly" visibleFrom="md">
            <Link className={classes.link} to="/">
              <Text> Home </Text>
            </Link>
            <Link className={classes.link} to="/positions">
              <Text> Positions </Text>
            </Link>
            <Link className={classes.link} to="/about">
              <Text> About Us </Text>
            </Link>
          </Group>

          <Group justify="space-evenly" visibleFrom="md">
            <ActionIcon
              variant="subtle"
              color="light"
              onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            >
              <IconBrightnessDown />
            </ActionIcon>

            <Button
              color="blue"
              onClick={() => {
                navigate('login', { state: { register: false } })
              }}
            >
              Login
            </Button>

            <Button
              variant="outline"
              color="light"
              onClick={() => {
                navigate('login', { state: { register: true } })
              }}
            >
              Register
            </Button>
          </Group>

          {/* Mobile */}
          <Group hiddenFrom="md">
            <ActionIcon variant="subtle" color="light">
              <IconMenu2 />
            </ActionIcon>
          </Group>
        </Group>
      </header>
    </Box>
  )
}
