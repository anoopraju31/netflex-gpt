import { LOGO_IMG } from '../utills/constants'

const Header = () => {
	return (
		<header className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
			<div className=''>
				<img
					className='w-28 sm:w-32 md:w-36 lg:w-44'
					src={LOGO_IMG}
					alt='logo'
				/>
			</div>
		</header>
	)
}

export default Header
