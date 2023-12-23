import { createContext } from 'react';

const TodoContext = createContext({
	todos: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
});

export default TodoContext;
