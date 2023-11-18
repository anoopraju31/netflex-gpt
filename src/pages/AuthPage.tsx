import { BG_IMG } from '../utills/constants'

const AuthPage = () => {
	return (
		<main className='relative'>
			<section className='w-full h-screen'>
				<img
					className='w-full h-full object-cover '
					src={BG_IMG}
					alt='login background'
				/>
			</section>
		</main>
	)
}

export default AuthPage
