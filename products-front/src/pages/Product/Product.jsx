import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './product.css';
import CommentsList from '../../components/CommentsList/CommentsList';
import Loader from '../../components/Loader';
import DeleteCommentModal from '../../components/ModalWindows/DeleteCommentModal';
import EditProductModal from '../../components/ModalWindows/EditProductModal';
import ProductTopBar from '../../components/ProductTopBar';
import { ModalContext } from '../../contexts/ModalContext';
import { addComment, getOneProduct } from '../../redux/apiCalls';

const Product = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.currentProduct);
	const isFetching = useSelector((state) => state.isFetching);
	const [comment, setComment] = useState({ description: '' });
	const [modal, setModal] = useState({
		deleteModal: false,
		editModal: false,
		info: null,
	});
	useEffect(() => {
		getOneProduct(id, dispatch);
	}, [dispatch]);

	const handleChangeComment = (e) => {
		setComment({ description: e.target.value });
	};
	const handleClickComment = () => {
		addComment(id, comment, dispatch);
		setComment('');
	};
	return (
		<main className='mb-4' style={{ flexGrow: 1 }}>
			{modal.info?.product && (
				<EditProductModal modal={modal} setModal={setModal} info={modal.info} />
			)}
			<DeleteCommentModal modal={modal} setModal={setModal} info={modal.info} />
			<ModalContext.Provider
				value={{
					setModal,
					modal,
					productId: id,
				}}
			>
				<div className='container-md'>
					{isFetching || product?.size?.width === undefined ? (
						<Loader />
					) : (
						<div
							className='product__container w-75 m-auto
							bg-light shadow p-3 bg-body rounded'
							style={{
								background:
									'linear-gradient(90deg, #e3ffe792 0%, #d9e7ff 100%)',
							}}
						>
							<ProductTopBar id={id} product={product} />
							<div className='product__main d-flex gap-5 ms-4 mb-4'>
								<div className='product__img rounded-3'>
									<img
										className='h-100 rounded-3'
										style={{ width: '300px' }}
										src={product.imageUrl}
										alt='product'
									/>
								</div>
								<div
									className='product__info
									p-3 rounded-3 h-50 w-50
									d-flex flex-column gap-3 fs-5
									shadow'
									style={{
										background:
											'linear-gradient(90deg, rgba(239,239,241,1) 34%, rgba(255,255,255,1) 100%)',
									}}
								>
									<div className='product__name'>
										<span className='me-2 fw-bolder fs-4 text-muted'>
											Name:
										</span>
										<h2 className='d-inline'>{product.name}</h2>
									</div>
									<div className='product__size'>
										<span className='me-2 d-block fw-bolder fs-4 text-muted'>
											Size:
										</span>
										<div className='ms-2'>
											<p className='m-0'>
												<span className='me-2 fw-bolder text-muted'>
													Width:
												</span>
												{product.size.width}
											</p>
											<p className='m-0'>
												<span className='me-2 fw-bolder text-muted'>
													Height:
												</span>
												{product.size.height}
											</p>
										</div>
									</div>
									<div className='product__weight '>
										<span className='me-2 fw-bolder fs-4 text-muted'>
											Weight:
										</span>
										{product.weight}
									</div>
									<div className='product__count'>
										<span className='me-2 fw-bolder fs-4 text-muted'>
											Count:
										</span>
										{product.count}
									</div>
								</div>
							</div>
							<div className='product__comments ms-2'>
								<h2>Comments:</h2>
								<div className='d-flex gap-2 mb-3'>
									<input
										className='d-block ps-2 rounded border border-1 bg-light w-50'
										type='text'
										value={comment.description}
										placeholder='New comment...'
										onChange={handleChangeComment}
									/>
									<button
										onClick={handleClickComment}
										type='button'
										className='btn btn-success'
										disabled={comment.description === ''}
									>
										<i className='bi bi-plus-circle'></i>
									</button>
								</div>
								<CommentsList data={product.comments} />
							</div>
						</div>
					)}
				</div>
			</ModalContext.Provider>
		</main>
	);
};

export default Product;
