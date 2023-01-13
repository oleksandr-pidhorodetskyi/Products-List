import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/apiCalls';

const AddComment = ({ id }) => {
	const dispatch = useDispatch;
	const [comment, setComment] = useState({ description: '' });
	const handleChange = (e) => {
		setComment({ description: e.target.value });
	};
	const handleClick = () => {
		addComment(id, comment, dispatch);

		setComment('');
	};
	useEffect(() => {
		console.log(comment);
	}, [comment]);
	return (
		<div className='d-flex gap-2 mb-3'>
			<input
				className='d-block ps-2 rounded border border-1 bg-light w-50'
				name='description'
				type='text'
				value={comment.description}
				placeholder='New comment...'
				onChange={handleChange}
			/>
			<button onClick={handleClick} type='button' className='btn btn-success'>
				<i className='bi bi-plus-circle'></i>
			</button>
		</div>
	);
};

export default AddComment;
