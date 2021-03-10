import * as React from 'react';
import TodoApp from './TodoApp';
import { fireEvent, render } from '@testing-library/react';

describe('<TodoApp />', () => {
	it('TodoForm과 TodoList를 렌더링한다.', () => {
		const { getByText, getByTestId } = render(<TodoApp />);

		getByText('등록'); // TodoForm
		getByTestId('TodoList'); // TodoList 
	});

	it('기본적으로 할 일을 두 개 보여준다.', () => {
		const { getByText } = render(<TodoApp />);
	
		getByText('TDD 배우기');
		getByText('react-testing-library 사용하기');
	});

	it('새로운 할 일을 만든다.', () => {
		const { getByPlaceholderText, getByText } = render(<TodoApp />);
	
		fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), {
			target: {
				value: '새 항목 추가하기'
			}
		});
		fireEvent.click(getByText('등록'));

		getByText('새 항목 추가하기');
	});

	it('할 일을 Toggle한다.', () => {
		const { getByText } = render(<TodoApp />);
		const todoText = getByText('TDD 배우기');

		expect(todoText).toHaveStyle('text-decoration: line-through');
		fireEvent.click(todoText);
		expect(todoText).not.toHaveStyle('text-decoration: line-through');
		fireEvent.click(todoText);
		expect(todoText).toHaveStyle('text-decoration: line-through');
	});

	it('할 일을 삭제한다.', () => {
		const { getByText } = render(<TodoApp />);
		const todoText = getByText('TDD 배우기');
		const removeButton = todoText.nextSibling!;

		fireEvent.click(removeButton);
		expect(todoText).not.toBeInTheDocument();
	});
});