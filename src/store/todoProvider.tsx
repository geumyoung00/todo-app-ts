import todoContext from './todo-context';
import React, { useState } from 'react';
import { Todo } from '../types/todo';

export const TodoProvider = ({ children }: any) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const addTodo = (text: string) => {
		setTodoList(prevList => [...prevList, new Todo(text)]);
	};

	const removeTodo = (selectedItem: string) => {
		const resultList = todoList.filter(item => item.id !== selectedItem);
		setTodoList(resultList);
	};

	const todoPovider = {
		todos: todoList,
		addTodo: addTodo,
		removeTodo: removeTodo,
	};

	return (
		<todoContext.Provider value={todoPovider}>{children}</todoContext.Provider>
	);
};
