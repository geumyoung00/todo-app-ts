import { Todo } from '../types/todo';
import TodoItem from './TodoItem';
interface TodoListInterface {
	Todos: Todo[];
	removeTodo: (id: string) => void;
}

const TodoList = ({ Todos, removeTodo }: TodoListInterface) => {
	return (
		<ul>
			{Todos.map(item => (
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
