import * as React from 'react';
import { useState, useCallback } from 'react';

function Counter() {
	const [number, setNumber] = useState(0);

	const onIncrease = useCallback(() => {
		setNumber(number => number + 1);
	}, []);

	const onDecrease = useCallback(() => {
		setNumber(number => number - 1);
	}, []);

	return (
		<div>
			<h2>{number}</h2>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

export default Counter;

