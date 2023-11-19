import { Movie } from '../features/movieApi'

interface MovieListProps {
	title: string
	movies: Movie[] | undefined
}

const MovieList = (props: MovieListProps) => {
	const { title, movies } = props
	return (
		<section className='text-white'>
			<div className='p-4'>
				<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
					{title}
				</h2>
			</div>
			<div className=''></div>
		</section>
	)
}

export default MovieList
