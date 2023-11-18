import React, { useRef, useState } from 'react'
import { useAppDispatch } from '../store'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { auth } from '../utills/firebase'
import { checkValidateData } from '../utills/validation'
import { USER_AVATAR } from '../utills/constants'
import { addUser } from '../features/userSlice'

const useAuth = () => {
	const [isSignIn, setIsSignIn] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const nameRef = useRef<HTMLInputElement | null>(null)
	const emailRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
	const dispatch = useAppDispatch()

	const toggleAuthForm = () => setIsSignIn((prev) => !prev)
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const name = nameRef.current?.value || ''
		const email = emailRef.current?.value || ''
		const password = passwordRef.current?.value || ''

		const message = checkValidateData(isSignIn, name, email, password)
		setErrorMessage(message)

		if (message) return

		if (isSignIn) {
			// Sign In
			signInWithEmailAndPassword(auth, email, password).catch((error) => {
				setErrorMessage(error.message)
			})
		} else {
			// Sign Up
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user

					// Add user's name to account
					updateProfile(user, {
						displayName: name,
						photoURL: USER_AVATAR,
					})
						.then(() => {
							const user = auth.currentUser

							if (user) {
								const { uid, displayName, email, photoURL } = user
								dispatch(addUser({ uid, displayName, email, photoURL }))
							}
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})
				})
				.catch((error) => {
					setErrorMessage(error.message)
				})
		}
	}
	return {
		isSignIn,
		nameRef,
		emailRef,
		passwordRef,
		toggleAuthForm,
		handleSubmit,
		errorMessage,
	}
}
export default useAuth
