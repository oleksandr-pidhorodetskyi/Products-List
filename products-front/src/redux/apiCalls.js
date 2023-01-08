import axios from 'axios';
import {
	getProductsFailure,
	getProductsStart,
	getProductsSuccess,
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	// updateProductFailure,
	// updateProductStart,
	// updateProductSuccess,
	// addProductFailure,
	// addProductStart,
	// addProductSuccess,
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
// export const addProduct = async (product, dispatch) => {
// 	dispatch(addProductStart());
// 	try {
// 		const res = await request.post(`/products`, product);
// 		dispatch(addProductSuccess(res.data));
// 	} catch (err) {
// 		dispatch(addProductFailure());
// 	}
// };

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await request.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch (err) {
		dispatch(deleteProductFailure());
	}
};

// export const updateProduct = async (id, product, dispatch) => {
// 	dispatch(updateProductStart());
// 	try {
// 		// update
// 		dispatch(updateProductSuccess({ id, product }));
// 	} catch (err) {
// 		dispatch(updateProductFailure());
// 	}
// };
