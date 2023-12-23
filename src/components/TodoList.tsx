import { useContext } from 'react';
import TodoContext from '../store/todo-context';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';
interface TodoListInterface {
	todos: Todo[];
	removeTodo: (id: string) => void;
}

const TodoList = ({ todos, removeTodo }: TodoListInterface) => {
	const todoCtx = useContext(TodoContext);

	return (
		<ul>
			{todos.map(item => (
				<TodoItem
					text={item.text}
					key={item.id}
					removeTodo={removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};
export default TodoList;
