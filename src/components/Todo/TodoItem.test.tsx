import * as React from 'react';
import { default as TodoItem } from './TodoItem';
import { render, fireEvent } from '@testing-library/react';

describe('<TodoItem />', () => {
	const sampleTodo = {
		id: 1,
		text: 'TDD 배우기',
		done: false
	};

	const setup = (props: any = {}) => {
		const onToggle = jest.fn();
		const onRemove = jest.fn();
		const initialProps = { todo: sampleTodo, onToggle, onRemove };

		const utils = render(<TodoItem {...initialProps} {...props} />);
		const { getByText } = utils;
		const todo = props.todo || initialProps.todo;
		const span = getByText(todo.text);
		const button = getByText('삭제');

		return {
			...utils,
			span,
			button,
			onToggle,
			onRemove
		};
	};
	
	it('span과 button이 존재한다.', () => {
		const { span, button } = setup();

		expect(span).toBeTruthy();
		expect(button).toBeTruthy();
	});	

	it('done이 true면, 글자에 라인을 긋는다.', () => {
		const { span } = setup({ todo: { ...sampleTodo, done: true }});
		
		expect(span).toHaveStyle('text-decoration: line-through');
	});

	it('done이 false면, 글자에 라인을 제거한다.', () => {
		const { span } = setup({ todo: { ...sampleTodo, done: false }});

		expect(span).not.toHaveStyle('text-decoration: line-through');
	});

	it('onToggle을 호출한다.', () => {
		const { span, onToggle } = setup();

		fireEvent.click(span);
		expect(onToggle).toBeCalledWith(sampleTodo.id);
	});

	it('onRemove를 호출한다.', () => {
		const { button, onRemove } = setup();

		fireEvent.click(button);
		expect(onRemove).toBeCalledWith(sampleTodo.id);
	});
});