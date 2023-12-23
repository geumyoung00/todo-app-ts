import { useState } from 'react';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './types/todo';

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const addTodo = (text: string) => {
		setTodoList(prevList => [...prevList, new Todo(text)]);
	};

	const removeTodo = (selectedItem: string) => {
		const resultList = todoList.filter(item => item.id !== selectedItem);
		setTodoList(resultList);
	};

	return (
		<div className='App'>
			<NewTodo addTodo={addTodo} />
			<h1>해야 할 일</h1>
			<TodoList Todos={todoList} removeTodo={removeTodo} />
		</div>
	);
}

export default App;
