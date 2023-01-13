import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/apiCalls';
import ModalWindowBase from './ModalWindowBase';

const DeleteCommentModal = ({ modal, setModal, info }) => {
	const dispatch = useDispatch();

	return (
		<ModalWindowBase
			isOppened={modal.deleteModal}
			onModalClose={() => setModal({ ...modal, deleteModal: false })}
			onSuccess={() => {
				// deleteProduct(info, dispatch);
				setModal({ ...modal, deleteModal: false, info: null });
			}}
			title='Are you sure you want to delete?'
		/>
	);
};

export default DeleteCommentModal;
