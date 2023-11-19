import React from 'react'
import { useGetPopularMoviesQuery } from '../features/movieApi'

const SecondaryMovieContainer = () => {
	const { data } = useGetPopularMoviesQuery(1)

	console.log(data)

	return <div>SecondaryMovieContainer</div>
}

export default SecondaryMovieContainer
