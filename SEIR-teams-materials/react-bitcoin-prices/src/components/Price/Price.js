import { useEffect } from 'react';
import './Price.css';

const coindeskURL = 'https://api.coindesk.com/v1/bpi/currentprice/';

const Price = ({ price, setPrice }) => {
	const currency = '';
	useEffect(() => {
		const url = `${coindeskURL}${currency}.json`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let newPrice = res.bpi[currency].rate;
				setPrice(newPrice);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h1>Bitcoin price in {currency}</h1>
			<div className='price'>{price}</div>
		</div>
	);
};

export default Price;
