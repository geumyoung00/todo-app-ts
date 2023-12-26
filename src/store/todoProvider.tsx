import React, { useState } from 'react';
import { Todo } from '../types/todo';
import { TodoContext } from './todo-context';

export const TodoProvider = ({ children }: any) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const addTodo = (text: string) => {
		setTodoList(prevList => [...prevList, new Todo(text)]);
	};

	const removeTodo = (selectedItem: string) => {
		const resultList = todoList.filter(item => item.id !== selectedItem);
		setTodoList(resultList);
	};

	const todoValue = {
		todos: todoList,
		addTodo: addTodo,
		removeTodo: removeTodo,
	};

	return (
		<TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
	);
};
