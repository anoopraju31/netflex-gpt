import { useNavigate } from 'react-router-dom'
import { LOGO_IMG } from '../utills/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { useAppDispatch, useAppSelector } from '../store'
import { useEffect } from 'react'
import { addUser, removeUser } from '../features/userSlice'

const Header = () => {
	const user = useAppSelector((state) => state.user)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			const pathname = window.location.pathname

			if (user) {
				const { displayName, uid, email, photoURL } = user
				dispatch(addUser({ displayName, uid, email, photoURL }))
				navigate(pathname === '/' ? '/browse' : pathname)
			} else {
				dispatch(removeUser())
				navigate('/')
			}
		})

		// unsubscribe will be called when the component unmounts
		return () => unsubscribe()
	}, [dispatch, navigate])
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

			{user && (
				<div className=''>
					<button
						onClick={handleSignOut}
						className='py-1 px-4 text-white bg-red-600 rounded-lg font-medium'>
						Sign Out
					</button>
				</div>
			)}
		</header>
	)
}

export default Header
