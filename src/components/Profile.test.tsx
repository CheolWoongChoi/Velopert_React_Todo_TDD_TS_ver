import * as React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile>', () => {
	it('matches snapshot', () => {
		const utils = render(<Profile username='velopert' name='kmj' />);
		
		expect(utils.container).toMatchSnapshot();
	});

	it('shows the props correctly', () => {
		const utils = render(<Profile username='velopert' name='kmj' />);

		utils.getByText('velopert');
		utils.getByText('kmj');
		utils.getByText(/k/);
	});
});
