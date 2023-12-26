import { Todo } from '../types/todo';

type TodoContextType = {
	todos: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export default TodoContextType;
