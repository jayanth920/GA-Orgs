import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const add = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>Counter</h1>
			<button className='plus' onClick={add}>
				+
			</button>
			<span className='number'>Current Count: {count}</span>
			<button className='minus' onClick={minus}>
				-
			</button>
		</div>
	);
}

export default Counter;
