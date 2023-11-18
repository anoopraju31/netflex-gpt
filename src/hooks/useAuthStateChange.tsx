import { useEffect } from 'react'
import { useAppDispatch } from '../store'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { addUser, removeUser } from '../features/userSlice'

const useAuthStateChange = () => {
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
}

export default useAuthStateChange
