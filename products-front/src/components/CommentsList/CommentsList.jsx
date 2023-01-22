import React from 'react';
import Comment from './components/Comment';

const CommentsList = ({ data }) => {
	return (
		<section
			className='p-3 rounded-3 h-50 w-100
			d-flex flex-column gap-3 fs-5
			shadow'
			style={{
				background:
					'linear-gradient(90deg, rgba(239,239,241,1) 34%, rgba(255,255,255,1) 100%)',
			}}
		>
			{data.map((el) => (
				<Comment key={el._id} data={el} />
			))}
		</section>
	);
};

export default CommentsList;
