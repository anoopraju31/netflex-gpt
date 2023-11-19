import { useGetNowPlayingMoviesQuery } from '../features/movieApi'
import MovieList from './MovieList'

const SecondaryMovieContainer = () => {
	const { data: nowPlaying } = useGetNowPlayingMoviesQuery(1)

	return (
		<div>
			<MovieList title='Now Playing' movies={nowPlaying} />
		</div>
	)
}

export default SecondaryMovieContainer
