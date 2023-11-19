import { Movie } from '../features/movieApi'
import MovieCard from './MovieCard'

interface MovieListProps {
	title: string
	movies: Movie[] | undefined
}

const MovieList = (props: MovieListProps) => {
	const { title, movies } = props
	if (!movies) return <div></div>

	return (
		<section className='text-white'>
			<div className='p-4'>
				<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
					{title}
				</h2>
			</div>
			<div className=''>
				<MovieCard
					posterId={movies[0].poster_path}
					title={movies[0].original_title}
				/>
			</div>
		</section>
	)
}

export default MovieList
