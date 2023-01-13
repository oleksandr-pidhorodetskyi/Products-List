import React, { useEffect } from 'react';
import ProductsList from '../components/Products/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/apiCalls';
import Loader from '../components/Loader';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
// import ModalWindowBase from '../components/ModalWindows/ModalWindowBase';
import { ModalContext } from '../contexts/ModalContext';
import DeleteProductModal from '../components/ModalWindows/DeleteProductModal';
import AddProductModal from '../components/ModalWindows/AddProductModal';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const isFetching = useSelector((state) => state.isFetching);
	const [optionSort, setOptionSort] = useState('standart');
	const [sortedProducts, setSortedProducts] = useState([]);
	const [modal, setModal] = useState({
		deleteModal: false,
		addgModal: false,
		info: null,
	});

	useEffect(() => {
		getProducts(dispatch);
	}, [dispatch]);

	useEffect(() => {
		const sorted = [...products];
		if (optionSort === 'standart') {
			sorted.sort((a, b) => {
				return a.name > b.name
					? 1
					: a.name === b.name && a.count < b.count
					? 1
					: -1;
			});
		}
		if (optionSort === 'name') {
			sorted.sort((a, b) => {
				return a.name > b.name ? 1 : -1;
			});
		} else if (optionSort === 'count') {
			sorted.sort((a, b) => {
				return a.count < b.count ? 1 : -1;
			});
		}
		setSortedProducts(sorted);
	}, [products, optionSort]);
	return (
		<div>
			<DeleteProductModal modal={modal} setModal={setModal} info={modal.info} />
			<AddProductModal modal={modal} setModal={setModal} />
			<ModalContext.Provider
				value={{
					setModal,
					modal,
				}}
			>
				<div className='container-md'>
					<SearchBar setOptionSort={setOptionSort} />
					{isFetching ? <Loader /> : <ProductsList products={sortedProducts} />}
				</div>
			</ModalContext.Provider>
		</div>
	);
};

export default Home;
