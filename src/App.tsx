import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Router } from './Router'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ParallaxProvider>
        <Router />
      </ParallaxProvider>
    </MantineProvider>
  )
}
