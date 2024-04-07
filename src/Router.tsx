import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { AppShell, Flex, Overlay, Text } from '@mantine/core'

import { HomePage } from './pages/Home.page'
import { PositionsPage } from './pages/Positions.page'
import { AboutPage } from './pages/About.page'
import { LoginPage } from './pages/Login.page'
import { ApplyPage } from './pages/Apply.page'

import AppBar from './components/appbar/AppBar'

export function Router() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppShell.Header withBorder>
          <AppBar />
        </AppShell.Header>
        <AppShell.Main pt="6vh">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/positions" element={<PositionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/apply/:jobId" element={<ApplyPage />} />
          </Routes>
        </AppShell.Main>
        <AppShell.Footer withBorder={false} bg="transparent">
          <Flex direction="column" mih="100%" align="center" justify="end" visibleFrom="sm">
            <Text m="md" size="sm">
              © 2024 Greco Co. All rights reserved.
            </Text>
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </BrowserRouter>
  )
}
