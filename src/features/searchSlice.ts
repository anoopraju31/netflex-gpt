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
		addSearchResult: (state, action) => action.payload,
	},
})

export const { addSearchResult } = searchSlice.actions
export default searchSlice.reducer
