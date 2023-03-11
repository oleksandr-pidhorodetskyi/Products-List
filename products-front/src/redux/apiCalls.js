import axios from 'axios';
import {
	getProductsFailure,
	getProductsStart,
	getProductsSuccess,
	getOneProductStart,
	getOneProductSuccess,
	getOneProductFailure,
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	updateProductFailure,
	updateProductStart,
	updateProductSuccess,
	addProductFailure,
	addProductStart,
	addProductSuccess,
	addCommentFailure,
	addCommentStart,
	addCommentSuccess,
	deleteCommentFailure,
	deleteCommentStart,
	deleteCommentSuccess,
} from './reducers/products/productsSlice';

const BASE_URL = 'http://localhost:5000/api/';
const request = axios.create({
	baseURL: BASE_URL,
});

export const getProducts = async (dispatch) => {
	dispatch(getProductsStart());
	try {
		const res = await request.get('/products');
		dispatch(getProductsSuccess(res.data));
	} catch (err) {
		dispatch(getProductsFailure());
	}
};
export const getOneProduct = async (id, dispatch) => {
	dispatch(getOneProductStart());
	try {
		const res = await request.get(`/products/${id}`);
		dispatch(getOneProductSuccess(res.data));
	} catch (err) {
		dispatch(getOneProductFailure());
	}
};
export const addProduct = async (product, dispatch) => {
	dispatch(addProductStart());
	try {
		const res = await request.post(`/products`, product);
		dispatch(addProductSuccess(res.data));
	} catch (err) {
		dispatch(addProductFailure());
	}
};

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await request.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch (err) {
		dispatch(deleteProductFailure());
	}
};

export const updateProduct = async (id, product, dispatch) => {
	dispatch(updateProductStart());
	try {
		const res = await request.put(`/products/${id}`, product);
		dispatch(updateProductSuccess({ id, product: res.data }));
	} catch (err) {
		dispatch(updateProductFailure());
	}
};

export const addComment = async (id, product, dispatch) => {
	dispatch(addCommentStart());
	try {
		const res = await request.post(`/comments/${id}`, product);
		dispatch(addCommentSuccess({ id, product: res.data }));
	} catch (err) {
		dispatch(addCommentFailure());
	}
};
export const deleteComment = async (id, productId, dispatch) => {
	dispatch(deleteCommentStart());
	try {
		await request.delete(`/comments/${productId}/${id}`);
		dispatch(deleteCommentSuccess({ id, productId }));
	} catch (err) {
		dispatch(deleteCommentFailure());
	}
};
