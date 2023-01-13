import React from 'react';
import { formatDate } from '../../../helpers/formatDate';

const Comment = ({ data }) => {
	console.log(data.date);
	return (
		<div
			className='comment__container p-2 rounded-3 border border-2 shadow-sm'
			style={{
				background:
					'linear-gradient(90deg, rgba(252,252,252,1) 34%, #f4f2f2 100%)',
			}}
		>
			<div className='comment__top d-flex align-items-center justify-content-between'>
				<span className='fs-6'>{formatDate(Date.parse(data.date))}</span>
				<button type='button' className='btn btn-outline-danger'>
					<i className='bi bi-trash'></i>
				</button>
			</div>
			<p>{data.description}</p>
		</div>
	);
};

export default Comment;
