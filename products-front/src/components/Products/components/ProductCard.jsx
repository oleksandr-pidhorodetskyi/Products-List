import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../contexts/ModalContext';

const ProductCard = ({ data }) => {
	const { setModal, modal } = useContext(ModalContext);
	const navigate = useNavigate();

	return (
		<tr>
			<td
				onClick={() => navigate(`/products/${data._id}`)}
				className='card__img'
			>
				<img
					className='h-50'
					style={{ width: '100px', height: '200px' }}
					src={data.imageUrl}
					alt='product'
				/>
			</td>
			<td
				onClick={() => navigate(`/products/${data._id}`)}
				className='card__name'
			>
				{data.name}
			</td>
			<td
				onClick={() => navigate(`/products/${data._id}`)}
				className='card__size'
			>
				<p>W: {data.size.width}</p>
				<p>H: {data.size.height}</p>
			</td>
			<td
				onClick={() => navigate(`/products/${data._id}`)}
				className='card__weight '
			>
				{data.weight}
			</td>
			<td
				onClick={() => navigate(`/products/${data._id}`)}
				className='card__count'
			>
				{data.count}
			</td>
			<td className='card__buttons'>
				<div className='d-flex align-items-center'>
					<button
						onClick={() =>
							setModal({
								...modal,
								deleteModal: true,
								info: data._id,
							})
						}
						type='button'
						className='btn btn-outline-danger'
					>
						<i className='bi bi-trash'></i>
					</button>
				</div>
			</td>
		</tr>
	);
};

export default ProductCard;
