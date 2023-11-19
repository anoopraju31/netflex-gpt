import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Movie } from '../features/movieApi'
import MovieCard from './MovieCard'
import { useRef, useEffect, useState } from 'react'

interface MovieListProps {
	title: string
	movies: Movie[] | undefined
}

const MovieList = (props: MovieListProps) => {
	const { title, movies } = props
	const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
		useState<boolean>(true)
	const [isNextButtonDisabled, setIsNextButtonDisabled] =
		useState<boolean>(false)
	const carouselRef = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!carouselRef.current) return
			if (
				carouselRef.current.scrollLeft >=
				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth - 20
			) {
				setIsNextButtonDisabled(true)
				return
			}
			if (carouselRef.current.scrollLeft <= 0) {
				setIsPreviousButtonDisabled(true)
				return
			}
			if (isPreviousButtonDisabled) setIsPreviousButtonDisabled(false)
			if (isNextButtonDisabled) setIsNextButtonDisabled(false)
		}

		if (!carouselRef.current) return
		const carousel = carouselRef.current
		carousel.addEventListener('scroll', handleScroll)

		return () => {
			carousel.removeEventListener('scroll', handleScroll)
		}
	}, [isNextButtonDisabled, isPreviousButtonDisabled])

	if (!movies) return <div></div>

	const scrollToPrevious = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const scrollToNext = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}

	return (
		<section className='text-white'>
			<div className='p-4'>
				<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
					{title}
				</h2>
			</div>

			<div className='relative group'>
				<div
					ref={carouselRef}
					className='w-full px-4 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-300 ease-in-out'>
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							posterId={movie.poster_path}
							title={movie.original_title}
						/>
					))}
				</div>

				<div className='invisible group-hover:visible'>
					{/* previous button */}
					<button
						type='button'
						disabled={isPreviousButtonDisabled}
						onClick={scrollToPrevious}
						className='absolute top-0 left-0 h-full w-14 flex justify-center items-center rounded-r-3xl bg-black/40 active:bg-white/40 disabled:hidden disabled:cursor-default text-4xl hover:text-6xl'>
						<div className='p-3'>
							<GrFormPrevious />
						</div>
					</button>

					{/* next button */}
					<button
						type='button'
						disabled={isNextButtonDisabled}
						onClick={scrollToNext}
						className='absolute top-0 right-0 h-full w-12 flex justify-center items-center rounded-l-3xl bg-black/40 active:bg-white/40 disabled:hidden disabled:cursor-default text-4xl hover:text-6xl'>
						<div className='p-3'>
							<GrFormNext />
						</div>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MovieList
