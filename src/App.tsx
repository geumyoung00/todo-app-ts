import { useState } from 'react';
import './App.css';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	// const [todo, setTodo] = useState([]);
	// const todo = ['거실 청소기 밀기', '설거지', '숙제', '영단어'];
	const [todoList, setTodoList] = useState<string[]>([]);
	const addTodo = (text: string) => {
		setTodoList([...todoList, text]);
	};

	console.log('todoList___', todoList);

	return (
		<div className='App'>
			<NewTodo onAdd={addTodo} />
			<h1>해야 할 일</h1>
			<TodoList items={todoList} />
		</div>
	);
}

export default App;
