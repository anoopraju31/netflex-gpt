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
			<div className='w-full px-4 flex gap-4 overflow-x-auto scrollbar-hide'>
				{movies?.map((movie) => (
					<MovieCard
						key={movie.id}
						posterId={movie.poster_path}
						title={movie.original_title}
					/>
				))}
			</div>
		</section>
	)
}

export default MovieList
