import { useEffect, useRef, useState } from 'react'

const useMovieListScroll = () => {
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

	const scrollToPrevious = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const scrollToNext = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}

	return {
		isPreviousButtonDisabled,
		isNextButtonDisabled,
		scrollToPrevious,
		scrollToNext,
		carouselRef,
	}
}

export default useMovieListScroll
