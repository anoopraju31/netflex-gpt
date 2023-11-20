import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchText: '',
		moviesList: null,
	},
	reducers: {
		addSearchResult: (state, action) => action.payload,
	},
})

export const { addSearchResult } = searchSlice.actions
export default searchSlice.reducer
