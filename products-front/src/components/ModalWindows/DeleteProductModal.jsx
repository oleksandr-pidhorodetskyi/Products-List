import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/apiCalls';
import ModalWindowBase from './ModalWindowBase';

const DeleteProductModal = ({ modal, setModal, info }) => {
	const dispatch = useDispatch();

	return (
		<ModalWindowBase
			isOppened={modal.deleteModal}
			onModalClose={() => setModal({ ...modal, deleteModal: false })}
			onSuccess={() => {
				deleteProduct(info, dispatch);
				setModal({ ...modal, deleteModal: false, info: null });
			}}
			title='Are you sure you want to delete?'
		/>
	);
};

export default DeleteProductModal;
