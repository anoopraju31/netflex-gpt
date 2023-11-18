import { useRef, useState } from 'react'
import { BG_IMG } from '../utills/constants'

const AuthPage = () => {
	const [isSignIn, setIsSignIn] = useState(true)
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)

	const toggleAuthForm = () => setIsSignIn((prev) => !prev)

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
				<form className='w-full sm:w-96 my-20 sm:mt-0 p-6 sm:p-8 sm:rounded-lg flex flex-col bg-black/80 text-white'>
					{/* Title */}
					<h1 className='font-medium text-3xl pb-8'> Sign In </h1>

					{/* Nqme */}
					<div className='my-2'>
						<label htmlFor='name' className='sr-only'>
							Name
						</label>
						<input
							ref={nameRef}
							type='text'
							name='name'
							placeholder='full name'
							className='w-full px-4 py-2 bg-zinc-700 outline-none rounded-md'
						/>
					</div>

					{/* Eamil */}
					<div className='my-2'>
						<label htmlFor='email' className='sr-only'>
							Email
						</label>
						<input
							ref={emailRef}
							type='email'
							name='email'
							placeholder='email address'
							className='w-full px-4 py-2 bg-zinc-700 outline-none rounded-md'
						/>
					</div>

					{/* Password */}
					<div className='my-2'>
						<label htmlFor='password' className='sr-only'>
							Password
						</label>
						<input
							ref={passwordRef}
							type='password'
							name='password'
							placeholder='password'
							className='w-full px-4 py-2 bg-zinc-700 outline-none rounded-md'
						/>
					</div>

					<div className='mt-2 mb-8'>
						<button
							type='submit'
							className='w-full mb-2 px-6 py-2 font-medium bg-red-600 rounded-md'>
							{isSignIn ? 'Sign In' : 'Sign Up'}
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
							{isSignIn ? 'New to Netflix? ' : 'Already registered? '}{' '}
						</span>
						<button
							type='button'
							tabIndex={0}
							onClick={toggleAuthForm}
							className='text-white hover:border-b hover:border-b-white'>
							{isSignIn ? 'Sign up now' : 'Sign in now'}
						</button>
						.
					</p>
				</form>
			</section>
		</main>
	)
}

export default AuthPage
