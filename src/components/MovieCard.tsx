import { IMG_CDN_URL } from '../utills/constants'

interface MovieCardProps {
	posterId: string
	title: string
}

const MovieCard = (props: MovieCardProps) => {
	const { posterId, title } = props
	return (
		<div className='w-36 md:w-48 relative group flex-shrink-0 cursor-pointer flex'>
			<img
				className='rounded-xl w-full'
				src={IMG_CDN_URL + posterId}
				alt={title}
			/>

			<div className='absolute w-full h-full group-hover:bg-black/40'></div>
		</div>
	)
}

export default MovieCard
