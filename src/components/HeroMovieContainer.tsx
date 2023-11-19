import React from 'react'
import VideoTitle from './VideoTitle'
import BackgroundVideo from './BackgroundVideo'
import { useGetNowPlayingMoviesQuery } from '../features/movieApi'

const HeroMovieContainer = () => {
	const { data: movies } = useGetNowPlayingMoviesQuery(1)

	if (!movies) return <div></div>

	const movie = movies[0]
	const { id, backdrop_path } = movie

	return (
		<section className=''>
			<VideoTitle />
			<BackgroundVideo movieId={id} posterId={backdrop_path} />
		</section>
	)
}

export default HeroMovieContainer
