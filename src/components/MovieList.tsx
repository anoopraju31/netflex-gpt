import { Movie } from '../features/movieApi'

interface MovieListProps {
	title: string
	movies: Movie[] | undefined
}

const MovieList = (props: MovieListProps) => {
	const { title, movies } = props
	return <div>MovieList</div>
}

export default MovieList
