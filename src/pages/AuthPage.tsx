import { useRef, useState } from 'react'
import {
	BG_IMG,
	SIGN_IN,
	SIGN_IN_FORM_MESSAGE,
	SIGN_IN_FORM_TOGGLE_BUTTON,
	SIGN_UP,
	SIGN_UP_FORM_MESSAGE,
	SIGN_UP_FORM_TOGGLE_BUTTON,
} from '../utills/constants'
import FormField from '../components/FormField'
import { checkValidateData } from '../utills/validation'

const AuthPage = () => {
	const [isSignIn, setIsSignIn] = useState<boolean>(true)
	const nameRef = useRef<HTMLInputElement | null>(null)
	const emailRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)

	const toggleAuthForm = () => setIsSignIn((prev) => !prev)
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const name = nameRef.current?.value || ''
		const email = emailRef.current?.value || ''
		const password = passwordRef.current?.value || ''

		const message = checkValidateData(isSignIn, name, email, password)

		console.log(message)
	}

	return (
		<main className='relative'>
			<div className='w-full h-screen'>
				<img
					className='w-full h-full object-cover '
					src={BG_IMG}
					alt='login background'
				/>
			</div>

			<section className='absolute top-0 left-0 right-0 w-full h-screen flex justify-center sm:items-center bg-black sm:bg-black/30'>
				<form
					onSubmit={handleSubmit}
					className='w-full sm:w-96 my-20 sm:mt-0 p-6 sm:p-8 sm:rounded-lg flex flex-col bg-black/80 text-white'>
					{/* Title */}
					<h1 className='font-medium text-3xl pb-8'>
						{isSignIn ? SIGN_IN : SIGN_UP}
					</h1>

					{/* Nqme */}
					{!isSignIn && (
						<FormField
							label='Name'
							name='name'
							type='text'
							placeholder='full name'
							inputRef={nameRef}
						/>
					)}

					{/* Eamil */}
					<FormField
						label='Email'
						name='email'
						type='email'
						placeholder='email address'
						inputRef={emailRef}
					/>

					{/* Password */}
					<FormField
						label='Password'
						name='password'
						type='password'
						placeholder='password'
						inputRef={passwordRef}
					/>

					<div className='mt-2 mb-8'>
						<button
							type='submit'
							className='w-full mb-3 px-6 py-2 font-medium bg-red-600 rounded-md'>
							{isSignIn ? SIGN_IN : SIGN_UP}
						</button>

						<div className='flex justify-between text-xs text-zinc-400'>
							<div className='flex items-center gap-1'>
								<input type='checkbox' id='remember-me' />
								<label htmlFor='remember-me'> Remember me </label>
							</div>

							<p
								tabIndex={0}
								className='border-b border-b-transparent hover:border-b-zinc-400'>
								Need help?
							</p>
						</div>
					</div>

					{/* Switch between sign in and sign up page */}
					<p className='text-sm text-zinc-400'>
						<span>
							{isSignIn ? SIGN_IN_FORM_MESSAGE : SIGN_UP_FORM_MESSAGE}
						</span>
						<button
							type='button'
							tabIndex={0}
							onClick={toggleAuthForm}
							className='ml-1 text-white hover:border-b hover:border-b-white'>
							{isSignIn
								? SIGN_IN_FORM_TOGGLE_BUTTON
								: SIGN_UP_FORM_TOGGLE_BUTTON}
						</button>
						.
					</p>
				</form>
			</section>
		</main>
	)
}

export default AuthPage
