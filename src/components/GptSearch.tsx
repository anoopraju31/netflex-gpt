import { useRef } from 'react'
import openai from '../utills/openai'

const GptSearch = () => {
	const searchRef = useRef<HTMLInputElement | null>(null)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!searchRef.current?.value) return

		const searchText = searchRef.current.value

		console.log(searchText)

		const gptResults = await openai.chat.completions.create({
			messages: [
				{
					role: 'user',
					content:
						'Act as a Movie Recommendation System and suggest some movies for the query : ' +
						searchText +
						'. only give me names of 5 movies, coma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya',
				},
			],
			model: 'gpt-3.5-turbo',
		})

		console.log(gptResults)

		searchRef.current.value = ''
	}

	return (
		<div className='pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 flex flex-col items-center'>
			<form
				onSubmit={handleSubmit}
				className='flex-shrink-0 p-4 w-full flex justify-center'>
				<input
					ref={searchRef}
					type='text'
					placeholder='What would you like to watch today?'
					className='w-full max-w-2xl p-3 sm:p-4 rounded-tl-xl rounded-bl-xl text-gray-900 text-sm sm:text-base sm:font-medium outline-none'
				/>
				<button
					type='submit'
					className='py-3 sm:py-4 px-4 sm:px-6 bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed outline-none border-none text-white rounded-tr-xl rounded-br-xl text-sm sm:text-base sm:font-medium'>
					Search
				</button>
			</form>
		</div>
	)
}

export default GptSearch
