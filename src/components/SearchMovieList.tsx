import React from 'react'
import { useGetMovieByNameQuery } from '../features/movieApi'
import MovieCard from './MovieCard'

interface SearchMovieListProps {
	movie: string
}

const SearchMovieList = (props: SearchMovieListProps) => {
	const { movie } = props
	const { data: movies } = useGetMovieByNameQuery(movie)

	if (!movies) return <div></div>

	return (
		<>
			{movies?.map((movie) => (
				<MovieCard
					key={movie.id}
					posterId={movie.poster_path}
					title={movie.original_title}
				/>
			))}
		</>
	)
}

export default SearchMovieList
