import {
	IMG_CDN_URL,
	YOUTUBE_FEATURES,
	YOUTUBE_VIDEO_URL,
} from '../utills/constants'

interface BackgroundVideoProps {
	movieId: number
	posterId: string
}

const BackgroundVideo = (props: BackgroundVideoProps) => {
	const { movieId, posterId } = props

	return (
		<div className='absolute sm:relative top-0 w-full'>
			<div className='hidden sm:block'>
				<iframe
					className='w-full aspect-video'
					src={YOUTUBE_VIDEO_URL('e-mLxyLz9Hk')}
					title='YouTube video player'
					allow={YOUTUBE_FEATURES}></iframe>
			</div>
			<div className='w-full sm:hidden'>
				<img
					className='w-full aspect-video'
					src={IMG_CDN_URL + posterId}
					alt=''
				/>
			</div>
		</div>
	)
}

export default BackgroundVideo
