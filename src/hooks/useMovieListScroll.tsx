import { useEffect, useRef, useState } from 'react'

const useMovieListScroll = () => {
	const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
		useState<boolean>(true)
	const [isNextButtonDisabled, setIsNextButtonDisabled] =
		useState<boolean>(false)
	const carouselRef = useRef<HTMLInputElement>(null)

	const handleScroll = () => {
		if (!carouselRef.current) return

		setIsPreviousButtonDisabled(carouselRef.current.scrollLeft === 0)
		setIsNextButtonDisabled(
			carouselRef.current.scrollLeft >=
				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth - 20,
		)
	}

	useEffect(() => {
		const carousel = carouselRef.current

		if (carousel) carousel.addEventListener('scroll', handleScroll)

		return () => {
			if (carousel) carousel.removeEventListener('scroll', handleScroll)
		}
	})

	const scrollToPrevious = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const scrollToNext = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}

	return {
		carouselRef,
		isPreviousButtonDisabled,
		isNextButtonDisabled,
		scrollToPrevious,
		scrollToNext,
	}
}

export default useMovieListScroll
