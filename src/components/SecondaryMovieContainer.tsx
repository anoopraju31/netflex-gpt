import React from 'react'
import {
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
} from '../features/movieApi'

const SecondaryMovieContainer = () => {
	const { data: popular } = useGetPopularMoviesQuery(1)
	const { data: topRated } = useGetTopRatedMoviesQuery(1)

	console.log('popular', popular)
	console.log('topRated', topRated)

	return <div>SecondaryMovieContainer</div>
}

export default SecondaryMovieContainer
