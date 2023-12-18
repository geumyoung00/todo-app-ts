import { useState } from 'react';
import './App.css';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	// const [todo, setTodo] = useState([]);
	// const todo = ['거실 청소기 밀기', '설거지', '숙제', '영단어'];
	const [todoList, setTodoList] = useState<string[]>([]);
	const addTodo = (text: string) => {
		setTodoList(prevList => [...prevList, text]);
	};

	const removeTodo = (selectedItem: string) => {
		const newTodo = todoList.filter(item => item !== selectedItem);
		console.log('filter된 배열반환___', newTodo);
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
