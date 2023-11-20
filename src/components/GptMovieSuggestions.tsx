import React from 'react'
import { useAppSelector } from '../store'
import SearchMovieList from './SearchMovieList'

const GptMovieSuggestions = () => {
	const searchText = useAppSelector((state) => state.search?.searchText)
	const moviesList = useAppSelector((state) => state.search?.moviesList)

	if (!moviesList || !searchText) return <div />

	return (
		<section className='p-4 md:mt-10 lg:mt-16'>
			<h1 className='mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white'>
				Search result for "{searchText}"
			</h1>
			<div className='mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
				{moviesList?.map((movie: string) => (
					<SearchMovieList key={movie} movie={movie} />
				))}
			</div>
		</section>
	)
}

export default GptMovieSuggestions
