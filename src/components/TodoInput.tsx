import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAdd: (text: string) => void }> = props => {
	const inputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const text = inputRef.current!.value;

		if (text.trim().length === 0) {
			return;
		}
		props.onAdd(text);
	};

	return (
		<form onSubmit={submitHandler}>
			<input type='text' ref={inputRef} />
			<button>추가</button>
		</form>
	);
};
export default NewTodo;
