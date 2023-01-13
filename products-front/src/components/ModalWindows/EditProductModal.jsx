import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/apiCalls';
import ModalWindowBase from './ModalWindowBase';

const EditProductModal = ({ modal, setModal, info }) => {
	var { imageUrl, name, count, size, weight } = info.product;
	const [inputs, setInputs] = useState({
		imageUrl: imageUrl,
		name: name,
		count: count,
		width: size.width,
		height: size.height,
		weight: weight,
	});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	// const clearInputs = () => {
	// 	setInputs({
	// 		imageUrl: '',
	// 		name: '',
	// 		count: 0,
	// 		width: '',
	// 		height: '',
	// 		weight: '',
	// 	});
	// };
	return (
		<ModalWindowBase
			isOppened={modal.editModal}
			onModalClose={() => {
				setModal({ ...modal, editModal: false });
			}}
			onSuccess={() => {
				const { imageUrl, name, count, width, height, weight } = inputs;
				const res = {
					imageUrl,
					name,
					count,
					size: { width: width, height: height },
					weight,
				};
				console.log(res);
				updateProduct(info.id, res, dispatch);
				setModal({ ...modal, editModal: false });
			}}
			title='Edit product'
		>
			<form className='d-flex gap-5 '>
				<div className='d-flex flex-column gap-3'>
					<div className='product__field'>
						<label htmlFor='img'>Image:</label>
						<input
							className='d-block ps-2 ms-2'
							id='img'
							name='imageUrl'
							type='text'
							value={inputs.imageUrl}
							placeholder='Image URL'
							onChange={handleChange}
						/>
					</div>
					<div className='product__field'>
						<label htmlFor='name'>Name:</label>
						<input
							className='d-block ps-2 ms-2'
							id='name'
							name='name'
							type='text'
							value={inputs.name}
							placeholder='Product name'
							onChange={handleChange}
						/>
					</div>
					<div className='product__field'>
						<label htmlFor='count'>Count:</label>
						<input
							className='d-block ps-2 ms-2'
							id='count'
							name='count'
							type='text'
							value={inputs.count}
							placeholder='Count'
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='d-flex flex-column gap-3'>
					<div className='product__field'>
						<span>Size:</span>
						<div className='ps-3'>
							<label htmlFor='count'>Width:</label>
							<input
								className='d-block ps-2 ms-2'
								id='width'
								name='width'
								type='text'
								value={inputs.width}
								placeholder='Width'
								onChange={handleChange}
							/>
							<label htmlFor='count'>Height:</label>
							<input
								className='d-block ps-2 ms-2'
								id='height'
								name='height'
								type='text'
								value={inputs.height}
								placeholder='Height'
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='product__field'>
						<label htmlFor='count'>Weight:</label>
						<input
							className='d-block ps-2 ms-2'
							id='weight'
							name='weight'
							type='text'
							value={inputs.weight}
							placeholder='Weight'
							onChange={handleChange}
						/>
					</div>
				</div>
			</form>
		</ModalWindowBase>
	);
};

export default EditProductModal;
