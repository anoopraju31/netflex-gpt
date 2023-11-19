import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
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

			<div className='relative group'>
				<div className='w-full px-4 flex gap-4 overflow-x-auto scrollbar-hide'>
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							posterId={movie.poster_path}
							title={movie.original_title}
						/>
					))}
				</div>

				<div className='invisible group-hover:visible'>
					{/* previous button */}
					<button className='absolute top-0 left-0 h-full w-14 flex justify-center items-center rounded-r-3xl bg-black/80 active:bg-white/40'>
						<div className='p-3'>
							<GrFormPrevious size={24} />
						</div>
					</button>

					{/* next button */}
					<button className='absolute top-0 right-0 h-full w-12 flex justify-center items-center rounded-l-3xl bg-black/80 active:bg-white/40'>
						<div className='p-3'>
							<GrFormNext size={24} />
						</div>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MovieList
