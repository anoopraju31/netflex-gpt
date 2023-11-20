import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchText: '',
		moviesList: [],
	},
	reducers: {
		addSearchText: (state, action) => {
			state.searchText = action.payload
		},
		addMovieList: (state, action) => {
			state.moviesList = action.payload
		},
	},
})

export const { addSearchText, addMovieList } = searchSlice.actions
export default searchSlice.reducer
