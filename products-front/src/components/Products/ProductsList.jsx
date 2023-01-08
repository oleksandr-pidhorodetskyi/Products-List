import React from 'react';
import ProductCard from './components/ProductCard';

const ProductsList = ({ products }) => {
	return (
		<article className=''>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Image</th>
						<th scope='col'>Name</th>
						<th scope='col'>Size</th>
						<th scope='col'>Weight</th>
						<th scope='col'>Count</th>
						<th scope='col'>Buttons</th>
					</tr>
				</thead>
				<tbody className='table-group-divider'>
					{products.map((post) => (
						<ProductCard key={post._id} data={post} />
					))}
				</tbody>
			</table>
		</article>
	);
};

export default React.memo(ProductsList);
