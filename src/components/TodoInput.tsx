import React, { useState } from 'react';

const NewTodo: React.FC<{ onAdd: (text: string) => void }> = props => {
	const [inputText, setInputText] = useState<string>('');
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		props.onAdd(inputText);
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
