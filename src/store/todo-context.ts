import { createContext } from 'react';
import todoContextType from '../types/todoContextType';

export const TodoContext = createContext<todoContextType>({
	todos: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
});
