import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { PositionsPage } from './pages/Positions.page'
import { AboutPage } from './pages/About.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/positions',
    element: <PositionsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
