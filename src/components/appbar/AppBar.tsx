import React from 'react'
import {
  Box,
  Group,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Text,
  Drawer,
  Stack,
  Title,
} from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { IconBrightnessDown, IconMenu2, IconStack } from '@tabler/icons-react'
import { User } from '@supabase/supabase-js'

import supabase from '../../supabase'

import classes from './AppBar.module.css'
import Logo from '../logo/Logo'

export default function AppBarComponent() {
  const navigate = useNavigate()
  const [user, setUser] = React.useState<User>()
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = React.useState(false)

  React.useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user)
      }
    })
  }, [])

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

            {user ? (
              <>
                <Text> Welcome {user.phone} </Text>
                <Button
                  variant="subtle"
                  color="grey"
                  onClick={() => {
                    supabase.auth.signOut()
                    setUser(undefined)
                  }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </Group>

          {/* Mobile */}
          <Group hiddenFrom="md">
            <ActionIcon
              variant="subtle"
              color="light"
              onClick={() => {
                setOpened((v) => !v)
              }}
            >
              <IconMenu2 />
            </ActionIcon>
          </Group>
        </Group>
        <Drawer
          opened={opened}
          onClose={() => {
            setOpened(false)
          }}
          title={<Title order={3}> Grecco Co. Careers </Title>}
        >
          <Stack justify="space-between" h="90vh">
            <Stack gap="md" align="start">
              <Button
                variant="subtle"
                className={classes.link}
                onClick={() => {
                  setOpened(false)
                  navigate('/')
                }}
              >
                <Text> Home </Text>
              </Button>
              <Button
                variant="subtle"
                className={classes.link}
                onClick={() => {
                  setOpened(false)
                  navigate('/positions')
                }}
              >
                <Text> Positions </Text>
              </Button>
              <Button
                variant="subtle"
                className={classes.link}
                onClick={() => {
                  setOpened(false)
                  navigate('/about')
                }}
              >
                <Text> About Us </Text>
              </Button>
            </Stack>
            <Stack>
              <Button
                variant="outline"
                color="light"
                onClick={() => {
                  setOpened(false)
                  navigate('login', { state: { register: true } })
                }}
              >
                Register
              </Button>
              <Button
                color="blue"
                onClick={() => {
                  setOpened(false)
                  navigate('login', { state: { register: false } })
                }}
              >
                Login
              </Button>
              <Text ta="center" size="xs" hiddenFrom="sm">
                © 2024 Grecco Co.
              </Text>
            </Stack>
          </Stack>
        </Drawer>
      </header>
    </Box>
  )
}
