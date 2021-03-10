import * as React from 'react';
import TodoList from './TodoList';
import { fireEvent, render } from '@testing-library/react';

describe('<TodoList />', () => {
	const onToggle = jest.fn();
	const onRemove = jest.fn();
	const sampleTodos = [
		{
			id: 1,
			text: 'TDD 배우기',
			done: true
		},
		{
			id: 2,
			text: 'react-testing-library 사용하기',
			done: true
		}
	];

	it('Todos 렌더링 하기', () => {
		const { getByText } = render(<TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />);
		
		getByText(sampleTodos[0].text);
		getByText(sampleTodos[1].text);
	});

	it('onToggle과 onRemove 호출', () => {
		const { getByText, getAllByText } = render(
			<TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
		);

		fireEvent.click(getByText(sampleTodos[0].text));
		expect(onToggle).toBeCalledWith(sampleTodos[0].id);

		fireEvent.click(getAllByText('삭제')[0]);
		expect(onRemove).toBeCalledWith(sampleTodos[0].id);
	});



});