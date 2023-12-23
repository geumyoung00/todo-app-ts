import React, { useContext, useState } from 'react';
import TodoContext from '../store/todo-context';

interface TodoInputInterface {
	addTodo: (text: string) => void;
}

const NewTodo = ({ addTodo }: TodoInputInterface) => {
	const todoCtx = useContext(TodoContext);

	const [inputText, setInputText] = useState<string>('');
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		todoCtx.addTodo(inputText);
		setInputText('');
	};

	return (
		<form onSubmit={submitHandler}>
			<input type='text' value={inputText} onChange={changeHandler} />
			<button>추가</button>
		</form>
	);
};
export default NewTodo;
