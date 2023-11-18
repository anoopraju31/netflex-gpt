import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
		getNowPlayingMovies: builder.query({
			query: (page: number) => `/now_playing?page=${page}`,
		}),
	}),
})

export const { useGetNowPlayingMoviesQuery } = movieApi

export default movieApi
