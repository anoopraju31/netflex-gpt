import useMovieListScroll from '../hooks/useMovieListScroll'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Movie } from '../features/movieApi'
import MovieCard from './MovieCard'

interface MovieListProps {
	title: string
	movies: Movie[] | undefined
}

const MovieList = (props: MovieListProps) => {
	const { title, movies } = props
	const {
		carouselRef,
		isPreviousButtonDisabled,
		isNextButtonDisabled,
		scrollToPrevious,
		scrollToNext,
	} = useMovieListScroll()

	if (!movies) return <div></div>

	return (
		<section className='text-white'>
			<div className='p-4'>
				<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
					{title}
				</h2>
			</div>

			<div className='relative group px-4'>
				<div
					ref={carouselRef}
					className='w-full flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-300 ease-in-out'>
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							posterId={movie.poster_path}
							title={movie.original_title}
						/>
					))}
				</div>

				<div className='invisible group-hover:visible'>
					<button
						type='button'
						disabled={isPreviousButtonDisabled}
						onClick={scrollToPrevious}
						aria-label='previous button'
						className='absolute top-0 left-0 h-full w-14 flex justify-center items-center rounded-r-3xl bg-black/40 active:bg-white/40 disabled:hidden disabled:cursor-default text-4xl hover:text-6xl'>
						<GrFormPrevious />
						<span className='sr-only'> previous</span>
					</button>

					<button
						type='button'
						disabled={isNextButtonDisabled}
						onClick={scrollToNext}
						aria-label='next button'
						className='absolute top-0 right-0 h-full w-12 flex justify-center items-center rounded-l-3xl bg-black/40 active:bg-white/40 disabled:hidden disabled:cursor-default text-4xl hover:text-6xl'>
						<GrFormNext />
						<span className='sr-only'> next</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MovieList
