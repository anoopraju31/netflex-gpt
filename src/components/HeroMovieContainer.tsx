import React from 'react'
import VideoTitle from './VideoTitle'
import BackgroundVideo from './BackgroundVideo'
import { useGetNowPlayingMoviesQuery } from '../features/movieApi'

const HeroMovieContainer = () => {
	const { data: movies } = useGetNowPlayingMoviesQuery(1)

	if (!movies) return <div></div>

	const movie = movies[0]
	const { original_title, overview, id, backdrop_path } = movie

	return (
		<section className='relative z-10'>
			<VideoTitle title={original_title} overview={overview} />
			<BackgroundVideo movieId={id} posterId={backdrop_path} />
		</section>
	)
}

export default HeroMovieContainer
