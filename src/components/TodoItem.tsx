interface TodoItemInterface {
	text: string;
	removeTodo: () => void;
}

const TodoItem = ({ text, removeTodo }: TodoItemInterface) => {
	return <li onClick={removeTodo}>{text}</li>;
};
export default TodoItem;
