import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store'
import { signOut } from 'firebase/auth'
import { LOGO_IMG } from '../utills/constants'
import { auth } from '../utills/firebase'
import useAuthStateChange from '../hooks/useAuthStateChange'

const Header = () => {
	const user = useAppSelector((state) => state.user)
	const navigate = useNavigate()

	useAuthStateChange()

	const handleSignOut = () => {
		signOut(auth)
			.then(() => navigate('/'))
			.catch((error) => navigate('/error'))
	}
	return (
		<header className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
			<div className='max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between'>
				<div className=''>
					<img
						className='w-28 sm:w-32 md:w-36 lg:w-44'
						src={LOGO_IMG}
						alt='logo'
					/>
				</div>

				{user && (
					<div className='hidden md:flex items-center gap-2'>
						<button
							onClick={handleSignOut}
							className='py-1 px-4 text-white bg-red-600 rounded-lg font-medium'>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
