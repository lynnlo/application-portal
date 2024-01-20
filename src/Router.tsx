import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { AppShell } from '@mantine/core'

import { HomePage } from './pages/Home.page'
import { PositionsPage } from './pages/Positions.page'
import { AboutPage } from './pages/About.page'
import { LoginPage } from './pages/Login.page'
import { ApplyPage } from './pages/Apply.page'

import AppBar from './components/appbar/AppBar'

export function Router() {
  return (
    <BrowserRouter>
      <AppShell header={{ height: '8vh' }} w="100vw" h="100vh" display="flex">
        <AppShell.Header>
          <AppBar />
        </AppShell.Header>
        <AppShell.Main w="100vw">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/positions" element={<PositionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/apply" element={<ApplyPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  )
}
