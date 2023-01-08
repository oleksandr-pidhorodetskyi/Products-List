import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
	return (
		<div className=''>
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
