import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Router } from './Router'
import { theme } from './theme'

export default function App() {
  return (
    <ParallaxProvider>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </ParallaxProvider>
  )
}
