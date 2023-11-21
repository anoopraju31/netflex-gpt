import {
	useGetMovieByGenreQuery,
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
	const { data: actionMovies } = useGetMovieByGenreQuery(28)
	const { data: horrorMovies } = useGetMovieByGenreQuery(27)
	const { data: sciFicMovies } = useGetMovieByGenreQuery(878)
	const { data: dramaMovies } = useGetMovieByGenreQuery(18)
	const { data: animeMovies } = useGetMovieByGenreQuery(16)
	const { data: thrillerMovies } = useGetMovieByGenreQuery(53)

	return (
		<div className='relative w-full md:-top-10 lg:-top-28 xl:-top-36 z-50 pb-20'>
			<MovieList title='Now Playing' movies={nowPlayingMovies} />
			<MovieList title='Trending' movies={trendingMovies} />
			<MovieList title='Popular' movies={popularMovies} />
			<MovieList title='Top Rated' movies={topRatedMovies} />
			<MovieList title='Action' movies={actionMovies} />
			<MovieList title='Horror' movies={horrorMovies} />
			<MovieList title='Sci-Fi' movies={sciFicMovies} />
			<MovieList title='Drama' movies={dramaMovies} />
			<MovieList title='Anime' movies={animeMovies} />
			<MovieList title='Triller' movies={thrillerMovies} />
		</div>
	)
}

export default SecondaryMovieContainer
