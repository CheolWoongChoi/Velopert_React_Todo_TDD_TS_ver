import * as React from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

type Props = {
	todos: Todo[];
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
}

function TodoList({ todos, onToggle, onRemove }: Props) {
	return (
		<ul data-testid='TodoList'>
			{todos.map(todo => (
				<TodoItem 
					key={todo.id} 
					todo={todo} 
					onToggle={onToggle}
					onRemove={onRemove}
				/>
			))}
		</ul>
	);
}

export default TodoList;