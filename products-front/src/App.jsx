import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Product from './pages/Product/Product';
function App() {
	return (
		<div className='d-flex flex-column min-vh-100'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:id' element={<Product />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
