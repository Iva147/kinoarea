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
  ChosenCollection,
  SearchResult,
  Profile,
  ProfileMain,
  ProfileSetting,
  UserReviews,
  Friends,
  Actors,
  Actor,
  loadActor,
} from '../pages'
import { ActorImages } from '../pages/ActorImages/ActorImages'

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
        path: 'films',
        element: <SearchResult />,
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
        children: [{ path: ':slug', element: <ChosenCollection /> }],
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
            element: <Friends />,
          },
          {
            path: 'reviews',
            element: <UserReviews />,
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
      {
        path: 'actors',
        element: <Actors />,
      },
      {
        path: 'actors/:actorId',
        element: <Actor />,
        loader: loadActor,
        children: [
          {
            path: 'images',
            element: <ActorImages />,
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
