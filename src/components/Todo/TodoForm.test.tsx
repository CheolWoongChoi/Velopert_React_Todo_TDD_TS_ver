import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
	const setup = (props = {}) => {
		const onInsert = jest.fn();
		
		const utils = render(<TodoForm onInsert={onInsert} {...props} />);
		const { getByText, getByPlaceholderText } = utils;
		const input = getByPlaceholderText('할 일을 입력하세요'); // input
		const button = getByText('등록'); // button
		
		return {
			...utils,
			input,
			button,
			onInsert
		};
	};

	it('Input과 button이 있어야 한다.', () => {
		const { input, button } = setup();
		
		expect(input).toBeTruthy();
		expect(button).toBeTruthy();
	});

	it('Input onChange 이벤트 검증', () => {
		const { input } = setup();
		fireEvent.change(input, {
			target: {
				value: 'TDD 배우기'
			}
		});

		expect(input).toHaveValue('TDD 배우기');
	});

	it('onInsert 호출, Input 비우기', () => {
		const { input, button, onInsert } = setup();

		fireEvent.change(input, {
			target: {
				value: 'TDD 배우기'
			}
		});
		fireEvent.click(button);

		expect(onInsert).toBeCalledWith('TDD 배우기');
		expect(input).toHaveValue('');
	});
});