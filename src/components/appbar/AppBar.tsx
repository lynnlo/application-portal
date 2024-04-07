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
  Center,
  Container,
} from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { IconBrightnessDown, IconCircle, IconMenu2, IconStack } from '@tabler/icons-react'
import { User } from '@supabase/supabase-js'

import supabase from '../../supabase'

import classes from './AppBar.module.css'
import Logo from '../logo/Logo'
import Spacer from '../spacer/Spacer'

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
    <Box mih="6vh">
      <header className={classes.header}>
        <Group justify="space-around" visibleFrom="md">
          {/* Desktop */}
          <Group justify="space-evenly">
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

          <Group
            pos="absolute"
            top="0vh"
            bg="var(--mantine-color-body)"
            p={20}
            style={{
              borderRadius: '100%',
              aspectRatio: '1/1',
              borderBottom:
                'calc(0.0625rem* var(--mantine-scale)) solid var(--_app-shell-border-color)',
            }}
            visibleFrom="md"
          >
            <Logo alwaysSmall style={{ width: '8vh', height: '8vh' }} />
          </Group>

          <Group justify="space-evenly">
            <ActionIcon
              name="dark mode toggle"
              variant="subtle"
              color="light"
              onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            >
              <IconBrightnessDown />
            </ActionIcon>

            {user ? (
              <>
                <Text> {user.email} </Text>
                <Button
                  name="log out"
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
                  name="log in"
                  color="blue"
                  onClick={() => {
                    navigate('login', { state: { register: false } })
                  }}
                >
                  Login
                </Button>

                <Button
                  name="register"
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
        </Group>

        {/* Mobile */}
        <Group justify="space-between" hiddenFrom="md">
          <Logo />
          <Group hiddenFrom="md">
            <ActionIcon
              name="dark mode toggle"
              variant="subtle"
              color="light"
              onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            >
              <IconBrightnessDown />
            </ActionIcon>
            <ActionIcon
              name="open menu"
              variant="subtle"
              color="light"
              onClick={() => {
                setOpened((v) => !v)
              }}
            >
              <IconMenu2 />
            </ActionIcon>
          </Group>
          <Drawer
            opened={opened}
            onClose={() => {
              setOpened(false)
            }}
            title="Grecco Co. Careers"
          >
            <Stack justify="space-between" h="90vh">
              <Stack gap="md" align="start">
                <Button
                  name="home page"
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
                  name="positions page"
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
                  name="about page"
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
                {user ? (
                  <>
                    <Button
                      name="log out"
                      variant="subtle"
                      color="grey"
                      onClick={() => {
                        supabase.auth.signOut()
                        setUser(undefined)
                        setOpened(false)
                      }}
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      name="register"
                      variant="outline"
                      color="light"
                      onClick={() => {
                        navigate('login', { state: { register: true } })
                        setOpened(false)
                      }}
                    >
                      Register
                    </Button>
                    <Button
                      name="login"
                      color="blue"
                      onClick={() => {
                        navigate('login', { state: { register: false } })
                        setOpened(false)
                      }}
                    >
                      Login
                    </Button>
                  </>
                )}
                <Text ta="center" size="xs" hiddenFrom="sm">
                  © 2024 Grecco Co.
                </Text>
              </Stack>
            </Stack>
          </Drawer>
        </Group>
      </header>
    </Box>
  )
}
