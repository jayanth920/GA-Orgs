import { render, screen } from '@testing-library/react';

import HelloWorld from './HelloWorld';

// We will describe a block of tests
test('Hello world component', () => {
	// First render the component under test
	render(<HelloWorld name={'Zoe'} />);

	// Then create an assertion within the test that checks if our component renders our name prop
	expect(screen.getByText('Zoe')).toBeVisible();
	expect(screen.getByText('Zoe').tagName).toBe('H1');
});
