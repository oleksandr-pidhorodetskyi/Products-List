import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		currentProduct: {},
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//GET ALL
		getProductsStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getProductsSuccess: (state, action) => {
			state.isFetching = false;
			state.products = action.payload;
		},
		getProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		// GET PRODUCT
		getOneProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getOneProductSuccess: (state, action) => {
			state.isFetching = false;
			state.currentProduct = action.payload;
		},
		getOneProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//DELETE
		deleteProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload),
				1
			);
		},
		deleteProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//ADD
		addProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products.push(action.payload);
		},
		addProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//UPDATE
		updateProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		updateProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products[
				state.products.findIndex((item) => item._id === action.payload.id)
			] = action.payload.product;
			state.currentProduct = action.payload.product;
		},
		updateProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//ADD COMMENT IN PRODUCT
		addCommentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addCommentSuccess: (state, action) => {
			state.isFetching = false;
			state.products[
				state.products.findIndex((item) => item._id === action.payload.id)
			] = action.payload.product;
			state.currentProduct = action.payload.product;
		},
		addCommentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//DELETE COMMENT
		deleteCommentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteCommentSuccess: (state, action) => {
			state.isFetching = false;
			const commentIndex = state.currentProduct.comments.findIndex(
				(item) => item._id === action.payload.id
			);
			state.products.find((item) => {
				if (item._id === action.payload.productId) {
					return item.comments.splice(commentIndex, 1);
				}
			});
			state.currentProduct.comments.splice(commentIndex, 1);
		},
		deleteCommentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	getProductsStart,
	getProductsSuccess,
	getProductsFailure,
	getOneProductStart,
	getOneProductSuccess,
	getOneProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	addProductStart,
	addProductSuccess,
	addProductFailure,
	addCommentFailure,
	addCommentStart,
	addCommentSuccess,
	deleteCommentStart,
	deleteCommentSuccess,
	deleteCommentFailure,
} = productSlice.actions;

export default productSlice.reducer;
