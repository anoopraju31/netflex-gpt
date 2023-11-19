import React from 'react'

const GptSearch = () => {
	return (
		<div className='pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 flex flex-col items-center'>
			<form className='flex-shrink-0 p-4 w-full flex justify-center'>
				<input
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
