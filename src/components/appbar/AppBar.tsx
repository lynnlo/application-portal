import React from 'react'
import { Box, Group, Button, useMantineColorScheme, ActionIcon, Text } from '@mantine/core'

import { Link } from 'react-router-dom'

import { IconBrightnessDown } from '@tabler/icons-react'

import classes from './AppBar.module.css'
import Logo from '../logo/Logo'

export default function AppBarComponent() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between">
          <Logo />

          {/* Desktop */}
          <Group justify="space-evenly" visibleFrom="md">
            <Link className={classes.link} to="/">
              <Text> Home </Text>
            </Link>
            <Link className={classes.link} to="/home">
              <Text> Positions </Text>
            </Link>
            <Link className={classes.link} to="/home">
              <Text> Register </Text>
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

            <Button color="blue">Login</Button>

            <Button variant="outline" color="light">
              Register
            </Button>
          </Group>
        </Group>
      </header>
    </Box>
  )
}
