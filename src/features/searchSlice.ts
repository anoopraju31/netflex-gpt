import { createSlice } from '@reduxjs/toolkit'

interface searchInitialState {
	searchText: string
	moviesList: string[]
}

const initialState: searchInitialState = {
	searchText: '',
	moviesList: [],
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addSearchText: (state, action) => {
			state.searchText = action.payload
		},
		addMoviesList: (state, action) => {
			state.moviesList = action.payload
		},
	},
})

export const { addSearchText, addMoviesList } = searchSlice.actions
export default searchSlice.reducer
