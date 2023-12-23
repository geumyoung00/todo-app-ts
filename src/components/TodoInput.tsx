import React, { useState } from 'react';

interface TodoInputInterface {
	addTodo: (text: string) => void;
}

const NewTodo = ({ addTodo }: TodoInputInterface) => {
	const [inputText, setInputText] = useState<string>('');
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		addTodo(inputText);
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
