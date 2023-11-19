import HeroMovieContainer from '../components/HeroMovieContainer'
import SecondaryMovieContainer from '../components/SecondaryMovieContainer'

const BrowsePage = () => {
	return (
		<main className='max-w-[1536px] min-h-screen mx-auto bg-black'>
			<HeroMovieContainer />
			<SecondaryMovieContainer />
		</main>
	)
}

export default BrowsePage
