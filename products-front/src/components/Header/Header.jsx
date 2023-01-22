import React from 'react';
import logo from './img/shop-logo.png';
const Header = () => {
	return (
		<header
			className='shadow-sm d-flex 
			align-items-center justify-content-center mb-4'
			style={{ height: '5vh' }}
		>
			<img className='h-50 ' src={logo} alt='shop logo' />
		</header>
	);
};

export default Header;
