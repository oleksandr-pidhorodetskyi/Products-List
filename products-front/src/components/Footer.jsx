import React from 'react';

const Footer = () => {
	return (
		<footer
			className='d-flex 
			align-items-center justify-content-center
			'
			style={{
				height: '5vh',
				background: 'linear-gradient(90deg, #e3ffe792 0%, #d9e7ff 100%)',
			}}
		>
			<span>&#169; Copyright 2023</span>
		</footer>
	);
};

export default Footer;
