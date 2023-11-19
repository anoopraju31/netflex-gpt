import {
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetTrendingMoviesQuery,
} from '../features/movieApi'

const SecondaryMovieContainer = () => {
	const { data: popular } = useGetPopularMoviesQuery(1)
	const { data: topRated } = useGetTopRatedMoviesQuery(1)
	const { data: trending } = useGetTrendingMoviesQuery(1)

	console.log('popular', popular)
	console.log('topRated', topRated)
	console.log('trending', trending)

	return <div>SecondaryMovieContainer</div>
}

export default SecondaryMovieContainer
