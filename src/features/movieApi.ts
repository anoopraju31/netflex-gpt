import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Dates {
	maximum: string
	minimum: string
}

interface Movie {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

interface MovieResponse {
	dates: Dates
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/movie',
		prepareHeaders: (headers) => {
			headers.set('accept', 'application/json')
			headers.set(
				'Authorization',
				'Bearer ' + process.env.REACT_APP_TMDB_API_KEY,
			)
		},
	}),
	endpoints: (builder) => ({
		getNowPlayingMovies: builder.query<Movie[], number | void>({
			query: (page: number = 1) => `/now_playing?page=${page}`,
			transformResponse: (res: MovieResponse) => res?.results,
			serializeQueryArgs: ({ endpointName }) => endpointName,
			merge: (currentCache, newItems: Movie[]) => {
				currentCache.push(...newItems)
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg
			},
		}),
	}),
})

export const { useGetNowPlayingMoviesQuery } = movieApi

export default movieApi
