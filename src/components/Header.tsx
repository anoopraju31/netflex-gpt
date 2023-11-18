import { useNavigate } from 'react-router-dom'
import { LOGO_IMG } from '../utills/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utills/firebase'

const Header = () => {
	const navigate = useNavigate()
	const handleSignOut = () => {
		signOut(auth)
			.then(() => navigate('/'))
			.catch((error) => navigate('/error'))
	}
	return (
		<header className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
			<div className=''>
				<img
					className='w-28 sm:w-32 md:w-36 lg:w-44'
					src={LOGO_IMG}
					alt='logo'
				/>
			</div>

			<div className=''>
				<button
					onClick={handleSignOut}
					className='py-1 px-4 text-white bg-red-600 rounded-lg font-medium'>
					Sign Out
				</button>
			</div>
		</header>
	)
}

export default Header
