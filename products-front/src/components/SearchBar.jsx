import React, { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const SearchBar = ({ setOptionSort }) => {
	const { setModal, modal } = useContext(ModalContext);

	const handleSort = (e) => {
		setOptionSort(e.target.value);
	};

	return (
		<div className='d-flex align-items-center justify-content-between mb-4'>
			<div>
				<label htmlFor='sort'>Sort by:</label>
				<select
					className='ms-2 border border-1 rounded px-2
                    bg-light'
					onChange={handleSort}
					id='sort'
				>
					<option className='bgc-black' value='standart'>
						Standart
					</option>
					<option className='' value='name'>
						Name
					</option>
					<option className='' value='count'>
						Count
					</option>
				</select>
			</div>
			<button
				onClick={() =>
					setModal({
						...modal,
						addModal: true,
					})
				}
				type='button'
				className='btn btn-success'
			>
				Add
			</button>
		</div>
	);
};

export default SearchBar;
