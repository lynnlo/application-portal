import React from 'react'
import { Box, Group, Image, Button, useMantineColorScheme, ActionIcon } from '@mantine/core'

import { Link } from 'react-router-dom'

import { IconBrightnessDown } from '@tabler/icons-react'

import classes from './AppBar.module.css'
import logo_mobile from './grecco_logo_mobile.png'
import logo_desktop from './grecco_logo_desktop.png'

export default function AppBarComponent() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between">
          <Group visibleFrom="sm">
            <Image src={logo_desktop} width={200} height={70} />
          </Group>
          <Group hiddenFrom="sm">
            <Image src={logo_mobile} width={70} height={70} />
          </Group>

          {/* Desktop */}
          <Group justify="space-evenly" visibleFrom="sm">
            <Link className={classes.link} to="/">
              Home
            </Link>
            <Link className={classes.link} to="/home">
              Position
            </Link>
            <Link className={classes.link} to="/home">
              Contact
            </Link>
          </Group>

          <Group justify="space-evenly">
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
