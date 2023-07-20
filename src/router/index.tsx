import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Main } from '../pages/Main/Main'
import { NotFound } from '../pages/NotFound/NotFound'
import { Premiere } from '../pages/Premiere/Premiere'
import { FilmPage } from '../pages/FilmPage/FilmPage'
import { News } from '../pages/News/News'
import { OneNews } from '../pages/OneNews/OneNews'
import { Collections } from '../pages/Collections/Collections'

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
      {
        path: 'films/:slug',
        element: <FilmPage />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news/:slug',
        element: <OneNews />,
      },
      {
        path: 'collections',
        element: <Collections />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])