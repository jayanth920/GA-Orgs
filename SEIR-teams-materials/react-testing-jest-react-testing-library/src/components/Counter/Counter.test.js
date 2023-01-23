import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

// const setup = () => {

// };

test('should display the title "Counter"', () => {
	render(<Counter />);
	expect(screen.getByText('Counter')).toBeVisible();
});

test('should start the count at 0', () => {
	render(<Counter />);
	expect(screen.getByText('Current Count: 0')).toBeVisible();
});

test('should increment counter by 1 when "+" is clicked', () => {
	render(<Counter />);

	fireEvent.click(screen.getByText('+'));
	expect(screen.getByText('Current Count: 1')).toBeVisible();
	fireEvent.click(screen.getByText('+'));
	expect(screen.getByText('Current Count: 2')).toBeVisible();
});

test('should decrement counter by 1 when "-" is clicked', () => {
	render(<Counter />);
	fireEvent.click(screen.getByText('-'));
	expect(screen.getByText('Current Count: -1')).toBeVisible();
});
