import { BG_IMG } from '../utills/constants'

const SearchPage = () => {
	return (
		<div className='relative'>
			<div className='fixed top-0 left-0 right-0 w-full h-screen'>
				<img
					className='w-full h-full object-cover'
					src={BG_IMG}
					alt='login background'
				/>
			</div>
		</div>
	)
}

export default SearchPage
