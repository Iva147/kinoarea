import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import {
  Main,
  NotFound,
  Premiere,
  FilmPage,
  News,
  OneNews,
  Collections,
  SearchResult,
  Profile,
  ProfileMain,
  ProfileSetting,
} from '../pages'

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
      {
        path: 'search/result',
        element: <SearchResult />,
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileMain />,
          },
          {
            path: 'setting',
            element: <ProfileSetting />,
          },
          {
            path: 'friends',
            element: <div></div>,
          },
          {
            path: 'reviews',
            element: <div></div>,
          },
          {
            path: 'likes',
            element: <div></div>,
          },
          {
            path: 'comments',
            element: <div></div>,
          },
          {
            path: 'films',
            element: <div></div>,
          },
          {
            path: 'famous',
            element: <div></div>,
          },
          {
            path: '*',
            element: <Navigate to={'/profile'} />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
