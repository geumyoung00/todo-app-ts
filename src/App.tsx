import { useState } from 'react';
import './App.css';
import { todo } from './types/todo';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [todoList, setTodoList] = useState<todo[]>([]);
	const addTodo = (text: string) => {
		setTodoList(prevList => [...prevList, text]);
	};

	const removeTodo = (selectedItem: string) => {
		// const newTodo = todoList.filter(item => item !== selectedItem);
		// setTodoList(newTodo);
	};

	return (
		<div className='App'>
			<NewTodo onAdd={addTodo} />
			<h1>해야 할 일</h1>
			<TodoList items={todoList} onRemove={removeTodo} />
		</div>
	);
}

export default App;
