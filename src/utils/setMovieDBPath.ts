const baseUrl = import.meta.env.VITE_MOVIEDB_ASSETS
export const setMovieDBPath = (path: string | undefined): string => (path ? `${baseUrl}${path}` : '')
