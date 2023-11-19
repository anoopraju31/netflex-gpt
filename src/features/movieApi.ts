import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Dates {
	maximum: string
	minimum: string
}

export interface Movie {
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

interface VideoItem {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}

interface VideoList {
	id: number
	results: VideoItem[]
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
		baseUrl: 'https://api.themoviedb.org/3',
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
			query: (page: number = 1) => `/movie/now_playing?page=${page}`,
			transformResponse: (res: MovieResponse) => res?.results,
			serializeQueryArgs: ({ endpointName }) => endpointName,
			merge: (currentCache, newItems: Movie[]) => {
				currentCache.push(...newItems)
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg
			},
		}),
		getMovieTrailer: builder.query<VideoItem, number>({
			query: (movieId: number) => `/movie/${movieId}/videos`,
			transformResponse: (res: VideoList) => {
				const filteredData = res?.results?.filter(
					(video) => video?.type === 'Trailer',
				)
				const trailer = filteredData.length ? filteredData[0] : res?.results[0]

				return trailer
			},
		}),
		getPopularMovies: builder.query<Movie[], number | void>({
			query: (page: number = 1) => `/movie/popular?page=${page}`,
			transformResponse: (res: MovieResponse) => res?.results,
			serializeQueryArgs: ({ endpointName }) => endpointName,
			merge: (currentCache, newItems: Movie[]) => {
				currentCache.push(...newItems)
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg
			},
		}),
		getTopRatedMovies: builder.query<Movie[], number | void>({
			query: (page: number = 1) => `/movie/top_rated?page=${page}`,
			transformResponse: (res: MovieResponse) => res?.results,
			serializeQueryArgs: ({ endpointName }) => endpointName,
			merge: (currentCache, newItems: Movie[]) => {
				currentCache.push(...newItems)
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg
			},
		}),
		getTrendingMovies: builder.query<Movie[], number | void>({
			query: (page: number = 1) => `/trending/movie/day?page=${page}`,
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

export const {
	useGetNowPlayingMoviesQuery,
	useGetMovieTrailerQuery,
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useLazyGetTopRatedMoviesQuery,
	useGetTrendingMoviesQuery,
} = movieApi

export default movieApi
