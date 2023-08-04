export const endpoints = {
  main: '/',
  premiere: 'premiere',
  media: 'media',
  films: 'films',
  actors: 'actors',
  news: 'news',
  collections: 'collections',
  categories: 'categories',
} as const

export const BaseMovieDBAssetsUrl = import.meta.env.VITE_MOVIEDB_ASSETS
