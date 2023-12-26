// import { useState } from 'react';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './store/todoProvider';
// import { Todo } from './types/todo';

function App() {
	return (
		<TodoProvider>
			<div className='App'>
				<NewTodo />
				<h1>해야 할 일</h1>
				<TodoList />
			</div>
		</TodoProvider>
	);
}

export default App;
