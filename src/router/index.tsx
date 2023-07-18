import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Main } from '../pages/Main/Main'
import { NotFound } from '../pages/NotFound/NotFound'
import { Premiere } from '../pages/Premiere/Premiere'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'premiere',
        element: <Premiere />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
