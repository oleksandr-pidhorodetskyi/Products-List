import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../contexts/ModalContext';

const ProductTopBar = ({ id, product }) => {
	const { setModal, modal } = useContext(ModalContext);
	const navigate = useNavigate();
	return (
		<div className='d-flex justify-content-between align-items-center mb-4'>
			<button
				onClick={() => navigate(-1)}
				type='button'
				className='btn btn-secondary'
			>
				<i className='bi bi-arrow-left-circle'></i>
			</button>
			<button
				onClick={() =>
					setModal({
						...modal,
						editModal: true,
						info: { id: id, product: product },
					})
				}
				type='button'
				className='btn btn-warning'
			>
				<i className='bi bi-pen'></i>
			</button>
		</div>
	);
};

export default ProductTopBar;
