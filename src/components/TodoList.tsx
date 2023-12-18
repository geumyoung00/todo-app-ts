import TodoItem from './TodoItem';

const TodoList: React.FC<{ items: string[] }> = props => {
	return (
		<ul>
			{props.items.map(item => (
				<TodoItem text={item} key={item} />
			))}
			{/* <TodoItem items={props.items} /> */}
		</ul>
	);
};
export default TodoList;
