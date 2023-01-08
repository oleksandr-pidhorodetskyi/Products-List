import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		comments: [],
		isFetching: false,
		error: false,
	},
	reducers: {},
});

export const {} = commentSlice.actions;

export default commentSlice.reducer;
