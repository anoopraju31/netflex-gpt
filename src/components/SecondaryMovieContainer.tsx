import {
	useGetNowPlayingMoviesQuery,
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetTrendingMoviesQuery,
} from '../features/movieApi'
import MovieList from './MovieList'

const SecondaryMovieContainer = () => {
	const { data: nowPlayingMovies } = useGetNowPlayingMoviesQuery(1)
	const { data: trendingMovies } = useGetTrendingMoviesQuery(1)
	const { data: popularMovies } = useGetPopularMoviesQuery(1)
	const { data: topRatedMovies } = useGetTopRatedMoviesQuery(1)

	return (
		<div className='relative w-full md:-top-10 lg:-top-28 xl:-top-36 z-50'>
			<MovieList title='Now Playing' movies={nowPlayingMovies} />
			<MovieList title='Trending' movies={trendingMovies} />
			<MovieList title='Popular' movies={popularMovies} />
			<MovieList title='Top Rated' movies={topRatedMovies} />
			<MovieList title='Now Playing' movies={nowPlayingMovies} />
		</div>
	)
}

export default SecondaryMovieContainer
