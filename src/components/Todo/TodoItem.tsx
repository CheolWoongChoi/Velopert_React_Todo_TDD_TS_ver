import * as React from 'react';
import { useCallback } from 'react';
import { Todo } from './types';

type Props = {
	todo: Todo;
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: Props) {
	const { id, text, done } = todo;
	const toggle = useCallback(() => onToggle(id), [id, onToggle]);
	const remove = useCallback(() => onRemove(id), [id, onRemove]);

	return (
		<li>
			<span
				style={{
					textDecoration: done ? 'line-through' : 'none'
				}}
				onClick={toggle}
			>{text}</span>
			<button onClick={remove}>삭제</button>
		</li>
	);
}

export default React.memo(TodoItem);