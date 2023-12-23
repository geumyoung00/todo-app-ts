import { useState } from 'react';
import NewTodo from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './store/todoProvider';
import { Todo } from './types/todo';

function App() {
	// const [todoList, setTodoList] = useState<Todo[]>([]);
	// const addTodo = (text: string) => {
	// 	setTodoList(prevList => [...prevList, new Todo(text)]);
	// };

	// const removeTodo = (selectedItem: string) => {
	// 	const resultList = todoList.filter(item => item.id !== selectedItem);
	// 	setTodoList(resultList);
	// };

	return (
		<TodoProvider>
			<div className='App'>
				<NewTodo />
				<h1>해야 할 일</h1>
				<TodoList todos={todoList} removeTodo={removeTodo} />
			</div>
		</TodoProvider>
	);
}

export default App;
